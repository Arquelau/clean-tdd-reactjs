import { AuthenticationParams } from '@/domain/usecases/authentication'
import { faker } from '@faker-js/faker'

export const mockAuthenticationParams = (): AuthenticationParams => ({
  email: faker.internet.exampleEmail(),
  password: faker.internet.password()
})
