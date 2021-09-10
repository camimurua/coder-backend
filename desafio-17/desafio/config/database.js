const mysql = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'ecommerce'
    },
    pool: { min: 0, max: 7 } //minimo y maximo de conexiones a la vez
}

const sqlite3 = {
    client: 'sqlite3',
    connection: {
        filename: __dirname + '/../db/articulos.sqlite'
    },
    useNullAsDefault: true
}

module.exports = sqlite3;
