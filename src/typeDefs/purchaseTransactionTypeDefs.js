const { gql } = require('apollo-server');

const purchaseTransactionTypes = gql `
    type transactionPurchase{
        id       : Int
        idUser   : Int
        idBookS  : Int
        nameBookS: String
        value    : Float
        date     : String
        count    : Int
    }

    input transactionPurchaseInput{
        id       : Int!
        idBookS  : Int!
        count    : Int!
    }

    extend type Query{
        getPurchaseTransactions(idUser: Int!): [transactionPurchase]
    }

    extend type Mutation{
        createPurchaseTransaction(transactionP : transactionPurchaseInput!, idUser: Int!): transactionPurchase
        deletePurchaseTransaction(idTransaction: Int!                     , idUser: Int!): String!
    }
`;

module.exports = purchaseTransactionTypes;