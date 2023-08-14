/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      password
      profesor {
        id
        firstName
        lastName
        cursos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userProfesorId
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      password
      profesor {
        id
        firstName
        lastName
        cursos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userProfesorId
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      password
      profesor {
        id
        firstName
        lastName
        cursos {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userProfesorId
      __typename
    }
  }
`;
export const createProfesor = /* GraphQL */ `
  mutation CreateProfesor(
    $input: CreateProfesorInput!
    $condition: ModelProfesorConditionInput
  ) {
    createProfesor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      cursos {
        items {
          id
          color
          paralelo
          nombreCurso
          creacion
          createdAt
          updatedAt
          profesorCursosId
          cursoDispositivoId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProfesor = /* GraphQL */ `
  mutation UpdateProfesor(
    $input: UpdateProfesorInput!
    $condition: ModelProfesorConditionInput
  ) {
    updateProfesor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      cursos {
        items {
          id
          color
          paralelo
          nombreCurso
          creacion
          createdAt
          updatedAt
          profesorCursosId
          cursoDispositivoId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProfesor = /* GraphQL */ `
  mutation DeleteProfesor(
    $input: DeleteProfesorInput!
    $condition: ModelProfesorConditionInput
  ) {
    deleteProfesor(input: $input, condition: $condition) {
      id
      firstName
      lastName
      cursos {
        items {
          id
          color
          paralelo
          nombreCurso
          creacion
          createdAt
          updatedAt
          profesorCursosId
          cursoDispositivoId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCurso = /* GraphQL */ `
  mutation CreateCurso(
    $input: CreateCursoInput!
    $condition: ModelCursoConditionInput
  ) {
    createCurso(input: $input, condition: $condition) {
      id
      color
      paralelo
      nombreCurso
      creacion
      dispositivo {
        id
        topic
        createdAt
        updatedAt
        __typename
      }
      horarios {
        items {
          id
          dia
          horaDesde
          horaHasta
          createdAt
          updatedAt
          cursoHorariosId
          __typename
        }
        nextToken
        __typename
      }
      estudiantes {
        items {
          id
          firstName
          lastName
          espolUser
          espolId
          espolEmail
          createdAt
          updatedAt
          cursoEstudiantesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      profesorCursosId
      cursoDispositivoId
      __typename
    }
  }
`;
export const updateCurso = /* GraphQL */ `
  mutation UpdateCurso(
    $input: UpdateCursoInput!
    $condition: ModelCursoConditionInput
  ) {
    updateCurso(input: $input, condition: $condition) {
      id
      color
      paralelo
      nombreCurso
      creacion
      dispositivo {
        id
        topic
        createdAt
        updatedAt
        __typename
      }
      horarios {
        items {
          id
          dia
          horaDesde
          horaHasta
          createdAt
          updatedAt
          cursoHorariosId
          __typename
        }
        nextToken
        __typename
      }
      estudiantes {
        items {
          id
          firstName
          lastName
          espolUser
          espolId
          espolEmail
          createdAt
          updatedAt
          cursoEstudiantesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      profesorCursosId
      cursoDispositivoId
      __typename
    }
  }
`;
export const deleteCurso = /* GraphQL */ `
  mutation DeleteCurso(
    $input: DeleteCursoInput!
    $condition: ModelCursoConditionInput
  ) {
    deleteCurso(input: $input, condition: $condition) {
      id
      color
      paralelo
      nombreCurso
      creacion
      dispositivo {
        id
        topic
        createdAt
        updatedAt
        __typename
      }
      horarios {
        items {
          id
          dia
          horaDesde
          horaHasta
          createdAt
          updatedAt
          cursoHorariosId
          __typename
        }
        nextToken
        __typename
      }
      estudiantes {
        items {
          id
          firstName
          lastName
          espolUser
          espolId
          espolEmail
          createdAt
          updatedAt
          cursoEstudiantesId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      profesorCursosId
      cursoDispositivoId
      __typename
    }
  }
`;
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createHorario = /* GraphQL */ `
  mutation CreateHorario(
    $input: CreateHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    createHorario(input: $input, condition: $condition) {
      id
      dia
      horaDesde
      horaHasta
      createdAt
      updatedAt
      cursoHorariosId
      __typename
    }
  }
`;
export const updateHorario = /* GraphQL */ `
  mutation UpdateHorario(
    $input: UpdateHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    updateHorario(input: $input, condition: $condition) {
      id
      dia
      horaDesde
      horaHasta
      createdAt
      updatedAt
      cursoHorariosId
      __typename
    }
  }
`;
export const deleteHorario = /* GraphQL */ `
  mutation DeleteHorario(
    $input: DeleteHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    deleteHorario(input: $input, condition: $condition) {
      id
      dia
      horaDesde
      horaHasta
      createdAt
      updatedAt
      cursoHorariosId
      __typename
    }
  }
`;
export const createEstudiante = /* GraphQL */ `
  mutation CreateEstudiante(
    $input: CreateEstudianteInput!
    $condition: ModelEstudianteConditionInput
  ) {
    createEstudiante(input: $input, condition: $condition) {
      id
      firstName
      lastName
      espolUser
      espolId
      espolEmail
      asistencia {
        items {
          estado
          id
          createdAt
          updatedAt
          estudianteAsistenciaId
          asistenciaCursoId
          asistenciaHorarioId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      cursoEstudiantesId
      __typename
    }
  }
`;
export const updateEstudiante = /* GraphQL */ `
  mutation UpdateEstudiante(
    $input: UpdateEstudianteInput!
    $condition: ModelEstudianteConditionInput
  ) {
    updateEstudiante(input: $input, condition: $condition) {
      id
      firstName
      lastName
      espolUser
      espolId
      espolEmail
      asistencia {
        items {
          estado
          id
          createdAt
          updatedAt
          estudianteAsistenciaId
          asistenciaCursoId
          asistenciaHorarioId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      cursoEstudiantesId
      __typename
    }
  }
`;
export const deleteEstudiante = /* GraphQL */ `
  mutation DeleteEstudiante(
    $input: DeleteEstudianteInput!
    $condition: ModelEstudianteConditionInput
  ) {
    deleteEstudiante(input: $input, condition: $condition) {
      id
      firstName
      lastName
      espolUser
      espolId
      espolEmail
      asistencia {
        items {
          estado
          id
          createdAt
          updatedAt
          estudianteAsistenciaId
          asistenciaCursoId
          asistenciaHorarioId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      cursoEstudiantesId
      __typename
    }
  }
`;
export const createAsistencia = /* GraphQL */ `
  mutation CreateAsistencia(
    $input: CreateAsistenciaInput!
    $condition: ModelAsistenciaConditionInput
  ) {
    createAsistencia(input: $input, condition: $condition) {
      curso {
        id
        color
        paralelo
        nombreCurso
        creacion
        dispositivo {
          id
          topic
          createdAt
          updatedAt
          __typename
        }
        horarios {
          nextToken
          __typename
        }
        estudiantes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        profesorCursosId
        cursoDispositivoId
        __typename
      }
      horario {
        id
        dia
        horaDesde
        horaHasta
        createdAt
        updatedAt
        cursoHorariosId
        __typename
      }
      estado
      id
      createdAt
      updatedAt
      estudianteAsistenciaId
      asistenciaCursoId
      asistenciaHorarioId
      __typename
    }
  }
`;
export const updateAsistencia = /* GraphQL */ `
  mutation UpdateAsistencia(
    $input: UpdateAsistenciaInput!
    $condition: ModelAsistenciaConditionInput
  ) {
    updateAsistencia(input: $input, condition: $condition) {
      curso {
        id
        color
        paralelo
        nombreCurso
        creacion
        dispositivo {
          id
          topic
          createdAt
          updatedAt
          __typename
        }
        horarios {
          nextToken
          __typename
        }
        estudiantes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        profesorCursosId
        cursoDispositivoId
        __typename
      }
      horario {
        id
        dia
        horaDesde
        horaHasta
        createdAt
        updatedAt
        cursoHorariosId
        __typename
      }
      estado
      id
      createdAt
      updatedAt
      estudianteAsistenciaId
      asistenciaCursoId
      asistenciaHorarioId
      __typename
    }
  }
`;
export const deleteAsistencia = /* GraphQL */ `
  mutation DeleteAsistencia(
    $input: DeleteAsistenciaInput!
    $condition: ModelAsistenciaConditionInput
  ) {
    deleteAsistencia(input: $input, condition: $condition) {
      curso {
        id
        color
        paralelo
        nombreCurso
        creacion
        dispositivo {
          id
          topic
          createdAt
          updatedAt
          __typename
        }
        horarios {
          nextToken
          __typename
        }
        estudiantes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        profesorCursosId
        cursoDispositivoId
        __typename
      }
      horario {
        id
        dia
        horaDesde
        horaHasta
        createdAt
        updatedAt
        cursoHorariosId
        __typename
      }
      estado
      id
      createdAt
      updatedAt
      estudianteAsistenciaId
      asistenciaCursoId
      asistenciaHorarioId
      __typename
    }
  }
`;
