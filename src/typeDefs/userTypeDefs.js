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

    input signUpPurchaseInput {
        username: String!
        password: String!
        name    : String!
        email   : String!
        balance : float!
    }

    input signUpRentalInput {
        username: String!
        password: String!
        name    : String!
        email   : String!
        count   : Int!
    }

    input userInput {
        username: String!
        password: String!
        nombre    : String!
        email   : String!
    }

    type userDetail {
        id      : Int!
        username: String!
        password: String!
        name    : String!
        email   : String!
    }

    extend type Mutation {
        signUpPurchaseUser(userInput :signUpPurchaseInput)   : Tokens!
        signUpRentalUser(userInput :signUpRentalInput)       : Tokens!
        logIn(credentials: credentialsInput!)                : Tokens!
        refreshToken(refresh: String!)                       : Access!
        createUser(userInput: userInput!)                    : userDetail  
        updateUser(userUpdateInput: userInput!, idUser: int!): UserDetail
        deleteUser(idUser: int!)                             
    }

    extend type Query {
        userDetailById(idUser: Int!): UserDetail
    }
`;

module.exports = authTypes;