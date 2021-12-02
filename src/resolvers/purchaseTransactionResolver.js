
const purchaseTransactionResolver = {
    Query: {
        getPurchaseTransactions: async (_, {idUser}, { dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.purchaseAPI.getTransactionsByUser(idUser);
            }
            else
                return null;
        },
    },

    Mutation: {
        createPurchaseTransaction: async (_, {transactionP, idUser}, { dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                let nameBookS = (await dataSources.purchaseAPI.getBookById(transactionP.idBookS)).title; 
                const transactionData = {
                    id       : transactionP.id,
                    idUser   : idUser,
                    idBookS  : transactionP.idBookS,
                    nameBookS: nameBookS,
                    count    : transactionP.count
                }
                return await dataSources.purchaseAPI.createTransaction(transactionData, idUser);

            }
            else
                return null;      
        },

        deletePurchaseTransaction: async (_, {idTransaction, idUser}, { dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.purchaseAPI.deleteTransaction(idTransaction); 
            }
            else
               return null;
        },
    }
}

module.exports = purchaseTransactionResolver;