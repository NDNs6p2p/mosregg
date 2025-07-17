import axios from "axios"

const api = axios.create({
  baseURL: "http://10.10.31.57:9000/api",
  headers: {
    "Content-Type": "application/json",
    "X-Request-Id": "giuooijoi",
  },
})

export async function loginAndGetToken(login: string, password: string) {
  try {
    // const body = JSON.stringify({login, password})
    // const response = await api.post("/login", body);
    const body = { login, password }
    const response = await api.post("/login", body)

    const data = response.data
    if (Array.isArray(data) && data.length > 0 && data[0].result === false) {
      throw new Error("Неверный логин или пароль")
    }

    return data
  } catch (error) {
    throw error
  }
}
