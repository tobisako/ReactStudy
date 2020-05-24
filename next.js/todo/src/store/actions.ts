type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
  ? ReturnType<T[K]>
  : never
}
type CreatorsToActions<T> = Unbox<ReturnTypes<T>>

export type Actions = CreatorsToActions<typeof import('./todos/actions')>
                    | CreatorsToActions<typeof import('./auth/actions')> // 追加

/** Actionsの推論結果
type Actions = {
  type: 'ADD_TODO'
  payload: {
    id: string,
    done: boolean,
    task: string,
  }
} | {
  type: 'DONE_TODO'
  payload: {
    id: string
  }
} | {
  type: 'FETCH_LOGIN'
} | {
  type: 'FETCH_LOGIN_SUCCESS'
  payload: {
    user: User
  }
} | {
  type: 'FETCH_LOGIN_FAILURE'
}
*/
