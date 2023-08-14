/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  password: string,
  userProfesorId: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  userProfesorId?: ModelIDInput | null,
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

export type User = {
  __typename: "User",
  id: string,
  email: string,
  password: string,
  profesor: Profesor,
  createdAt: string,
  updatedAt: string,
  userProfesorId: string,
};

export type Profesor = {
  __typename: "Profesor",
  id: string,
  firstName: string,
  lastName: string,
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
  color: string,
  paralelo: string,
  nombreCurso: string,
  creacion: string,
  dispositivo: Device,
  horarios?: ModelHorarioConnection | null,
  estudiantes?: ModelEstudianteConnection | null,
  createdAt: string,
  updatedAt: string,
  profesorCursosId?: string | null,
  cursoDispositivoId: string,
};

export type Device = {
  __typename: "Device",
  id: string,
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
  dia: DiaSemana,
  horaDesde: string,
  horaHasta: string,
  createdAt: string,
  updatedAt: string,
  cursoHorariosId?: string | null,
};

export enum DiaSemana {
  LUNES = "LUNES",
  MARTES = "MARTES",
  MIERCOLES = "MIERCOLES",
  JUEVES = "JUEVES",
  VIERNES = "VIERNES",
  SABADO = "SABADO",
  DOMINGO = "DOMINGO",
}


export type ModelEstudianteConnection = {
  __typename: "ModelEstudianteConnection",
  items:  Array<Estudiante | null >,
  nextToken?: string | null,
};

export type Estudiante = {
  __typename: "Estudiante",
  id: string,
  firstName: string,
  lastName: string,
  espolUser: string,
  espolId: string,
  espolEmail: string,
  asistencia?: ModelAsistenciaConnection | null,
  createdAt: string,
  updatedAt: string,
  cursoEstudiantesId?: string | null,
};

export type ModelAsistenciaConnection = {
  __typename: "ModelAsistenciaConnection",
  items:  Array<Asistencia | null >,
  nextToken?: string | null,
};

export type Asistencia = {
  __typename: "Asistencia",
  curso: Curso,
  horario: Horario,
  estado: Asistio,
  id: string,
  createdAt: string,
  updatedAt: string,
  estudianteAsistenciaId?: string | null,
  asistenciaCursoId: string,
  asistenciaHorarioId: string,
};

export enum Asistio {
  SI = "SI",
  NO = "NO",
  AUN_NO = "AUN_NO",
}


export type UpdateUserInput = {
  id: string,
  email?: string | null,
  password?: string | null,
  userProfesorId?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateProfesorInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
};

export type ModelProfesorConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  and?: Array< ModelProfesorConditionInput | null > | null,
  or?: Array< ModelProfesorConditionInput | null > | null,
  not?: ModelProfesorConditionInput | null,
};

export type UpdateProfesorInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
};

export type DeleteProfesorInput = {
  id: string,
};

export type CreateCursoInput = {
  id?: string | null,
  color: string,
  paralelo: string,
  nombreCurso: string,
  creacion: string,
  profesorCursosId?: string | null,
  cursoDispositivoId: string,
};

export type ModelCursoConditionInput = {
  color?: ModelStringInput | null,
  paralelo?: ModelStringInput | null,
  nombreCurso?: ModelStringInput | null,
  creacion?: ModelStringInput | null,
  and?: Array< ModelCursoConditionInput | null > | null,
  or?: Array< ModelCursoConditionInput | null > | null,
  not?: ModelCursoConditionInput | null,
  profesorCursosId?: ModelIDInput | null,
  cursoDispositivoId?: ModelIDInput | null,
};

export type UpdateCursoInput = {
  id: string,
  color?: string | null,
  paralelo?: string | null,
  nombreCurso?: string | null,
  creacion?: string | null,
  profesorCursosId?: string | null,
  cursoDispositivoId?: string | null,
};

export type DeleteCursoInput = {
  id: string,
};

export type CreateDeviceInput = {
  id?: string | null,
  topic: string,
};

