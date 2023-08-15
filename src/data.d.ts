//Project types

//AWSTime ===> hh:mm:ss.sss

interface Estudiante{
    name: String
    regDate: String,
    email: String,
    user: String
}

export interface CognitoUserCustom {
    Session: string
    challengeName: LoginState
    username: string
  }