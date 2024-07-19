
let valorBebida, valorPrato, valorSobremesa
let pratoNome, bebidaNome, sobremesaNome
let soma = 0


function selecionarPrato(e)
{
    const pratoSelecionado = document.querySelector('#pratos .selecionado')
    valorPrato = e.querySelector('span')
    pratoNome = e.querySelector('h3').innerHTML

    if(pratoSelecionado !== null)
    {
        pratoSelecionado.classList.remove('selecionado')
    } 
        
    e.classList.add("selecionado")

    valorPrato = valorPrato.innerHTML.replace(',', '.')
}

function selecionarBebida(e)
{
    const pratoSelecionado = document.querySelector('#bebidas .selecionado')
    valorBebida = e.querySelector('span')
    bebidaNome = e.querySelector('h3').innerHTML

    if(pratoSelecionado !== null)
    {
        pratoSelecionado.classList.remove('selecionado')
    } 
        
    e.classList.add("selecionado")

    valorBebida = valorBebida.innerHTML.replace(',', '.')
}

function selecionarSobremesa(e)
{
    const pratoSelecionado = document.querySelector('#sobremesas .selecionado')
    valorSobremesa = e.querySelector('span')
    sobremesaNome = e.querySelector('h3').innerHTML


    if(pratoSelecionado !== null)
    {
        pratoSelecionado.classList.remove('selecionado')
    } 
        
    e.classList.add("selecionado")

    valorSobremesa = valorSobremesa.innerHTML.replace(',', '.')

}

function mostrarPedido()
{
    const pratoValor = document.querySelector('.valor-prato')
    const pedidoPrato = document.querySelector('.pedido-prato')
    const bebidaValor = document.querySelector('.valor-bebida')
    const pedidoBebida = document.querySelector('.pedido-bebida')
    const sobremesaValor = document.querySelector('.valor-sobremesa')
    const pedidoSobremesa = document.querySelector('.pedido-sobremesa')
    pratoValor.innerHTML = `R$ ${valorPrato.replace('.',',')}`
    pedidoPrato.innerHTML = pratoNome
    bebidaValor.innerHTML = `R$ ${valorBebida.replace('.',',')}`
    pedidoBebida.innerHTML = bebidaNome
    sobremesaValor.innerHTML = `R$ ${valorSobremesa.replace('.',',')}`
    pedidoSobremesa.innerHTML = sobremesaNome

}

function fecharPedido()
{

    if(valorPrato !== undefined && valorBebida !== undefined && valorSobremesa !== undefined)
    {
        document.querySelector('.confirme-pedido').classList.remove('escondido')

        const divs = [ valorPrato, valorBebida, valorSobremesa];
          
          divs.forEach(div => {
            const valor = parseFloat(div.replace(',', '.'));
            soma += valor;
          })
          
          document.querySelector('.valor-total').innerHTML = `R$ ${soma.toFixed(2).replace('.',',')}`
    }

    mostrarPedido()

    console.log(soma.replace('.',','))

}

function confirmarPedido()
{
    /*
     Olá, gostaria de fazer o pedido:
    - Prato: Frango Yin Yang
    - Bebida: Coquinha Gelada
    - Sobremesa: Pudim
    Total: R$ 27,70
     */

    somaStr = soma.toString()

    let somaComVirgula = somaStr.replace('.', ',')

    let msg = `Olá, gostaria de fazer o pedido:\nPrato: ${pratoNome}\nBebida: ${bebidaNome}\nSobremesa: ${sobremesaNome}\nTotal: R$ ${somaComVirgula}`

    window.location.href = `https://wa.me//5547996668850?text=${msg}`;
}

function voltar()
{
    document.querySelector('.confirme-pedido').classList.add('escondido')

    soma = 0
}













