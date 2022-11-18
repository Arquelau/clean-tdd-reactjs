import { createContext } from 'react'

const state = {
  isLoading: false
}

const errorState = {
  email: 'Campo Obrigatório',
  password: 'Campo Obrigatório',
  main: ''
}
export default createContext({ state, errorState })
