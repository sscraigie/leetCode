class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

//----------Solution 1----------//
//Speed:
//Memory:

// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (!root) return null; //This is to make typscript happy
//   let head = root;
//   while (true) {
//     if (head.val === val) return head;
//     if (val < head.val && head.left) {
//       head = head.left;
//     } else if (val > head.val && head.right) {
//       head = head.right;
//     } else {
//       return null;
//     }
//   }
// }

//----------Solution 2----------//
//Speed:
//Memory:

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return null;
  if (root.val === val) return root;
  if (root.val > val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
}

//----------Tests----------//
console.log(
  searchBST(
    new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7)
    ),
    2
  )
); // [2,1,3]
console.log(
  searchBST(
    new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7)
    ),
    5
  )
); // []
console.log(
  searchBST(
    new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7)
    ),
    7
  )
); // [7]
console.log(
  searchBST(
    new TreeNode(
      4,
      new TreeNode(2, new TreeNode(1), new TreeNode(3)),
      new TreeNode(7)
    ),
    1
  )
); // [1]
