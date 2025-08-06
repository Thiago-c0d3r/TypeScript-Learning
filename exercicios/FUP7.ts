const peso: number[]=[ 
45.25,
65.88,
77.90, 
38.10, 
56.65
];
let soma= 0;
peso.forEach((peso) => {
    soma+=peso
})
console.log(soma/peso.length);

