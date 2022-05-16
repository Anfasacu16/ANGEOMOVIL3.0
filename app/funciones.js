function calcular(){
    var x = parseInt(document.getElementById('Valor1').value);
    var y = parseInt(document.getElementById('Valor2').value);
    var vivienda = parseInt(document.getElementById('vivienda').value);
    var educacion = parseInt(document.getElementById('educacion').value);
    var vestimenta = parseInt(document.getElementById('vestimenta').value);
    var salud = parseInt(document.getElementById('salud').value);
    
    document.getElementById('gastos').innerHTML =  y+vivienda+educacion+vestimenta+salud;

    var gastos = y+vivienda+educacion+vestimenta+salud;

    document.getElementById('result').innerHTML =  x-gastos;
    var baseImponible=x-gastos;
    var impuesto=0;
    var impuestoFraccionBasica=0;
    var porcentajeExcedente=0;
    var excedente=0;
    if (baseImponible>0 && baseImponible<=11212)
    {
        impuestoFraccionBasica=0;
        excedente=baseImponible-0;
        porcentajeExcedente=excedente*0;
    }

    if (baseImponible>11212 && baseImponible<=14285)
    {
        impuestoFraccionBasica=0;
        excedente=baseImponible-11212;
        porcentajeExcedente=excedente*0.05;
    }

    if (baseImponible>14285 && baseImponible<=17854)
    {
        impuestoFraccionBasica=154;
        excedente=baseImponible-14285;
        porcentajeExcedente=excedente*0.10;
    }

    if (baseImponible>17854 && baseImponible<=21442)
    {
        impuestoFraccionBasica=511;
        excedente=baseImponible-17854;
        porcentajeExcedente=excedente*0.12;
    }

    if (baseImponible>21442 && baseImponible<=42874)
    {
        impuestoFraccionBasica=941;
        excedente=baseImponible-21442;
        porcentajeExcedente=excedente*0.15;
    }

    if (baseImponible>42874 && baseImponible<=64297)
    {
        impuestoFraccionBasica=4156;
        excedente=baseImponible-42874;
        porcentajeExcedente=excedente*0.20;
    }

    if (baseImponible>64297 && baseImponible<=85729)
    {
        impuestoFraccionBasica=8440;
        excedente=baseImponible-64297;
        porcentajeExcedente=excedente*0.25;
    }

    if (baseImponible>85729 && baseImponible<=114288)
    {
        impuestoFraccionBasica=13798;
        excedente=baseImponible-85729;
        porcentajeExcedente=excedente*0.30;
    }

    if (baseImponible>114288)
    {
        impuestoFraccionBasica=22366;
        excedente=baseImponible-114288;
        porcentajeExcedente=excedente*0.35;
    }

    impuesto=impuestoFraccionBasica+porcentajeExcedente;

    document.getElementById('result3').innerHTML =  impuesto;
    document.getElementById('result4').innerHTML =  excedente;
    document.getElementById('result2').innerHTML =  porcentajeExcedente;
}

function limpiar(){
    document.getElementById('Formulario').reset();
}

