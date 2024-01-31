const removeFromArray = function(list, ...removeFromList) {
    const newList =[];
      list.forEach(valueInList => {
        if (!removeFromList.includes(valueInList)){
            newList.push(valueInList)
        }
    });
    return newList   
};

// Do not edit below this line
module.exports = removeFromArray;
