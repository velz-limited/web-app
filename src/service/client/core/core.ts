"use client"

import CommonApi from "../common-api"
import token from "../token/token"

const api = new CommonApi(String(process.env.NEXT_PUBLIC_CORE_SERVICE_API))

const core = {
  user: {
    isAuthenticated() {
      return !!token.getAccessToken()
    },
    // TODO J: Add OAuth2 functions here.
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
      const response = await api.authGet("/user/sign-out", true)
      if (response.ok) token.removeAllTokens()
      return response
    },
    async signOutAll(): Promise<Response> {
      const response = await api.authGet("/user/sign-out-all", true)
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
    async details(autoSignout: boolean = true): Promise<Response> {
      return api.authGet("/user/details", autoSignout)
    },
    async update(data: UserUpdateRequest, autoSignout: boolean = true): Promise<Response> {
      return api.authPut("/user/update", data, undefined, autoSignout)
    },
    async delete(autoSignout: boolean = true): Promise<Response> {
      const response = await api.authDelete("/user/delete", autoSignout)
      if (response.ok) token.removeAllTokens()
      return response
    },
  },
}

export default core
