const preco: number = 10;
const nomeProduto: string = "Monitor";
const temNoEstoque: boolean = false;
const modelos: string [] = ["140hz", "250hz", "350hz"];
if (temNoEstoque){
    console.log(`O produto ${nomeProduto} está disponível por R$${preco}.`);
}else{
    console.log(`O produto ${nomeProduto} não está disponível.`);
}
