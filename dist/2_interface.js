"use strict";
const rect1 = {
    id: "1234",
    size: {
        width: 20,
        height: 50,
    },
    color: "#ffffff",
};
const rect2 = {
    id: "14",
    size: {
        width: 20,
        height: 50,
    },
};
rect2.color = "black";
const rect3 = {};
const rect5 = {
    id: "1235",
    size: {
        width: 45,
        height: 15,
    },
    getArea() {
        return this.size.width * this.size.height;
    },
};
console.log(rect5.getArea());
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px",
};
//# sourceMappingURL=2_interface.js.map