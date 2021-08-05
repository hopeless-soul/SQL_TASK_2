const Collection = require('../models/Collection');

const collectionController = {
    async forToday(){ return await new Collection().forToday() }
}

module.exports = collectionController;