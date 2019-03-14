
for(var i =1;i<10;i++){
    (function(){
        var j =i;
        setTimeout(function timer () {
            console.log(j);
        },1000);
    })()
};


for (var i=1; i<10; i++) {
    (function(j){
        setTimeout( function timer(){
            console.log( j );
        }, 1000 );
    })( i );
}

 for (let i=1; i<=10; i++) {
     setTimeout( function timer(){
        console.log( i );
     }, 1000 );
}