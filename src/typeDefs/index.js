const accountTypeDefs             = require('./accountTypeDefs');
const userTypeDefs                = require('./userTypeDefs');
const purchaseBookTypeDefs        = require('./purchaseBookTypeDefs');
const purchaseTransactionTypeDefs = require('./purchaseTransactionTypeDefs');
const rentalBookTypeDefs          = require('./rentalBookTypeDefs');
const rentalTransactionTypeDefs   = require('./rentalTransactionTypeDefs');

const schemasArrays = [accountTypeDefs, userTypeDefs, purchaseBookTypeDefs, purchaseTransactionTypeDefs, rentalBookTypeDefs, rentalTransactionTypeDefs];

module.exports = schemasArrays;