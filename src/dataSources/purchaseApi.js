const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class PurchaseAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.purchaseApiUrl;
    }

    async createBook(book){
        book = new Object(JSON.parse(JSON.stringify(book)));
        return await this.post ('/Books', book);
    }

    async getBookList(){
        return await this.get('/Books/list');
    }

    async getBookById(idBook){
        return await this.get(`/Books/id/${idBook}`);
    }

    async getBookByTitle(titleBook){
        return await this.get(`/Books/title/${titleBook}`);
    }

    async updateBook(book, idBook){
        book   = new Object(JSON.parse(JSON.stringify(book)));
        return await this.post (`/Books/update/${idBook}`, book);
    }

    async deleteBook(idBook){
        return await this.delete(`/Books/delete/${idBook}`);
    }
    
    async createAccount(account){
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post ('/Account', account)
    }

    async getAccount(idAccount){
        return await this.get(`/Account/${idAccount}`);
    }

    async updateAccount(account, idAccount){
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post (`/Account/update/${idAccount}`, account);
    }

    async deleteAccount(idAccount){
        return await this.delete(`/Account/delete/${idAccount}`);
    }

    async createTransaction(transaction, idUser){
        transaction = new Object(JSON.parse(JSON.stringify(transaction)));
        return await this.post (`/Transaction/user/${idUser}`, transaction);
    }

    async getTransactionsByUser(idUser){
        return await this.get(`/Transaction/list/${idUser}`);
    }

    async deleteTransaction(idTransaction){
        return await this.delete(`/Transaction/delete/${idTransaction}`);
    }
}

module.exports = PurchaseAPI;
