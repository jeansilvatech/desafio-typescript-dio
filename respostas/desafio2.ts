enum Trabalho {
    Atriz,
    Padeiro
}
type Pessoas= {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Pessoas ={
 nome: "Laura",
 idade: 32,
 profissao:Trabalho.Atriz
}

let pessoa2: Pessoas={
    nome: "Carlos",
    idade: 19,
    profissao: Trabalho.Atriz
}
let pessoa3: Pessoas={
    nome: "Maria",
    idade: 29,
    profissao: Trabalho.Atriz
}
let pessoa4: Pessoas ={
    nome: "Roberto",
    idade: 19,
    profissao: Trabalho.Padeiro
}
