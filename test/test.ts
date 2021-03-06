import {SiGNMove, BareSiGNMove} from "alg"
import {KPuzzle} from "../src/kpuzzle"
import {Puzzles} from "../src/puzzle_definitions"

import { expect } from "chai";

describe("applySiGNMove()", () => {
  it("should be able to apply a SiGN move", () => {
    const p = new KPuzzle(Puzzles["333"]);
    p.applySiGNMove(BareSiGNMove("R", 6));
    expect(p.serialize()).to.equal("CORNERS\n7 1 2 4 3 5 6 0\n0 0 0 0 0 0 0 0\nEDGES\n0 1 2 11 7 5 6 4 8 9 10 3\n0 0 0 0 0 0 0 0 0 0 0 0");
  });
});
