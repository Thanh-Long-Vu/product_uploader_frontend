import React from 'react'
import Login from 'components/screens/Login'
import { GENERAL_ROUTES } from 'routes'
import { getMe } from 'utils/authUtils'
import LoadingIndicator from 'components/elements/LoadingIndicator'

const LoginPage = () => {
  const me = getMe()
  if (me) {
    window.location = GENERAL_ROUTES.HOME
  }
  return (
    <>
      <header>
        <title>Product Uploader | Login</title>
      </header>
      {me ? <LoadingIndicator style="w-16 h-16 center-content" /> : <Login />}
    </>
  )
}

export default LoginPage
