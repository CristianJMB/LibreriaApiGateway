const { gql } = require('apollo-server');

const accountTypes = gql `
    
    type accountPurchase {
        idUser   : int!
        username : String!
        balance  : Float!
    }
    
    type accountRental {
        idUser   : int!
        username : String!
        count    : int!
    }
    
    input accountPurchaseInput {
        idUser   : int!
        username : String!
        balance  : Float!
    }
    
    input accountRentalInput {
        idUser   : int!
        username : String!
        count    : int!
    }

    input accountDelete {
        idUser   : int!
    }
    
    extend type Query{
        accountPurchaseById(idUser: int!): accountPurchase!
        accountRentalById(idUser: int!)  : accountRental!
    }
    
    extend type Mutation{
        createAccountPurchase(accountInput: accountPurchaseInput!) accountPurchase
        createAccountRental(accountInput: accountRentalInput!) accountRental
        updateAccountPurchase(accountInput: accountPurchaseInput!) accountPurchase
        updateAccountRental(accountInput: accountRentalInput!) accountRental
        deleteAccountPurchase(accountDeleteInput: accountDelete!) accountPurchase
        deleteAccountRental(accountDeleteInput: accountDelete!) accountRental
    }  
`;

module.exports = accountTypes;