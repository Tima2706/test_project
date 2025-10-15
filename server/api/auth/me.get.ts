import { validateAccessToken } from '../../utils/jwt'

export default defineEventHandler(async (event) => {
  try {
    // Get token from Authorization header
    const authorization = getHeader(event, 'authorization')
    if (!authorization) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authorization header is required'
      })
    }

    const token = authorization.replace('Bearer ', '')
    if (!token) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Access token is required'
      })
    }

    // Validate token and get user
    const user = validateAccessToken(token)
    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid or expired access token'
      })
    }

    return {
      user
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