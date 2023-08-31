//Project types

//AWSTime ===> hh:mm:ss.sss


interface Estudiante{
    name: String
    regDate: String,
    email: String,
    user: String
}

interface Horarios{
    horario: {
        dia: String,
        horaDesde: String,
        horaHasta: String,
        cursoId: String,
    }[]
}

interface Curso{
    id: String
    paralelo: String!
    nombre: String!
    creacion: AWSDateTime
    dispositivo: Device 
    horarios: [Horario] 
    estudiantes: [Estudiante] 
    profesor: Profesor 
}

export interface CognitoUserCustom {
    Session: string
    challengeName: LoginState
    username: string
  }