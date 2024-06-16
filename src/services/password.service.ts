import bcryp from 'bcrypt';

const SALT_ROUND: number = 10

export const hashPassword = async (password: string): Promise<string> => {
    return await bcryp.hash(password, SALT_ROUND)
} 

//Leer y comparar con el hash de la base de datos
export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
    return await bcryp.compare(password, hash)
}