function add(str1, str2) {
    var str = "";
    var maxVAl = str1.length >= str2.length ? str1.length : str2.length;
    var inhand = 0;
    for (var i = 0; i < maxVAl; i++) {
        var sum = 0;
        if (str1.length - 1 < i) {
            sum = Number(str2[str2.length - i - 1]) + inhand;
        }
        else if (str2.length - 1 < i) {
            sum = Number(str1[str1.length - i - 1]) + inhand;
        }
        else {
            sum = Number(str1[str1.length - i - 1]) + Number(str2[str2.length - i - 1]) + inhand;
        }
        if (sum >= 10) {
            var temp = String(sum);
            inhand = Number(temp[0]);
            str = temp[1] + str;
        }
        else {
            var temp = String(sum);
            str = temp + str;
            inhand = 0;
        }
    }
    if (inhand !== 0) {
        str = inhand + str;
    }
    return str;
}
console.log(add("235", "10117"));
