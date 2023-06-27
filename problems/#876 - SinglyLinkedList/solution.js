/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let step = head;
  let twoStep = head;
  while (twoStep !== null && twoStep.next !== null) {
    step = step.next;
    twoStep = twoStep.next.next;
  }
  return step;
};
