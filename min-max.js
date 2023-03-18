const jimin = 84;
const delai = 99;
const chink = 78;
if (jimin > delai && jimin > chink) {
    console.log('Jim get cake');
}
else if (delai > jimin && delai > chink) {
    console.log('then dela get cake');
}
else {
    console.log('Chinku get cake ');
}
// --------------------------------------------------------------------------------------------------------------------------------------
//

function getMax(jim, dela, chinku) {
    return Math.min(jim, dela, chinku);
}

let everyMarks = getMax(84, 99, 78);
console.log('The lowest Number is :', everyMarks);
// --------------------------------------------------------------------------------------------------------------------------------------
//
const jim = 84;
const dela = 99;
const chinku = 78;
console.log('Heighest Number is :', Math.max(jim, dela, chinku));