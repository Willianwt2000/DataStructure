class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Función para crear una lista enlazada desde un array
function deleteNodes(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Función para convertir una lista enlazada a string
function deteteNodes(head: ListNode | null): string {
  let nodes: number[] = [];
  let current = head;
  while (current) {
    nodes.push(current.val);
    current = current.next;
  }
  return nodes.length > 0 ? nodes.join(" -> ") : "Lista vacía";
}

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
  if (head == null) return null;

  let placeHolder: Set<number> = new Set(nums)
  const sentinel = new ListNode(0);
  sentinel.next = head;
  let current = sentinel


  while (current.next !== null) {
    if (placeHolder.has(current.next.val)) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }

    


  }
  return sentinel;
}

console.log(
  `Ejemplo 1: ${deteteNodes(
    modifiedList([1, 2, 3], deleteNodes([1, 2, 3, 4, 5]))
  )} (Esperado: 4 -> 5)`
);

// console.log(`Ejemplo 2: ${deteteNodes(modifiedList([1], deleteNodes([1, 2, 1, 2, 1, 2])))} (Esperado: 2 -> 2 -> 2)`);

// 3
// console.log(`Ejemplo 3: ${deteteNodes(modifiedList([5], deleteNodes([1, 2, 3, 4])))} (Esperado: 1 -> 2 -> 3 -> 4)`);
