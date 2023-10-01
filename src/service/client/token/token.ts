"use client"

const ACCESS_TOKEN = "access_token"
const REFRESH_TOKEN = "refresh_token"

const token = {
  getAccessToken() {
    if (typeof window !== "undefined") {
      return localStorage.getItem(ACCESS_TOKEN)
    }
    return null
  },
  setAccessToken(token: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem(ACCESS_TOKEN, token)
    }
  },
  removeAccessToken() {
    if (typeof window !== "undefined") {
      localStorage.removeItem(ACCESS_TOKEN)
    }
  },
  removeRefreshToken() {
    if (typeof window !== "undefined") {
      document.cookie = `cookiename=${REFRESH_TOKEN}; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }
  },
  removeAllTokens() {
    this.removeAccessToken()
    this.removeRefreshToken()
  },
}

export default token
