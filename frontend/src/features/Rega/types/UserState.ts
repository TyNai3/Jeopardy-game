export interface Response {
   message?: string,
   user?: User,
   status?: boolean

}

export interface User {
   id: number
   name: string

}
export interface State {
   user: {},
   score: number
}

export interface UserReg {
   name: string
   email: string
   password: string
   passwordRepit: string
}
