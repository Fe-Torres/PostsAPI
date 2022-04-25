/* eslint-disable no-undef */
import request from 'supertest'
import { app } from '../../mocks/api/app'

describe('authenticating user', () => {
  it('should be able authenticate user', async () => {
    const response = await request(app).post('/api/auth').send({
      email: 'teste@email.com',
      password: 'teste1962'
    })
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('token')
  })

  it('should not be able to authenticate a non-existing user', async () => {
    const response = await request(app).post('/api/auth').send({
      email: 'email@email.com',
      password: 'password'
    })
    expect(response.status).toBe(404)
    expect(response.body.message).toBe('User not found')
  })

  it('should not be able to authenticate a user with the wrong password', async () => {
    const response = await request(app).post('/api/auth').send({
      email: 'teste@email.com',
      password: 'peter2022'
    })
    expect(response.status).toBe(401)
    expect(response.body.message).toBe('Incorret password')
  })
})
