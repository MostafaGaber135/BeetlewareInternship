"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printId = printId;
function printId(id) {
    if (typeof id === "string") {
        console.log("Id: (String)", id.toUpperCase());
    }
    else if (typeof id === "number") {
        console.log("Id: (Number)", id.toFixed(2));
    }
}