export type ModelDeviceConditionInput = {
  topic?: ModelStringInput | null,
  and?: Array< ModelDeviceConditionInput | null > | null,
  or?: Array< ModelDeviceConditionInput | null > | null,
  not?: ModelDeviceConditionInput | null,
};

export type UpdateDeviceInput = {
  id: string,
  topic?: string | null,
};

export type DeleteDeviceInput = {
  id: string,
};

export type CreateHorarioInput = {
  id?: string | null,
  dia: DiaSemana,
  horaDesde: string,
  horaHasta: string,
  cursoHorariosId?: string | null,
};

export type ModelHorarioConditionInput = {
  dia?: ModelDiaSemanaInput | null,
  horaDesde?: ModelStringInput | null,
  horaHasta?: ModelStringInput | null,
  and?: Array< ModelHorarioConditionInput | null > | null,
  or?: Array< ModelHorarioConditionInput | null > | null,
  not?: ModelHorarioConditionInput | null,
  cursoHorariosId?: ModelIDInput | null,
};

export type ModelDiaSemanaInput = {
  eq?: DiaSemana | null,
  ne?: DiaSemana | null,
};

export type UpdateHorarioInput = {
  id: string,
  dia?: DiaSemana | null,
  horaDesde?: string | null,
  horaHasta?: string | null,
  cursoHorariosId?: string | null,
};

export type DeleteHorarioInput = {
  id: string,
};

export type CreateEstudianteInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  espolUser: string,
  espolId: string,
  espolEmail: string,
  cursoEstudiantesId?: string | null,
};

export type ModelEstudianteConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  espolUser?: ModelStringInput | null,
  espolId?: ModelStringInput | null,
  espolEmail?: ModelStringInput | null,
  and?: Array< ModelEstudianteConditionInput | null > | null,
  or?: Array< ModelEstudianteConditionInput | null > | null,
  not?: ModelEstudianteConditionInput | null,
  cursoEstudiantesId?: ModelIDInput | null,
};

export type UpdateEstudianteInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  espolUser?: string | null,
  espolId?: string | null,
  espolEmail?: string | null,
  cursoEstudiantesId?: string | null,
};

export type DeleteEstudianteInput = {
  id: string,
};

export type CreateAsistenciaInput = {
  estado: Asistio,
  id?: string | null,
  estudianteAsistenciaId?: string | null,
  asistenciaCursoId: string,
  asistenciaHorarioId: string,
};

export type ModelAsistenciaConditionInput = {
  estado?: ModelAsistioInput | null,
  and?: Array< ModelAsistenciaConditionInput | null > | null,
  or?: Array< ModelAsistenciaConditionInput | null > | null,
  not?: ModelAsistenciaConditionInput | null,
  estudianteAsistenciaId?: ModelIDInput | null,
  asistenciaCursoId?: ModelIDInput | null,
  asistenciaHorarioId?: ModelIDInput | null,
};

export type ModelAsistioInput = {
  eq?: Asistio | null,
  ne?: Asistio | null,
};

export type UpdateAsistenciaInput = {
  estado?: Asistio | null,
  id: string,
  estudianteAsistenciaId?: string | null,
  asistenciaCursoId?: string | null,
  asistenciaHorarioId?: string | null,
};

export type DeleteAsistenciaInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  password?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  userProfesorId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelProfesorFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
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
  color?: ModelStringInput | null,
  paralelo?: ModelStringInput | null,
  nombreCurso?: ModelStringInput | null,
  creacion?: ModelStringInput | null,
  and?: Array< ModelCursoFilterInput | null > | null,
  or?: Array< ModelCursoFilterInput | null > | null,
  not?: ModelCursoFilterInput | null,
  profesorCursosId?: ModelIDInput | null,
  cursoDispositivoId?: ModelIDInput | null,
};

