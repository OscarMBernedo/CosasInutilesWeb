/*ReqI12*/
function mostrarEntero(idCampo, idResultado) {
    var dato = document.getElementById(idCampo).value;
    var formateado = integerFormat.format(dato);

    document.getElementById(idResultado).innerHTML = "🧮 Cantidad elegida: " + formateado;
}

/*ReqI12*/
function mostrarPrecio(idCampo, idResultado) {
    var dato = document.getElementById(idCampo).value;
    /*ReqI14*/
    var formateado = currencyFormat.format(dato);

    document.getElementById(idResultado).innerHTML = "🧮 Cantidad elegida: " + formateado;
}

/*ReqI12*/
function mostrarDecimal(idCampo, idResultado) {
    var dato = document.getElementById(idCampo).value;
    /*ReqI13*/
    var formateado = numberFormat.format(dato);
    
    document.getElementById(idResultado).innerHTML = "📦 Peso total: " + formateado + " kg";
}

/*ReqI12*/
function mostrarFecha(idCampo, idResultado) {
    var dato = document.getElementById(idCampo).value;
    var fecha = new Date(dato);
    /*ReqI15*/ /*ReqI15*/
    var formateado = dateFormat.format(fecha);

    document.getElementById(idResultado).innerHTML = "📦 Fecha del pedido: " + formateado;
}

function procesarPedido(idUnidades, idPesoTotal, idPrecioUnitario, idPesoFinal, idCosteFinal, idFechaEntrega) {
    var pesoBruto = parseFloat(document.getElementById(idPesoTotal).value);
    var unidades = parseInt(document.getElementById(idUnidades).value);
    var precioPorUnidad = parseFloat(document.getElementById(idPrecioUnitario).value);

    if (isNaN(unidades) || unidades <= 0) {
        alert("📛 ¡Introduce una cantidad válida de productos!");
        return;
    }

    var pesoUnitario = pesoBruto / unidades;
    var precioTotal = (unidades * precioPorUnidad) + (pesoBruto / 2);
    var fechaPrevista = new Date(Date.now()+1000*60*60*24*3);

    document.getElementById(idPesoFinal).innerHTML = "🪶 Peso por unidad: " + numberFormat.format(pesoUnitario) + " kg";
    document.getElementById(idCosteFinal).innerHTML = "💰 Coste total: " + currencyFormat.format(precioTotal);
    document.getElementById(idFechaEntrega).innerHTML = "🚚 Entrega prevista: " + dateFormat.format(fechaPrevista);
}