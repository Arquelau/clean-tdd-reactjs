import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { isLoading, errorMessage } = useContext(Context)
  let error: boolean
  errorMessage === '' ? error = false : error = true
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinner}/> }
      { error && <span className={Styles.error}>{errorMessage}</span> }
    </div>
  )
}

export default FormStatus
