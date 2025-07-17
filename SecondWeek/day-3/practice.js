var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function createLinkedList(arr) {
    if (arr.length === 0)
        return null;
    var head = new ListNode(arr[0]);
    var current = head;
    for (var i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function getLinkedListString(head) {
    var nodes = [];
    var current = head;
    while (current) {
        nodes.push(current.val);
        current = current.next;
    }
    return nodes.length > 0 ? nodes.join(" -> ") : "Lista vacía";
}
// ====================================================================
// EJERCICIO 1: Obtener el valor del primer nodo
// ====================================================================
// function getFirstNodeValue(head: ListNode | null): number {
//     if (head === null) return 0;
//     return head.val;
// }
// --- PRUEBA DEL EJERCICIO 1 ---
// console.log("--- Prueba Ejercicio 1 ---");
// const list1 = createLinkedList([10, 20, 30]);
// console.log(`Lista: ${getLinkedListString(list1)}`);
// console.log(`Valor del primer nodo: ${getFirstNodeValue(list1)} (Esperado: 10)`);
// ====================================================================
// EJERCICIO 2: Obtener el valor del segundo nodo
// ====================================================================
// function getSecondNodeValue(head: ListNode | null): number {
//    if (head === null) return 0;
//    if (head && head.next) return head.next.val;
//    return 0;
// }
// // --- PRUEBA DEL EJERCICIO 2 ---
// console.log("\n--- Ejercicio 2: getSecondNodeValue ---");
// const list2 = createLinkedList([10, 20, 30]);
// console.log(`Lista: ${getLinkedListString(list2)}`);
// console.log(`Valor del segundo nodo: ${getSecondNodeValue(list2)} (Esperado: 20)`);
// // ====================================================================
// // * EJERCICIO 3: Verificar si la lista está vacía
// // ====================================================================
// function isListEmpty(head: ListNode | null): boolean {
//     if (head === null) return true;
//     return false;
// }
// // --- PRUEBA DEL EJERCICIO 3 ---
// console.log("\n--- Ejercicio 3: isListEmpty ---");
// const list3 = createLinkedList([1, 2, 3]);
// console.log(`Lista: ${getLinkedListString(list3)}`);
// console.log(`¿Está vacía? ${isListEmpty(list3)} (Esperado: false)`);
// ====================================================================
//? EJERCICIO 4: Obtener el valor del último nodo
// ====================================================================
// function getLastNodeValue(head: ListNode | null): number {
//   let result: number = 0;
//   while (head !== null) {
//     result = head.val;
//     //avanzar
//     head = head.next;
//   }
//   return result;
// }
// // --- PRUEBA DEL EJERCICIO 4 ---
// console.log("\n--- Ejercicio 4: getLastNodeValue ---");
// const list4 = createLinkedList([5, 10, 15, 20]);
// console.log(`Lista: ${getLinkedListString(list4)}`);
// console.log(`Valor del último nodo: ${getLastNodeValue(list4)} (Esperado: 20)`);
// // Prueba con lista de un solo elemento
// const singleNodeList = createLinkedList([7]);
// console.log(`\nLista con un solo nodo: ${getLinkedListString(singleNodeList)}`);
// console.log(
//   `Valor del último nodo: ${getLastNodeValue(singleNodeList)} (Esperado: 7)`
// );
// // Prueba con lista vacía
// const emptyList = createLinkedList([]);
// console.log(`\nLista vacía: ${getLinkedListString(emptyList)}`);
// console.log(
//   `Valor del último nodo: ${getLastNodeValue(emptyList)} (Esperado: 0)`
// );
// ====================================================================
// EJERCICIO 5: Cambiar el valor del primer nodo
// ====================================================================
function changeFirstNodeValue(head, newValue) {
    if (head === null)
        return;
    head.val = newValue;
}
console.log("\n--- Ejercicio 5: changeFirstNodeValue ---");
var list5 = createLinkedList([1, 2, 3]);
console.log("Lista original: ".concat(getLinkedListString(list5)));
changeFirstNodeValue(list5, 99);
console.log("Lista modificada: ".concat(getLinkedListString(list5), " (Esperado: 99 -> 2 -> 3)"));
// Prueba con lista vacía
var emptyList = createLinkedList([]);
console.log("\nLista vac\u00EDa: ".concat(getLinkedListString(emptyList)));
changeFirstNodeValue(emptyList, 100);
console.log("Lista modificada: ".concat(getLinkedListString(emptyList), " (Esperado: Lista vac\u00EDa)"));
