/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        password
        profesor {
          id
          firstName
          lastName
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userProfesorId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfesor = /* GraphQL */ `
  query GetProfesor($id: ID!) {
    getProfesor(id: $id) {
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
export const listProfesors = /* GraphQL */ `
  query ListProfesors(
    $filter: ModelProfesorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfesors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCurso = /* GraphQL */ `
  query GetCurso($id: ID!) {
    getCurso(id: $id) {
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
export const listCursos = /* GraphQL */ `
  query ListCursos(
    $filter: ModelCursoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCursos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listDevices = /* GraphQL */ `
  query ListDevices(
    $filter: ModelDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        topic
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getHorario = /* GraphQL */ `
  query GetHorario($id: ID!) {
    getHorario(id: $id) {
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
export const listHorarios = /* GraphQL */ `
  query ListHorarios(
    $filter: ModelHorarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHorarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getEstudiante = /* GraphQL */ `
  query GetEstudiante($id: ID!) {
    getEstudiante(id: $id) {
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
export const listEstudiantes = /* GraphQL */ `
  query ListEstudiantes(
    $filter: ModelEstudianteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEstudiantes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        espolUser
        espolId
        espolEmail
        asistencia {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        cursoEstudiantesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAsistencia = /* GraphQL */ `
  query GetAsistencia($id: ID!) {
    getAsistencia(id: $id) {
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
export const listAsistencias = /* GraphQL */ `
  query ListAsistencias(
    $filter: ModelAsistenciaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAsistencias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        curso {
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
      nextToken
      __typename
    }
  }
`;
