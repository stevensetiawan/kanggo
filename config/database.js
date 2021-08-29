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
    use_env_variable: 'mysql://b8bd5aadbe644c:17e14fe0@us-cdbr-east-04.cleardb.com/heroku_e7fd9b8bb7c853b?reconnect=true',
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
    }
  }
}
