import mongoose from 'mongoose'

function connect() {
    const connectionString = 'mongodb://localhost:27017/whizhunt'

    mongoose.connect(connectionString);
    const database = mongoose.connection

    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', () => {
        console.log('Database Connected');
    })
}

export const db = mongoose.connection

export default {
    connect
}
