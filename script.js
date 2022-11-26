

var controleCampo = 1;
function adicionarCampo(){
    controleCampo++;
    document.getElementById('selectIten').insertAdjacentHTML('beforeend','<div '+controleCampo+'><form id="selectIten"> <input type="text " name="produtos" id="product"> <button type="button" onclick="adicionarCampo()" id="btn"> + </button></form> <button type="button" id"'+controleCampo+'" onclick="removerCampo('+controleCampo+')">-</button> </div>');
}



