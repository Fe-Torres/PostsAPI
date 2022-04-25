/* eslint-disable no-undef */
import request from 'supertest'
import { postsInMemory } from '../../../src/helpers/utils'
import { app } from '../../mocks/api/app'
import { mockPost } from '../../mocks/data/post'

describe('PostController using data in memory', () => {
  let token:string

  beforeAll(async () => {
    const response = await request(app).post('/dev/auth').send({
      email: 'teste@email.com',
      password: 'teste1962'
    })
    token = `Bearer ${response.body.token}`
  })

  describe('create post', () => {
    it('should be able to create a new post', async () => {
      const response = await request(app).post('/dev/posts').send({
        title: 'New Post Test',
        body: 'Any',
        tags: ['#BD']
      }).set('Authorization', token)
      const postResponse = response.body
      const lastPost = postsInMemory[postsInMemory.length - 1]

      expect(response.status).toBe(200)
      expect(postResponse.title).toBe(lastPost.title)
      expect(postResponse.body).toBe(lastPost.body)
      expect(postResponse.tags).toStrictEqual(lastPost.tags)
    })

    it('should not be able create post without title and body', async () => {
      const response = await request(app).post('/dev/posts').send({ title: '', body: '' }).set('Authorization', token)
      expect(response.status).toBe(400)
      expect(response.body.message).toBe('Request malformed')
    })
    it('should not be able create post without token', async () => {
      const response = await request(app).post('/dev/posts').send({
        title: 'New Post Test',
        body: 'Any',
        tags: ['#BD']
      })
      expect(response.status).toBe(401)
      expect(response.body.message).toBe('Token is missing')
    })
  })
  describe('listingPosts', () => {
    it('should be able listing all posts', async () => {
      const response = await request(app).get('/dev/posts').set('Authorization', token)
      expect(response.status).toBe(200)
      expect(response.body).toMatchObject(postsInMemory)
    })
  })
  describe('getPostByID', () => {
    it('should be able listing one post by id', async () => {
      const id = '92bj0nko'
      const response = await request(app).get(`/dev/posts/${id}`).set('Authorization', token)
      console.log(response.body)
      expect(response.status).toBe(200)
    })
    it('should not be able listing one post by id - Post not found', async () => {
      const id = 'neznko'
      const response = await request(app).get(`/dev/posts/${id}`).set('Authorization', token)
      expect(response.status).toBe(404)
      expect(response.body.message).toBe('Post not found')
    })
  })
  describe('editPost', () => {
    it('should be able edit one post by id', async () => {
      const id = '92bj0nko'
      const response = await request(app).put(`/dev/posts/${id}`).send(mockPost).set('Authorization', token)
      expect(response.status).toBe(200)
      expect(response.body).toMatchObject(mockPost)
    })
    it('should not be able edit one post by id - Post not found', async () => {
      const id = 'neznko'
      const response = await request(app).put(`/dev/posts/${id}`).send(mockPost).set('Authorization', token)
      expect(response.status).toBe(404)
      expect(response.body.message).toBe('Post not found')
    })
    it('should not be able update post without title and body', async () => {
      const id = '92bj0nko'
      const response = await request(app).put(`/dev/posts/${id}`).send({ title: '', body: '' }).set('Authorization', token)
      expect(response.status).toBe(400)
      expect(response.body.message).toBe('Request malformed')
    })
  })
  describe('deletePost', () => {
    it('should be able delete one post by id', async () => {
      const id = '92bj0nko'
      const response = await request(app).delete(`/dev/posts/${id}`).set('Authorization', token)
      expect(response.status).toBe(200)
      expect(postsInMemory).not.toMatchObject(mockPost)
    })
    it('should not be able delete one post by id - Post not found', async () => {
      const id = 'neznko'
      const response = await request(app).delete(`/dev/posts/${id}`).set('Authorization', token)
      expect(response.status).toBe(404)
      expect(response.body.message).toBe('Post not found')
    })
  })
})
