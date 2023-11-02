
function createHash(key, secret) {
    const combinedData = key + secret;
    let hash = '';
    for (let i = 0; i < combinedData.length; i++) {
        const char = combinedData.charAt(i); // возвращает каждый символ строки combineData
        const charCode = char.charCodeAt(0); // преобразовует символ в число по Unicode
        hash += char + charCode; // генерируем hash
    }
    return hash.toString();
}

const key = prompt('Enter the key');
const secret = 'my_secret';
const hash1 = createHash(key, secret);
const hash2 = createHash(key, secret);

console.log('Hash 1:', hash1);
console.log('Hash 2:', hash2);

console.log('Are hashes equal?', hash1 === hash2);
