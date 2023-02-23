import chai from "chai";
import mocha, { it } from "mocha";
import add from "./app";
let a = 2;
let b = 3;
describe("adding two numbers ", () => {
  it(`This is adding two numbers ${a} to ${b} give the result 5`, () => {
    chai.expect(add(a, b)).to.equal(6);
  });
});
