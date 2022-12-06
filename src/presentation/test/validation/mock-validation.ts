import { Validation } from '@/presentation/protocols/validation'

export class ValidationSpy implements Validation {
  fieldKey: string
  fieldValue: string
  errorMessage: string
  validate (fieldKey: string, fieldValue: string): string | null {
    this.fieldKey = fieldKey
    this.fieldValue = fieldValue
    return this.errorMessage
  }
}