export type ModelDeviceFilterInput = {
  id?: ModelIDInput | null,
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
  dia?: ModelDiaSemanaInput | null,
  horaDesde?: ModelStringInput | null,
  horaHasta?: ModelStringInput | null,
  and?: Array< ModelHorarioFilterInput | null > | null,
  or?: Array< ModelHorarioFilterInput | null > | null,
  not?: ModelHorarioFilterInput | null,
  cursoHorariosId?: ModelIDInput | null,
};

export type ModelEstudianteFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  espolUser?: ModelStringInput | null,
  espolId?: ModelStringInput | null,
  espolEmail?: ModelStringInput | null,
  and?: Array< ModelEstudianteFilterInput | null > | null,
  or?: Array< ModelEstudianteFilterInput | null > | null,
  not?: ModelEstudianteFilterInput | null,
  cursoEstudiantesId?: ModelIDInput | null,
};

export type ModelAsistenciaFilterInput = {
  estado?: ModelAsistioInput | null,
  and?: Array< ModelAsistenciaFilterInput | null > | null,
  or?: Array< ModelAsistenciaFilterInput | null > | null,
  not?: ModelAsistenciaFilterInput | null,
  estudianteAsistenciaId?: ModelIDInput | null,
  asistenciaCursoId?: ModelIDInput | null,
  asistenciaHorarioId?: ModelIDInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
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

export type ModelSubscriptionProfesorFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfesorFilterInput | null > | null,
  or?: Array< ModelSubscriptionProfesorFilterInput | null > | null,
};

export type ModelSubscriptionCursoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  color?: ModelSubscriptionStringInput | null,
  paralelo?: ModelSubscriptionStringInput | null,
  nombreCurso?: ModelSubscriptionStringInput | null,
  creacion?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCursoFilterInput | null > | null,
  or?: Array< ModelSubscriptionCursoFilterInput | null > | null,
};

export type ModelSubscriptionDeviceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  topic?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDeviceFilterInput | null > | null,
  or?: Array< ModelSubscriptionDeviceFilterInput | null > | null,
};

export type ModelSubscriptionHorarioFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  dia?: ModelSubscriptionStringInput | null,
  horaDesde?: ModelSubscriptionStringInput | null,
  horaHasta?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHorarioFilterInput | null > | null,
  or?: Array< ModelSubscriptionHorarioFilterInput | null > | null,
};

export type ModelSubscriptionEstudianteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  espolUser?: ModelSubscriptionStringInput | null,
  espolId?: ModelSubscriptionStringInput | null,
  espolEmail?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEstudianteFilterInput | null > | null,
  or?: Array< ModelSubscriptionEstudianteFilterInput | null > | null,
};

