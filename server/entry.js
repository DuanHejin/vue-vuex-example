const { registObjectService } = require('./services/objectService');
const { registUserService } = require('./services/userService');
const {db} = require('./database/connection');
db();

const entry = (apiRouter) => {
  registObjectService(apiRouter);
  registUserService(apiRouter);
}

module.exports = entry;