//probleminha de funções n tipadas
/* function getItem(item) {
  return item;
}
    
const string = getItem("Thiago");
string.toFixed(2); */
//veja, quando n tipamos os parametros da função,o tipo deles é any
//ou seja, o TS n sabe de q tipo de dados estamos falando
//veja q na variavel string, eu peço pra funçao retornar "Thiago", soq esse Thiago é do tipo any
//e logo em seguida uso toFixed que é um comando usado com números
//o TS não avisa sobre esse erro pq n sabe de q tipo de valor se trata o valor retornado pela função

//felizmente, temos uma solução para isso...
//GENERICS
function testando <tsHub>(resultado:tsHub): tsHub {
    return resultado;
}
const numero = testando<number>(22)
const nome = testando<string>('Thigas')
// primeiro passo definir o nome da generic após o nome da function entre <>
//depois usá-la como tipo para os parametros e para o retorno da function
//por ultimo quando for chamar a function n esqueça de colocar o tipo entre <> antes dos parametros

//em Arrays agora
function primeiro <tsHub>(valor:tsHub[]): tsHub{
    return valor[0]
}
const primeiroNumero= primeiro<number>([1,2,3]);
const primeiorNome= primeiro<string>(['thigas','big','little'])

//em Objetos
interface Produtos{
    id:number;
    nome:string;
    preco:number;
}
const catalogo:Produtos[]=[
    {
        id:1,
        nome:"Led RGB",
        preco: 120
    },

    {
        id:2,
        nome:"Fonte 600W",
        preco:150    
    },

    {
        id:3,
        nome:"Monitor 150hz",
        preco:1200
    }
]
function buscarPorID <tsHub extends {id:number}> (listaProdutos:tsHub[],id:number):tsHub|undefined{
    return listaProdutos.find(listaProdutos=>listaProdutos.id===id)
}

const produtoEspecifico=buscarPorID(catalogo,2)
console.log(produtoEspecifico?.nome)
