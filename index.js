function findMinAndRemove(array){
    let min=array[0];
    let index;
    array.forEach((ele, i)=>{
        if (ele<min){
            min=ele;
            index=i;
        }
    })
    array.splice(index,1)
    return min;
}

function insertionSort(array){
    let sortedArry=[];
    while(array.length>=1){
        let min=findMinAndRemove(array)
        sortedArry.push(min)
    }
    return sortedArry;
}

