import { expect } from "chai";

function size(cms) {
  if (cms < 38) {
    return "S";
  } else if (cms < 42) {
    return "M";
  } else {
    return "L";
  }
}

expect(size(37)).equals("S");
expect(size(38)).equals("M");
expect(size(39)).equals("M");
expect(size(40)).equals("M");
expect(size(41)).equals("M");
expect(size(42)).equals("L");
expect(size(43)).equals("L");
console.log("All is well (maybe!)");
