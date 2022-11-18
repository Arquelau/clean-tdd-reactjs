import { createContext } from 'react'

const temp = {
  isLoading: false,
  errorMessage: ''
}
export default createContext(temp)
