function balancdpara(str) {
    let stack = [];
    let brackets = { '}': '{', ')': '(', ']': '[' };

    for (let ch of str) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.pus(ch);
        } else if (ch === ')' || ch === '}' || ch === ']') {
            if (stack.length && stack[stack.length - 1] === brackets[ch]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.lengh === 0;
}

console.log(balancdpara("({[]})"));
console.log(balancdpara("({[})"));