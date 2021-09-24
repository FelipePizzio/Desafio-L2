const caixa1 = {
    altura: 30,
    largura: 40,
    comprimento: 80
}

const caixa2 = {
    altura: 80,
    largura: 50,
    comprimento: 40
}

const caixa3 = {
    altura: 50,
    largura: 80,
    comprimento: 60
}

function thePerfectBox(altura, largura, comprimento) {
    if ( caixa1.altura >= altura && caixa1.largura >= largura && caixa1.comprimento >= comprimento ) 
        return 'Caixa 1'
    else if ( caixa2.altura >= altura && caixa2.largura >= largura && caixa2.comprimento >= comprimento ) 
        return 'Caixa 2'
    else if ( caixa3.altura >= altura && caixa3.largura >= largura && caixa3.comprimento >= comprimento ) 
        return 'Caixa 3'
    else
        return 'Sem caixa disponivel'
}

console.log( thePerfectBox(40, 10, 25) )
console.log( thePerfectBox(40, 30, 30) )
console.log( thePerfectBox(15, 20, 10) )
console.log( thePerfectBox(10, 30, 10) )
console.log( thePerfectBox(30, 15, 10) )