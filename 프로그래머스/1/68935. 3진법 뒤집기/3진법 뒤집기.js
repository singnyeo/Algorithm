function solution(n) {
    const tri = n.toString(3);
    const triReverse = tri.split("").reverse().join("");
    return parseInt(triReverse,3)
}