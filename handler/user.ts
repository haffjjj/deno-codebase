import { Router, RouterContext } from "https://deno.land/x/oak/mod.ts";
import { IUserUsecase } from "../user/usecase/index.ts"

interface UserHandler {
    userUsecase: IUserUsecase
    getByEmail(ctx: RouterContext): void
    fetch(ctx: RouterContext): void
}

class UserHandler implements UserHandler {
    userUsecase: IUserUsecase

    constructor(router: Router, userUsecase: IUserUsecase ){
        this.userUsecase = userUsecase

        router.get("/user/email/:email", this.getByEmail.bind(this))
        router.get("/users", this.fetch.bind(this))
    }
    
    getByEmail(ctx: RouterContext){
        let email: string = ""
        if(ctx.params && ctx.params.email){
            email = ctx.params.email
        }
       
        const user = this.userUsecase.getByEmail(email)
        ctx.response.body = JSON.stringify(user)
    }

    fetch(ctx: RouterContext){
        const users = this.userUsecase.fetch()
        ctx.response.body = JSON.stringify(users)
    }
}

export { UserHandler }