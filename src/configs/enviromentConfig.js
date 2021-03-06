let port
let db
let session_time
let adminMail

const enviroment = process.env.NODE_ENV
switch (enviroment) {
    case 'development':
        port = 8080
        db = "mongodb://127.0.0.1:27017/ecommercebase"
        session_time = 600000
        adminMail = 'caosrupe@gmail.com'
        break
    case 'test':
        port = 8080
        db = "mongodb://127.0.0.1:27017/ecommercebase_test"
        session_time = 600000
        adminMail = 'caosrupe@gmail.com'
        break
    case 'production':
        port = 3000
        db = `${process.env.MONGODB_URI}`;
        session_time = 60000
        adminMail = 'caosrupe@gmail.com'
        break
    default:
        port = 8080
        db = "mongodb://127.0.0.1:27017/ecommercebase"
        session_time = 60000
        adminMail = 'caosrupe@gmail.com'
        break
}

exports.port = port;
exports.dbString = db;
exports.session_time = session_time
exports.adminMail = adminMail

