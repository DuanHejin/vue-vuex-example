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

export const getObjectList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockObjList });
    }, 200);
  });
}

export const getObjectById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = mockObjList.find((obj) => {
        return obj.id == id;
      });
      resolve({ data: result });
    }, 500);
  });
}