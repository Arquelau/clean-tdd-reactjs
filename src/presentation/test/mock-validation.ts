import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string
  validate (fieldKey: string, fieldValue: string): string {
    return this.errorMessage
  }
}
