describe("leftPad", function() {
    let leftPad=require('../lib/SmartStringUtils');

    describe("when leftPad is used to peform generate a string padded left", function(){
        //Spec for padding operation you gave me
        it("should be able to give me 'aaaa1' as string", function() {
            expect(leftPad(undefined,5,"_")).toEqual("");
        });
        it("should be able to give me '' as string", function() {
            expect(leftPad(true, 8, "-")).toEqual("");
        });
        it("should be able to give me '' as string", function() {
            expect(leftPad({},0,"")).toEqual("");
        });
        it("should be able to give me 'aaaa1' as string", function() {
            expect(leftPad(1,5," a")).toEqual("aaaa1");
        });
        it("should be able to give me 'aaaa1' as string", function() {
            expect(leftPad("1",5," a")).toEqual("aaaa1");
        });

        //spec for padding i've added

        //returns itself
        it("should be able to give me 'onur' as string", function() {
            expect(leftPad("onur",4," a")).toEqual("onur");
        });
        //return null if typeof inputStr is "null"
        it("should be able to give me '' as string", function() {
            expect(leftPad(null,4," a")).toEqual("");
        });
        //return "" if inputStr is ""
        it("should be able to give me '' as string", function() {
            expect(leftPad("",4," a")).toEqual("");
        });
        //returns number inputStr as string
        it("should be able to give me '4' as string", function() {
            expect(leftPad(4,1," a")).toEqual("4");
        });
        //spec for errors
        //if paddedLength <1
        it("should be able to throw error when i send <1 for paddedLength as argument", function() {
            expect(function(){
                leftPad("1",0," a");
            }).toThrow(new Error("paddedLength should be greater than or equal to 1!"));
        });
        //if padChar is non-ascii character
        it("should be able to throw error when i try to send non-ascii char for padChar as argument", function() {
            expect(function(){
                leftPad("1",1," ®");
            }).toThrow(new Error("padChar must be a printable ASCII char as well as any character in Turkish alphabet!"));
        });
    });
});