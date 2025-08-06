interface produto{
    nome:string;
    preco:number;
}

type identificacao = {
id:number|string; //esse simbolo | siginifica 'ou'(alternancia)
}
//diferente da interface o type te dar a opçao de usar dois tipos em uma propriedade de objeto

type ProdutoIdentificado= produto & identificacao //esse simbolo & significa 'e' (juntar)
//um outro diferencial do type é que ele tb consegue juntar os tipos
//no exemplo acima ele juntou a interface 'produto' com o type 'identificacao', criando outro type 'ProdutoIdentificado'

