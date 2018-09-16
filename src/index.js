module.exports = function сheck(str, bracketsConfig) {
    var start = '';
    var end = '';
    var s = [];
    for (var i = 0; i < bracketsConfig.length; i++) {
        start += bracketsConfig[i][0];
        end += bracketsConfig[i][1];
    };
    for (var j = 0; j < str.length; j++) {
        if (start.includes(str[j]) && end.includes(str[j])){
            console.log('availeble in both parts');
            if (!s.includes(str[j])) {
                s.push(str[j]);
            } else {
                s.pop();
            }
            continue;
        }
        if (start.includes(str[j])) {
            s.push(str[j]);
            continue;
        }
        if (!end.includes(str[j])) {
            return false;
        }
        //check if array is empty or 1 element
        if (!s.length) {
            return false;
        }

        var popitem = s.pop();
        var indexForSearch = end.indexOf(str[j]);
        var pairValue = start[indexForSearch];
        //find pair

        if (pairValue != popitem) {
            return false;
        }

    }
    return (!s.length);
}

