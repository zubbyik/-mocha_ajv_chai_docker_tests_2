"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var mocha_1 = require("mocha");
var app_1 = __importDefault(require("./app"));
var a = 2;
var b = 3;
describe("adding two numbers ", function () {
    (0, mocha_1.it)("This is adding two numbers ".concat(a, " to ").concat(b, " give the result 5"), function () {
        chai_1.default.expect((0, app_1.default)(a, b)).to.equal(5);
    });
});
//# sourceMappingURL=test_src.js.map