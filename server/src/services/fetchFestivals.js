const axios = require("axios");
const hmacsha1 = require("hmac_sha1");
/**
 * Connect to Edinburgh Festival City API.
 *
 * Get signature with HMAC_SHA1 algorithm
 */
async function fetchFestivals(param) {
  // hardcoded values for now
  const SIZE = 50;
  const YEAR = 2021; // most events don't have a date for 2022 yet. this is for testing

  const query = `/events?festival=${param}&size=${SIZE}&year=${YEAR}&key=${process.env.API_KEY}`;

  const hmacSha1 = new hmacsha1();
  const signature = hmacSha1.digest(process.env.SIGNING_KEY, query);

  const url = `https://api.edinburghfestivalcity.com${query}&signature=${signature}`;

  try {
    const { data: response } = await axios.get(url);
    return response;
  } catch (err) {
    console.log(err);
  }

}

module.exports = fetchFestivals;
