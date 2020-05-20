import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import { UserUsecase } from "./user/usecase/index.ts";
import { UserRepository } from "./user/repository/index.ts";
import { UserHandler } from "./handler/user.ts";

const userRepository = new UserRepository()
const userUsecase = new UserUsecase(userRepository)

const app = new Application()
const router = new Router()

//register handler
new UserHandler(router, userUsecase)

router.get("/", (ctx) => {
    ctx.response.body = "hello world"
})
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8081 })