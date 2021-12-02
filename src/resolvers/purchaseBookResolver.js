
const purchaseBookResolver = {
    Query: {
        bookSDetailById: async (_, {idBookS, idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.purchaseAPI.getBookById(idBookS);
            }
            else
                return null; 
        },

        bookSDetailByTitle: async (_, {title, idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.purchaseAPI.getBookByTitle(title);
            }
            else
                return null; 
        },

        booksSList: async (_, {idUser}, {dataSources, userIdToken}) => {
            if(idUser == userIdToken){
                return await dataSources.purchaseAPI.getBookList();
            }
            else
                return null;            
        },
    },

    Mutation: {
        createBookS: async (_, {book, idUser }, {dataSources, userIdToken}) =>{
            if(idUser == userIdToken){
                const bookInput = {
                    idBookS: book.idBookS,
                    bookCover: book.bookCover,
                    title: book.title,
                    units: book.units,
                    author: book.author,
                    description: book.description, 
                    price: book.price
                }
                return await dataSources.purchaseAPI.createBook(bookInput);
            }
            else
                return null;
        },

        updateBookS: async (_, {updateBook, idUser }, {dataSources, userIdToken}) =>{
            if(idUser == userIdToken){
                const bookInput = {
                    idBookS: updateBook.idBookS,
                    bookCover: updateBook.bookCover,
                    title: updateBook.title,
                    units: updateBook.units,
                    author: updateBook.author,
                    description: updateBook.description, 
                    price: updateBook.price
                }
                return await dataSources.purchaseAPI.updateBook(bookInput, updateBook.idBookS);
            }
            else
                return null;
        },

        deleteBookS: async (_, {idBookS, idUser}, {dataSources, userIdToken}) =>{
            if(idUser == userIdToken){
                return await dataSources.purchaseAPI.deleteBook(idBookS);
            }
            else
                return null;
        },
    }
}

module.exports = purchaseBookResolver;