export interface Response {
   message: string,
   user?: User

}

export interface User {
   id: number
   name: string
   score: number
}
export interface State {
   user: User | unknown
}

export interface UserReg {
   name: string
   email: string
   password: string
   passwordRepit: string
}
