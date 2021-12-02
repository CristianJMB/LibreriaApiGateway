
const accountResolver = {
    Query: {
        accountPurchaseById: async (_, {idUser}, { dataSources, userIdToken }) => {
            if(idUser == userIdToken){
                return await dataSources.purchaseAPI.getAccount(idUser);
            }
            else
                return null;       
        },

        accountRentalById: async (_, {idUser}, { dataSources, userIdToken }) => {
            if(idUser == userIdToken){
                return await dataSources.rentalAPI.getAccount(idUser);
            }
            else
                return null;
        },
    },

    Mutation: {
        updateAccountPurchase: async (_, {accountPInput, idUser}, { dataSources, userIdToken }) => {
            if(idUser == userIdToken){
                let username = (await dataSources.purchaseAPI.getAccount(idUser)).username;

                const updateInput = {
                    idUser  : idUser,
                    username: username,
                    balance : accountPInput.balance
                }
                return await dataSources.purchaseAPI.updateAccount(updateInput, idUser);
            }
            else
                return null;
        },
        updateAccountRental: async (_, {accountRInput, idUser}, { dataSources, userIdToken }) => {
            if(idUser == userIdToken){
                let username = (await dataSources.rentalAPI.getAccount(idUser)).username;
                
                const updateInput = {
                    idUser  : idUser,
                    username: username,
                    count: accountRInput.count
                }
                return await dataSources.rentalAPI.updateAccount(updateInput, idUser);
            }
            else
                return null;
        },
    }
}

module.exports = accountResolver;