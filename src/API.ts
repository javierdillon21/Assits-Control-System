/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfesorInput = {
  id?: string | null,
  nombres: string,
  apellidos: string,
  email: string,
  password: string,
};

export type ModelProfesorConditionInput = {
  nombres?: ModelStringInput | null,
  apellidos?: ModelStringInput | null,
  email?: ModelIDInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelProfesorConditionInput | null > | null,
  or?: Array< ModelProfesorConditionInput | null > | null,
  not?: ModelProfesorConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Profesor = {
  __typename: "Profesor",
  id: string,
  nombres: string,
  apellidos: string,
  email: string,
  password: string,
  cursos?: ModelCursoConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCursoConnection = {
  __typename: "ModelCursoConnection",
  items:  Array<Curso | null >,
  nextToken?: string | null,
};

export type Curso = {
  __typename: "Curso",
  id: string,
  profesorId?: string | null,
  dispositivoId?: string | null,
  paralelo: string,
  nombre: string,
  creacion?: string | null,
  dispositivo?: Device | null,
  horarios?: ModelHorarioConnection | null,
  estudiantes?: ModelCursoEstudianteConnection | null,
  asistencias?: ModelAsistenciaConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Device = {
  __typename: "Device",
  id: string,
  cursoId: string,
  curso: Curso,
  topic: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelHorarioConnection = {
  __typename: "ModelHorarioConnection",
  items:  Array<Horario | null >,
  nextToken?: string | null,
};

export type Horario = {
  __typename: "Horario",
  id: string,
  cursoId: string,
  asistencias?: ModelAsistenciaConnection | null,
  dia: DiaSemana,
  horaDesde: string,
  horaHasta: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelAsistenciaConnection = {
  __typename: "ModelAsistenciaConnection",
  items:  Array<Asistencia | null >,
  nextToken?: string | null,
};

export type Asistencia = {
  __typename: "Asistencia",
  cursoId: string,
  estudianteId: string,
  horarioId: string,
  estado: Asistio,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export enum Asistio {
  SI = "SI",
  NO = "NO",
  AUN_NO = "AUN_NO",
}


export enum DiaSemana {
  LUNES = "LUNES",
  MARTES = "MARTES",
  MIERCOLES = "MIERCOLES",
  JUEVES = "JUEVES",
  VIERNES = "VIERNES",
  SABADO = "SABADO",
  DOMINGO = "DOMINGO",
}


export type ModelCursoEstudianteConnection = {
  __typename: "ModelCursoEstudianteConnection",
  items:  Array<CursoEstudiante | null >,
  nextToken?: string | null,
};

export type CursoEstudiante = {
  __typename: "CursoEstudiante",
  id: string,
  cursoId: string,
  estudianteId: string,
  curso: Curso,
  estudiante: Estudiante,
  createdAt: string,
  updatedAt: string,
};

export type Estudiante = {
  __typename: "Estudiante",
  matricula: string,
  nombres: string,
  apellidos: string,
  usuario: string,
  email: string,
  cursos?: ModelCursoEstudianteConnection | null,
  asistencia?: ModelAsistenciaConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfesorInput = {
  id: string,
  nombres?: string | null,
  apellidos?: string | null,
  email?: string | null,
  password?: string | null,
};

export type DeleteProfesorInput = {
  id: string,
};

export type CreateCursoInput = {
  id?: string | null,
  profesorId?: string | null,
  dispositivoId?: string | null,
  paralelo: string,
  nombre: string,
  creacion?: string | null,
};

export type ModelCursoConditionInput = {
  profesorId?: ModelIDInput | null,
  dispositivoId?: ModelIDInput | null,
  paralelo?: ModelStringInput | null,
  nombre?: ModelStringInput | null,
  creacion?: ModelStringInput | null,
  and?: Array< ModelCursoConditionInput | null > | null,
  or?: Array< ModelCursoConditionInput | null > | null,
  not?: ModelCursoConditionInput | null,
};

export type UpdateCursoInput = {
  id: string,
  profesorId?: string | null,
  dispositivoId?: string | null,
  paralelo?: string | null,
  nombre?: string | null,
  creacion?: string | null,
};

export type DeleteCursoInput = {
  id: string,
};

export type CreateDeviceInput = {
  id?: string | null,
  cursoId: string,
  topic: string,
};

export type ModelDeviceConditionInput = {
  cursoId?: ModelIDInput | null,
  topic?: ModelStringInput | null,
  and?: Array< ModelDeviceConditionInput | null > | null,
  or?: Array< ModelDeviceConditionInput | null > | null,
  not?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceInput = {
  id: string,
  cursoId?: string | null,
  topic?: string | null,
};

export type DeleteDeviceInput = {
  id: string,
};

export type CreateHorarioInput = {
  id?: string | null,
  cursoId: string,
  dia: DiaSemana,
  horaDesde: string,
  horaHasta: string,
};

export type ModelHorarioConditionInput = {
  cursoId?: ModelIDInput | null,
  dia?: ModelDiaSemanaInput | null,
  horaDesde?: ModelStringInput | null,
  horaHasta?: ModelStringInput | null,
  and?: Array< ModelHorarioConditionInput | null > | null,
  or?: Array< ModelHorarioConditionInput | null > | null,
  not?: ModelHorarioConditionInput | null,
};

export type ModelDiaSemanaInput = {
  eq?: DiaSemana | null,
  ne?: DiaSemana | null,
};

export type UpdateHorarioInput = {
  id: string,
  cursoId?: string | null,
  dia?: DiaSemana | null,
  horaDesde?: string | null,
  horaHasta?: string | null,
};

export type DeleteHorarioInput = {
  id: string,
};

export type CreateEstudianteInput = {
  matricula: string,
  nombres: string,
  apellidos: string,
  usuario: string,
  email: string,
  id?: string | null,
};

export type ModelEstudianteConditionInput = {
  matricula?: ModelIDInput | null,
  nombres?: ModelStringInput | null,
  apellidos?: ModelStringInput | null,
  usuario?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelEstudianteConditionInput | null > | null,
  or?: Array< ModelEstudianteConditionInput | null > | null,
  not?: ModelEstudianteConditionInput | null,
};

export type UpdateEstudianteInput = {
  matricula?: string | null,
  nombres?: string | null,
  apellidos?: string | null,
  usuario?: string | null,
  email?: string | null,
  id: string,
};

export type DeleteEstudianteInput = {
  id: string,
};

export type CreateAsistenciaInput = {
  cursoId: string,
  estudianteId: string,
  horarioId: string,
  estado: Asistio,
  id?: string | null,
};

export type ModelAsistenciaConditionInput = {
  cursoId?: ModelIDInput | null,
  estudianteId?: ModelIDInput | null,
  horarioId?: ModelIDInput | null,
  estado?: ModelAsistioInput | null,
  and?: Array< ModelAsistenciaConditionInput | null > | null,
  or?: Array< ModelAsistenciaConditionInput | null > | null,
  not?: ModelAsistenciaConditionInput | null,
};

export type ModelAsistioInput = {
  eq?: Asistio | null,
  ne?: Asistio | null,
};

export type UpdateAsistenciaInput = {
  cursoId?: string | null,
  estudianteId?: string | null,
  horarioId?: string | null,
  estado?: Asistio | null,
  id: string,
};

export type DeleteAsistenciaInput = {
  id: string,
};

export type CreateCursoEstudianteInput = {
  id?: string | null,
  cursoId: string,
  estudianteId: string,
};

export type ModelCursoEstudianteConditionInput = {
  cursoId?: ModelIDInput | null,
  estudianteId?: ModelIDInput | null,
  and?: Array< ModelCursoEstudianteConditionInput | null > | null,
  or?: Array< ModelCursoEstudianteConditionInput | null > | null,
  not?: ModelCursoEstudianteConditionInput | null,
};

export type UpdateCursoEstudianteInput = {
  id: string,
  cursoId?: string | null,
  estudianteId?: string | null,
};

export type DeleteCursoEstudianteInput = {
  id: string,
};

export type ModelProfesorFilterInput = {
  id?: ModelIDInput | null,
  nombres?: ModelStringInput | null,
  apellidos?: ModelStringInput | null,
  email?: ModelIDInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelProfesorFilterInput | null > | null,
  or?: Array< ModelProfesorFilterInput | null > | null,
  not?: ModelProfesorFilterInput | null,
};

export type ModelProfesorConnection = {
  __typename: "ModelProfesorConnection",
  items:  Array<Profesor | null >,
  nextToken?: string | null,
};

export type ModelCursoFilterInput = {
  id?: ModelIDInput | null,
  profesorId?: ModelIDInput | null,
  dispositivoId?: ModelIDInput | null,
  paralelo?: ModelStringInput | null,
  nombre?: ModelStringInput | null,
  creacion?: ModelStringInput | null,
  and?: Array< ModelCursoFilterInput | null > | null,
  or?: Array< ModelCursoFilterInput | null > | null,
  not?: ModelCursoFilterInput | null,
};

export type ModelDeviceFilterInput = {
  id?: ModelIDInput | null,
  cursoId?: ModelIDInput | null,
  topic?: ModelStringInput | null,
  and?: Array< ModelDeviceFilterInput | null > | null,
  or?: Array< ModelDeviceFilterInput | null > | null,
  not?: ModelDeviceFilterInput | null,
};

export type ModelDeviceConnection = {
  __typename: "ModelDeviceConnection",
  items:  Array<Device | null >,
  nextToken?: string | null,
};

export type ModelHorarioFilterInput = {
  id?: ModelIDInput | null,
  cursoId?: ModelIDInput | null,
  dia?: ModelDiaSemanaInput | null,
  horaDesde?: ModelStringInput | null,
  horaHasta?: ModelStringInput | null,
  and?: Array< ModelHorarioFilterInput | null > | null,
  or?: Array< ModelHorarioFilterInput | null > | null,
  not?: ModelHorarioFilterInput | null,
};

export type ModelEstudianteFilterInput = {
  matricula?: ModelIDInput | null,
  nombres?: ModelStringInput | null,
  apellidos?: ModelStringInput | null,
  usuario?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelEstudianteFilterInput | null > | null,
  or?: Array< ModelEstudianteFilterInput | null > | null,
  not?: ModelEstudianteFilterInput | null,
};

export type ModelEstudianteConnection = {
  __typename: "ModelEstudianteConnection",
  items:  Array<Estudiante | null >,
  nextToken?: string | null,
};

export type ModelAsistenciaFilterInput = {
  cursoId?: ModelIDInput | null,
  estudianteId?: ModelIDInput | null,
  horarioId?: ModelIDInput | null,
  estado?: ModelAsistioInput | null,
  and?: Array< ModelAsistenciaFilterInput | null > | null,
  or?: Array< ModelAsistenciaFilterInput | null > | null,
  not?: ModelAsistenciaFilterInput | null,
};

export type ModelCursoEstudianteFilterInput = {
  id?: ModelIDInput | null,
  cursoId?: ModelIDInput | null,
  estudianteId?: ModelIDInput | null,
  and?: Array< ModelCursoEstudianteFilterInput | null > | null,
  or?: Array< ModelCursoEstudianteFilterInput | null > | null,
  not?: ModelCursoEstudianteFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionProfesorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  nombres?: ModelSubscriptionStringInput | null,
  apellidos?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionIDInput | null,
  password?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfesorFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfesorFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCursoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  profesorId?: ModelSubscriptionIDInput | null,
  dispositivoId?: ModelSubscriptionIDInput | null,
  paralelo?: ModelSubscriptionStringInput | null,
  nombre?: ModelSubscriptionStringInput | null,
  creacion?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCursoFilterInput | null > | null,
  or?: Array< ModelSubscriptionCursoFilterInput | null > | null,
};

export type ModelSubscriptionDeviceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cursoId?: ModelSubscriptionIDInput | null,
  topic?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDeviceFilterInput | null > | null,
  or?: Array< ModelSubscriptionDeviceFilterInput | null > | null,
};

export type ModelSubscriptionHorarioFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cursoId?: ModelSubscriptionIDInput | null,
  dia?: ModelSubscriptionStringInput | null,
  horaDesde?: ModelSubscriptionStringInput | null,
  horaHasta?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHorarioFilterInput | null > | null,
  or?: Array< ModelSubscriptionHorarioFilterInput | null > | null,
};

export type ModelSubscriptionEstudianteFilterInput = {
  matricula?: ModelSubscriptionIDInput | null,
  nombres?: ModelSubscriptionStringInput | null,
  apellidos?: ModelSubscriptionStringInput | null,
  usuario?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEstudianteFilterInput | null > | null,
  or?: Array< ModelSubscriptionEstudianteFilterInput | null > | null,
};

export type ModelSubscriptionAsistenciaFilterInput = {
  cursoId?: ModelSubscriptionIDInput | null,
  estudianteId?: ModelSubscriptionIDInput | null,
  horarioId?: ModelSubscriptionIDInput | null,
  estado?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAsistenciaFilterInput | null > | null,
  or?: Array< ModelSubscriptionAsistenciaFilterInput | null > | null,
};

export type ModelSubscriptionCursoEstudianteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cursoId?: ModelSubscriptionIDInput | null,
  estudianteId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCursoEstudianteFilterInput | null > | null,
  or?: Array< ModelSubscriptionCursoEstudianteFilterInput | null > | null,
};

export type CreateProfesorMutationVariables = {
  input: CreateProfesorInput,
  condition?: ModelProfesorConditionInput | null,
};

export type CreateProfesorMutation = {
  createProfesor?:  {
    __typename: "Profesor",
    id: string,
    nombres: string,
    apellidos: string,
    email: string,
    password: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfesorMutationVariables = {
  input: UpdateProfesorInput,
  condition?: ModelProfesorConditionInput | null,
};

export type UpdateProfesorMutation = {
  updateProfesor?:  {
    __typename: "Profesor",
    id: string,
    nombres: string,
    apellidos: string,
    email: string,
    password: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfesorMutationVariables = {
  input: DeleteProfesorInput,
  condition?: ModelProfesorConditionInput | null,
};

export type DeleteProfesorMutation = {
  deleteProfesor?:  {
    __typename: "Profesor",
    id: string,
    nombres: string,
    apellidos: string,
    email: string,
    password: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCursoMutationVariables = {
  input: CreateCursoInput,
  condition?: ModelCursoConditionInput | null,
};

export type CreateCursoMutation = {
  createCurso?:  {
    __typename: "Curso",
    id: string,
    profesorId?: string | null,
    dispositivoId?: string | null,
    paralelo: string,
    nombre: string,
    creacion?: string | null,
    dispositivo?:  {
      __typename: "Device",
      id: string,
      cursoId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        cursoId: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCursoMutationVariables = {
  input: UpdateCursoInput,
  condition?: ModelCursoConditionInput | null,
};

export type UpdateCursoMutation = {
  updateCurso?:  {
    __typename: "Curso",
    id: string,
    profesorId?: string | null,
    dispositivoId?: string | null,
    paralelo: string,
    nombre: string,
    creacion?: string | null,
    dispositivo?:  {
      __typename: "Device",
      id: string,
      cursoId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        cursoId: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCursoMutationVariables = {
  input: DeleteCursoInput,
  condition?: ModelCursoConditionInput | null,
};

export type DeleteCursoMutation = {
  deleteCurso?:  {
    __typename: "Curso",
    id: string,
    profesorId?: string | null,
    dispositivoId?: string | null,
    paralelo: string,
    nombre: string,
    creacion?: string | null,
    dispositivo?:  {
      __typename: "Device",
      id: string,
      cursoId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        cursoId: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateDeviceMutationVariables = {
  input: CreateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type CreateDeviceMutation = {
  createDevice?:  {
    __typename: "Device",
    id: string,
    cursoId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDeviceMutationVariables = {
  input: UpdateDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceMutation = {
  updateDevice?:  {
    __typename: "Device",
    id: string,
    cursoId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDeviceMutationVariables = {
  input: DeleteDeviceInput,
  condition?: ModelDeviceConditionInput | null,
};

export type DeleteDeviceMutation = {
  deleteDevice?:  {
    __typename: "Device",
    id: string,
    cursoId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateHorarioMutationVariables = {
  input: CreateHorarioInput,
  condition?: ModelHorarioConditionInput | null,
};

export type CreateHorarioMutation = {
  createHorario?:  {
    __typename: "Horario",
    id: string,
    cursoId: string,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateHorarioMutationVariables = {
  input: UpdateHorarioInput,
  condition?: ModelHorarioConditionInput | null,
};

export type UpdateHorarioMutation = {
  updateHorario?:  {
    __typename: "Horario",
    id: string,
    cursoId: string,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteHorarioMutationVariables = {
  input: DeleteHorarioInput,
  condition?: ModelHorarioConditionInput | null,
};

export type DeleteHorarioMutation = {
  deleteHorario?:  {
    __typename: "Horario",
    id: string,
    cursoId: string,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEstudianteMutationVariables = {
  input: CreateEstudianteInput,
  condition?: ModelEstudianteConditionInput | null,
};

export type CreateEstudianteMutation = {
  createEstudiante?:  {
    __typename: "Estudiante",
    matricula: string,
    nombres: string,
    apellidos: string,
    usuario: string,
    email: string,
    cursos?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEstudianteMutationVariables = {
  input: UpdateEstudianteInput,
  condition?: ModelEstudianteConditionInput | null,
};

export type UpdateEstudianteMutation = {
  updateEstudiante?:  {
    __typename: "Estudiante",
    matricula: string,
    nombres: string,
    apellidos: string,
    usuario: string,
    email: string,
    cursos?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEstudianteMutationVariables = {
  input: DeleteEstudianteInput,
  condition?: ModelEstudianteConditionInput | null,
};

export type DeleteEstudianteMutation = {
  deleteEstudiante?:  {
    __typename: "Estudiante",
    matricula: string,
    nombres: string,
    apellidos: string,
    usuario: string,
    email: string,
    cursos?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAsistenciaMutationVariables = {
  input: CreateAsistenciaInput,
  condition?: ModelAsistenciaConditionInput | null,
};

export type CreateAsistenciaMutation = {
  createAsistencia?:  {
    __typename: "Asistencia",
    cursoId: string,
    estudianteId: string,
    horarioId: string,
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAsistenciaMutationVariables = {
  input: UpdateAsistenciaInput,
  condition?: ModelAsistenciaConditionInput | null,
};

export type UpdateAsistenciaMutation = {
  updateAsistencia?:  {
    __typename: "Asistencia",
    cursoId: string,
    estudianteId: string,
    horarioId: string,
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAsistenciaMutationVariables = {
  input: DeleteAsistenciaInput,
  condition?: ModelAsistenciaConditionInput | null,
};

export type DeleteAsistenciaMutation = {
  deleteAsistencia?:  {
    __typename: "Asistencia",
    cursoId: string,
    estudianteId: string,
    horarioId: string,
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCursoEstudianteMutationVariables = {
  input: CreateCursoEstudianteInput,
  condition?: ModelCursoEstudianteConditionInput | null,
};

export type CreateCursoEstudianteMutation = {
  createCursoEstudiante?:  {
    __typename: "CursoEstudiante",
    id: string,
    cursoId: string,
    estudianteId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    estudiante:  {
      __typename: "Estudiante",
      matricula: string,
      nombres: string,
      apellidos: string,
      usuario: string,
      email: string,
      cursos?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencia?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCursoEstudianteMutationVariables = {
  input: UpdateCursoEstudianteInput,
  condition?: ModelCursoEstudianteConditionInput | null,
};

export type UpdateCursoEstudianteMutation = {
  updateCursoEstudiante?:  {
    __typename: "CursoEstudiante",
    id: string,
    cursoId: string,
    estudianteId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    estudiante:  {
      __typename: "Estudiante",
      matricula: string,
      nombres: string,
      apellidos: string,
      usuario: string,
      email: string,
      cursos?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencia?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCursoEstudianteMutationVariables = {
  input: DeleteCursoEstudianteInput,
  condition?: ModelCursoEstudianteConditionInput | null,
};

export type DeleteCursoEstudianteMutation = {
  deleteCursoEstudiante?:  {
    __typename: "CursoEstudiante",
    id: string,
    cursoId: string,
    estudianteId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    estudiante:  {
      __typename: "Estudiante",
      matricula: string,
      nombres: string,
      apellidos: string,
      usuario: string,
      email: string,
      cursos?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencia?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProfesorQueryVariables = {
  id: string,
};

export type GetProfesorQuery = {
  getProfesor?:  {
    __typename: "Profesor",
    id: string,
    nombres: string,
    apellidos: string,
    email: string,
    password: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfesorsQueryVariables = {
  filter?: ModelProfesorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfesorsQuery = {
  listProfesors?:  {
    __typename: "ModelProfesorConnection",
    items:  Array< {
      __typename: "Profesor",
      id: string,
      nombres: string,
      apellidos: string,
      email: string,
      password: string,
      cursos?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCursoQueryVariables = {
  id: string,
};

export type GetCursoQuery = {
  getCurso?:  {
    __typename: "Curso",
    id: string,
    profesorId?: string | null,
    dispositivoId?: string | null,
    paralelo: string,
    nombre: string,
    creacion?: string | null,
    dispositivo?:  {
      __typename: "Device",
      id: string,
      cursoId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        cursoId: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCursosQueryVariables = {
  filter?: ModelCursoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCursosQuery = {
  listCursos?:  {
    __typename: "ModelCursoConnection",
    items:  Array< {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDeviceQueryVariables = {
  id: string,
};

export type GetDeviceQuery = {
  getDevice?:  {
    __typename: "Device",
    id: string,
    cursoId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDevicesQueryVariables = {
  filter?: ModelDeviceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDevicesQuery = {
  listDevices?:  {
    __typename: "ModelDeviceConnection",
    items:  Array< {
      __typename: "Device",
      id: string,
      cursoId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetHorarioQueryVariables = {
  id: string,
};

export type GetHorarioQuery = {
  getHorario?:  {
    __typename: "Horario",
    id: string,
    cursoId: string,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListHorariosQueryVariables = {
  filter?: ModelHorarioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHorariosQuery = {
  listHorarios?:  {
    __typename: "ModelHorarioConnection",
    items:  Array< {
      __typename: "Horario",
      id: string,
      cursoId: string,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEstudianteQueryVariables = {
  id: string,
};

export type GetEstudianteQuery = {
  getEstudiante?:  {
    __typename: "Estudiante",
    matricula: string,
    nombres: string,
    apellidos: string,
    usuario: string,
    email: string,
    cursos?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEstudiantesQueryVariables = {
  filter?: ModelEstudianteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEstudiantesQuery = {
  listEstudiantes?:  {
    __typename: "ModelEstudianteConnection",
    items:  Array< {
      __typename: "Estudiante",
      matricula: string,
      nombres: string,
      apellidos: string,
      usuario: string,
      email: string,
      cursos?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencia?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAsistenciaQueryVariables = {
  id: string,
};

export type GetAsistenciaQuery = {
  getAsistencia?:  {
    __typename: "Asistencia",
    cursoId: string,
    estudianteId: string,
    horarioId: string,
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAsistenciasQueryVariables = {
  filter?: ModelAsistenciaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAsistenciasQuery = {
  listAsistencias?:  {
    __typename: "ModelAsistenciaConnection",
    items:  Array< {
      __typename: "Asistencia",
      cursoId: string,
      estudianteId: string,
      horarioId: string,
      estado: Asistio,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCursoEstudianteQueryVariables = {
  id: string,
};

export type GetCursoEstudianteQuery = {
  getCursoEstudiante?:  {
    __typename: "CursoEstudiante",
    id: string,
    cursoId: string,
    estudianteId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    estudiante:  {
      __typename: "Estudiante",
      matricula: string,
      nombres: string,
      apellidos: string,
      usuario: string,
      email: string,
      cursos?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencia?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCursoEstudiantesQueryVariables = {
  filter?: ModelCursoEstudianteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCursoEstudiantesQuery = {
  listCursoEstudiantes?:  {
    __typename: "ModelCursoEstudianteConnection",
    items:  Array< {
      __typename: "CursoEstudiante",
      id: string,
      cursoId: string,
      estudianteId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      estudiante:  {
        __typename: "Estudiante",
        matricula: string,
        nombres: string,
        apellidos: string,
        usuario: string,
        email: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CursosByProfesorIdQueryVariables = {
  profesorId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCursoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CursosByProfesorIdQuery = {
  cursosByProfesorId?:  {
    __typename: "ModelCursoConnection",
    items:  Array< {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type HorariosByCursoIdQueryVariables = {
  cursoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelHorarioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type HorariosByCursoIdQuery = {
  horariosByCursoId?:  {
    __typename: "ModelHorarioConnection",
    items:  Array< {
      __typename: "Horario",
      id: string,
      cursoId: string,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AsistenciasByCursoIdQueryVariables = {
  cursoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAsistenciaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AsistenciasByCursoIdQuery = {
  asistenciasByCursoId?:  {
    __typename: "ModelAsistenciaConnection",
    items:  Array< {
      __typename: "Asistencia",
      cursoId: string,
      estudianteId: string,
      horarioId: string,
      estado: Asistio,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AsistenciasByEstudianteIdQueryVariables = {
  estudianteId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAsistenciaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AsistenciasByEstudianteIdQuery = {
  asistenciasByEstudianteId?:  {
    __typename: "ModelAsistenciaConnection",
    items:  Array< {
      __typename: "Asistencia",
      cursoId: string,
      estudianteId: string,
      horarioId: string,
      estado: Asistio,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type AsistenciasByHorarioIdQueryVariables = {
  horarioId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelAsistenciaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type AsistenciasByHorarioIdQuery = {
  asistenciasByHorarioId?:  {
    __typename: "ModelAsistenciaConnection",
    items:  Array< {
      __typename: "Asistencia",
      cursoId: string,
      estudianteId: string,
      horarioId: string,
      estado: Asistio,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CursoEstudiantesByCursoIdQueryVariables = {
  cursoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCursoEstudianteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CursoEstudiantesByCursoIdQuery = {
  cursoEstudiantesByCursoId?:  {
    __typename: "ModelCursoEstudianteConnection",
    items:  Array< {
      __typename: "CursoEstudiante",
      id: string,
      cursoId: string,
      estudianteId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      estudiante:  {
        __typename: "Estudiante",
        matricula: string,
        nombres: string,
        apellidos: string,
        usuario: string,
        email: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CursoEstudiantesByEstudianteIdQueryVariables = {
  estudianteId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCursoEstudianteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CursoEstudiantesByEstudianteIdQuery = {
  cursoEstudiantesByEstudianteId?:  {
    __typename: "ModelCursoEstudianteConnection",
    items:  Array< {
      __typename: "CursoEstudiante",
      id: string,
      cursoId: string,
      estudianteId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      estudiante:  {
        __typename: "Estudiante",
        matricula: string,
        nombres: string,
        apellidos: string,
        usuario: string,
        email: string,
        id: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfesorSubscriptionVariables = {
  filter?: ModelSubscriptionProfesorFilterInput | null,
};

export type OnCreateProfesorSubscription = {
  onCreateProfesor?:  {
    __typename: "Profesor",
    id: string,
    nombres: string,
    apellidos: string,
    email: string,
    password: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfesorSubscriptionVariables = {
  filter?: ModelSubscriptionProfesorFilterInput | null,
};

export type OnUpdateProfesorSubscription = {
  onUpdateProfesor?:  {
    __typename: "Profesor",
    id: string,
    nombres: string,
    apellidos: string,
    email: string,
    password: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfesorSubscriptionVariables = {
  filter?: ModelSubscriptionProfesorFilterInput | null,
};

export type OnDeleteProfesorSubscription = {
  onDeleteProfesor?:  {
    __typename: "Profesor",
    id: string,
    nombres: string,
    apellidos: string,
    email: string,
    password: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCursoSubscriptionVariables = {
  filter?: ModelSubscriptionCursoFilterInput | null,
};

export type OnCreateCursoSubscription = {
  onCreateCurso?:  {
    __typename: "Curso",
    id: string,
    profesorId?: string | null,
    dispositivoId?: string | null,
    paralelo: string,
    nombre: string,
    creacion?: string | null,
    dispositivo?:  {
      __typename: "Device",
      id: string,
      cursoId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        cursoId: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCursoSubscriptionVariables = {
  filter?: ModelSubscriptionCursoFilterInput | null,
};

export type OnUpdateCursoSubscription = {
  onUpdateCurso?:  {
    __typename: "Curso",
    id: string,
    profesorId?: string | null,
    dispositivoId?: string | null,
    paralelo: string,
    nombre: string,
    creacion?: string | null,
    dispositivo?:  {
      __typename: "Device",
      id: string,
      cursoId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        cursoId: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCursoSubscriptionVariables = {
  filter?: ModelSubscriptionCursoFilterInput | null,
};

export type OnDeleteCursoSubscription = {
  onDeleteCurso?:  {
    __typename: "Curso",
    id: string,
    profesorId?: string | null,
    dispositivoId?: string | null,
    paralelo: string,
    nombre: string,
    creacion?: string | null,
    dispositivo?:  {
      __typename: "Device",
      id: string,
      cursoId: string,
      curso:  {
        __typename: "Curso",
        id: string,
        profesorId?: string | null,
        dispositivoId?: string | null,
        paralelo: string,
        nombre: string,
        creacion?: string | null,
        createdAt: string,
        updatedAt: string,
      },
      topic: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        cursoId: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
};

export type OnCreateDeviceSubscription = {
  onCreateDevice?:  {
    __typename: "Device",
    id: string,
    cursoId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
};

export type OnUpdateDeviceSubscription = {
  onUpdateDevice?:  {
    __typename: "Device",
    id: string,
    cursoId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
};

export type OnDeleteDeviceSubscription = {
  onDeleteDevice?:  {
    __typename: "Device",
    id: string,
    cursoId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    topic: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateHorarioSubscriptionVariables = {
  filter?: ModelSubscriptionHorarioFilterInput | null,
};

export type OnCreateHorarioSubscription = {
  onCreateHorario?:  {
    __typename: "Horario",
    id: string,
    cursoId: string,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateHorarioSubscriptionVariables = {
  filter?: ModelSubscriptionHorarioFilterInput | null,
};

export type OnUpdateHorarioSubscription = {
  onUpdateHorario?:  {
    __typename: "Horario",
    id: string,
    cursoId: string,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteHorarioSubscriptionVariables = {
  filter?: ModelSubscriptionHorarioFilterInput | null,
};

export type OnDeleteHorarioSubscription = {
  onDeleteHorario?:  {
    __typename: "Horario",
    id: string,
    cursoId: string,
    asistencias?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEstudianteSubscriptionVariables = {
  filter?: ModelSubscriptionEstudianteFilterInput | null,
};

export type OnCreateEstudianteSubscription = {
  onCreateEstudiante?:  {
    __typename: "Estudiante",
    matricula: string,
    nombres: string,
    apellidos: string,
    usuario: string,
    email: string,
    cursos?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEstudianteSubscriptionVariables = {
  filter?: ModelSubscriptionEstudianteFilterInput | null,
};

export type OnUpdateEstudianteSubscription = {
  onUpdateEstudiante?:  {
    __typename: "Estudiante",
    matricula: string,
    nombres: string,
    apellidos: string,
    usuario: string,
    email: string,
    cursos?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEstudianteSubscriptionVariables = {
  filter?: ModelSubscriptionEstudianteFilterInput | null,
};

export type OnDeleteEstudianteSubscription = {
  onDeleteEstudiante?:  {
    __typename: "Estudiante",
    matricula: string,
    nombres: string,
    apellidos: string,
    usuario: string,
    email: string,
    cursos?:  {
      __typename: "ModelCursoEstudianteConnection",
      items:  Array< {
        __typename: "CursoEstudiante",
        id: string,
        cursoId: string,
        estudianteId: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        cursoId: string,
        estudianteId: string,
        horarioId: string,
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAsistenciaSubscriptionVariables = {
  filter?: ModelSubscriptionAsistenciaFilterInput | null,
};

export type OnCreateAsistenciaSubscription = {
  onCreateAsistencia?:  {
    __typename: "Asistencia",
    cursoId: string,
    estudianteId: string,
    horarioId: string,
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAsistenciaSubscriptionVariables = {
  filter?: ModelSubscriptionAsistenciaFilterInput | null,
};

export type OnUpdateAsistenciaSubscription = {
  onUpdateAsistencia?:  {
    __typename: "Asistencia",
    cursoId: string,
    estudianteId: string,
    horarioId: string,
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAsistenciaSubscriptionVariables = {
  filter?: ModelSubscriptionAsistenciaFilterInput | null,
};

export type OnDeleteAsistenciaSubscription = {
  onDeleteAsistencia?:  {
    __typename: "Asistencia",
    cursoId: string,
    estudianteId: string,
    horarioId: string,
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCursoEstudianteSubscriptionVariables = {
  filter?: ModelSubscriptionCursoEstudianteFilterInput | null,
};

export type OnCreateCursoEstudianteSubscription = {
  onCreateCursoEstudiante?:  {
    __typename: "CursoEstudiante",
    id: string,
    cursoId: string,
    estudianteId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    estudiante:  {
      __typename: "Estudiante",
      matricula: string,
      nombres: string,
      apellidos: string,
      usuario: string,
      email: string,
      cursos?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencia?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCursoEstudianteSubscriptionVariables = {
  filter?: ModelSubscriptionCursoEstudianteFilterInput | null,
};

export type OnUpdateCursoEstudianteSubscription = {
  onUpdateCursoEstudiante?:  {
    __typename: "CursoEstudiante",
    id: string,
    cursoId: string,
    estudianteId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    estudiante:  {
      __typename: "Estudiante",
      matricula: string,
      nombres: string,
      apellidos: string,
      usuario: string,
      email: string,
      cursos?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencia?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCursoEstudianteSubscriptionVariables = {
  filter?: ModelSubscriptionCursoEstudianteFilterInput | null,
};

export type OnDeleteCursoEstudianteSubscription = {
  onDeleteCursoEstudiante?:  {
    __typename: "CursoEstudiante",
    id: string,
    cursoId: string,
    estudianteId: string,
    curso:  {
      __typename: "Curso",
      id: string,
      profesorId?: string | null,
      dispositivoId?: string | null,
      paralelo: string,
      nombre: string,
      creacion?: string | null,
      dispositivo?:  {
        __typename: "Device",
        id: string,
        cursoId: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencias?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    estudiante:  {
      __typename: "Estudiante",
      matricula: string,
      nombres: string,
      apellidos: string,
      usuario: string,
      email: string,
      cursos?:  {
        __typename: "ModelCursoEstudianteConnection",
        nextToken?: string | null,
      } | null,
      asistencia?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
