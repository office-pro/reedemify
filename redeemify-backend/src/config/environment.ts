export default {
  port:  parseInt(process.env.port as string) || 3000,
  nodeEnv: process.env.NODE_ENV || 'localhost',
  // saltRounds: parseInt(process?.env?.SALT_ROUNDS) || 10,
  jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || "",
  jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || "" 
}