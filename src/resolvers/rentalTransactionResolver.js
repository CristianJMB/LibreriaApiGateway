
const rentalTransactionResolver = {
    Query: {
        getRentalTransactions: async (_, {idUser}, { dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.rentalAPI.getTransactionsByUser(idUser);
            }
            else
                return null;
        },
    },

    Mutation: {
        createRentalTransaction: async (_, {transactionR, idUser}, { dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                let nameBookR = (await dataSources.rentalAPI.getBookById(transactionR.idBookR)).title; 
                const transactionData = {
                    id       : transactionR.id,
                    idUser   : idUser,
                    idBookR  : transactionR.idBookR,
                    nameBookR: nameBookR,
                    count    : transactionR.count
                }
                return await dataSources.rentalAPI.createTransaction(transactionData, idUser);
            }
            else
                return null;
        },

        deleteRentalTransaction: async (_, {idTransaction, idUser}, { dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.rentalAPI.deleteTransaction(idTransaction); 
            }
            else
               return null;
        },
    }
}

module.exports = rentalTransactionResolver;