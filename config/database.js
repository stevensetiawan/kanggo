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
    username: "psljqmyhdp5es082",
    password: "zx2jf15r7katt0me",
    database: `kdrm3lf6etdud12v`,
    host: "s29oj5odr85rij2o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    logging: false,
    define:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
}
