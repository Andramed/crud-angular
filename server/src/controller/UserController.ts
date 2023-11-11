import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"

export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const user = await this.userRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, email } = request.body;

        const user = Object.assign(new User(), {
            firstName,
            lastName,
            email
        })

        return this.userRepository.save(user)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id);

        const user = await this.userRepository.findOne({
            where: { id }
        });

        const updatePropreties = {};

        Object.keys(request.body).forEach( (item, index) => {
            updatePropreties[item]= Object.values(request.body)[index];
        })
        
        const newUserData : User = {
            ...user,
            firstName:   updatePropreties.firstName || user.firstName ,
            lastName: updatePropreties.lastName || user.lastName,
            email: updatePropreties.email || user.email
        }
        
        console.log(updatePropreties)     

        return this.userRepository.update(id, newUserData);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}