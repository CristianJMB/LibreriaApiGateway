const { gql } = require('apollo-server');

const accountTypes = gql `
    
    type accountPurchase {
        idUser   : Int!
        username : String!
        balance  : Float!
    }
    
    type accountRental {
        idUser   : Int!
        username : String!
        count    : Int!
    }
    
    input accountPurchaseInput {
        idUser   : Int!
        username : String!
        balance  : Float!
    }
    
    input accountRentalInput {
        idUser   : Int!
        username : String!
        count    : Int!
    }

    input accountPurchaseUpdateInput {
        balance  : Float!
    }
    
    input accountRentalUpdateInput {
        count    : Int!
    }

    type Query{
        accountPurchaseById(idUser: Int!): accountPurchase!
        accountRentalById  (idUser: Int!): accountRental!
    }
    
    type Mutation{
        updateAccountPurchase(accountPInput: accountPurchaseUpdateInput!, idUser: Int!): accountPurchase
        updateAccountRental  (accountRInput: accountRentalUpdateInput!  , idUser: Int!): accountRental
    }  
`;

module.exports = accountTypes;