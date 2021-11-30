const { gql } = require('apollo-server');

const purchaseBookTypes = gql `

    type bookS {
        idBookS     : int!
        bookCover   : String!
        title       : String!
        units       : int!
        author      : String!
        description : String!
        price       : float! 
    }
    
    input bookSInput {
        idBookS     : int!
        bookCover   : String!
        title       : String!
        units       : int!
        author      : String!
        description : String!
        price       : float!
    }

    input bookSDeleteInput {
        idBookS     : int!
    }

    extend type Query {
        bookDetailById(IdBookS: int!)    : bookS
        bookDetailByTitle(title: String!): bookS
        booksList()                      : [bookS]  
    }

    extend type Mutation {
        createBookS(book: bookSInput!)            : bookS!
        updateBookS(updateBook: bookSInput!)      : bookS!
        deleteBookS(deleteBook: bookSDeleteInput!)
    }
`;