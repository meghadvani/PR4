function rvsstring(s) {
    let stack = [];
    for (let ch of s) {
        stack.push(ch);
    }

    let result = "";
    while (stack.length) {
        result += stack.pop();
    }
    return result;
}


console.log(rvsstring("hello"));
console.log(rvsstring("world"));