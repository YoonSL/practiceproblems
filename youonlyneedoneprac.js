function check(a,x){
    var check= false;
    for(i=0; i<= a.length;i++){
        if(a[i] == x){
            check = true;
        }
    }
    console.log(check);
}

check([66,101],66);
check(['what','a','great','kata'],'kat');