/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;

    while(fast && fast.next) {
        prev = slow;
        slow = slow!.next;
        fast = fast.next.next;
    }

    prev!.next = null;
    const left = sortList(head);
    const right = sortList(slow);


    //verificar
    let sentinel = new ListNode(0);
    let current = sentinel;


    let list1 = left;
    let list2 = right;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        };

        current = current.next;
    }

    current.next = list1 || list2;
    

    return sentinel.next;

};