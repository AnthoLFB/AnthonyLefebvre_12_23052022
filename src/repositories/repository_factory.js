import inMemoryUserRepository from "./inMemory/user_repository";

/**
 * Function to centralize class imports.  It allows to easily change the data call. (Mocked or API)
 * @returns {new inMemoryUserRepository} Returns the class that handles the data call.
 * */
export function createUserRepository()
{
    return new inMemoryUserRepository();
}