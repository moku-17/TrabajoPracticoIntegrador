const valorTicket=200;
function mostrarTotal(){
    let cantidad=document.getElementById("cantidad").value;
    let categoria=document.getElementById("categoria").value;
    let descuento;
    if(categoria==1){
        descuento=80;
    } else if (categoria==2){
        descuento=50;
    } else {
        descuento=15;
    }
    console.log(`Nos piden ${cantidad} ticket(s)`);
    console.log(`Con un ${descuento}% de descuento`);
    let total=valorTicket*cantidad
    total -= total*descuento/100
    document.getElementById("totalAPagar").innerHTML=total;
}