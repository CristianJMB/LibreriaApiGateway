
const usersResolver = {
    Query: {
        getUser: async (_, {idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.userApi.getUser(idUser);
            }
            else
                return null;
        }
    },

    Mutation: {
        signUpPurchaseUser: async (_, { signUpPurchaseInput }, { dataSources, userIdToken }) => {

            const accountPurchaseInput = {
                idUser   = userIdToken,
                username = signUpPurchaseInput.username,
                balance  = signUpPurchaseInput.balance                
            }
            await dataSources.purchaseApi.createAccount;

            const userInput = {
                username = signUpPurchaseInput.username,
                nombre   = signUpPurchaseInput.nombre,
                password = signUpPurchaseInput.password,
                email    = signUpPurchaseInput.email
            }
            return await dataSources.userApi.createUser(userInput);
        },

        updateUser: async (_, {userUpdateInput, idUser}, {dataSources, userIdToken}) =>{
            if(idUser == userIdToken){
                const userInput = {
                    username = userUpdateInput.username,
                    nombre   = userUpdateInput.nombre,
                    password = userUpdateInput.password,
                    email    = userUpdateInput.email
                }
                return await dataSources.userApi.updateUser(userInput, idUser);
            }
            else
                return null;
        },

        deleteUser: async (_, {idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.userApi.deleteUser(idUser)
            }
            else
                return null;
        },            

        logIn: (_, {credentials}, {dataSources}) =>
            dataSources.userApi.login(credentials),

        refreshToken: (_, {refresh}, {dataSources}) =>
            dataSources.userApi.refreshToken(refresh),
    }
};

module.exports = usersResolver;