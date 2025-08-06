const notas:number[]=[
    10,
    7,
    5,
    8
]
const ordem= notas.sort((a,b)=>a-b);
let total=0;
notas.forEach((nota)=>{
 return total+=nota;
})
console.log(`a maior nota foi ${ordem[3]} e a menor foi ${ordem[0]}. A média das notas foi ${total/notas.length}`)