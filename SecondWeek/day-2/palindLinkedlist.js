var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.size = 0;
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
        console.log("Before " + this.size);
        this.size += this.size;
        console.log("After " + this.size);
    }
    return ListNode;
}());
function isPalindrome(head) {
    // console.log(head)
    // for (let i = 0; i < .length; i++) {
    //   const element = array[i];
    // }
    return false;
}
;
// let node4 = new ListNode(4)
// let node3 = new ListNode(3,node4)
var node2 = new ListNode(2);
var head = new ListNode(1, node2);
console.log("tamanño " + head.size);
console.log('Output:', isPalindrome(head));
