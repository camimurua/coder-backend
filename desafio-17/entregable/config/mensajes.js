
const sqlite3 = {
    client: 'sqlite3',
    connection: {
        filename: __dirname + 'mensajes.sqlite'
    },
    useNullAsDefault: true
}

module.exports = sqlite3;
