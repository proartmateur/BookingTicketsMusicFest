describe("Hello", ()=>{
    it("World", ()=>{
        const s: string[] = [];
        s.push("Hola Ts Jest");
        expect(s.length).toEqual(1);
        expect(true).toBe(true);
    })
})
