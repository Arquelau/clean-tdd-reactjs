import { HttpPostParams } from '@/data/protocols/http'
import { AxiosHttpClient } from './axios-http-client'
import { faker } from '@faker-js/faker'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: faker.datatype.json(),
  status: faker.random.numeric()
}
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.datatype.json()
})

type SutTypes = {
  sut: AxiosHttpClient
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  return {
    sut
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const postRequest = mockPostRequest()
    const { sut } = makeSut()
    await sut.post(postRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(postRequest.url, postRequest.body)
  })

  test('Should return correct statusCode and body', async () => {
    const postRequest = mockPostRequest()
    const { sut } = makeSut()
    const httpResponse = await sut.post(postRequest)
    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
