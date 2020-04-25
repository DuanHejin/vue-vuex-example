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
  }
};

export default getters;