// Identify and solve the error in this snippet.
var obj = { name: "Vijay Shankar", details: { age: 35 } };
for (var i in obj) {
    //     if (typeof obj[i] === 'object') {
    //         // other code...
    //     }
    var j = i;
    console.log(j);
    if (typeof obj[j] === 'object') {
    }
    console.log(i);
}
