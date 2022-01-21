// Turkish characters and ASCII table together
function leftPad(inputStr,paddedLength,padChar)
{
    let errorMsg; //variable for dynamic error msg
    padCharWithoutSpace=padChar.replace(/\s/g, ''); //to delete spaces from padChar
    if(typeof inputStr == "string" || typeof inputStr == "number"){ //condition if input string and number or "not"
        if(inputStr!=""){ // condition if input empty string
            if(paddedLength >= 1){ // condition if output length is higher then 1 or at least equal to 1 or not
                if(/^[\x00-\x7F^\wığüşöçĞÜŞÖÇİ]+$/.test(padCharWithoutSpace)){ //condition if padChar is contains turkish chars and ascii table
                    if(inputStr.toString().length >= paddedLength){ // condition if input lenght > paddedLength
                        return inputStr.toString(); // set output string
                    }else{
                        const howManyPadChar=paddedLength-inputStr.toString().length; // to calculate how many pad char do we need
                        const result=padCharWithoutSpace.repeat(howManyPadChar)+inputStr.toString(); // create output
                        return result;
                    }
                }else{
                    //throw error for padChar is non-ascii char
                    errorMsg="padChar must be a printable ASCII char as well as any character in Turkish alphabet!";
                    throw new Error(errorMsg);
                }
            }else{
                //throw error for paddedLength is less then 1
                errorMsg="paddedLength should be greater than or equal to 1!";
                throw new Error(errorMsg);
            }
        }else{
            return "";//return emty for empty input
        }
    }else{
        return "";//return empty for other type of inputs(to handle them)
    }
}
console.log(leftPad("1",5,' a'));
module.exports = leftPad;