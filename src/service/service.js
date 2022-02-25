import axios from "axios";

const url = "https://crudcrud.com/api/cd18565f240e44a89715275df76939be"

class Service{

    createUser(user){
        return axios.post(url, user);
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
        return axios.delete(userId);
    }
}

export default new Service()