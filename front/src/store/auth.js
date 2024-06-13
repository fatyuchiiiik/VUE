import instance from "@/middlewares";
import router from "@/router";
import user from "./user";


//const { auth } = require('../')

const checkStatuses = (status) => {
    switch(status){
        case 400:
            window.alert('Проблема на сервере')
            return false
        case 404:
            window.alert("Пользователь не найден")
            return false
        case 413:
            window.alert('Email уже используется')
            return false
        case 414:
            window.alert("Пароль не верный")
            return false
        default: 
            return true
    }
}

export default {
    name: 'auth',
    state: () => ({
        isAuth: false
    }),
    mutations: {
        setAuth(state, isAuth) {
            state.isAuth = isAuth
        }
    },
    namespaced: true,
    actions: {
        async register({ }, {email, password, name}) {
            const data = JSON.stringify({email, password, name})
            console.log(data);
            const response = await fetch(`${process.env.VUE_APP_SERVER}/api/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: data 
            })

            if (!checkStatuses(response.status)) return 
            window.alert('Вы успешно зарегистрированы! Теперь авторизуйтесь')
            router.push('/login')
            return
        },
        // async login({commit}, {email, password, role}) {
        //     const data = JSON.stringify({email, password, role})
        //     console.log(data);
        //     const response = await fetch(`${process.env.VUE_APP_SERVER}/api/auth/signin`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json;charset=utf-8'
        //         },
        //         body: data 
        //     })
        //     if (!checkStatuses(response.status)) return 
        //     const result = await response.json()
        //     commit('setAuth', true)
        //     localStorage.setItem('accessToken', result.accessToken)
        //     localStorage.setItem('refreshToken', result.refreshToken)
        //     localStorage.setItem('uid', result.uid)
        //     router.push('/profile')
        //     return
        // },
        async login({ commit }, { email, password, role }) {
            const data = JSON.stringify({email, password, role})
            console.log(data);
            const response = await fetch(`${process.env.VUE_APP_SERVER}/api/auth/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: data 
            })
            if (!checkStatuses(response.status)) return
            const result = await response.json()
            commit('setAuth', true)
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('refreshToken', result.refreshToken)
            localStorage.setItem('uid', result.uid)
            if (localStorage.getItem("uid") == "1ec8ef79-aac5-4340-8396-3078922a82c7"){
                console.log(localStorage.getItem("uid"))
                router.push('/about')
            } else{
            //console.log(localStorage.getItem("uid"))
            router.push('/news')}
            return
        },
        async changeAccess({}) {
            const response = await instance.post('/api/auth/change-access', {
                headers: {
                    'x-refresh-token': localStorage.getItem('refreshToken')
                }
            })
            if (!checkStatuses(response.status)) return
            const result = response.data
            localStorage.setItem('accessToken', result.accessToken)
            localStorage.setItem('refreshToken', result.refreshToken)
        },
        logout({ commit }) {
            commit('setAuth', false)
            localStorage.removeItem('uid')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            router.push('/login')
            return
        }
    }
}