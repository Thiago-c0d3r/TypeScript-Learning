let testes: number[] = [1, 2, 3, 4, 5];

testes.push(6);//add um valor ao final do array

testes.pop();//remove o ultimo valor do array

testes.unshift(5);//add um valor ao inicio do array

testes.shift();//remove o primeiro valor do array

testes.splice(1,1,2)//(a partir de q indice vai começar deletar, quanto vai deletar a partir desse indice, oq vai ser colocado no lugar)

testes.forEach((numero) =>{
    return numero * 2;
});//executa a função com cada valor do array, mas não retorna nenhum array

testes.map((numero)=>{
    return numero / 2
});//o map tb executa a funçao em cada valor do array, porem ele retorna um array com os valores atualizados

testes.filter((numero)=> numero>=3);//vai filtrar valores dentro do array e retorna um array com os valores filtrados

testes.includes(3);//retorna true ou false, serve para verificar se o dado existe no array




