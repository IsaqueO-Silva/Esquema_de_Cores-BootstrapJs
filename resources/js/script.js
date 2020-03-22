/*O nome das funções é referente ao nome das cores em hexadecimal
#145A32 -> Crusoe 
#0B5345 -> Cyprus
#E74C3C -> Cinnabar
#0d2679 -> Sapphire
#F4D03F -> Festival
*/
function Crusoe()
{
    var header1 = window.document.getElementById('header')
    var footer1 = window.document.getElementById('footer')

    header1.style.background = '#145A32'
    footer1.style.background = '#145A32'
}
function Cyprus()
{
    var header1 = window.document.getElementById('header')
    var footer1 = window.document.getElementById('footer')

    header1.style.background = '#0B5345'
    footer1.style.background = '#0B5345'
}
function Cinnabar()
{
    var header1 = window.document.getElementById('header')
    var footer1 = window.document.getElementById('footer')

    header1.style.background = '#E74C3C'
    footer1.style.background = '#E74C3C'
}
function Sapphire()
{
    var header1 = window.document.getElementById('header')
    var footer1 = window.document.getElementById('footer')

    header1.style.background = '#0d2679'
    footer1.style.background = '#0d2679'
}
function Festival()
{
    var header1 = window.document.getElementById('header')
    var footer1 = window.document.getElementById('footer')

    header1.style.background = '#F4D03F'
    footer1.style.background = '#F4D03F'
}
function Alterar()
{   
    var var1 = window.document.getElementById('cor')
    cor = String(var1.value)
    var header1 = window.document.getElementById('header')
    var footer1 = window.document.getElementById('footer')
    
    header1.style.background = cor
    footer1.style.background = cor
}