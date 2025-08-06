function diaDaSemana(dia:number):void{
    switch (dia) {
        case 1:
            console.log("Domingo")    
            break;
        case 2:
            console.log("Segunda-Feira")    
            break;
        case 3:
            console.log("Terça-Feira")    
            break;
        case 4:
            console.log("Quarta-Feira")    
            break;
        case 5:
            console.log("Quinta-Feira")
        case 6:
            console.log("Sexta-Feira")    
            break;    
        case 7:
            console.log("Sábado")    
            break;
        default:
            console.log("Digite algum número de 1 a 7!")
            break;
    }
}
diaDaSemana(4)