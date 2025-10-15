import { 
  validateRefreshToken,
  findUserById,
  generateAccessToken
} from '../../utils/jwt'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate input
    if (!body.refreshToken) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Refresh token is required'
      })
    }

    // Validate refresh token
    const userId = validateRefreshToken(body.refreshToken)
    if (!userId) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid or expired refresh token'
      })
    }

    // Get user info
    const user = findUserById(userId)
    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'User not found'
      })
    }

    // Generate new access token
    const accessToken = generateAccessToken(user)

    return {
      accessToken
    }
  } catch (error: any) {
    if (error.statusCode) {
      throw error
    }
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
})