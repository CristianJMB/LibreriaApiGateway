
const usersResolver = {
    Query: {
        userDetailById: async (_, {idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.userAPI.getUser(idUser);
            }
            else
                return null;
        },
    },

    Mutation: {
        signUpUser: async (_, { userInput }, { dataSources }) => {          
            const userData = {
                username : userInput.username,
                nombre   : userInput.nombre,
                password : userInput.password,
                email    : userInput.email
            }
            let response = await dataSources.userAPI.createUser(userData);

            let idUser   = (await dataSources.userAPI.getUserByUsername(userInput.username))[0].id;
            let balance  = 200000;

            const accountPurchaseInput = {
                idUser   : idUser,
                username : userInput.username,
                balance  : balance                
            }
            await dataSources.purchaseAPI.createAccount(accountPurchaseInput);
            
            const accountRentalInput = {
                idUser   : idUser,
                username : userInput.username,
                count    : 0                
            }
            await dataSources.rentalAPI.createAccount(accountRentalInput);
            return response;
        },

        updateUser: async (_, {userUpdateInput, idUser}, {dataSources, userIdToken}) =>{
            if(idUser == userIdToken){

                let username = (await dataSources.userAPI.getUser(idUser)).username;
                const userInput = {
                    username : username,
                    nombre   : userUpdateInput.nombre,
                    password : userUpdateInput.password,
                    email    : userUpdateInput.email
                }
                return await dataSources.userAPI.updateUser(userInput, idUser);
            }
            else
                return null;
        },

        deleteUser: async (_, {idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                await dataSources.purchaseAPI.deleteAccount(idUser);
                await dataSources.rentalAPI.deleteAccount(idUser);
                return await dataSources.userAPI.deleteUser(idUser);               
            }
            else
                return null;
        },            

        logIn: (_, {credentials}, {dataSources}) => {
            return dataSources.userAPI.authRequest(credentials);
        },

        refreshToken: (_, {refresh}, {dataSources}) => {
            return dataSources.userAPI.refreshToken(refresh);
        },
    }
};

module.exports = usersResolver;