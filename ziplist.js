const inputList1 = ['a', 'b', 'c'];
const inputList2 = [1, 2, 3];

function zipList(list1, list2) {
  const listResult = [];
  for (let i = 0; i < list1.length; i++) {
    listResult.push(list1[i], list2[i]);
  }
  return listResult;
}

console.log(zipList(inputList1, inputList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(inputList1, inputList2));