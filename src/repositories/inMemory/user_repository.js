import axios from 'axios';

class inMemoryUserRepository
{
    getUserById(id)
    {
        return axios.get("http://localhost:3000/fixtures/userPersonalData.json")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }

    getUserActivity(id)
    {
        return axios.get("http://localhost:3000/fixtures/userActivity.json")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données concernant l'activité de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }

    getUserAverageTimeSession(id)
    {
        return axios.get("http://localhost:3000/fixtures/averageSessionTime.json")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données concernant la moyenne de temps des sessions de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }
}

export default inMemoryUserRepository;