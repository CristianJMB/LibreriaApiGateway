const accountResolver             = require('./accountResolver');
const userResolver                = require('./userResolver');
const purchaseBookResolver        = require('./purchaseBookResolver');
const purchaseTransactionResolver = require('./purchaseTransactionResolver');
const rentalBookResolver          = require('./rentalBookResolver');
const rentalTransactionResolver   = require('./rentalTransactionResolver');

const lodash = require('lodash');

const resolvers = lodash.merge(accountResolver, userResolver, purchaseBookResolver, purchaseTransactionResolver, rentalBookResolver, rentalTransactionResolver);

module.exports = resolvers;