const removeFromArray = function(...args) {
    let array=args[0];
    let ans_arr=[];
    array.forEach(element => {
        if (!args.includes(element)) {
            ans_arr.push(element);
        }
    });
    return ans_arr
};

// Do not edit below this line
module.exports = removeFromArray;
