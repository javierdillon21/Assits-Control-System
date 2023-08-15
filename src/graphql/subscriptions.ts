/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfesor = /* GraphQL */ `
  subscription OnCreateProfesor($filter: ModelSubscriptionProfesorFilterInput) {
    onCreateProfesor(filter: $filter) {
      id
      nombres
      apellidos
      email
      password
      cursos {
        items {
          id
          paralelo
          nombre
          creacion
          createdAt
          updatedAt
          profesorCursosId
          cursoDispositivoId
          cursoProfesorId
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
export const onUpdateProfesor = /* GraphQL */ `
  subscription OnUpdateProfesor($filter: ModelSubscriptionProfesorFilterInput) {
    onUpdateProfesor(filter: $filter) {
      id
      nombres
      apellidos
      email
      password
      cursos {
        items {
          id
          paralelo
          nombre
          creacion
          createdAt
          updatedAt
          profesorCursosId
          cursoDispositivoId
          cursoProfesorId
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
export const onDeleteProfesor = /* GraphQL */ `
  subscription OnDeleteProfesor($filter: ModelSubscriptionProfesorFilterInput) {
    onDeleteProfesor(filter: $filter) {
      id
      nombres
      apellidos
      email
      password
      cursos {
        items {
          id
          paralelo
          nombre
          creacion
          createdAt
          updatedAt
          profesorCursosId
          cursoDispositivoId
          cursoProfesorId
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
export const onCreateCurso = /* GraphQL */ `
  subscription OnCreateCurso($filter: ModelSubscriptionCursoFilterInput) {
    onCreateCurso(filter: $filter) {
      id
      paralelo
      nombre
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
          nombres
          apellidos
          usuario
          matricula
          email
          createdAt
          updatedAt
          cursoEstudiantesId
          __typename
        }
        nextToken
        __typename
      }
      profesor {
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
      createdAt
      updatedAt
      profesorCursosId
      cursoDispositivoId
      cursoProfesorId
      __typename
    }
  }
`;
export const onUpdateCurso = /* GraphQL */ `
  subscription OnUpdateCurso($filter: ModelSubscriptionCursoFilterInput) {
    onUpdateCurso(filter: $filter) {
      id
      paralelo
      nombre
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
          nombres
          apellidos
          usuario
          matricula
          email
          createdAt
          updatedAt
          cursoEstudiantesId
          __typename
        }
        nextToken
        __typename
      }
      profesor {
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
      createdAt
      updatedAt
      profesorCursosId
      cursoDispositivoId
      cursoProfesorId
      __typename
    }
  }
`;
export const onDeleteCurso = /* GraphQL */ `
  subscription OnDeleteCurso($filter: ModelSubscriptionCursoFilterInput) {
    onDeleteCurso(filter: $filter) {
      id
      paralelo
      nombre
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
          nombres
          apellidos
          usuario
          matricula
          email
          createdAt
          updatedAt
          cursoEstudiantesId
          __typename
        }
        nextToken
        __typename
      }
      profesor {
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
      createdAt
      updatedAt
      profesorCursosId
      cursoDispositivoId
      cursoProfesorId
      __typename
    }
  }
`;
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onCreateDevice(filter: $filter) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onUpdateDevice(filter: $filter) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onDeleteDevice(filter: $filter) {
      id
      topic
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateHorario = /* GraphQL */ `
  subscription OnCreateHorario($filter: ModelSubscriptionHorarioFilterInput) {
    onCreateHorario(filter: $filter) {
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
export const onUpdateHorario = /* GraphQL */ `
  subscription OnUpdateHorario($filter: ModelSubscriptionHorarioFilterInput) {
    onUpdateHorario(filter: $filter) {
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
export const onDeleteHorario = /* GraphQL */ `
  subscription OnDeleteHorario($filter: ModelSubscriptionHorarioFilterInput) {
    onDeleteHorario(filter: $filter) {
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
export const onCreateEstudiante = /* GraphQL */ `
  subscription OnCreateEstudiante(
    $filter: ModelSubscriptionEstudianteFilterInput
  ) {
    onCreateEstudiante(filter: $filter) {
      id
      nombres
      apellidos
      usuario
      matricula
      email
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
export const onUpdateEstudiante = /* GraphQL */ `
  subscription OnUpdateEstudiante(
    $filter: ModelSubscriptionEstudianteFilterInput
  ) {
    onUpdateEstudiante(filter: $filter) {
      id
      nombres
      apellidos
      usuario
      matricula
      email
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
export const onDeleteEstudiante = /* GraphQL */ `
  subscription OnDeleteEstudiante(
    $filter: ModelSubscriptionEstudianteFilterInput
  ) {
    onDeleteEstudiante(filter: $filter) {
      id
      nombres
      apellidos
      usuario
      matricula
      email
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
export const onCreateAsistencia = /* GraphQL */ `
  subscription OnCreateAsistencia(
    $filter: ModelSubscriptionAsistenciaFilterInput
  ) {
    onCreateAsistencia(filter: $filter) {
      curso {
        id
        paralelo
        nombre
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
        profesor {
          id
          nombres
          apellidos
          email
          password
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        profesorCursosId
        cursoDispositivoId
        cursoProfesorId
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
export const onUpdateAsistencia = /* GraphQL */ `
  subscription OnUpdateAsistencia(
    $filter: ModelSubscriptionAsistenciaFilterInput
  ) {
    onUpdateAsistencia(filter: $filter) {
      curso {
        id
        paralelo
        nombre
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
        profesor {
          id
          nombres
          apellidos
          email
          password
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        profesorCursosId
        cursoDispositivoId
        cursoProfesorId
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
export const onDeleteAsistencia = /* GraphQL */ `
  subscription OnDeleteAsistencia(
    $filter: ModelSubscriptionAsistenciaFilterInput
  ) {
    onDeleteAsistencia(filter: $filter) {
      curso {
        id
        paralelo
        nombre
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
        profesor {
          id
          nombres
          apellidos
          email
          password
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        profesorCursosId
        cursoDispositivoId
        cursoProfesorId
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
