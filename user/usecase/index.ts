import { IUserRepository } from "../repository/index.ts"
import { parseTUserRepoToTUserUcase, parseTUsersRepoToTUsersUcase } from "./parser.ts"
import { TUserUsecase } from "./entity.ts"

interface IUserUsecase {
    userRepository: IUserRepository
    getByEmail(email: string): TUserUsecase
    fetch(): Array<TUserUsecase>
}

class UserUsecase implements IUserUsecase{
    userRepository: IUserRepository

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository
    }

    getByEmail(email: string): TUserUsecase{
        const user = this.userRepository.getByEmail(email)
        return parseTUserRepoToTUserUcase(user)
    }

    fetch(): Array<TUserUsecase>{
        const users = this.userRepository.fetch()
        return parseTUsersRepoToTUsersUcase(users)
    }
}

export { IUserUsecase, UserUsecase }