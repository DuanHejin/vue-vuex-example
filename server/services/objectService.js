const mockObjList = [{
  id: 1, name: "iphone7", price: "2000", publishYear: "2016"
}, {
  id: 2, name: "iphone7 Plus", price: "3000", publishYear: "2016"
}, {
  id: 3, name: "iphone8", price: "3000", publishYear: "2017"
}, {
  id: 4, name: "iphone8 Plus", price: "4000", publishYear: "2017"
}, {
  id: 5, name: "iphoneX", price: "5000", publishYear: "2017"
}, {
  id: 6, name: "iphoneXS", price: "7000", publishYear: "2018"
}, {
  id: 8, name: "iphoneXS Max", price: "8000", publishYear: "2018"
}, {
  id: 8, name: "iphoneXR", price: "6000", publishYear: "2018"
}, {
  id: 9, name: "iphone11", price: "6000", publishYear: "2019"
}, {
  id: 10, name: "iphone11 Pro", price: "8000", publishYear: "2019"
}, {
  id: 11, name: "iphone11 Pro Max", price: "9000", publishYear: "2019"
}];

const getObjectList = (apiRouter) => {
  apiRouter.get('/object/list', (req, res) => {
    res.json(mockObjList);
  })
}

const getObjectById = (apiRouter) => {
  apiRouter.get('/object/:id', (req, res) => {
    const id = req.params['id'];
    setTimeout(() => {
      
      const result = mockObjList.find((obj) => {
        return obj.id == id;
      });
      res.json(result);
    }, 500);
  });
}

const registObjectService = (apiRouter) => {
  getObjectList(apiRouter);
  getObjectById(apiRouter);
}

module.exports = {
  registObjectService
}