function nextGreater(arr) {
    let result = Array(arr.length).fill(-1);
    let stak = [];

    for (let i = 0; i < arr.length; i++) {
        while (stak.length && arr[stak[stak.length - 1]] < arr[i]) {
            let index = stak.pop();
            result[index] = arr[i];
        }
        stak.push(i);
    }
    return result;
}

console.log(nextGreater([4, 5, 2, 10]));