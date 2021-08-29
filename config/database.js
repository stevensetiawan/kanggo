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
    username: "b8bd5aadbe644c",
    password: "17e14fe0",
    database: `kanggo`,
    host: "us-cdbr-east-04.cleardb.com",
    dialect: "mysql",
    logging: false,
    define:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
}
