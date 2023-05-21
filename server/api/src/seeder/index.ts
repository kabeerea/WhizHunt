import User from '../models/user.model';
import db from '../config/mogodb.config';
import bcrypt from 'bcryptjs';
import { UserRoles } from '../global/types';

db.connect().then(async () => {
    const hash = bcrypt.hashSync("admin", process.env.HASH_SALT);
    const user = new User({
        name: 'Admin',
        username: 'admin',
        password: hash,
        role: UserRoles.ADMIN
    })
    user.save().then(
        () => console.log("Seeding completed succesfully")
    ).catch(
        (error) => console.error(error.message)
    ).finally(
        () => db.disconnect()
    )
})

   


