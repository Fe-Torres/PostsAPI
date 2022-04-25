import mongoose, {
  Schema
} from 'mongoose'

export const PostModel = new Schema({
  id: { type: mongoose.Schema.Types.ObjectId, required: false },
  title: { type: String, required: true, notNull: true },
  body: { type: String, required: true, notNull: true },
  tags: { type: Array, required: true, notNull: true }
})

const Post = mongoose.model('posts', PostModel)
export default Post
