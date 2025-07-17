import { makeAutoObservable } from "mobx"
import { UserData } from "../types/userData"
import axios from "axios"

class LocalStore {
  userData = {
    login: "",
    user_id: "",
    desc: "",
    email: "",
    phone: "",
    adr: "",
    org: "",
    org_id: "",
    permission_department: false,
  }

  setUserData(data: UserData) {
    this.userData = data
  }

  getUserData(login: string, password: string) {
    const body = {
      login: login,
      password: password,
    }

    const headers = {
      "Content-Type": "application/json",
      "X-Request-Id": "giuooijoi",
    }

    return axios
      .post("http://10.10.31.57:9000/api/login", body, { headers })
      .then((response) => {
        console.log("Успех:", response.data)
        const data = response.data
        if (Array.isArray(data) && data.length > 0 && data[0].result === false) {
          return console.log("Ошибка запроса")
        }
        this.setUserData(data.detail)
        return data
      })
      .catch((error) => {
        console.error("Ошибка:", error)
      })
  }

  constructor() {
    makeAutoObservable(this)
  }

  //   import { makePersistable } from 'mobx-persist-store'

  // constructor() {
  //   makeAutoObservable(this)
  //   makePersistable(this, {
  //     name: 'LocalStore',
  //     properties: ['userData'],
  //     storage: window.localStorage,
  //   })
  // }
}

export const localStore = new LocalStore()
