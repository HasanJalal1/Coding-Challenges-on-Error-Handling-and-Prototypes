function manipulatestring(inputstring, callback){
    const manipulatedstring = inputstring.toUpperCase();
    callback(manipulatedstring);
}
function logString(manipulatedstring){
    console.log(`The manipulated string is: ${manipulatedstring}`);
}
manipulatestring("hello, world!",logString)