function lovefunc(flower1, flower2){
    if(flower1 % 2 !== flower2 % 2){
        var love = true;
        console.log(love);
    }else{
        love = false;
        console.log(love);
    }
}

lovefunc(1,4)
lovefunc(2,2)
lovefunc(0,1)
lovefunc(0,0)