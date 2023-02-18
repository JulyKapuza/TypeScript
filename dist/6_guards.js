"use strict";
function strip(x) {
    if (typeof x === "number") {
        return x.toFixed(2);
    }
    return x.trim();
}
class MyResponse {
    constructor() {
        this.header = "response header";
        this.result = "responsse result";
    }
}
class MyError {
    constructor() {
        this.header = "error header";
        this.message = "error result";
    }
}
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result,
        };
    }
    else {
        return res.header + res.message;
    }
}
function setAlertType(type) {
    if (type === "success") {
        console.log("Congratulation");
    }
}
setAlertType("success");
//# sourceMappingURL=6_guards.js.map