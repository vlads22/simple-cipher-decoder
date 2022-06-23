function cipher(str) {
    let strArray = str.split("")
    let control = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let codedLetter = ""
    let codedArray = []

    for (let i = 0; i < strArray.length; i++) {
        if (/^[A-Za-z0-9]*$/.test(strArray[i])) {  //if element is letter 
            for (let j = 0; j < control.length; j++) {
                if (control[j] === strArray[i]) {
                    codedLetter = control[j + 13];
                    codedArray.push(codedLetter);
                    break;
                }
            }
        }
        else {
            codedArray.push(strArray[i])
        }
    }

    let codedString = codedArray.join("");
    console.log(codedString)
    return codedString

}


cipher("CVMMN!")