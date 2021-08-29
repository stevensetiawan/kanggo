module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_development`,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    define:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_test`,
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
    define:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
    }

  }
}
