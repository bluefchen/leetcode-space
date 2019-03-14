/**
 * Created by Administrator on 2017/6/23.
 */
    //peek与pop的区别，当this.queue.empty()最后一个被pop时，this.queue.empty()为真，此时，keep.push跳过
var Stack = function(){
    this.queue = new Queue();
};

Stack.prototype.push = function (x) {
    this.queue.push(x)
};
Stack.prototype.pop = function(){
    var element;
    var keep = new Queue();
    while(!this.queue.empty()){
        element = this.queue.pop();
        if(!this.queue.empty()){
        keep.push(element)}
    }
    while(!keep.empty()){
        this.queue.push(keep.pop())
    }
    return element;
};
Stack.prototype.peek = function(){
    var element;
    var keep = new Queue();
    while(!this.queue.empty()){
        element = this.queue.pop();
            keep.push(element)
    }
    while(!keep.empty()){
        this.queue.push(keep.pop())
    }
    return element;
};
Stack.prototype.empty = function () {
    return this.queue.empty();
};
var Queue = function () {
    this.list = [];
};
Queue.prototype.push = function (x) {
    this.list.push(x)
};
Queue.prototype.peek = function () {
    return this.list[0];
};
Queue.prototype.pop = function () {
    return this.list.shift();
};
Queue.prototype.empty = function(){
    return this.list.length == 0;
};

var hello = new Stack();
hello.push(1);
hello.push(2);
hello.push(3);
console.log(hello.peek());
console.log(hello);
//console.log(hello.peek());