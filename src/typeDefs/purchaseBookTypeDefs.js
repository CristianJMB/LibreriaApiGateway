const { gql } = require('apollo-server');

const purchaseBookTypes = gql `

    type bookS {
        idBookS     : Int!
        bookCover   : String!
        title       : String!
        units       : Int!
        author      : String!
        description : String!
        price       : Float! 
    }
    
    input bookSInput {
        idBookS     : Int!
        bookCover   : String!
        title       : String!
        units       : Int!
        author      : String!
        description : String!
        price       : Float!
    }

    extend type Query {
        bookSDetailById   (idBookS : Int!   , idUser : Int!): bookS
        bookSDetailByTitle(title   : String!, idUser : Int!): bookS
        booksSList        (idUser  : Int!)                  : [bookS]  
    }

    extend type Mutation {
        createBookS(book      : bookSInput!, idUser: Int!): bookS
        updateBookS(updateBook: bookSInput!, idUser: Int!): bookS
        deleteBookS(idBookS: Int!          , idUser: Int!): String!
    }
`;

module.exports = purchaseBookTypes;