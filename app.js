
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let com = ['.com', '.net', '.us', '.io'];

function f_genDomain(array1, array2, array3, array4) {
    array_result = [];
    array_position = 0;

    for (i = 0; i < array1.length; i++) {
        for (j = 0; j < array2.length; j++) {
            for (k = 0; k < array3.length; k++) {
                for (p = 0; p < array4.length; p++) {
                    array_result.push(array1[i] + array2[j] + array3[k] + array4[p]);
                    document.write(array_result[array_position] + "<br>");
                    array_position++;
                }
            }
        }
    }
    return array_result;
}


f_genDomain(pronoun, adj, noun, com);
