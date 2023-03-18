const lyrics = 'sada sada kala kala rong jomeche sada kala Hoichi ami mon pagla bosontto batase';


// many way to search strin value

console.log(lyrics.includes('Rong'));

const doesExist = lyrics.includes('hoichi');
console.log(doesExist);

// if i want ignore uppercase lowercase then follow this way 

const searchString = 'hOichi';
const doesEXist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesEXist);

//------------------------------------------
// search korar aro another way ache 
// indexOf 

console.log(lyrics.indexOf('mon'));

// ---------- startswith 
// aita mani akta string ar first a mil ache kina oita check kore 

console.log(lyrics.startsWith('sada'));

// -------- endswith 
// aita check kore string ar last a mill ache kina 

const fileNmae = 'biodata.png';
console.log(fileNmae.endsWith('.png'));