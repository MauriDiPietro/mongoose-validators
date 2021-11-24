import {UserModel} from '../models/users.models.js';

export async function createUser(data){
    try{
        const response = UserModel.create(data)
        return response
    }catch(error){
        throw new Error(error)
    }
};