"use client"

import CommonApi from "../common-api"
import token from "../token/token"

const api = new CommonApi(String(process.env.NEXT_PUBLIC_CORE_SERVICE_API))

const buildOAuth2Request = (provider: string): URL => {
  if (typeof window !== "undefined") {
    const url = new URL(provider, String(process.env.NEXT_PUBLIC_CORE_SERVICE_API))
    url.searchParams.append("redirect_uri", window.location.href)
    return url
  }
  return new URL("")
}

const core = {
  user: {
    isAuthenticated(): boolean {
      return !!token.getAccessToken()
    },
    oauth2Google(): URL {
      return buildOAuth2Request("/oauth2/authorization/google")
    },
    oauth2Facebook(): URL {
      return buildOAuth2Request("/oauth2/authorization/facebook")
    },
    oauth2Github(): URL {
      return buildOAuth2Request("/oauth2/authorization/github")
    },
    async signUp(data: UserSignUpRequest): Promise<Response> {
      const response = await api.post("/user/sign-up", data)
      const responseClone = response.clone()
      if (responseClone.ok) token.setAccessToken((await responseClone.json()).access_token)
      return response
    },
    async signIn(data: UserSignInRequest): Promise<Response> {
      const response = await api.post("/user/sign-in", data)
      const responseClone = response.clone()
      if (responseClone.ok) token.setAccessToken((await responseClone.json()).access_token)
      return response
    },
    async refreshToken(): Promise<Response> {
      return api.get("/user/refresh-token")
    },
    async signOut(): Promise<Response> {
      const response = await api.authGet("/user/sign-out")
      if (response.ok) token.removeAllTokens()
      return response
    },
    async signOutAll(): Promise<Response> {
      const response = await api.authGet("/user/sign-out-all")
      if (response.ok) token.removeAllTokens()
      return response
    },
    async emailVerification(data: UserEmailVerificationRequest): Promise<Response> {
      return api.put("/user/email-verification", data)
    },
    async sendEmailVerification(data: UserSendEmailVerificationRequest): Promise<Response> {
      return api.post("/user/send-email-verification", data)
    },
    async passwordReset(data: UserResetPasswordRequest): Promise<Response> {
      return api.put("/user/password-reset", data)
    },
    async sendPasswordReset(data: UserSendPasswordResetRequest): Promise<Response> {
      return api.post("/user/send-password-reset", data)
    },
    async details(): Promise<Response> {
      return api.authGet("/user/details")
    },
    async update(data: UserUpdateRequest): Promise<Response> {
      return api.authPut("/user/update", data)
    },
    async delete(): Promise<Response> {
      const response = await api.authDelete("/user/delete")
      if (response.ok) token.removeAllTokens()
      return response
    },
  },
}

export default core
