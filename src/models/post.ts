import {
  Schema
} from 'mongoose';
import mongoose from 'mongoose';

export const Posts = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  title: String,
  body: String,
  tags: Array,
});

const posts = mongoose.model("posts", Posts);
export default posts;