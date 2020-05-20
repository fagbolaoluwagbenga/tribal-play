//add this file to .gitignore

const dotenv = require('dotenv');
dotenv.config();

const {
  SESSION_KEY,
  SESSION_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET
} = process.env;


module.exports = {
    google : {
        clientID: `${GOOGLE_CLIENT_ID}`,
        clientSecret:`${GOOGLE_CLIENT_SECRET}`,
    },
    session : {
        key: `${SESSION_KEY}`,
        secret:`${SESSION_SECRET}`,
    },
    facebook : {
        clientID: `${FACEBOOK_CLIENT_ID}`,
        clientSecret: `${FACEBOOK_CLIENT_SECRET}`
    },
    twitter : {
        clientID: `${TWITTER_CLIENT_ID}`,
        clientSecret: `${TWITTER_CLIENT_SECRET}`,
    }
}