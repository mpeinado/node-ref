var a = [1,2,3,5,9];
var b = [4,6,7,8];

function mergeAndSort(a,b){
    var c = [];
    
    var aIndex = 0;
    var bIndex = 0;
    var cIndex = 0; // sorted merged array 

    while(aIndex < a.length && bIndex < b.length){
        if(a[aIndex] < b[bIndex]){
            c.push(a[aIndex]);
            aIndex++;
        }else{  
            c.push(b[bIndex]);
            bIndex++;
        }
    }

    // in case we have some left overs on a array 
    while (aIndex < a.length)  {
        c.push(a[aIndex++]);
    }

    // in case we have some left overs on a array 
    while (bIndex < b.length){
        c.push(b[bIndex++]);
    } 
    
    return c;
}

var sortedMergedArr =  mergeAndSort(a, b);

console.log(sortedMergedArr.toString());