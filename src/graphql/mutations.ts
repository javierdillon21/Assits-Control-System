/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfesor = /* GraphQL */ `
  mutation CreateProfesor(
    $input: CreateProfesorInput!
    $condition: ModelProfesorConditionInput
  ) {
    createProfesor(input: $input, condition: $condition) {
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
export const updateProfesor = /* GraphQL */ `
  mutation UpdateProfesor(
    $input: UpdateProfesorInput!
    $condition: ModelProfesorConditionInput
  ) {
    updateProfesor(input: $input, condition: $condition) {
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
export const deleteProfesor = /* GraphQL */ `
  mutation DeleteProfesor(
    $input: DeleteProfesorInput!
    $condition: ModelProfesorConditionInput
  ) {
    deleteProfesor(input: $input, condition: $condition) {
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
export const createCurso = /* GraphQL */ `
  mutation CreateCurso(
    $input: CreateCursoInput!
    $condition: ModelCursoConditionInput
  ) {
    createCurso(input: $input, condition: $condition) {
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
export const updateCurso = /* GraphQL */ `
  mutation UpdateCurso(
    $input: UpdateCursoInput!
    $condition: ModelCursoConditionInput
  ) {
    updateCurso(input: $input, condition: $condition) {
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
export const deleteCurso = /* GraphQL */ `
  mutation DeleteCurso(
    $input: DeleteCursoInput!
    $condition: ModelCursoConditionInput
  ) {
    deleteCurso(input: $input, condition: $condition) {
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
export const createDevice = /* GraphQL */ `
  mutation CreateDevice(
    $input: CreateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    createDevice(input: $input, condition: $condition) {
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
export const updateDevice = /* GraphQL */ `
  mutation UpdateDevice(
    $input: UpdateDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    updateDevice(input: $input, condition: $condition) {
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
export const deleteDevice = /* GraphQL */ `
  mutation DeleteDevice(
    $input: DeleteDeviceInput!
    $condition: ModelDeviceConditionInput
  ) {
    deleteDevice(input: $input, condition: $condition) {
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
export const createHorario = /* GraphQL */ `
  mutation CreateHorario(
    $input: CreateHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    createHorario(input: $input, condition: $condition) {
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
export const updateHorario = /* GraphQL */ `
  mutation UpdateHorario(
    $input: UpdateHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    updateHorario(input: $input, condition: $condition) {
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
export const deleteHorario = /* GraphQL */ `
  mutation DeleteHorario(
    $input: DeleteHorarioInput!
    $condition: ModelHorarioConditionInput
  ) {
    deleteHorario(input: $input, condition: $condition) {
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
export const createEstudiante = /* GraphQL */ `
  mutation CreateEstudiante(
    $input: CreateEstudianteInput!
    $condition: ModelEstudianteConditionInput
  ) {
    createEstudiante(input: $input, condition: $condition) {
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
export const updateEstudiante = /* GraphQL */ `
  mutation UpdateEstudiante(
    $input: UpdateEstudianteInput!
    $condition: ModelEstudianteConditionInput
  ) {
    updateEstudiante(input: $input, condition: $condition) {
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
export const deleteEstudiante = /* GraphQL */ `
  mutation DeleteEstudiante(
    $input: DeleteEstudianteInput!
    $condition: ModelEstudianteConditionInput
  ) {
    deleteEstudiante(input: $input, condition: $condition) {
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
export const createAsistencia = /* GraphQL */ `
  mutation CreateAsistencia(
    $input: CreateAsistenciaInput!
    $condition: ModelAsistenciaConditionInput
  ) {
    createAsistencia(input: $input, condition: $condition) {
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
export const updateAsistencia = /* GraphQL */ `
  mutation UpdateAsistencia(
    $input: UpdateAsistenciaInput!
    $condition: ModelAsistenciaConditionInput
  ) {
    updateAsistencia(input: $input, condition: $condition) {
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
export const deleteAsistencia = /* GraphQL */ `
  mutation DeleteAsistencia(
    $input: DeleteAsistenciaInput!
    $condition: ModelAsistenciaConditionInput
  ) {
    deleteAsistencia(input: $input, condition: $condition) {
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
export const createCursoEstudiante = /* GraphQL */ `
  mutation CreateCursoEstudiante(
    $input: CreateCursoEstudianteInput!
    $condition: ModelCursoEstudianteConditionInput
  ) {
    createCursoEstudiante(input: $input, condition: $condition) {
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
export const updateCursoEstudiante = /* GraphQL */ `
  mutation UpdateCursoEstudiante(
    $input: UpdateCursoEstudianteInput!
    $condition: ModelCursoEstudianteConditionInput
  ) {
    updateCursoEstudiante(input: $input, condition: $condition) {
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
export const deleteCursoEstudiante = /* GraphQL */ `
  mutation DeleteCursoEstudiante(
    $input: DeleteCursoEstudianteInput!
    $condition: ModelCursoEstudianteConditionInput
  ) {
    deleteCursoEstudiante(input: $input, condition: $condition) {
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
