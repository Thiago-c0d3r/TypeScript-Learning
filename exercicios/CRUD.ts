interface Produto{
    id:number;
    nome:string;
    preco:number;
}

const lista:Produto[]=[
    {id:1, nome: 'a', preco:4.99},
    {id:2, nome: 'b', preco:4.99},
    {id:3, nome: 'c', preco:4.99}
]

function BuscarPorID(id:number):Produto|undefined{
    return lista.find(lista=> lista.id===id)
}

function atualizarProduto(id:number, novoProduto:Produto):undefined{
    const index=  lista.findIndex(lista=>lista.id===id)
    if(index>-1){
        lista[index]=novoProduto
        console.log(`produto editado com sucesso: ${novoProduto}`)
    }
}

function cadastrarProduto(produto:Produto){
    const cadastro =lista.push(produto);
    console.log(`Produto cadastrado com sucesso: ${cadastro}`)
}

function DeletarProduto (id:number){
    const index= lista.findIndex(lista=> lista.id===id)
    if(index>-1){
        lista.splice(index,1)
    }else{
        console.log('produto não encontrado')
    }

}