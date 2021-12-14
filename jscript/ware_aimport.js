

//   IMPORTAÇÃO ESTÁ SENDO FEITA DINAMICANMENTO PELA FUNÇÃO CARREGA PÁGINAS
//-----------------------------------------------------------------------------
//import {Modulo_gastando} from './ware_gastando.js';


//console.log(gasto);
//console.log(gastar());
//console.log("abrir nova funcao");

export var modulo_ativo = "";
export var arquivo_html = "";

document.querySelectorAll("li").forEach( nav => {
		
		nav.addEventListener("click", () => { 
			
			Carrega_paginas(nav); 
		}
	);

});




function Carrega_paginas(element){
	
	
	if( element.id.includes("modulo") ) {
		
		
		
		arquivo_html = `pagina_${element.getAttribute("id").slice(7,999)}.html`;



		// CHAMADA FETCH também funciona, no entanto, parece estar mais lenta
		//======================================================================

		fetch(arquivo_html).then( (response) => {

			return response.text();

		}).then( function(pagina_carregar){

		
			document.querySelector('.area01_container').innerHTML = pagina_carregar; 



		});


		//importaçao dinamica
		modulo_ativo = import(`./ware_${element.getAttribute("id").slice(7,999)}.js`);

		

	}



}




