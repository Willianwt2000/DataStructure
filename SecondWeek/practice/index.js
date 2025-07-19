var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
// Helper function to create a linked list from an array
function createList(arr) {
    if (!arr.length)
        return null;
    var head = new ListNode(arr[0]);
    var current = head;
    for (var i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
// Helper function to convert a linked list to an array
function listToArray(head) {
    var arr = [];
    var current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}
// // 1. Contar los nodos de una lista
// function countNodes(head: ListNode | null): number {
//   if (head == null) return 0
//   let lengthListNode: number =  0;
//   while (head !== null) {
//     head = head.next;
//     lengthListNode++;
//   }
//   return lengthListNode;
// }
// // Test Cases
// console.log("Expected 3: =====> result: "+countNodes(createList([1, 2, 3]))) // 3
// console.log("Expected 0: =====> result: "+countNodes(createList([]))) // 0
// console.log("Expected 1: =====> result: "+countNodes(createList([10]))) // 1
// 2. Sumar todos los valores de los nodos
function sumNodes(head) {
    if (head == null)
        return 0;
    var current = head;
    var total = 0;
    while (current !== null) {
        total += current.val;
        current = current.next;
    }
    return total;
}
// console.log("\n2. sumNodes:");
// console.log("Expected 6: =====> result: "+sumNodes(createList([1, 2, 3]))) // 6
// console.log("Expected 0: =====> result: "+sumNodes(createList([]))) // 0
// console.log("Expected 5: =====> result: "+sumNodes(createList([5]))) // 5
// * -------------------------------------------------------------------------------
// 3. Encontrar el valor máximo
function findMax(head) {
    if (head === null)
        return -Infinity;
    var maxNum = head.val;
    for (var cur = head.next; cur !== null; cur = cur.next) {
        if (cur.val >= maxNum) {
            maxNum = cur.val;
        }
    }
    return maxNum;
}
// console.log("\n3. findMax:");
// console.log("Expected 5: =====> result: "+findMax(createList([1, 5, 3]))) // 5
// console.log("Expected -1: =====> result: "+findMax(createList([-1, -5, -3]))) // -1
// console.log("Expected 10: =====> result: "+findMax(createList([10]))) // 10
// console.log("Expected 10: =====> result: "+findMax(createList([]))) // 10
// 4. Buscar un valor en la lista
function containsValue(head, target) {
    var cur = head;
    while (cur !== null) {
        if (cur.val === target) {
            return true;
        }
        cur = cur.next;
    }
    return false;
}
console.log("\n4. containsValue:");
console.log("Expected true: =====> result: " + containsValue(createList([1, 2, 3]), 2)); // true
console.log("Expected false: =====> result: " + containsValue(createList([1, 2, 3]), 5)); // false
console.log("Expected false: =====> result: " + containsValue(createList([]), 1)); // false
// // 5. Obtener el valor del nodo en una posición
// function getValueAt(head: ListNode | null, index: number): number | null {
//   // Implementar aquí
// }
// // 6. Agregar un nodo al final
// function appendNode(head: ListNode | null, val: number): ListNode | null {
//   // Implementar aquí
// }
// // 7. Invertir la lista
// function reverseList(head: ListNode | null): ListNode | null {
//   // Implementar aquí
// }
// // 8. Concatenar dos listas
// function concatenateLists(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): ListNode | null {
//   // Implementar aquí
// }
// // 9. Eliminar nodos con valor específico
// function removeValue(head: ListNode | null, val: number): ListNode | null {
//   // Implementar aquí
// }
// // 10. Comparar si dos listas son iguales
// function areListsEqual(
//   list1: ListNode | null,
//   list2: ListNode | null
// ): boolean {
//   // Implementar aquí
// }
// console.log("\n5. getValueAt:");
// console.log(getValueAt(createList([10, 20, 30]), 1)) // 20
// console.log(getValueAt(createList([10, 20, 30]), 5)) // null
// console.log(getValueAt(createList([]), 0)) // null
// console.log("\n6. appendNode:");
// console.log(listToArray(appendNode(createList([1, 2]), 3))) // [1, 2, 3]
// console.log(listToArray(appendNode(createList([]), 1))) // [1]
// console.log("\n7. reverseList:");
// console.log(listToArray(reverseList(createList([1, 2, 3])))) // [3, 2, 1]
// console.log(listToArray(reverseList(createList([])))) // []
// console.log(listToArray(reverseList(createList([1])))) // [1]
// console.log("\n8. concatenateLists:");
// console.log(listToArray(concatenateLists(createList([1, 2]), createList([3, 4])))) // [1, 2, 3, 4]
// console.log(listToArray(concatenateLists(createList([]), createList([1, 2])))) // [1, 2]
// console.log("\n9. removeValue:");
// console.log(listToArray(removeValue(createList([1, 2, 3, 2]), 2))) // [1, 3]
// console.log(listToArray(removeValue(createList([2, 2, 2]), 2))) // []
// console.log("\n10. areListsEqual:");
// console.log(areListsEqual(createList([1, 2, 3]), createList([1, 2, 3]))) // true
// console.log(areListsEqual(createList([1, 2]), createList([1, 2, 3]))) // false
// console.log(areListsEqual(createList([]), createList([]))) // true
