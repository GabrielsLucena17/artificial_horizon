var calQ;
const quadrado = document.getElementById("quadrado");
const slider = document.getElementById("slider");
const circulo_central = document.getElementById("circulo_central");
const slider_alt = document.getElementById("slider_alt");
const valor_vento_inp = document.getElementById("valor_vento_inp");
const valor_altitude_inp = document.getElementById("valor_altitude_inp");
const circulo_regua = document.getElementById("circulo_regua");
const aviao = document.getElementById("aviao");

$('#slider_number').change(()=>{
  quadrado.style.transform = `rotate(${parseInt($('#slider_number').val())}deg)`;
})

$("#start_stop").click(()=>{
    if($("#start_stop").text() == "INICIAR"){
        $("#start_stop").text("PARAR")
        $("#slider_alt").val(10)
        setInterval(ContarSegundos, 1000);
        setInterval(ContarSegundosSlider, 5000);
        startTime()
        
    }else{
        $("#start_stop").text("INICIAR")
        location.reload()
    }
})

slider.addEventListener("input", () => {
  funcEixoAvi()
});

slider_alt.addEventListener("input", () => {
  funcEixoAvi()
})

valor_vento_inp.addEventListener("input", () => {
    var valor = $('#valor_altitude_inp').val()
    funcaoVento(valor)

})

function startTime() {
    
}
function funcaoVento(valor) {

    if(valor < 10){
        valor = `000${valor}`
    }else if(valor < 100){
        valor = `00${valor}`
    }else if(valor < 1000){
        valor = `0${valor}`
    }else{
        valor = valor
    }
    
    if(valor.split('')[4] == "."){
        var texte = valor[3]
        var valor5 = texte + "." + valor.split('.')[1]
        document.querySelector("#relogio .number_rel_four div").style.marginTop = `-${valor5 * 30}px`;
    }else{
        document.querySelector("#relogio .number_rel_four div").style.marginTop = `-${valor.split('')[3] * 30}px`;

    }

    document.querySelector("#relogio .number_rel_three div").style.marginTop = `-${valor.split('')[2] * 30}px`;
    document.querySelector("#relogio .number_rel_two div").style.marginTop = `-${valor.split('')[1] * 30}px`;
    document.querySelector("#relogio .number_rel_one div").style.marginTop = `-${valor.split('')[0] * 30}px`;

    document.querySelector("#quadrado_rel .teste div").style.marginBottom = `-${valor * 61}px`;

}

const lista = new Array()
const listaVnt = new Array()

function ContarSegundosSlider() {
    $("#slider_alt").val(getRandomInt(-2, 2))
}

function ContarSegundos(){
    $("#slider_alt").val()
    if ((lista.length * 140) > 5000){
        var valor = lista.length * 140
    }else{
        if(parseInt(slider_alt.value) > 0){
            lista.push("1");
            var valor = lista.length * 140
        }else if(parseInt(slider_alt.value) < 0){
            lista.splice("1", 1)
            var valor = lista.length * 140
        }else{
            var valor = lista.length * 140
        }
    }

    if(parseInt(slider_alt.value) > 0){
        listaVnt.push("1");
        var valorVnt = listaVnt.length * 10
    }else if(parseInt(slider_alt.value) < 0){
        listaVnt.splice("1", 1)
        var valorVnt = listaVnt.length * 10
    }else if((listaVnt.length * 10) > 120 && parseInt(slider_alt.value) < 0){
        listaVnt.splice("1", 1)
        var valorVnt = listaVnt.length * 10
    }else{
        var valorVnt = listaVnt.length * 10
    }
    

    funcaoAltitude(valor)
    funcaoVento(valorVnt)
    funcEixoAvi()
}





