"use client"

const ACCESS_TOKEN = "access_token"
const REFRESH_TOKEN = "refresh_token"

const getCookie = (cname: string) => {
  let name = cname + "="
  let decodedCookie = decodeURIComponent(document.cookie)
  let ca = decodedCookie.split(";")
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == " ") {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return null
}

const token = {
  getAccessToken() {
    if (typeof window !== "undefined") {
      // Get access token from cookie, when set through OAuth2 authentication.
      const tokenFromCookie = getCookie(ACCESS_TOKEN)
      if (tokenFromCookie !== null) {
        localStorage.setItem(ACCESS_TOKEN, tokenFromCookie)
        // Delete access token from cookie, as we will only store in local storage.
        document.cookie = `${ACCESS_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
        return tokenFromCookie
      }
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (token !== null) {
        return token
      }
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
      document.cookie = `${ACCESS_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }
  },
  removeRefreshToken() {
    if (typeof window !== "undefined") {
      document.cookie = `${REFRESH_TOKEN}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
    }
  },
  removeAllTokens() {
    this.removeAccessToken()
    this.removeRefreshToken()
  },
}

export default token
