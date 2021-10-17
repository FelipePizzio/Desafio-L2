const produtos = [
    { 
        name: 'ps5',
        altura: 40,
        largura: 10,
        comprimento: 25
    },
    { 
        name: 'volante',
        altura: 40,
        largura: 30,
        comprimento: 30
    },
    {
        name: 'joystick',
        altura: 15,
        largura: 20,
        comprimento: 10
    },
    {
        name: 'fifa',
        altura: 10,
        largura: 30,
        comprimento: 10
    },
    {
        name: 'cod',
        altura: 30,
        largura: 15,
        comprimento: 10
    }
]

const caixas = [
    {
        name: 'caixa 1',
        altura: 30,
        largura: 40,
        comprimento: 80
    },
    {
        name: 'caixa 2',
        altura: 80,
        largura: 50,
        comprimento: 40
    },
    {
        name: 'caixa 3',
        altura: 50,
        largura: 80,
        comprimento: 60
    }
] 

const carrinho = {
    altura: 0,
    largura: 0,
    comprimento: 0
}

function adicionarAoCarrinho( carrinho, produto ) {
    const prod = produtos.find( e => e.name === produto )
    carrinho.altura += prod.altura
    
    if( carrinho.largura < prod.largura )
        carrinho.largura = prod.largura
    
    if( carrinho.comprimento < prod.comprimento )
        carrinho.comprimento = prod.comprimento

    console.log(carrinho)
}

function empacotar( carrinho ) {
    const espacoVazio = []
    let pacote
    //calcula o espaço vazio restante de cada caixa, considerando a rotação delas 
    caixas.forEach( caixa => {
        if ( carrinho.altura <= caixa.altura ) {
            pacote = {
                name: caixa.name,
                altura: caixa.altura - carrinho.altura,
                largura: caixa.largura - carrinho.largura,
                comprimento: caixa.comprimento - carrinho.comprimento
            }
            espacoVazio.push(pacote)
        }
        else if ( carrinho.altura <= caixa.largura ) {
            pacote = {
                name: caixa.name,
                altura: caixa.largura - carrinho.altura,
                largura: caixa.comprimento - carrinho.largura,
                comprimento: caixa.altura - carrinho.comprimento
            }
            espacoVazio.push(pacote)
        }
        else if ( carrinho.altura <= caixa.comprimento ) {
            pacote = {
                name: caixa.name,
                altura: caixa.comprimento - carrinho.altura,
                largura: caixa.altura - carrinho.largura,
                comprimento: caixa.largura - carrinho.comprimento
            }
            espacoVazio.push(pacote)
        }
        else {
            pacote = {
                name: 'Não há caixas para empacotar esses produtos'
            }
            espacoVazio.push(pacote)
        }
    })
    console.log(espacoVazio)

    //retorna qual das caixas tem o menor espaço vazio restante, logo a melhor caixa
    let theBox = espacoVazio[0]
    for( let i = 1; i < espacoVazio.length; i++ ) {
        if( 
            theBox.altura > espacoVazio[i].altura &&
            theBox.largura > espacoVazio[i].largura && 
            theBox.comprimento > espacoVazio[i].comprimento ) 
        {
            theBox = espacoVazio[i]
        }
    }
    console.log('melhor caixa: ', theBox.name)
}

adicionarAoCarrinho( carrinho, 'volante' )
adicionarAoCarrinho( carrinho, 'joystick' )
adicionarAoCarrinho( carrinho, 'fifa' )
adicionarAoCarrinho( carrinho, 'joystick' )

empacotar( carrinho )