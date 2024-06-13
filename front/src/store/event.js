import axios from 'axios';
import router from '@/router'
export default {
  name: 'event',
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },
    ADD_TO_FAVORITES(state, event) {
      state.favoriteEvents.push(event);
    },
  },
  actions: {
    async addevent({ }, { title, bodyText, likes, imageUrl }) {
      console.log(title, bodyText);
      const response = await fetch(`${process.env.VUE_APP_SERVER}/api/events/add`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({ 
          title,
          bodyText, 
          likes,
          imageUrl
        })
      });
      if (response.ok) {
        console.log("add ok");
        window.alert('Новость добавлена');
        //router.push('/EventsView');
      } else {
        console.error('Ошибка при добавлении новости:', response.statusText);
      }
    },
    async getallevents({ commit }) {
      try {
        const response = await fetch(`${process.env.VUE_APP_SERVER}/api/events/getallevents`);
        // if (response.ok) {
          const events = await response.json();
          commit('SET_EVENTS', events);
        // } else {
          // console.error('Ошибка при получении мероприятий:', response.statusText);
        // }
      } catch (error) {
        console.error('Ошибка при получении мероприятий:', error);
      }
    }},
    namespaced: true
  
}