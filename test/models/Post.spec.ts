import { IPosts } from '../../src/helpers/utils'
import Post from '../../src/models/Post'
import { mockPostModel } from '../mocks/data/post'

/* eslint-disable no-undef */
describe('create post model', () => {
  it('should be able create post model', () => {
    const post:IPosts = new Post(mockPostModel)
    expect(post.title).toBe(mockPostModel.title)
    expect(post.body).toBe(mockPostModel.body)
    expect(post.tags).toStrictEqual(mockPostModel.tags)
    expect(post.id).not.toBeNull()
  })
})
