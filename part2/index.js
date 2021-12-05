function sum(a){
    let temp = a;
    sum = function(){
        b = arguments[0] ? arguments[0] : 0
        return temp = temp + b;
    }
    return sum();
}

/* НЕ ВЫШЛО
function getUpdatedArr(someVariable){
    let arr = [];
    getUpdatedArr = function(){
        if(!arguments[0])
        {
            arr.push(someVariable);
        }
        else
        {
            for(let i = 0; i < arr.length-1; i++)
            {
                delete arr[i];
            }
        }
        return arr;
    }
    return getUpdatedArr();
}*/