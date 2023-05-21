import { Schema, model, Types } from "mongoose";

export interface IQuestion {
  id: string
  question: string
  options: Array<String>
  answerIndex: number
}

const questionSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    question: {
      type: String,
      required: true
    },
    options: [{
      type: String,
      required: true
    }],
    answerIndex: {
      type: Number,
      validate: {
        validator: function (value: number) {
          return value = 3;
        },
        message: 'Option index must range from 0 to 3'
      }
    },
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

export default model<IQuestion>('question', questionSchema);