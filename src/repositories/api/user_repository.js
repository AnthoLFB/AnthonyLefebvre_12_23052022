import axios from 'axios';

class apiUserRepository
{
    constructor()
    {
        console.log(process.env.REACT_APP_API_SERVER_ADDRESS)
    }

    getUserById(id)
    {
        return axios.get(process.env.REACT_APP_API_SERVER_ADDRESS+"/user/"+id)
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }

    getUserActivity(id)
    {
        return axios.get(process.env.REACT_APP_API_SERVER_ADDRESS+"/user/"+id+"/activity")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données concernant l'activité de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }

    getUserAverageTimeSession(id)
    {
        return axios.get(process.env.REACT_APP_API_SERVER_ADDRESS+"/user/"+id+"/average-sessions")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données concernant la moyenne de temps des sessions de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }

    getUserActivityType(id)
    {
        return axios.get(process.env.REACT_APP_API_SERVER_ADDRESS+"/user/"+id+"/performance")
        .catch(function (error) {console.log("Une erreur est survenue lors de la récupération des données concernant les activités de l'utilisateur ayant l'id " + id + ". Message de l'erreur : " + error)});
    }
}

export default apiUserRepository;