valor_altitude_inp.addEventListener("input", () => {
    var valor = $('#valor_altitude_inp').val()
    funcaoAltitude(valor)

})
function funcaoAltitude(valor) {
    if(valor < 10){
        valor = `000${valor}`
    }else if(valor < 100){
        valor = `00${valor}`
    }else if(valor < 1000){
        valor = `0${valor}`
    }else{
        valor = `${valor}`
    }
    document.querySelector("#relogio_dir .number_rel_four_dir div").style.marginTop = `-${valor.split('')[3] * 30}px`;
    document.querySelector("#relogio_dir .number_rel_three_dir div").style.marginTop = `-${valor.split('')[2] * 30}px`;
    document.querySelector("#relogio_dir .number_rel_two_dir div").style.marginTop = `-${valor.split('')[1] * 30}px`;
    document.querySelector("#relogio_dir .number_rel_one_dir div").style.marginTop = `-${valor.split('')[0] * 30}px`;
    document.querySelector("#quadrado_rel_dir .teste_dir div").style.marginBottom = `-${valor * 61}px`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function funcEixoAvi() {
    var valueGraus = getRandomInt(-100,100) * (Math.PI / 90.0)
  if(parseInt(slider_alt.value) > 0){
    calQ = -715 + parseInt(slider_alt.value)
    cal = 286 + valueGraus
    
  }else{
    calQ = -715 + parseInt(slider_alt.value)
    cal = 286 - valueGraus
  }

  quadrado.style = `margin-top:${calQ}px;`;
  quadrado.style.transform = `rotate(${valueGraus}deg)`;
  circulo_central.style.transform = `rotate(${valueGraus}deg)`;
  $('#slider_number').val($("#slider").val())
  $('#slider_alt_number').val($("#slider_alt").val())
  circulo_regua.style.marginLeft = `${valueGraus}px`
  aviao.style.transform = `rotate(${cal}deg)`;

}

document.querySelector(".number_rel_four").innerHTML = (
    new Array(10).fill(0).map((n,i)=>{
        return `
        <div>
            ${i}
        </div>
        `
    }).join("")
)

document.querySelector(".number_rel_three").innerHTML = (
    new Array(10).fill(0).map((n,i)=>{
        return `
        <div>
            ${i}
        </div>
        `
    }).join("")
)

document.querySelector(".number_rel_two").innerHTML = (
    new Array(10).fill(0).map((n,i)=>{
        return `
        <div>
            ${i}
        </div>
        `
    }).join("")
)

document.querySelector(".number_rel_one").innerHTML = (
    new Array(10).fill(0).map((n,i)=>{
        return `
        <div>
            ${i}
        </div>
        `
    }).join("")
)

document.querySelector(".number_rel_four_dir").innerHTML = (
    new Array(10).fill(0).map((n,i)=>{
        return `
        <div>
            ${i}
        </div>
        `
    }).join("")
)

document.querySelector(".number_rel_three_dir").innerHTML = (
    new Array(10).fill(0).map((n,i)=>{
        return `
        <div>
            ${i}
        </div>
        `
    }).join("")
)

document.querySelector(".number_rel_two_dir").innerHTML = (
    new Array(10).fill(0).map((n,i)=>{
        return `
        <div>
            ${i}
        </div>
        `
    }).join("")
)

document.querySelector(".number_rel_one_dir").innerHTML = (
    new Array(10).fill(0).map((n,i)=>{
        return `
        <div>
            ${i}
        </div>
        `
    }).join("")
)


document.querySelector(".teste").innerHTML = (
    new Array(1001).fill(0).map((n,i)=>{
        if (i == 0){
            return `
            <div>
                ${i}
            </div>
            `
        }else{
            return `
            <div>
                ${i}
            </div>
            `
        }


    }).join("")
    )

document.querySelector(".teste_dir").innerHTML = (
    new Array(9999).fill(0).map((n,i)=>{
        if (i == 0){
            return `
            <div>
                ${i}
            </div>
            `
        }else{
            return `
            <div>
                ${i}
            </div>
            `
        }


    }).join("")
    )

document.querySelector("#relogio .number_rel_four div").style.marginTop = `-${0}px`;
document.querySelector("#relogio .number_rel_three div").style.marginTop = `-${0}px`;
document.querySelector("#relogio .number_rel_two div").style.marginTop = `-${0}px`;
document.querySelector("#relogio .number_rel_one div").style.marginTop = `-${0}px`;

