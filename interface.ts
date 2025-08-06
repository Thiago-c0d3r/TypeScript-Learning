interface Produto{
    id: number;
    nome:string;
    preco:number;
}

//cria um tipo para usar em objetos, toda vez que criar um objeto com esse tipo
//terá que usar todas as propriedades e os tipos definidos pela interface, veja abaixo:

const teclado: Produto = {
    id:1,
    nome:'teclado mecânico',
    preco:120.50
}

//interfaces são ideias para definir padrões para os objetos
//da pra usar interface em arrays, veja abaixo:

const listaProdutos:Produto[]=[
    {id:1, nome:'Teclado Mecânico', preco:249.79},
    {id:2, nome:'Mouse Gamer', preco:149.90},
    {id:3, nome:'Headset Gamer', preco:258.87}
]



//praticando...
interface champion{
    nome:string;
    funcao:string;
    nivelMaestria:number;
}

const garen: champion =
{
    nome:'garen',
    funcao:'tanque',
    nivelMaestria:7
}

