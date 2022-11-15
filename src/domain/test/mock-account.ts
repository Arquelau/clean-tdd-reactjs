import { AuthenticationParams } from '@/domain/usecases/authentication'
import { AccountModel } from '@/domain/models/account-model'
import { faker } from '@faker-js/faker'

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: faker.internet.exampleEmail(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
