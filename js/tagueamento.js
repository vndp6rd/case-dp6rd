// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

function modifyDownload() {

	//console.log('chama ga download_pdf');
	ga('send','event','menu','download_pdf','download_pdf');
}

function modifyContato() {

	//console.log('chama ga contato');
	ga('send','event','menu','entre_em_contato','link_externo');
}

function modifyMontadoras(){

	let nome = this.getAttribute('data-name');

	//console.log('chama ga montadoras');
	ga('send','event','analise','ver_mais',nome);
}

function modifySobreNome() {

	let id = document.querySelector('form > ul').querySelector("#nome").getAttribute("id");

	//console.log('chama ga nome');
	ga('send','event','contato',id,'preencheu');
}		

function modifySobreEmail() {

	let id = document.querySelector('form > ul').querySelector("#email").getAttribute("id");

	//console.log('chama ga email');
	ga('send','event','contato',id,'preencheu');
}

function modifySobreTelefone() {

	let id = document.querySelector('form > ul #telefone').getAttribute('id');

	//console.log('chama ga telefone');
	ga('send','event','contato',id,'preencheu');
}

function modifySobreAceito() {

	let id = this.getAttribute('id');
	
	//console.log('chama ga aceito');
	ga('send','event','contato',id,'preencheu');
}

function modifySobreSubmit() {
	
	//console.log('chama ga submit');
	ga('send','event','contato','enviado','enviado');
}

function modifySobreEmail() {

	let id = document.querySelector('form > ul #email').getAttribute("id");

	//console.log('chama ga email');
	ga('send','event','contato',id,'preencheu');
}

//----------------------

function loadDownload() {

	//console.log('loadNew');
	let el = document.querySelector(".menu-lista-download");
	(el != null) ? el.addEventListener("click", modifyDownload, false) : null;
}

function loadContato() {

	//console.log('loadContato');
	let el = document.querySelector(".menu-lista-contato");
	(el != null) ? el.addEventListener("click", modifyContato, false) : null;
}

function loadSobre() {

	//console.log('loadSobre');
	let el = document.querySelector('form > ul #nome');
	(el != null) ? el.addEventListener("change", modifySobreNome, false) : null;

	let em = document.querySelector('form > ul #email');
	(em != null) ? em.addEventListener("change", modifySobreEmail, false) : null;

	let en = document.querySelector('form > ul #telefone');
	(en != null) ? en.addEventListener("change", modifySobreTelefone, false) : null;

	let eo = document.querySelector('form > ul #aceito');
	(eo != null) ? eo.addEventListener("click", modifySobreAceito, false) : null;
}

function loadAceitoSubmit(){
	
	//console.log('loadAceitoSubmit');
	let ep = document.querySelector("form.contato");
	(ep != null) ? ep.addEventListener("submit", modifySobreSubmit ,false) : null;
}

function loadMontadoras() {

	//console.log('loadMontadoras');
	let data = document.querySelectorAll('.card-montadoras');
	let nome;

	for (let i = 0; i < data.length; i++) {
		data[i].addEventListener("click", modifyMontadoras, false);
	}
}

document.addEventListener("DOMContentLoaded", loadDownload, false);
document.addEventListener("DOMContentLoaded", loadContato, false);
document.addEventListener("DOMContentLoaded", loadMontadoras, false);
document.addEventListener("DOMContentLoaded", loadSobre, false);
document.addEventListener("DOMContentLoaded", loadAceitoSubmit, false);