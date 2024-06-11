import instance from "@/middlewares";
import axios from "axios";

export default{
    name:'user',
    namespaced: true,
    state: ()=> ({
        user: null,
        favoriteEvents: []
    }),
    getters:{
        user: state => state.user,
    },
    mutations:{
        setUser (state, user){
            state.user = user
        },
        ADD_FAVORITE_EVENT(state, event){
            state.favoriteEvents.push(event);
        },
        SET_FAVORITE_EVENTS(state, events){
            state.favoriteEvents = Array.isArray(events) ? events : [];
        }
    },
    actions: {
        async getUserByUid({ commit }){
            //         //const uid=localStorage.getItem('uid')
         const user = await instance.get(`/api/users`)
        if (user) return commit('setUser',user.data)
        console.log(user.message);
            },
        async addToFavorites({ commit }, event) {
          const token = localStorage.getItem('accessToken');
          const user = this.state.user.user;
          if (!token || !user) {
            console.error('No token or user found');
            return;
          }
          try {
            const response = await axios.post(`${process.env.VUE_APP_SERVER}/api/users/${user.uid}/favorites`, {
              eventUid: event.uid
            }, {
              headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': token
              }
            });
            commit('ADD_FAVORITE_EVENT', event);
            // Обновляем isFavorite после успешного добавления мероприятия в избранное
            commit('SET_FAVORITE_EVENTS', [...this.state.favoriteEvents, event]);
          } catch (error) {
            console.error('Ошибка при добавлении мероприятия в избранное:', error);
            // Обработка ошибок здесь
            if (error.response && error.response.status === 404) {
              // Специфическая обработка для ошибки 404
              console.error('Ресурс не найден');
            } else {
              // Общая обработка ошибок
              console.error('Произошла ошибка при выполнении запроса');
            }
          }
        },
        async getFavoriteEvents({ commit }) {
          const token = localStorage.getItem('accessToken');
          const user = localStorage.getItem('uid');
          if (!token || !user) {
            console.error('No token or user found');
            return;
          }
          try {
            const response = await axios.get(`${process.env.VUE_APP_SERVER}/api/users/${user}/favorites`, {
              headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': token
              }
            });
            commit('SET_FAVORITE_EVENTS', response.data);
          } catch (error) {
            console.error('Ошибка при получении избранное:', error);
          }
        },
        async updateUser({ commit }, userData) {
          try {
            const response = await axios.put(`${process.env.VUE_APP_SERVER}/api/users/${userData.uid}, userData`, {
              headers: {
                'Content-type': 'application/json; charset=utf-8',
                'x-access-token': localStorage.getItem('accessToken')
              }
            });
            commit('SET_USER', response.data);
          } catch (error) {
            console.error('Ошибка при обновлении пользователя:', error);
          }
        },
    },
    // actions:{
    //     async getUserByUid({ commit }){
    //         //const uid=localStorage.getItem('uid')
    //         const user = await instance.get(`/api/users`)
    //         if (user) return commit('setUser',user.data)
    //         console.log(user.message);
    //     },
    //     async updateLikes({}, {likes}){
    //         const response = await instance.put('/api/users/likes', {likes})
    //         if (response.ok) return console.log ('ok');
    //         return console.log(response.statusText);

    //     }
    // }
}