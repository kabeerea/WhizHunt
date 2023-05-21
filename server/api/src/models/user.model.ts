import { Schema, model } from "mongoose";
import { IUser } from "../global/types";


const userSchema = new Schema(
    {
        _id: {
            type: Schema.Types.ObjectId,
            required: true,
            auto: true,
        },
        username: {
            type: String,
            lowercase: true,
            required: true,
            unique: true
        },
        test: {
            type: Schema.Types.ObjectId,
            ref: 'test'
        },
        name: {
            type: String,
        },
        phone: {
            type: String
        },
        email: {
            type: String,
            lowercase: true
        },
        password: {
            type: String,
        },
        role: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        id: true,
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id
                delete ret._id
            }
        }
    }
);

export default model<IUser>('user', userSchema);