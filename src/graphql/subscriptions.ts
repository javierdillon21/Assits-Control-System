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
export const onCreateCurso = /* GraphQL */ `
  subscription OnCreateCurso($filter: ModelSubscriptionCursoFilterInput) {
    onCreateCurso(filter: $filter) {
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
export const onUpdateCurso = /* GraphQL */ `
  subscription OnUpdateCurso($filter: ModelSubscriptionCursoFilterInput) {
    onUpdateCurso(filter: $filter) {
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
export const onDeleteCurso = /* GraphQL */ `
  subscription OnDeleteCurso($filter: ModelSubscriptionCursoFilterInput) {
    onDeleteCurso(filter: $filter) {
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
export const onCreateDevice = /* GraphQL */ `
  subscription OnCreateDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onCreateDevice(filter: $filter) {
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
export const onUpdateDevice = /* GraphQL */ `
  subscription OnUpdateDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onUpdateDevice(filter: $filter) {
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
export const onDeleteDevice = /* GraphQL */ `
  subscription OnDeleteDevice($filter: ModelSubscriptionDeviceFilterInput) {
    onDeleteDevice(filter: $filter) {
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
export const onCreateHorario = /* GraphQL */ `
  subscription OnCreateHorario($filter: ModelSubscriptionHorarioFilterInput) {
    onCreateHorario(filter: $filter) {
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
export const onUpdateHorario = /* GraphQL */ `
  subscription OnUpdateHorario($filter: ModelSubscriptionHorarioFilterInput) {
    onUpdateHorario(filter: $filter) {
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
export const onDeleteHorario = /* GraphQL */ `
  subscription OnDeleteHorario($filter: ModelSubscriptionHorarioFilterInput) {
    onDeleteHorario(filter: $filter) {
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
export const onCreateEstudiante = /* GraphQL */ `
  subscription OnCreateEstudiante(
    $filter: ModelSubscriptionEstudianteFilterInput
  ) {
    onCreateEstudiante(filter: $filter) {
      cedula
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
export const onUpdateEstudiante = /* GraphQL */ `
  subscription OnUpdateEstudiante(
    $filter: ModelSubscriptionEstudianteFilterInput
  ) {
    onUpdateEstudiante(filter: $filter) {
      cedula
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
export const onDeleteEstudiante = /* GraphQL */ `
  subscription OnDeleteEstudiante(
    $filter: ModelSubscriptionEstudianteFilterInput
  ) {
    onDeleteEstudiante(filter: $filter) {
      cedula
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
export const onCreateAsistencia = /* GraphQL */ `
  subscription OnCreateAsistencia(
    $filter: ModelSubscriptionAsistenciaFilterInput
  ) {
    onCreateAsistencia(filter: $filter) {
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
export const onUpdateAsistencia = /* GraphQL */ `
  subscription OnUpdateAsistencia(
    $filter: ModelSubscriptionAsistenciaFilterInput
  ) {
    onUpdateAsistencia(filter: $filter) {
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
export const onDeleteAsistencia = /* GraphQL */ `
  subscription OnDeleteAsistencia(
    $filter: ModelSubscriptionAsistenciaFilterInput
  ) {
    onDeleteAsistencia(filter: $filter) {
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
export const onCreateCursoEstudiante = /* GraphQL */ `
  subscription OnCreateCursoEstudiante(
    $filter: ModelSubscriptionCursoEstudianteFilterInput
  ) {
    onCreateCursoEstudiante(filter: $filter) {
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
        cedula
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
export const onUpdateCursoEstudiante = /* GraphQL */ `
  subscription OnUpdateCursoEstudiante(
    $filter: ModelSubscriptionCursoEstudianteFilterInput
  ) {
    onUpdateCursoEstudiante(filter: $filter) {
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
        cedula
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
export const onDeleteCursoEstudiante = /* GraphQL */ `
  subscription OnDeleteCursoEstudiante(
    $filter: ModelSubscriptionCursoEstudianteFilterInput
  ) {
    onDeleteCursoEstudiante(filter: $filter) {
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
        cedula
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
