const {db} = require('../database/connection');
const ObjectId = require('mongodb').ObjectId;

const isRequireValid = (user) => {
  return !!user.name;
}

const validateUser = (user) => {
  const valid = isRequireValid(user)
  return valid;
}

const addUser = (apiRouter) => {
  apiRouter.post('/user/add', async (req, res, next) => {
    const user = req.body;
    if (!validateUser(user)) {
      const err = new Error('user name is required!')
      err.status = 555;
      next(err);
      return;
    }
    const result = await db().collection('user').insertOne(user);
    res.json(result);
  })
}

const updateUser = (apiRouter) => {
  apiRouter.post('/user/update', async (req, res) => {
    const user = req.body;
    const _id = user._id;
    delete user._id;
    const result = await db().collection('user').replaceOne({
      _id: new ObjectId(_id),
    }, user);
    res.json(result);
  })
}

const getUserList = (apiRouter) => {
  apiRouter.get('/user/list', async (req, res) => {
    const result = await db().collection('user').find({}).sort().toArray();
    res.json(result);
  });
}

const getUserById = (apiRouter) => {
  apiRouter.get('/user/:id', async (req, res) => {
    const _id = req.params['id'];
    const result = await db().collection('user').findOne({_id: new ObjectId(_id)});
    setTimeout(() => {
      res.json(result);
    }, 500);
  });
}

const deleteUser = (apiRouter) => {
  apiRouter.delete('/user/:id', async (req, res) => {
    const _id = req.params['id'];
    const result = await db().collection('user').deleteOne({_id: new ObjectId(_id)});
    res.json(result);
  });
}

const registUserService = (apiRouter) => {
  addUser(apiRouter);
  updateUser(apiRouter);
  getUserList(apiRouter);
  getUserById(apiRouter);
  deleteUser(apiRouter);
}

module.exports = {
  registUserService,
}