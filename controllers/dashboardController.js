const Dashboard = require('../models/Dashboard');

const dashboardController = {
    async getDashboard(){ return await new Dashboard().getDashboard() }
}
module.exports = dashboardController;