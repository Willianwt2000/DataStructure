// function hasCycle(head: ListNode | null): boolean {
//     if (!head) return false;

//     let slow: ListNode | null = head; 
//     let fast: ListNode | null = head;
//     while(fast !== null && fast.next !== null) {

//         slow = slow!.next;
//         fast = fast.next.next;

//         if(slow === fast) {
//             return true;
//         }
     
//     }
//     return false;
// };




function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) return false;

    let slow: ListNode | null = head; 
    let fast: ListNode | null = head.next;
    while(slow !== fast) {
        if(!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};