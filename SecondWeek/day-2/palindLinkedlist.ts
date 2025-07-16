class ListNode {
      val: number
      next: ListNode | null
      size: number = 0;
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
          console.log("Before "+this.size)
          this.size++
          console.log("After "+this.size)

      }
  }
 

function isPalindrome(head: ListNode | null): boolean {
    

  // console.log(head)

  // for (let i = 0; i < .length; i++) {
  //   const element = array[i];
    
  // }

    return false
};


// let node4 = new ListNode(4)
// let node3 = new ListNode(3,node4)
let node2 = new ListNode(2)
let head = new ListNode(1,node2);




console.log("tamanño "+head.size)

console.log('Output:', isPalindrome(head));

