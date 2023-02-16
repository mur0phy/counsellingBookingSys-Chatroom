import React from 'react'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

import { signIn, signUp } from '../api/auth'
import { getDecodedToken } from '../api/token'

function SignIn() {
    //const state = {
      const  decodedToken = getDecodedToken()
    //}
    // Pass supplied first name, lastname, email & password to the signUp function, returns the user's token
    const onSignUp = ({ firstName, lastName, email, password }) => {
        signUp({ firstName, lastName, email, password }).then(decodedToken )//=> {
        //this.setState({ decodedToken })
        //})
    }

    // Pass supplied email & password to the signIn function, returns the users token
    const onSignIn = ({ email, password }) => {
        signIn({ email, password }).then(decodedToken) //=> {
        //this.setState({ decodedToken })
        //})
    }
    return (
        <div className="wrapper__form">
            <div className="header__page">
                <h2 className="header__heading header__heading--sub--alt">Sign in with email</h2>
            </div>
                <SignInForm onSignIn={onSignIn} />
                    <h3 className="header__heading header__heading--sub--alt">Don't have an account?</h3>
                <SignUpForm onSignUp={onSignUp} />
        </div>
    )
}

export default SignIn