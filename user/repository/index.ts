import { TUserRepository } from "./entity.ts";

interface IUserRepository {
    fetch(): Array<TUserRepository>
    getByEmail(email: string): TUserRepository
}

class UserRepository implements IUserRepository{
    fetch(): Array<TUserRepository> {

        const users = [
            {
                firstname: "hafiz",
                lastname: "joundy syafie", 
                age: 20,
                email: "dummy@gmail.com",
                password: "very strong password"
            },
            {
                firstname: "hafiz",
                lastname: "joundy syafie", 
                age: 20,
                email: "dummy@gmail.com",
                password: "very strong password"
            }
        ]
        
        return users
    }

    getByEmail(email: string): TUserRepository{

        const user: TUserRepository = { //dummy data user
            firstname: "hafiz",
            lastname: "joundy syafie", 
            age: 20,
            email: email,
            password: "very strong password"
        }

        return user
    }
}

export { IUserRepository, UserRepository }