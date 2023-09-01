export default {
  port:  parseInt(process.env.port as string) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  dbUsername: process.env.DB_USER_NAME || 'dv_promo',
  dbPassword: process.env.DB_PASSWORD || 'dvpromo@123',
  dbHost: process.env.DB_HOST || 'postgres-dv.postgres.database.azure.com',//'localhost',
  // saltRounds: parseInt(process?.env?.SALT_ROUNDS) || 10,
  jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || "",
  jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || "" 
}