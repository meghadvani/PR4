// Check if Queue is Palindrome or not

function Palindrome(queue){
    let stack = [];
    let OriginalSize = queue.length;


    for(let i = 0; i < OriginalSize; i++)
    {
        stack.push(queue[i]);
    }
    
    for (let i = 0; i < OriginalSize; i++) {
        if(queue[i] !== stack.pop()){
            return false;
        }
    }
    return true;
}

let queue = [2,5,6,5,2];
console.log(Palindrome(queue));