function SearchNumber(search) {
    
    if (search === 2) {
        return true;
    }
    
    for (i = 2; i < search; i++) {

        if (search % i == 0) {
            return false;
        }
    }
    return true;
}

function HowMany(num) {

    let list = [];

    for (j=2; num != list.length; j++) {

        if (SearchNumber(j) ) {
            list.push(j);
        }
    }
    return list;
}

let num_1 = process.argv[2];

console.time();
HowMany(num_1);
console.timeEnd();