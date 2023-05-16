import { Schema, model, Types } from "mongoose";

export interface IUser {
    id: string
    username: string
    test?: Types.ObjectId
    name: string
    phone?: string
    email?: string
    password: string
    role: 0 | 1
}

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
            required: true
        },
        test: {
            type: Schema.Types.ObjectId,
            ref: 'test'
        },
        name: {
            type: String,
            required: true,
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
            required: true
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