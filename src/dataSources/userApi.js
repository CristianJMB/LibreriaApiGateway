const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.userApiUrl;
    }

    async createUser(user){
        user = new Object(JSON,parse(JSON.stringify(user)));
        return await this.post(`/signup/`, user); 
    }

    async getUser(idUser){
        idUser = new Object(JSON.parse(JSON.stringify(idUser)));
        return await this.get(`/user/${idUser}`);
    }

    async updateUser(user, idUser){
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.put(`/user/update/${idUser}/`, user); 
    }

    async deleteUser(idUser){
        return await this.delete(`/user/delete/${idUser}`);
    }

    async login(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }
    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }
}

module.exports = UserAPI;