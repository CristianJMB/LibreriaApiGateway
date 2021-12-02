const rentalBookResolver = {
    Query: {
        bookRDetailById: async (_, {idBookR, idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.rentalAPI.getBookById(idBookR);
            }
            else
                return null; 
        },

        bookRDetailByTitle: async (_, {title, idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.rentalAPI.getBookByTitle(title);
            }
            else
                return null; 
        },

        booksRList: async (_, {idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.rentalAPI.getBookList();
            }
            else
                return null;            
        },
    },

    Mutation: {
        createbookR: async (_, {book, idUser }, {dataSources, userIdToken}) =>{
            if(idUser == userIdToken){
                const bookInput = {
                    idBookR: book.idBookR,
                    bookCover: book.bookCover,
                    title: book.title,
                    units: book.units,
                    author: book.author,
                    description: book.description 
                }
                return await dataSources.rentalAPI.createBook(bookInput);
            }
            else
                return null;
        },

        updatebookR: async (_, {updateBook, idUser }, {dataSources, userIdToken}) =>{
            if(idUser == userIdToken){
                const bookInput = {
                    idBookR: updateBook.idBookR,
                    bookCover: updateBook.bookCover,
                    title: updateBook.title,
                    units: updateBook.units,
                    author: updateBook.author,
                    description: updateBook.description 
                }
                return await dataSources.rentalAPI.updateBook(bookInput, updateBook.idBookR);
            }
            else
                return null;
        },

        deletebookR: async (_, {idBookR, idUser}, {dataSources, userIdToken}) =>{
            if(idUser == userIdToken){
                return await dataSources.rentalAPI.deleteBook(idBookR);
            }
            else
                return null;
        },
    }
}

module.exports = rentalBookResolver;