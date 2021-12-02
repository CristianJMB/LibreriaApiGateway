const { gql } = require('apollo-server');

const rentalTransactionTypes = gql `
    type transactionRental{
        id       : Int
        idUser   : Int
        idBookR  : Int
        nameBookR: String
        date     : String
        count    : Int
    }

    input transactionRentalInput{
        id       : Int!
        idBookR  : Int!
        count    : Int!
    }

    extend type Query{
        getRentalTransactions(idUser: Int!): [transactionRental]
    }

    extend type Mutation{
        createRentalTransaction(transactionR : transactionRentalInput!, idUser: Int!): transactionRental
        deleteRentalTransaction(idTransaction: Int!                   , idUser: Int!): String!
    }
`;

module.exports = rentalTransactionTypes;