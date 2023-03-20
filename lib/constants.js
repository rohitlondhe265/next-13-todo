export const USER_TOKEN = 'user-token'

export function getJwtSecretKey() {
  if (!process.env.JWT_SECRET_KEY || process.env.JWT_SECRET_KEY === 0) {
    throw new Error('The environment variable JWT_SECRET_KEY is not set.')
  }

  return process.env.JWT_SECRET_KEY;
}