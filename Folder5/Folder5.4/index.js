const prob10 = () => {
    let total = 0;
    for (let i = 0; i < 2019; ++i) {
        if (i % 3 != 0) {
            // console.log(i.toString());
            q = i.toString().split("");
            // console.log(q);
            let yes = true;
            for (let j = 0; j < q.length; ++j) {
                if (q[j] == "3" || q[j] == "6" || q[j] == "9") {
                    yes = false;
                    // console.log(i[j]);
                }
            }
            if (yes) {console.log(q.join("")); ++total;};
        }
    }
    console.log(total);
    return total;
};
// prob10();

for (let m = 0; m < 100; ++m) {
    for (let n = m+1; n < 100; ++n) {
        if (27*m*m*n*n - 18*m*m - 18*n*n - 2007 == 0) console.log(m, n);
    }
}


for (let x = -5000; x < 5000; ++x) {
    for (let y = -5000; y < 5000; ++y) {
        if (Math.pow(x, 3)-Math.pow(y, 3)-6*x*y-3 == 0) console.log(x, y);
    }
}

for (let a = 1; a < 50000; ++a) {
    for (let b = 1; b < 50000; ++b) {
        // if (Math.pow(x, 3) - Math.pow(y, 3) - 6 * x * y - 3 == 0) console.log(x, y);
        if (((65*a*a + 2*a*b + b*b)*(a*a + 8*a*b + 65*b*b)) == Math.pow((8*a*a + 39*a*b + 7*b*b), 2)) console.log(a, b);
    }
}

for (let m = 1; m < 50000; ++m) {
    for (let n = 1; n  < 50000; ++n) {
        // if (Math.pow(x, 3) - Math.pow(y, 3) - 6 * x * y - 3 == 0) console.log(x, y);
        // if (((65 * a * a + 2 * a * b + b * b) * (a * a + 8 * a * b + 65 * b * b)) == Math.pow((8 * a * a + 39 * a * b + 7 * b * b), 2)) console.log(a, b);
        if (m*m -n == 32) console.log(m ,n);
    }
}


let i = 0;
let j = Math.sqrt(300 * (256 / (25 * Math.sqrt(3))));
console.log(j/2 * j/2 * Math.sqrt(3));