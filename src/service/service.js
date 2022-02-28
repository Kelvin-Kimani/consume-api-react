import axios from "axios";

const url = "https://crudcrud.com/api/0d26671a3a0c459fbd643890fa3e8811"

class Service{

    createUser(user){
        return axios.post(url + '/users', user);
    }

    getUsers(){
        return axios.get(url + '/users');
    }

    getUserById(userId){
        return axios.get(url + '/users/' + userId);
    }

    updateUser(userId, user){
        return axios.put(url + '/users/' + userId, user);
    }

    deleteUser(userId){
        return axios.delete(url + '/users/' + userId);
    }
}

export default new Service()