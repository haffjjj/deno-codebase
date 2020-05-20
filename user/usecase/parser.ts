import { TUserUsecase } from "./entity.ts";
import { TUserRepository } from "../repository/entity.ts";

const parseTUserRepoToTUserUcase = (userRepo: TUserRepository): TUserUsecase => {
    const user: TUserUsecase = {
        firstname: userRepo.firstname,
        lastname: userRepo.lastname,
        age: userRepo.age,
        email: userRepo.email
    }

    return user
}

const parseTUsersRepoToTUsersUcase = (usersRepo: Array<TUserRepository>): Array<TUserUsecase> => {
    let users: Array<TUserUsecase> = []

    usersRepo.forEach((value) => {
        users.push(parseTUserRepoToTUserUcase(value))
    })

    return users
}

export { parseTUserRepoToTUserUcase, parseTUsersRepoToTUsersUcase }