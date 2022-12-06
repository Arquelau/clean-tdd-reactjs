import { Validation } from '@/presentation/protocols/validation'

export class ValidationSpy implements Validation {
  input: object
  errorMessage: string
  validate (input: object): string | null {
    this.input = input
    return this.errorMessage
  }
}
