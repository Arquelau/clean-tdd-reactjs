import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login Component', () => {
  test('Should render Login Component', () => {
    render(<Login />)
  })
})
