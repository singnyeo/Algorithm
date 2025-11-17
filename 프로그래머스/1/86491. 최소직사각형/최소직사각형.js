function solution(sizes) {
    for (var i = 0; i < sizes.length; i++) {
        var w = sizes[i][0];
        var h = sizes[i][1];
        if (w < h) {
            sizes[i][0] = h;
            sizes[i][1] = w;
        }
    }
    var maxWidth = 0;
    var maxHeight = 0;

    for (var i = 0; i < sizes.length; i++) {
        if (sizes[i][0] > maxWidth) {
            maxWidth = sizes[i][0];
        }
        if (sizes[i][1] > maxHeight) {
            maxHeight = sizes[i][1];
        }
    }

    var answer = maxWidth * maxHeight;
    return answer;
}
