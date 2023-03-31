import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(10)

export function generateHash(data: any ) : any{
    const saveData = bcrypt.hashSync(data, salt)
    return saveData
}