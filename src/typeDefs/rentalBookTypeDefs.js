const { gql } = require('apollo-server');

const rentalBookTypes = gql `

    type bookR {
        idBookR     : Int!
        bookCover   : String!
        title       : String!
        units       : Int!
        author      : String!
        description : String!
    }
    
    input bookRInput {
        idBookR     : Int!
        bookCover   : String!
        title       : String!
        units       : Int!
        author      : String!
        description : String!
    }

    extend type Query {
        bookRDetailById   (idBookR : Int!   , idUser : Int!): bookR
        bookRDetailByTitle(title   : String!, idUser : Int!): bookR
        booksRList        (idUser  : Int!)                  : [bookR]  
    }

    extend type Mutation {
        createbookR(book      : bookRInput!, idUser : Int!): bookR
        updatebookR(updateBook: bookRInput!, idUser : Int!): bookR
        deletebookR(idBookR   : Int!       , idUser : Int!): String!
    }
`;

module.exports = rentalBookTypes;