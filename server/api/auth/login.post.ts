import { 
  findUserByEmail, 
  generateAccessToken, 
  generateRefreshToken, 
  storeRefreshToken 
} from '../../utils/jwt'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    if (!body.email || !body.password) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email and password are required'
      })
    }

    // Find user by email
    const user = findUserByEmail(body.email)
    if (!user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid credentials'
      })
    }

    // Validate password (in real app, use bcrypt)
    if (user.password !== body.password) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Invalid credentials'
      })
    }

    // Generate tokens
    const userInfo = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
    
    const accessToken = generateAccessToken(userInfo)
    const refreshToken = generateRefreshToken(user.id)
    
    // Store refresh token
    storeRefreshToken(refreshToken, user.id)

    return {
      accessToken,
      refreshToken,
      user: userInfo
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