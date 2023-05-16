import { Schema, model, Types } from "mongoose";

export interface ITest {
  id: string
  name: string
  strength: Number
  startTime: Date
  endTime: Date
  question: Array<Types.ObjectId>
}

const testSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    name: {
      type: String,
      required: true
    },
    strength: {
      type: Number,
      required: true
    },
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    },
    questions: [{
      type: Schema.Types.ObjectId,
      ref: 'question'
    }]
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

export default model<ITest>('test', testSchema);