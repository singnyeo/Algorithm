function solution(strings, n) {
    for (let i = 0; i < strings.length - 1; i++) {
        for(let j = i + 1; j < strings.length; j++) {
            const a = strings[i];
            const b = strings[j];
            
            if (a[n] > b[n] || (a[n] === b[n] && a > b)) {
                let temp = strings[i];
                strings[i] = strings[j];
                strings[j] = temp;
            }
        }
    }
    return strings;
}