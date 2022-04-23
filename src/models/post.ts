import {
  Schema
} from 'mongoose';
import mongoose from 'mongoose';

export const Posts = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  title: { type: String, required: true, notNull: true},
  body: { type: String, required: true, notNull: true},
  tags: { type: Array, required: true, notNull: true},
});

const posts = mongoose.model("posts", Posts);
export default posts;