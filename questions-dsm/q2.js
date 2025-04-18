// function logMessage(level: "info" | "error", message: string) {
//     console.log(`[${level.toUpperCase()}] ${message}`);
//   }
// function safeLog(...args:Parameters<typeof logMessage>):void {
//     logMessage(...args);
// }
// function safeLog(...args:["info"|"error",string]):void {
//     logMessage(...args);
// }
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function getSafeUser(user) {
    var role = user.role, password = user.password, val = __rest(user, ["role", "password"]);
    return val;
}
console.log(getSafeUser({
    id: 5,
    name: "raja",
    email: "hello@123",
    password: "pass123",
    role: "admin"
}));
