import 'axios';

export default {
    getUsers: function () {
        return axios.get('/api/users');
    },
    deleteUser: function (id) {
        return axios.delete('/api/users/' + id);
    },
    saveUser: function(userData) {
        return axios.post('/api/users', userData);
    },
    getUser: function(id) {
        return axios.get('/api/spots/' + id);
    },
    patchUser: function(id, userData) {
        return axios.patch('/api/users/' + id, userData);
    }
}