interface User {
  createdAt: Date
  lastModifiedAt: Date
  id: UUID
  displayName: string,
  username: string,
  email: string,
  lastSignedInAt: Date
  private: boolean
  locked: boolean
  role: string
  emailVerified: boolean
}
