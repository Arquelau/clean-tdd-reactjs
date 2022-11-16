import { mockAxios } from '@/infra/test'
import { mockPostRequest } from '@/data/test/mock-http-post'
import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const mockedAxios = mockAxios()
  const sut = new AxiosHttpClient()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const postRequest = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(postRequest)
    expect(mockedAxios.post).toHaveBeenCalledWith(postRequest.url, postRequest.body)
  })

  test('Should return correct statusCode and body', () => {
    const postRequest = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(postRequest)
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
