/**
 * Created by Administrator on 2017/6/15.
 */
/**
 *
 * @constructor
 */
var Queue = function () {
    this.stack = [];
};

/**
 *
 * @returns {Number}
 */
Array.prototype.size = function () {
    return this.length;
};

Queue.prototype.push = function (x) {
    this.stack.push(x);
};

Queue.prototype.pop = function () {
    var keep = [];
    var element;

    while (this.stack.size() >1){
        keep.push(this.stack.pop())
    }
    element =this.stack.pop();

    while(keep.size()>0){
        this.stack.push(keep.pop())
    }
    return element;
};

/**
 *
 * @returns {*}
 */
Queue.prototype.peek = function () {
    var keep = [];
    var element;
    while (this.stack.size() >1){
        keep.push(this.stack.pop())
    }
    element = this.stack[0];
    while (keep.size()>0){
        this.stack.push(keep.pop())
    }
    return element;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function () {
    return this.size() == 0;
};

var hello = new Queue();
hello.push(1);
hello.push(2);
hello.push(3);
console.log(hello.pop());
console.log(hello.peek());
console.log(hello.peek());