//Axios
import axios from 'axios';

class inMemoryUserRepository
{
    /**
     * Function to retrieve the user's data via his id. - Warning, the returned data are mocked
     * @param {int} id user's id
     * @returns {Promise} Returns a promise containing the user's personal information such as identity, id, daily score, and key data (calories, protein, carbohydrates, lipids) 
     */
    getUserById(id)
    {
        return axios.get("/fixtures/userPersonalData.json")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }

     /**
     * Function to retrieve the user's weekly data via his Id. - Warning, the returned data are mocked
     * @param {int} id user's id
     * @returns {Promise} Returns a promise containing the user's personal information, such as user ID, a summary of their sessions for the week with date, kilograms, and calories 
     */
    getUserActivity(id)
    {
        return axios.get("/fixtures/userActivity.json")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données concernant l'activité de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }

     /**
     * Function to retrieve data about the average duration of the user's sessions via his Id. - Warning, the returned data are mocked
     * @param {int} id user's id
     * @returns {Promise} Returns a promise containing the user's personal information, such as their ID, a summary of their sessions for the week with the day and session duration associated with it.
     */
    getUserAverageTimeSession(id)
    {
        return axios.get("/fixtures/averageSessionTime.json")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données concernant la moyenne de temps des sessions de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }

    /**
     * Function to retrieve data about the type of activity practiced by the user. - Warning, the returned data are mocked
     * @param {int} id user's id
     * @returns {Promise} Returns a promise containing the user's personal information, such as ID, available activities, and data about each activity
     */
    getUserActivityType(id)
    {
        return axios.get("/fixtures/userActivityType.json")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données concernant les activités de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }
}

export default inMemoryUserRepository;