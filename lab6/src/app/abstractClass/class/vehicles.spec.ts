import { Plane } from "./classes";

describe("Plane testing", () => {
    let plane: Plane;
    beforeEach(() => {
        plane = new Plane("Plane 1", 5, 200);
    });

    it("Plane was created", ()=>{
        expect(plane).toBeTruthy();
    })

    it("Check cost", () => {
        let expectedCost = 100* plane.h * plane.v;
        let realCost = plane.getCost();

        expect(expectedCost.toFixed(2)).toBe(realCost.toFixed(2));
    });
})