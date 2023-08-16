/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfesor = /* GraphQL */ `
  query GetProfesor($id: ID!) {
    getProfesor(id: $id) {
      id
      nombres
      apellidos
      email
      password
      cursos {
        items {
          id
          profesorId
          dispositivoId
          paralelo
          nombre
          creacion
          createdAt
          updatedAt
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
        nombres
        apellidos
        email
        password
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
      profesorId
      dispositivoId
      paralelo
      nombre
      creacion
      dispositivo {
        id
        cursoId
        curso {
          id
          profesorId
          dispositivoId
          paralelo
          nombre
          creacion
          createdAt
          updatedAt
          __typename
        }
        topic
        createdAt
        updatedAt
        __typename
      }
      horarios {
        items {
          id
          cursoId
          dia
          horaDesde
          horaHasta
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      estudiantes {
        items {
          id
          cursoId
          estudianteId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      asistencias {
        items {
          cursoId
          estudianteId
          horarioId
          estado
          id
          createdAt
          updatedAt
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
export const listCursos = /* GraphQL */ `
  query ListCursos(
    $filter: ModelCursoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCursos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        profesorId
        dispositivoId
        paralelo
        nombre
        creacion
        dispositivo {
          id
          cursoId
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
        asistencias {
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
export const getDevice = /* GraphQL */ `
  query GetDevice($id: ID!) {
    getDevice(id: $id) {
      id
      cursoId
      curso {
        id
        profesorId
        dispositivoId
        paralelo
        nombre
        creacion
        dispositivo {
          id
          cursoId
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
        asistencias {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
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
        cursoId
        curso {
          id
          profesorId
          dispositivoId
          paralelo
          nombre
          creacion
          createdAt
          updatedAt
          __typename
        }
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
      cursoId
      asistencias {
        items {
          cursoId
          estudianteId
          horarioId
          estado
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      dia
      horaDesde
      horaHasta
      createdAt
      updatedAt
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
        cursoId
        asistencias {
          nextToken
          __typename
        }
        dia
        horaDesde
        horaHasta
        createdAt
        updatedAt
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
      matricula
      nombres
      apellidos
      usuario
      email
      cursos {
        items {
          id
          cursoId
          estudianteId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      asistencia {
        items {
          cursoId
          estudianteId
          horarioId
          estado
          id
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
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
        matricula
        nombres
        apellidos
        usuario
        email
        cursos {
          nextToken
          __typename
        }
        asistencia {
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
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
      cursoId
      estudianteId
      horarioId
      estado
      id
      createdAt
      updatedAt
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
        cursoId
        estudianteId
        horarioId
        estado
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCursoEstudiante = /* GraphQL */ `
  query GetCursoEstudiante($id: ID!) {
    getCursoEstudiante(id: $id) {
      id
      cursoId
      estudianteId
      curso {
        id
        profesorId
        dispositivoId
        paralelo
        nombre
        creacion
        dispositivo {
          id
          cursoId
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
        asistencias {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      estudiante {
        matricula
        nombres
        apellidos
        usuario
        email
        cursos {
          nextToken
          __typename
        }
        asistencia {
          nextToken
          __typename
        }
        id
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCursoEstudiantes = /* GraphQL */ `
  query ListCursoEstudiantes(
    $filter: ModelCursoEstudianteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCursoEstudiantes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cursoId
        estudianteId
        curso {
          id
          profesorId
          dispositivoId
          paralelo
          nombre
          creacion
          createdAt
          updatedAt
          __typename
        }
        estudiante {
          matricula
          nombres
          apellidos
          usuario
          email
          id
          createdAt
          updatedAt
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
export const cursosByProfesorId = /* GraphQL */ `
  query CursosByProfesorId(
    $profesorId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCursoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cursosByProfesorId(
      profesorId: $profesorId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        profesorId
        dispositivoId
        paralelo
        nombre
        creacion
        dispositivo {
          id
          cursoId
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
        asistencias {
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
export const horariosByCursoId = /* GraphQL */ `
  query HorariosByCursoId(
    $cursoId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelHorarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    horariosByCursoId(
      cursoId: $cursoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cursoId
        asistencias {
          nextToken
          __typename
        }
        dia
        horaDesde
        horaHasta
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const asistenciasByCursoId = /* GraphQL */ `
  query AsistenciasByCursoId(
    $cursoId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAsistenciaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    asistenciasByCursoId(
      cursoId: $cursoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        cursoId
        estudianteId
        horarioId
        estado
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const asistenciasByEstudianteId = /* GraphQL */ `
  query AsistenciasByEstudianteId(
    $estudianteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAsistenciaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    asistenciasByEstudianteId(
      estudianteId: $estudianteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        cursoId
        estudianteId
        horarioId
        estado
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const asistenciasByHorarioId = /* GraphQL */ `
  query AsistenciasByHorarioId(
    $horarioId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAsistenciaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    asistenciasByHorarioId(
      horarioId: $horarioId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        cursoId
        estudianteId
        horarioId
        estado
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const cursoEstudiantesByCursoId = /* GraphQL */ `
  query CursoEstudiantesByCursoId(
    $cursoId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCursoEstudianteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cursoEstudiantesByCursoId(
      cursoId: $cursoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cursoId
        estudianteId
        curso {
          id
          profesorId
          dispositivoId
          paralelo
          nombre
          creacion
          createdAt
          updatedAt
          __typename
        }
        estudiante {
          matricula
          nombres
          apellidos
          usuario
          email
          id
          createdAt
          updatedAt
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
export const cursoEstudiantesByEstudianteId = /* GraphQL */ `
  query CursoEstudiantesByEstudianteId(
    $estudianteId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCursoEstudianteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cursoEstudiantesByEstudianteId(
      estudianteId: $estudianteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cursoId
        estudianteId
        curso {
          id
          profesorId
          dispositivoId
          paralelo
          nombre
          creacion
          createdAt
          updatedAt
          __typename
        }
        estudiante {
          matricula
          nombres
          apellidos
          usuario
          email
          id
          createdAt
          updatedAt
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
