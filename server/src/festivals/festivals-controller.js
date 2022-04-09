import dotenv from "dotenv";

import fetchFestivals from "../services/fetchFestivals";

dotenv.config();

const controller = {
  getAll: (req, res, next) => {
    // check if festival in database with param
    //      if not in database, fetch
    //      if in database, check added date
    //          if added date < 6h grab it
    //          if added date > 6h fetch from api and update database
    // return response
    res.send({ result: "success" });
  },
};

export default controller;