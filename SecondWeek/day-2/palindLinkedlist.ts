//leetcode: https://leetcode.com/problems/palindrome-linked-list/?envType=problem-list-v2&envId=linked-list
function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    // 1. Encontrar la mitad usando el método de rápido y lento
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    // 2. Invertir la segunda mitad
    let prev: ListNode | null = null;
    let current: ListNode | null = slow;
    while (current) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    // 3. Comparar la primera mitad con la segunda mitad invertida
    let left = head;
    let right = prev;
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next!;
        right = right.next;
    }

    return true;
}

