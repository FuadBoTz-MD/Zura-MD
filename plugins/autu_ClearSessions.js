// Plugin Node.js Auto Clear Sessions

const session = require('express-session');

const autoClearSessions = (sessionStore, interval) => {
  setInterval(() => {
    sessionStore.all((err, sessions) => {
      for (let sess in sessions) {
        let session = sessions[sess];
        if (session.cookie.expires < Date.now()) {
          sessionStore.destroy(sess);
        }
      }
    });
  }, interval);
};

module.exports = autoClearSessions;