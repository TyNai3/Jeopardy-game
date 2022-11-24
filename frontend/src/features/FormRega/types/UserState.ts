export interface Response {
   status: string,
   message: string,
   user: User
   
}

export interface User {
   id: number
   name: string
}