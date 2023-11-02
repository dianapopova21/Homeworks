function removeElement(array, item) {
    for(let i = array.length - 1; i >= 0; i--){
        if(Array.isArray(item) && Array.isArray(array[i]) && JSON.stringify(item) === JSON.stringify(array[i])){
            array.splice(i, 1);
        }
        else if(array[i] === item){
            array.splice(i, 1);
        }
    }
}
const userArray = [1, 'string', 2, 'string', 3, 4, 'string', 3, 'delete me', [1,2,3]];
console.log(userArray);
const arr = [1,2,3];
removeElement(userArray, arr);
console.log(userArray);