function findSum(n){
    var sum = 0;
    for(i=1; i<=n; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum = sum + i;
        }
    }
    console.log(sum);
}

findSum(10);
findSum(20);
findSum(100);