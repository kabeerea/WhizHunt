import mongoose from 'mongoose'

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

database.once('disconnected', () => {
    console.log('Database Disconnected')
})

async function connect() {
    await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
}

function disconnect() {
    mongoose.connection.close()
}

export default {
    connect,
    disconnect
}
