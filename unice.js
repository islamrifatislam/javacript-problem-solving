
const name = ['rifat', 'ratul', 'nabial','baba', 'dada','baba', 'ma', 'dada'];

function noDuplicate(arr) {
    const unique = [];
    for (const item of arr) {
        if (unique.includes(item) === false) {
            unique.push(item); 
        }
    }
    return unique;
}

console.log(noDuplicate(name));
