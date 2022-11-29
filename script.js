var controleCampo = 1;
function adicionarCampo() {
    controleCampo++;
    document.getElementById('selectIten').insertAdjacentHTML('beforeend','<div id="campo' + controleCampo + '"><form'
        + controleCampo + '" id="selectIten"> <input type="text " name="produtos" id="product"> </button></form><button type="button"' + controleCampo + ' onclick="removerCampo(' + controleCampo + ')".remove> - </button> </div>');
}

function removerCampo(idCampo) {
    document.getElementById('campo' + idCampo).remove();
}

