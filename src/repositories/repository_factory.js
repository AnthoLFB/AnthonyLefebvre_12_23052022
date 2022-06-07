import UserRepository from "./inMemory/user_repository";

/**
 * Function to centralize class imports.  It allows to easily change the data call. (Mocked or API)
 * @param {int} userId - user's ID. The id will allow to retrieve the data of a specific user 
 * @returns {Promise.all} Returns a series of promises containing the user's information.
 * */
export function repositoryFactory(userId)
{
    return Promise.all([
        new UserRepository(userId).getUserById(),
    ]);
} 