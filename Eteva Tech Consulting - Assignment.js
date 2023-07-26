let list_a = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
let list_b = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// a. Get a unique set of users from list_a which are not in list_b
let uniquelist_a = list_a.filter(user => !list_b.includes(user));
console.log(uniquelist_a);

// b. Get a unique set of users from list_b which are not in list_a
let uniquelist_b = list_b.filter(user => !list_a.includes(user));
console.log(uniquelist_b);

// c. Get a set of users who are present in both list_a and list_b (intersection of list_a & list_b)
let commonUsers = list_a.filter(user => list_b.includes(user));
console.log(commonUsers);