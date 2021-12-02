const { gql } = require('apollo-server');

const authTypes = gql `
    type Tokens {
        refresh: String!
        access : String!
    }

    type Access {
        access: String!
    }

    input credentialsInput {
        email   : String!
        password: String!
    }

    input signUpInput {
        username: String!
        password: String!
        nombre  : String!
        email   : String!
    }

    input userInput {        
        username: String!
        password: String!
        nombre  : String!
        email   : String!
    }

    input userUpdateInput {
        password: String!
        nombre  : String!
        email   : String!
    }

    type userDetail {
        id      : Int!
        username: String!
        nombre  : String!
        email   : String!
        rol     : String!
    }

    extend type Mutation {
        signUpUser  (userInput      : signUpInput)                   : Tokens!
        logIn       (credentials    : credentialsInput!)             : Tokens!
        refreshToken(refresh        : String!)                       : Access!
        createUser  (userInput      : userInput!)                    : userDetail  
        updateUser  (userUpdateInput: userUpdateInput!, idUser: Int!): userDetail
        deleteUser  (idUser         : Int!)                          : String                             
    }

    extend type Query {
        userDetailById(idUser: Int!): userDetail
    }
`;

module.exports = authTypes;