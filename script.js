let monto = [];
let nombre = [];


let datos = () => {
    if($('#monto').val() && $('#nombre').val() !== ''  ) {
    let valorMonto = $('#monto').val();
    let valorNombre = $('#nombre').val();
    monto.push(parseFloat(valorMonto));
    nombre.push(valorNombre);
    $("#monto").val('');
    $("#nombre").val('');
    let dato = `<li class = "list-group-item"> ${valorNombre}: $${valorMonto} </li>`;
    $("#lista").append(dato);
    let total = monto.reduce(function(a, b){ return a + b; });
    $('#total').text('$' + total);
    let cantidad = monto.length;
    $('#totalDividido').text('$' + total / cantidad);
    } else {
        alert('Debés llenar ambos campos')
    }
};








