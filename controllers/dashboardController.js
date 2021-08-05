const Dashboard = require('../models/Dashboard');

const dashboardController = {
    async getDachboard(){ return await new Dashboard().getDachboard() }
}
module.exports = dashboardController;