const getters = {
  optimizedCart: ({cart}) => {
    const result = [];
    cart.forEach((object) => {
      const existItem = result.find(item => item.id === object.id)
      if (existItem) {
        existItem.num++;
      } else {
        const newItem = {num: 1, ...object};
        result.push(newItem);
      }
    });
    return result;
  },
  sortedUserList: (state) => {
    const {userList} = state;
    if (userList && userList instanceof Array) {
      userList.sort((a, b) => {
        if (!a.name && !b.name) {
          return 1;
        } else if (!a.name) {
          return 1;
        } else if (!b.name){
          return -1;
        } else {
          return a.name && b.name && a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1;
        }
      });
    }
    return userList;
  }
};

export default getters;