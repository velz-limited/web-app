"use client"

import core from "./core/core"
import token from "./token/token"

export default class CommonApi {
  baseUrl: URL

  constructor(baseUrl: string) {
    this.baseUrl = new URL(baseUrl)
  }

  async autoRefresh(method: () => any, autoSignout: boolean = false): Promise<Response> {
    const response = await method()
    if (response.status === 401) {
      const refreshResponse = await core.user.refreshToken()
      if (refreshResponse.ok) {
        token.setAccessToken((await refreshResponse.json()).access_token)
        console.log("Access token refreshed.")
        return await method()
      } else if (refreshResponse.status === 401 && autoSignout) {
        token.removeAllTokens()
        console.log("Tokens removed.")
      }
    }
    return response
  }

  get(path: string = ""): Promise<Response> {
    return fetch(new URL(path, this.baseUrl), {
      method: "GET",
      credentials: "include",
    })
  }

  post(path: string = "", data: any = "", contentType: string = "application/json"): Promise<Response> {
    return fetch(new URL(path, this.baseUrl), {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": contentType,
      },
      body: JSON.stringify(data),
    })
  }

  put(path: string = "", data: any = "", contentType: string = "application/json"): Promise<Response> {
    return fetch(new URL(path, this.baseUrl), {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": contentType,
      },
      body: JSON.stringify(data),
    })
  }

  authGet(path: string = "", autoSignout: boolean = false): Promise<Response> {
    return this.autoRefresh(
      () =>
        fetch(new URL(path, this.baseUrl), {
          method: "GET",
          credentials: "include",
          headers: {
            Authorization: "Bearer " + token.getAccessToken(),
          },
        }),
      autoSignout
    )
  }

  authPost(
    path: string = "",
    data: any = "",
    contentType: string = "application/json",
    autoSignout: boolean = false
  ): Promise<Response> {
    return this.autoRefresh(
      () =>
        fetch(new URL(path, this.baseUrl), {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": contentType,
            Authorization: "Bearer " + token.getAccessToken(),
          },
          body: JSON.stringify(data),
        }),
      autoSignout
    )
  }

  authPut(
    path: string = "",
    data: any = "",
    contentType: string = "application/json",
    autoSignout: boolean = false
  ): Promise<Response> {
    return this.autoRefresh(
      () =>
        fetch(new URL(path, this.baseUrl), {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": contentType,
            Authorization: "Bearer " + token.getAccessToken(),
          },
          body: JSON.stringify(data),
        }),
      autoSignout
    )
  }

  authDelete(path: string = "", autoSignout: boolean = false): Promise<Response> {
    return this.autoRefresh(
      () =>
        fetch(new URL(path, this.baseUrl), {
          method: "DELETE",
          credentials: "include",
          headers: {
            Authorization: "Bearer " + token.getAccessToken(),
          },
        }),
      autoSignout
    )
  }
}
