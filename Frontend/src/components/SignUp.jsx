import React from 'react'
import SignUpForm from './SignUpForm'
const SignUp = (props) => {
    return (
        <div>
            <SignUpForm onSignIn={props.onSignIn}/>
        </div>
    )
}

export default SignUp
