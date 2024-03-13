import { useEffect, useState } from 'react'

export const ErrorComponent = ({ children, route, error }) => {
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorCode, setErrorCode] = useState(null)

  useEffect(() => {
    if (route === 'not found') {
      setErrorMessage('Page Not Found')
      setErrorCode(404)
    } else if (error) {
      setErrorCode(error.status)
      setErrorMessage(error.data.msg)
    }
  }, [error])
  return errorCode ? (
    <div id="error-div">
      <h2>Error Code: {errorCode}</h2>
      <p>{errorMessage}</p>
    </div>
  ) : (
    children
  )
}
