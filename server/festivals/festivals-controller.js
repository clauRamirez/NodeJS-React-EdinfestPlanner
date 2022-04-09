const fetchFestivals = require("../services/fetchFestivals");

require("dotenv").config();

const festivalsController = (req, res, next) => {
    // check if festival in database with param
    //      if not in database, fetch
    //      if in database, check added date
    //          if added date < 6h grab it
    //          if added date > 6h fetch from api and update database
    // return response
};

module.exports = festivalsController;