interface UserSignUpRequest {
  displayName: string
  username: string
  email: string
  rawPassword: string
}

interface UserSignInRequest {
  username?: string
  email?: string
  rawPassword: string
}

interface UserEmailVerificationRequest {
  email: string
  token: string
}

interface UserSendEmailVerificationRequest {
  email: string
}

interface UserResetPasswordRequest {
  email: string
  rawPassword: string
  token: string
}

interface UserSendPasswordResetRequest {
  email: string
}

interface UserUpdateRequest {
  displayName?: string
  username?: string
  email?: string
  rawPassword?: string
  isPrivate?: boolean
}
