import { createContext } from 'react'

type StateTypes = {
  isLoading: boolean
  email: string
  password: string
  emailError: string
  passwordError: string
  mainError: string
}

let state: StateTypes = {
  isLoading: false,
  email: '',
  password: '',
  emailError: 'Campo Obrigatório',
  passwordError: 'Campo Obrigatório',
  mainError: ''
}

export default createContext({ state, setState: (data: StateTypes) => { state = data } })
