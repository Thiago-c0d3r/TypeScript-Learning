function Posto (choice:number):void{
    switch (choice) {
        case 1:
            console.log("Álcool")
            break;
        case 2:
            console.log("Gasolina")
            break;
        case 3:
            console.log("Diesel")
            break;
    
        default:
            console.log("Escolha algum número de 1 a 3!")
            break;
    }
}
Posto(1);