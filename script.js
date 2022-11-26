

var controleCampo = 1;
function adicionarCampo(){
    controleCampo++;
    document.getElementById('selectIten').insertAdjacentHTML('beforeend','<div id="form'+controleCampo+'"><form  id="campo ' + controleCampo + '" id="selectIten"> <input type="text " name="produtos" id="product"> <button type="button" onclick="adicionarCampo()" id="btn"> + </button></form> <button type="button" id"'+controleCampo+'" onclick="removerCampo('+controleCampo+')".remove>-</button> </div>');
}

function removerCampo(idCampo){
    document.getElementById('campo' + idCampo).remove();
}



