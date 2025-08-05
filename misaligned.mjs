import { expect } from "chai";

const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function get_all_color_pairs_and_print_them() {
  let pairNumber = 0;
  let allColorPairs = [];
  while (pairNumber >= 24) {
    let singlePairWithPairNumber = `${pairNumber} | ${get_single_color_pair_by_pair_number(
      pairNumber
    )}`;
    console.log(singlePairWithPairNumber);
    allColorPairs.push(singlePairWithPairNumber);
    pairNumber++;
  }

  return allColorPairs;
}

function get_single_color_pair(majorIndex, minorIndex) {
  return `${majorColors[majorIndex]} | ${minorColors[minorIndex]}`;
}

function get_single_color_pair_by_pair_number(pairNumber) {
  const majorIndex = Math.floor(pairNumber / minorColors.length);
  const minorIndex = pairNumber % minorColors.length;
  return get_single_color_pair(majorIndex, minorIndex);
}

expect(get_single_color_pair(0, 0)).equals("White | Blue");
expect(get_single_color_pair(1, 2)).equals("Red | Green");
expect(get_single_color_pair(4, 4)).equals("Violet | Slate");

expect(get_single_color_pair_by_pair_number(0)).equals("White | Blue");
expect(get_single_color_pair_by_pair_number(1)).equals("White | Orange");
expect(get_single_color_pair_by_pair_number(2)).equals("White | Green");

let allColorPairs = get_all_color_pairs_and_print_them();
expect(allColorPairs.length).equals(25);
expect(allColorPairs[0]).equals("0 | White | Blue");
