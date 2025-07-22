// Definición de la clase ListNode
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function createLinkedList(arr) {
    if (arr.length === 0) {
        return null;
    }
    var head = new ListNode(arr[0]);
    var current = head;
    for (var i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function linkedListToArray(head) {
    var result = [];
    var current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}
function mergeNodes(head) {
    if (!head)
        return null;
    var cur = head;
    var summedValues = [];
    var addNumber = 0;
    while (cur) {
        if (cur.val === 0 && addNumber !== 0) {
            summedValues.push(addNumber);
            addNumber = 0;
        }
        if (cur.val !== 0) {
            addNumber += cur.val;
        }
        // console.log("Contador "+addNumber)
        cur = cur.next;
    }
    if (summedValues.length === 0)
        return null;
    var newHead = new ListNode(summedValues[0]);
    var newCurrent = newHead;
    for (var i = 1; i < summedValues.length; i++) {
        newCurrent.next = new ListNode(summedValues[i]);
        newCurrent = newCurrent.next;
    }
    return newHead;
}
console.log("--- Caso de Prueba 1 ---");
var head1 = createLinkedList([0, 3, 1, 0, 4, 5, 2, 0]);
var output1 = mergeNodes(head1);
console.log("Input:", linkedListToArray(createLinkedList([0, 3, 1, 0, 4, 5, 2, 0])));
console.log("Expected Output: [4, 11]");
console.log("Actual Output:", linkedListToArray(output1));
// console.log("\n--- Caso de Prueba 2 ---");
// const head2 = createLinkedList([0, 1, 0, 3, 0, 2, 2, 0]);
// const output2 = mergeNodes(head2);
// console.log("Input:", linkedListToArray(createLinkedList([0, 1, 0, 3, 0, 2, 2, 0])));
// console.log("Expected Output: [1, 3, 4]");
// console.log("Actual Output:", linkedListToArray(output2));
