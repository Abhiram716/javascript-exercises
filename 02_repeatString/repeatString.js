const repeatString = function(string,num) {
    let temp_string="";
    if(num===0){
        return temp_string;
    }
    else if(num<0){
        return "ERROR";
    }
    else if(string===""){
        return "";
    }
    else{
        for(let i=0;i<num;i++){
            temp_string+=string;
        }
        return temp_string;
    }
};

// Do not edit below this line
module.exports = repeatString;
