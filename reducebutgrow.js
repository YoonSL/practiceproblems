function grow(x){
    let result = 1;
    for(i=0; i < x.length; i++){
        result = result* x[i];
    }
    console.log(result);
}

grow([1,2,3]);
grow([4,1,1,1,4]);
grow([2,2,2,2,2,2]);