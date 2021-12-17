


import {pagina_gastando, modulo_ware_gastando} from './ware_gastando.js'; 



export var Modulo_gastando_simples = {

	Validacao_ul_dados_lanca: document.querySelector("html").addEventListener("keyup", 
			function Valida_ul_dados_lanca(event){

				if(pagina_gastando === 'novo_simples'){

					console.log("lancamento simples SALVAR ");

					/*event.preventDefault();

					let inputs_preenchidos = Array.from(document.querySelectorAll(".ul_dados_lanca input")).every( (input) => input.value !== '');

					if(inputs_preenchidos){

						document.querySelector(".ul_dados_pagto").style.display = "flex";

						document.querySelectorAll(".ul_dados_pagto input").forEach( (inp) => {
							inp.classList.remove("disabled");
							inp.removeAttribute("disabled");
						});
						document.querySelectorAll(".ul_dados_pagto select").forEach( (inp) => {
							inp.classList.remove("disabled");
							inp.removeAttribute("disabled");
						});
						
					}*/
				}

			}), 


}