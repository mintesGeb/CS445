"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWeekend = void 0;
function isWeekend() {
    var todayDate = new Date();
    var day = todayDate.getDay();
    var code = [true, false, false, false, false, false, true];
    return code[day];
}
exports.isWeekend = isWeekend;
