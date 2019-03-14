/**
 * Created by Administrator on 2017/5/22.
 */
for(;;){
    for(var i=0; i<34000000000000000000000000*4/5/100; i++){
        ;
        sleep(100);
    }

}

function sleep(n) {
    var start = new Date().getTime();
    while(true)  if(new Date().getTime()-start > n) break;
}