export type ModelSubscriptionAsistenciaFilterInput = {
  estado?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAsistenciaFilterInput | null > | null,
  or?: Array< ModelSubscriptionAsistenciaFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    password: string,
    profesor:  {
      __typename: "Profesor",
      id: string,
      firstName: string,
      lastName: string,
      cursos?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userProfesorId: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    password: string,
    profesor:  {
      __typename: "Profesor",
      id: string,
      firstName: string,
      lastName: string,
      cursos?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userProfesorId: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    password: string,
    profesor:  {
      __typename: "Profesor",
      id: string,
      firstName: string,
      lastName: string,
      cursos?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userProfesorId: string,
  } | null,
};

export type CreateProfesorMutationVariables = {
  input: CreateProfesorInput,
  condition?: ModelProfesorConditionInput | null,
};

export type CreateProfesorMutation = {
  createProfesor?:  {
    __typename: "Profesor",
    id: string,
    firstName: string,
    lastName: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        color: string,
        paralelo: string,
        nombreCurso: string,
        creacion: string,
        createdAt: string,
        updatedAt: string,
        profesorCursosId?: string | null,
        cursoDispositivoId: string,
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
    firstName: string,
    lastName: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        color: string,
        paralelo: string,
        nombreCurso: string,
        creacion: string,
        createdAt: string,
        updatedAt: string,
        profesorCursosId?: string | null,
        cursoDispositivoId: string,
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
    firstName: string,
    lastName: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        color: string,
        paralelo: string,
        nombreCurso: string,
        creacion: string,
        createdAt: string,
        updatedAt: string,
        profesorCursosId?: string | null,
        cursoDispositivoId: string,
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
    color: string,
    paralelo: string,
    nombreCurso: string,
    creacion: string,
    dispositivo:  {
      __typename: "Device",
      id: string,
      topic: string,
      createdAt: string,
      updatedAt: string,
    },
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
        cursoHorariosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelEstudianteConnection",
      items:  Array< {
        __typename: "Estudiante",
        id: string,
        firstName: string,
        lastName: string,
        espolUser: string,
        espolId: string,
        espolEmail: string,
        createdAt: string,
        updatedAt: string,
        cursoEstudiantesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profesorCursosId?: string | null,
    cursoDispositivoId: string,
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
    color: string,
    paralelo: string,
    nombreCurso: string,
    creacion: string,
    dispositivo:  {
      __typename: "Device",
      id: string,
      topic: string,
      createdAt: string,
      updatedAt: string,
    },
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
        cursoHorariosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelEstudianteConnection",
      items:  Array< {
        __typename: "Estudiante",
        id: string,
        firstName: string,
        lastName: string,
        espolUser: string,
        espolId: string,
        espolEmail: string,
        createdAt: string,
        updatedAt: string,
        cursoEstudiantesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profesorCursosId?: string | null,
    cursoDispositivoId: string,
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
    color: string,
    paralelo: string,
    nombreCurso: string,
    creacion: string,
    dispositivo:  {
      __typename: "Device",
      id: string,
      topic: string,
      createdAt: string,
      updatedAt: string,
    },
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
        cursoHorariosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelEstudianteConnection",
      items:  Array< {
        __typename: "Estudiante",
        id: string,
        firstName: string,
        lastName: string,
        espolUser: string,
        espolId: string,
        espolEmail: string,
        createdAt: string,
        updatedAt: string,
        cursoEstudiantesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profesorCursosId?: string | null,
    cursoDispositivoId: string,
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
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
    cursoHorariosId?: string | null,
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
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
    cursoHorariosId?: string | null,
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
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
    cursoHorariosId?: string | null,
  } | null,
};

export type CreateEstudianteMutationVariables = {
  input: CreateEstudianteInput,
  condition?: ModelEstudianteConditionInput | null,
};

export type CreateEstudianteMutation = {
  createEstudiante?:  {
    __typename: "Estudiante",
    id: string,
    firstName: string,
    lastName: string,
    espolUser: string,
    espolId: string,
    espolEmail: string,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
        estudianteAsistenciaId?: string | null,
        asistenciaCursoId: string,
        asistenciaHorarioId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cursoEstudiantesId?: string | null,
  } | null,
};

export type UpdateEstudianteMutationVariables = {
  input: UpdateEstudianteInput,
  condition?: ModelEstudianteConditionInput | null,
};

export type UpdateEstudianteMutation = {
  updateEstudiante?:  {
    __typename: "Estudiante",
    id: string,
    firstName: string,
    lastName: string,
    espolUser: string,
    espolId: string,
    espolEmail: string,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
        estudianteAsistenciaId?: string | null,
        asistenciaCursoId: string,
        asistenciaHorarioId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cursoEstudiantesId?: string | null,
  } | null,
};

export type DeleteEstudianteMutationVariables = {
  input: DeleteEstudianteInput,
  condition?: ModelEstudianteConditionInput | null,
};

export type DeleteEstudianteMutation = {
  deleteEstudiante?:  {
    __typename: "Estudiante",
    id: string,
    firstName: string,
    lastName: string,
    espolUser: string,
    espolId: string,
    espolEmail: string,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
        estudianteAsistenciaId?: string | null,
        asistenciaCursoId: string,
        asistenciaHorarioId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cursoEstudiantesId?: string | null,
  } | null,
};

export type CreateAsistenciaMutationVariables = {
  input: CreateAsistenciaInput,
  condition?: ModelAsistenciaConditionInput | null,
};

export type CreateAsistenciaMutation = {
  createAsistencia?:  {
    __typename: "Asistencia",
    curso:  {
      __typename: "Curso",
      id: string,
      color: string,
      paralelo: string,
      nombreCurso: string,
      creacion: string,
      dispositivo:  {
        __typename: "Device",
        id: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      },
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelEstudianteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profesorCursosId?: string | null,
      cursoDispositivoId: string,
    },
    horario:  {
      __typename: "Horario",
      id: string,
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
      cursoHorariosId?: string | null,
    },
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
    estudianteAsistenciaId?: string | null,
    asistenciaCursoId: string,
    asistenciaHorarioId: string,
  } | null,
};

export type UpdateAsistenciaMutationVariables = {
  input: UpdateAsistenciaInput,
  condition?: ModelAsistenciaConditionInput | null,
};

export type UpdateAsistenciaMutation = {
  updateAsistencia?:  {
    __typename: "Asistencia",
    curso:  {
      __typename: "Curso",
      id: string,
      color: string,
      paralelo: string,
      nombreCurso: string,
      creacion: string,
      dispositivo:  {
        __typename: "Device",
        id: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      },
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelEstudianteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profesorCursosId?: string | null,
      cursoDispositivoId: string,
    },
    horario:  {
      __typename: "Horario",
      id: string,
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
      cursoHorariosId?: string | null,
    },
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
    estudianteAsistenciaId?: string | null,
    asistenciaCursoId: string,
    asistenciaHorarioId: string,
  } | null,
};

export type DeleteAsistenciaMutationVariables = {
  input: DeleteAsistenciaInput,
  condition?: ModelAsistenciaConditionInput | null,
};

export type DeleteAsistenciaMutation = {
  deleteAsistencia?:  {
    __typename: "Asistencia",
    curso:  {
      __typename: "Curso",
      id: string,
      color: string,
      paralelo: string,
      nombreCurso: string,
      creacion: string,
      dispositivo:  {
        __typename: "Device",
        id: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      },
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelEstudianteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profesorCursosId?: string | null,
      cursoDispositivoId: string,
    },
    horario:  {
      __typename: "Horario",
      id: string,
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
      cursoHorariosId?: string | null,
    },
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
    estudianteAsistenciaId?: string | null,
    asistenciaCursoId: string,
    asistenciaHorarioId: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    password: string,
    profesor:  {
      __typename: "Profesor",
      id: string,
      firstName: string,
      lastName: string,
      cursos?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userProfesorId: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      password: string,
      profesor:  {
        __typename: "Profesor",
        id: string,
        firstName: string,
        lastName: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
      userProfesorId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProfesorQueryVariables = {
  id: string,
};

export type GetProfesorQuery = {
  getProfesor?:  {
    __typename: "Profesor",
    id: string,
    firstName: string,
    lastName: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        color: string,
        paralelo: string,
        nombreCurso: string,
        creacion: string,
        createdAt: string,
        updatedAt: string,
        profesorCursosId?: string | null,
        cursoDispositivoId: string,
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
      firstName: string,
      lastName: string,
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
    color: string,
    paralelo: string,
    nombreCurso: string,
    creacion: string,
    dispositivo:  {
      __typename: "Device",
      id: string,
      topic: string,
      createdAt: string,
      updatedAt: string,
    },
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
        cursoHorariosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelEstudianteConnection",
      items:  Array< {
        __typename: "Estudiante",
        id: string,
        firstName: string,
        lastName: string,
        espolUser: string,
        espolId: string,
        espolEmail: string,
        createdAt: string,
        updatedAt: string,
        cursoEstudiantesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profesorCursosId?: string | null,
    cursoDispositivoId: string,
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
      color: string,
      paralelo: string,
      nombreCurso: string,
      creacion: string,
      dispositivo:  {
        __typename: "Device",
        id: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      },
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelEstudianteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profesorCursosId?: string | null,
      cursoDispositivoId: string,
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
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
    cursoHorariosId?: string | null,
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
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
      cursoHorariosId?: string | null,
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
    id: string,
    firstName: string,
    lastName: string,
    espolUser: string,
    espolId: string,
    espolEmail: string,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
        estudianteAsistenciaId?: string | null,
        asistenciaCursoId: string,
        asistenciaHorarioId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cursoEstudiantesId?: string | null,
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
      id: string,
      firstName: string,
      lastName: string,
      espolUser: string,
      espolId: string,
      espolEmail: string,
      asistencia?:  {
        __typename: "ModelAsistenciaConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      cursoEstudiantesId?: string | null,
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
    curso:  {
      __typename: "Curso",
      id: string,
      color: string,
      paralelo: string,
      nombreCurso: string,
      creacion: string,
      dispositivo:  {
        __typename: "Device",
        id: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      },
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelEstudianteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profesorCursosId?: string | null,
      cursoDispositivoId: string,
    },
    horario:  {
      __typename: "Horario",
      id: string,
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
      cursoHorariosId?: string | null,
    },
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
    estudianteAsistenciaId?: string | null,
    asistenciaCursoId: string,
    asistenciaHorarioId: string,
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
      curso:  {
        __typename: "Curso",
        id: string,
        color: string,
        paralelo: string,
        nombreCurso: string,
        creacion: string,
        createdAt: string,
        updatedAt: string,
        profesorCursosId?: string | null,
        cursoDispositivoId: string,
      },
      horario:  {
        __typename: "Horario",
        id: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
        cursoHorariosId?: string | null,
      },
      estado: Asistio,
      id: string,
      createdAt: string,
      updatedAt: string,
      estudianteAsistenciaId?: string | null,
      asistenciaCursoId: string,
      asistenciaHorarioId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    password: string,
    profesor:  {
      __typename: "Profesor",
      id: string,
      firstName: string,
      lastName: string,
      cursos?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userProfesorId: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    password: string,
    profesor:  {
      __typename: "Profesor",
      id: string,
      firstName: string,
      lastName: string,
      cursos?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userProfesorId: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    password: string,
    profesor:  {
      __typename: "Profesor",
      id: string,
      firstName: string,
      lastName: string,
      cursos?:  {
        __typename: "ModelCursoConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
    userProfesorId: string,
  } | null,
};

export type OnCreateProfesorSubscriptionVariables = {
  filter?: ModelSubscriptionProfesorFilterInput | null,
};

export type OnCreateProfesorSubscription = {
  onCreateProfesor?:  {
    __typename: "Profesor",
    id: string,
    firstName: string,
    lastName: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        color: string,
        paralelo: string,
        nombreCurso: string,
        creacion: string,
        createdAt: string,
        updatedAt: string,
        profesorCursosId?: string | null,
        cursoDispositivoId: string,
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
    firstName: string,
    lastName: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        color: string,
        paralelo: string,
        nombreCurso: string,
        creacion: string,
        createdAt: string,
        updatedAt: string,
        profesorCursosId?: string | null,
        cursoDispositivoId: string,
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
    firstName: string,
    lastName: string,
    cursos?:  {
      __typename: "ModelCursoConnection",
      items:  Array< {
        __typename: "Curso",
        id: string,
        color: string,
        paralelo: string,
        nombreCurso: string,
        creacion: string,
        createdAt: string,
        updatedAt: string,
        profesorCursosId?: string | null,
        cursoDispositivoId: string,
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
    color: string,
    paralelo: string,
    nombreCurso: string,
    creacion: string,
    dispositivo:  {
      __typename: "Device",
      id: string,
      topic: string,
      createdAt: string,
      updatedAt: string,
    },
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
        cursoHorariosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelEstudianteConnection",
      items:  Array< {
        __typename: "Estudiante",
        id: string,
        firstName: string,
        lastName: string,
        espolUser: string,
        espolId: string,
        espolEmail: string,
        createdAt: string,
        updatedAt: string,
        cursoEstudiantesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profesorCursosId?: string | null,
    cursoDispositivoId: string,
  } | null,
};

export type OnUpdateCursoSubscriptionVariables = {
  filter?: ModelSubscriptionCursoFilterInput | null,
};

export type OnUpdateCursoSubscription = {
  onUpdateCurso?:  {
    __typename: "Curso",
    id: string,
    color: string,
    paralelo: string,
    nombreCurso: string,
    creacion: string,
    dispositivo:  {
      __typename: "Device",
      id: string,
      topic: string,
      createdAt: string,
      updatedAt: string,
    },
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
        cursoHorariosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelEstudianteConnection",
      items:  Array< {
        __typename: "Estudiante",
        id: string,
        firstName: string,
        lastName: string,
        espolUser: string,
        espolId: string,
        espolEmail: string,
        createdAt: string,
        updatedAt: string,
        cursoEstudiantesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profesorCursosId?: string | null,
    cursoDispositivoId: string,
  } | null,
};

export type OnDeleteCursoSubscriptionVariables = {
  filter?: ModelSubscriptionCursoFilterInput | null,
};

export type OnDeleteCursoSubscription = {
  onDeleteCurso?:  {
    __typename: "Curso",
    id: string,
    color: string,
    paralelo: string,
    nombreCurso: string,
    creacion: string,
    dispositivo:  {
      __typename: "Device",
      id: string,
      topic: string,
      createdAt: string,
      updatedAt: string,
    },
    horarios?:  {
      __typename: "ModelHorarioConnection",
      items:  Array< {
        __typename: "Horario",
        id: string,
        dia: DiaSemana,
        horaDesde: string,
        horaHasta: string,
        createdAt: string,
        updatedAt: string,
        cursoHorariosId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    estudiantes?:  {
      __typename: "ModelEstudianteConnection",
      items:  Array< {
        __typename: "Estudiante",
        id: string,
        firstName: string,
        lastName: string,
        espolUser: string,
        espolId: string,
        espolEmail: string,
        createdAt: string,
        updatedAt: string,
        cursoEstudiantesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    profesorCursosId?: string | null,
    cursoDispositivoId: string,
  } | null,
};

export type OnCreateDeviceSubscriptionVariables = {
  filter?: ModelSubscriptionDeviceFilterInput | null,
};

export type OnCreateDeviceSubscription = {
  onCreateDevice?:  {
    __typename: "Device",
    id: string,
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
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
    cursoHorariosId?: string | null,
  } | null,
};

export type OnUpdateHorarioSubscriptionVariables = {
  filter?: ModelSubscriptionHorarioFilterInput | null,
};

export type OnUpdateHorarioSubscription = {
  onUpdateHorario?:  {
    __typename: "Horario",
    id: string,
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
    cursoHorariosId?: string | null,
  } | null,
};

export type OnDeleteHorarioSubscriptionVariables = {
  filter?: ModelSubscriptionHorarioFilterInput | null,
};

export type OnDeleteHorarioSubscription = {
  onDeleteHorario?:  {
    __typename: "Horario",
    id: string,
    dia: DiaSemana,
    horaDesde: string,
    horaHasta: string,
    createdAt: string,
    updatedAt: string,
    cursoHorariosId?: string | null,
  } | null,
};

export type OnCreateEstudianteSubscriptionVariables = {
  filter?: ModelSubscriptionEstudianteFilterInput | null,
};

export type OnCreateEstudianteSubscription = {
  onCreateEstudiante?:  {
    __typename: "Estudiante",
    id: string,
    firstName: string,
    lastName: string,
    espolUser: string,
    espolId: string,
    espolEmail: string,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
        estudianteAsistenciaId?: string | null,
        asistenciaCursoId: string,
        asistenciaHorarioId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cursoEstudiantesId?: string | null,
  } | null,
};

export type OnUpdateEstudianteSubscriptionVariables = {
  filter?: ModelSubscriptionEstudianteFilterInput | null,
};

export type OnUpdateEstudianteSubscription = {
  onUpdateEstudiante?:  {
    __typename: "Estudiante",
    id: string,
    firstName: string,
    lastName: string,
    espolUser: string,
    espolId: string,
    espolEmail: string,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
        estudianteAsistenciaId?: string | null,
        asistenciaCursoId: string,
        asistenciaHorarioId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cursoEstudiantesId?: string | null,
  } | null,
};

export type OnDeleteEstudianteSubscriptionVariables = {
  filter?: ModelSubscriptionEstudianteFilterInput | null,
};

export type OnDeleteEstudianteSubscription = {
  onDeleteEstudiante?:  {
    __typename: "Estudiante",
    id: string,
    firstName: string,
    lastName: string,
    espolUser: string,
    espolId: string,
    espolEmail: string,
    asistencia?:  {
      __typename: "ModelAsistenciaConnection",
      items:  Array< {
        __typename: "Asistencia",
        estado: Asistio,
        id: string,
        createdAt: string,
        updatedAt: string,
        estudianteAsistenciaId?: string | null,
        asistenciaCursoId: string,
        asistenciaHorarioId: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cursoEstudiantesId?: string | null,
  } | null,
};

export type OnCreateAsistenciaSubscriptionVariables = {
  filter?: ModelSubscriptionAsistenciaFilterInput | null,
};

export type OnCreateAsistenciaSubscription = {
  onCreateAsistencia?:  {
    __typename: "Asistencia",
    curso:  {
      __typename: "Curso",
      id: string,
      color: string,
      paralelo: string,
      nombreCurso: string,
      creacion: string,
      dispositivo:  {
        __typename: "Device",
        id: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      },
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelEstudianteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profesorCursosId?: string | null,
      cursoDispositivoId: string,
    },
    horario:  {
      __typename: "Horario",
      id: string,
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
      cursoHorariosId?: string | null,
    },
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
    estudianteAsistenciaId?: string | null,
    asistenciaCursoId: string,
    asistenciaHorarioId: string,
  } | null,
};

export type OnUpdateAsistenciaSubscriptionVariables = {
  filter?: ModelSubscriptionAsistenciaFilterInput | null,
};

export type OnUpdateAsistenciaSubscription = {
  onUpdateAsistencia?:  {
    __typename: "Asistencia",
    curso:  {
      __typename: "Curso",
      id: string,
      color: string,
      paralelo: string,
      nombreCurso: string,
      creacion: string,
      dispositivo:  {
        __typename: "Device",
        id: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      },
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelEstudianteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profesorCursosId?: string | null,
      cursoDispositivoId: string,
    },
    horario:  {
      __typename: "Horario",
      id: string,
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
      cursoHorariosId?: string | null,
    },
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
    estudianteAsistenciaId?: string | null,
    asistenciaCursoId: string,
    asistenciaHorarioId: string,
  } | null,
};

export type OnDeleteAsistenciaSubscriptionVariables = {
  filter?: ModelSubscriptionAsistenciaFilterInput | null,
};

export type OnDeleteAsistenciaSubscription = {
  onDeleteAsistencia?:  {
    __typename: "Asistencia",
    curso:  {
      __typename: "Curso",
      id: string,
      color: string,
      paralelo: string,
      nombreCurso: string,
      creacion: string,
      dispositivo:  {
        __typename: "Device",
        id: string,
        topic: string,
        createdAt: string,
        updatedAt: string,
      },
      horarios?:  {
        __typename: "ModelHorarioConnection",
        nextToken?: string | null,
      } | null,
      estudiantes?:  {
        __typename: "ModelEstudianteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      profesorCursosId?: string | null,
      cursoDispositivoId: string,
    },
    horario:  {
      __typename: "Horario",
      id: string,
      dia: DiaSemana,
      horaDesde: string,
      horaHasta: string,
      createdAt: string,
      updatedAt: string,
      cursoHorariosId?: string | null,
    },
    estado: Asistio,
    id: string,
    createdAt: string,
    updatedAt: string,
    estudianteAsistenciaId?: string | null,
    asistenciaCursoId: string,
    asistenciaHorarioId: string,
  } | null,
};
