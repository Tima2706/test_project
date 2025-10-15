import { 
  findUserByEmail, 
  createUser,
  generateAccessToken, 
  generateRefreshToken, 
  storeRefreshToken 
} from '../../utils/jwt'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate input
    if (!body.email || !body.password || !body.name) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Name, email and password are required'
      })
    }

    // Check if user already exists
    const existingUser = findUserByEmail(body.email)
    if (existingUser) {
      throw createError({
        statusCode: 409,
        statusMessage: 'User with this email already exists'
      })
    }

    // Default role is 'user' if not specified
    const role = body.role || 'user'
    
    // Validate role
    const validRoles = ['admin', 'manager', 'user', 'guest']
    if (!validRoles.includes(role)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid role. Must be one of: admin, manager, user, guest'
      })
    }

    // Create user
    const newUser = createUser({
      name: body.name,
      email: body.email,
      password: body.password,
      role: role
    })

    // Generate tokens
    const accessToken = generateAccessToken(newUser)
    const refreshToken = generateRefreshToken(newUser.id)
    
    // Store refresh token
    storeRefreshToken(refreshToken, newUser.id)

    return {
      accessToken,
      refreshToken,
      user: newUser
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