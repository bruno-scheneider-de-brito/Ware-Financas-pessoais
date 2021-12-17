


import {pagina_gastando, modulo_ware_gastando} from './ware_gastando.js'; 



export var Modulo_gastando_completo = {

	Validacao_ul_dados_lanca: document.querySelector("html").addEventListener("keyup", 
			function Valida_ul_dados_lanca(event){

				if(pagina_gastando === 'novo_completo'){

					event.preventDefault();

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

						
					}
				}


			}), 


	Select_tipo_pagto: document.querySelector("html").addEventListener("change", 
			function Lista_periodo_pagto(element){

				//if(pagina_gastando === 'novo_completo'){

					let element_list = element.target;

					if(element_list.id === 'select_pgto_tipo'){

				
						//-- REMOVE A SELEÇÃO FORMA PGTO ANTERIOR ---
						document.querySelectorAll(".li_vista_prazo").forEach( (li) => {
							li.remove();

						});

					
						var tipo_pgto_selecionado = "";

						switch(element_list.value){


							case '0':
								tipo_pgto_selecionado = `<li >

														</li>`;

														//        OCULTA - QUANT PARCELAS E GRID DE PARCELAMENTO
														//------------------------------------------------------------------
														document.querySelector("#select_pgto_quant_parcelas").classList.add("disabled");
														document.querySelector("#select_pgto_quant_parcelas").setAttribute("disabled", true);
														document.querySelector("#select_pgto_quant_parcelas").parentElement.classList.remove("quant_parcela");
														document.querySelectorAll(".ul_hearder_parcelamento")[0].style.display = "none";				
														document.querySelectorAll(".ul_parcelamento").forEach( ul => ul.remove() );

								break;


		
							case '1':
								tipo_pgto_selecionado = `<li class="li_vista_prazo"><label>Data pagamento</label>   <br> 
															<input type="date" id="inp_pgto_data" name="inp_pgto_data required autofocus size="">
																
															
														</li>`;

														document.querySelector("#select_pgto_quant_parcelas").parentElement.classList.remove("quant_parcela");
														document.querySelector("#select_pgto_quant_parcelas").parentElement.setAttribute("style", 'display:none;');

								break;

							case '2':
								tipo_pgto_selecionado	= `<li class="li_vista_prazo"><label>Intervalo:</label>     <br> 
														<select type="text" id="select_pgto_intervalo_parcela" name="select_pgto_intervalo_parcela" >
															<option value="0"></option>
															<option value="30">Mensal</option>
															<option value="15">Quinzenal</option>
															<option value="365">Anual</option>
															<option value="45">45 dias</option>
														</select>
													</li>`;

													document.querySelector("#select_pgto_quant_parcelas").parentElement.removeAttribute("style");
													document.querySelector("#select_pgto_quant_parcelas").removeAttribute("disabled", true);
														

								break;
						}


						//------TRANSFORMA STRING em OBJETO HTML ----------					
						var parser = new DOMParser();
						var doc_HTML = parser.parseFromString(tipo_pgto_selecionado, "text/html");


						//---------LANÇA OPÇÃO DA FOFMA PAGAMENTO  ------------------
						element_list.parentElement.after(doc_HTML.querySelector('li') );
					}

				//}

			}),

	Select_forma_pagto: document.querySelector("html").addEventListener("change", 
			function Lista_forma_pagto(element){

				let element_list = element.target;

				if(element_list.id === 'select_pgto_forma'){

					//-- REMOVE A SELEÇÃO FORMA PGTO ANTERIOR ---
					document.querySelectorAll(".li_pagto").forEach( (li) => {
						li.remove();

					});

				
					var pgto_selecionado = "";

					switch(element_list.value){

						case '1':
							pgto_selecionado = `<li class="li_pagto"><label>Dinheiro</label>   <br> 
														<input type="search" id="inp_pgto_dinheiro" name="inp_pgto_dinheiro" list="comb_pgto_dinheiro" required autofocus size="">
															<datalist  id="comb_pgto_dinheiro">
																<option plano_conta="8">Carteira : Bruno Scheneider </option>
																<option plano_conta="9">Carteira : Leozinho Holanda </option>
																<option plano_conta="10">Carteira : Marquin Doidinho </option>
															</datalist>
														
												</li>`;

													

							break;

						case '2':
							pgto_selecionado = `<li class="li_pagto"><label>Cartão Crédito</label>   <br> 
														<input type="search" id="inp_pgto_cartao_cred" name="inp_pgto_cartao_cred" list="comb_pgto_cartao_cred" required autofocus size="">
															<datalist  id="comb_pgto_cartao_cred">
																<option plano_conta="1">VISA   | NUBANK    | validade: 12/2030 | BRUNO S BRITO</option>
																<option plano_conta="2">MASTER | NUBANK    | validade: 12/2030 | BRUNO S BRITO</option>
																<option plano_conta="3">CIELO  | INTER     | validade: 12/2030 | BRUNO S BRITO</option>
																<option plano_conta="4">COBOL  | BRASIL    | validade: 12/2030 | BRUNO S BRITO</option>
																<option plano_conta="5">MASTER | CREDICARD | validade: 12/2030 | BRUNO S BRITO</option>
																<option plano_conta="6">VISA   | BTG-PAC   | validade: 12/2030 | BRUNO S BRITO</option>
																<option plano_conta="7">MASTER | SICOOB    | validade: 12/2030 | BRUNO S BRITO</option>
															</datalist>
														
													</li>`;

							break;



						case '3':
							pgto_selecionado = `<li class="li_pagto"><label>Cartão de Débito</label>   <br> 
														<input type="search" id="inp_pgto_cartao_deb" name="inp_pgto_cartao_deb" list="comb_pgto_cartao_deb" required autofocus size="">
															<datalist  id="comb_pgto_cartao_deb">
																<option plano_conta="11">BRASIL | AG: 3152 CC: 20154-4 Titular: BRUNO SCHENEIDER</option>
																<option plano_conta="12">CEF | AG: 0126 CC: 2854-4Titular: LEOZINHO DOIDO</option>
																<option plano_conta="13">ITAU | AG: 6565 CC: 201-4Titular: MARQUIN DOIDINHO </option>
																<option plano_conta="14">SANTANDER | AG: 0001 CC: 545454-4 Titular: CRISTINA DA GLORIA </option>
															</datalist>
														
												</li>`;

							break;



						case '4':
							pgto_selecionado = `<li class="li_pagto"><label>Cheque</label>   <br> 
														<input type="search" id="inp_pgto_cheque" name="inp_pgto_cheque" list="comb_pgto_cheque" required autofocus size="">
															<datalist  id="comb_pgto_cheque">
																<option plano_conta="15">BRASIL | Titular: BRUNO SCHENEIDER</option>
																<option plano_conta="16">CEF | Titular: LEOZINHO DOIDO</option>
																<option plano_conta="17">ITAU | Titular: MARQUIN DOIDINHO </option>
																<option plano_conta="18">SANTANDER | Titular: CRISTINA DA GLORIA </option>
																
															</datalist>
														
												</li>`;

							break;

						case '5':
							pgto_selecionado = `<li class="li_pagto"><label>Carnê da Loja</label>   <br> 
														<input type="search" plano_conta="9999" id="inp_pgto_carne" name="inp_pgto_carne" placeholder="Nome do devedor na loja" list="comb_pgto_carne" required autofocus size="">
															
												</li>`;

							break;


						case '6':
							pgto_selecionado = `<li class="li_pagto"><label>Débito em Conta</label>   <br> 
														<input type="search" id="inp_pgto_debitoconta" name="inp_pgto_debitoconta" list="comb_pgto_debitoconta" required autofocus size="">
															<datalist  id="comb_pgto_debitoconta">
																<option plano_conta="19">BRASIL | AG: 3152 CC: 20154-4 Titular: BRUNO SCHENEIDER</option>
																<option plano_conta="20">CEF | AG: 0126 CC: 2854-4Titular: LEOZINHO DOIDO</option>
																<option plano_conta="21">ITAU | AG: 6565 CC: 201-4Titular: MARQUIN DOIDINHO </option>
																<option plano_conta="22">SANTANDER | AG: 0001 CC: 545454-4 Titular: CRISTINA DA GLORIA </option>
															</datalist>
														
												</li>`;

							break;

					} // fim switch


					//------TRANSFORMA STRING em OBJETO HTML ----------
					
					var parser = new DOMParser();
					var doc_HTML = parser.parseFromString(pgto_selecionado, "text/html");


					//---------LANÇA OPÇÃO DA FOFMA PAGAMENTO  ------------------
					element_list.parentElement.after(doc_HTML.querySelector('li') );


				}


			}),


	Carrega_datalist: document.querySelector("html").addEventListener("change", 
			function Seta_value_do_option(element){

				let element_list = element.target;
				let datalist =  Array.from(element_list.parentElement.children).filter( element => element.tagName ==='DATALIST' );				
				let datalist_array =  datalist.length > 0 ? Array.from(datalist[0].children) : '';


				//---- FILTRA TODOS OS ELEMENTOS OPTIONS DO DATALIST E monta um array
					var attribute_para_input = "";

					var array_valores_dos_options = [];
						for(let i=0; i<datalist_array.length; i++){
							 array_valores_dos_options.push({option_id: datalist_array[i].attributes[0].value, option_descri:datalist_array[i].innerText});
							
							attribute_para_input = datalist_array[i].attributes[0].nodeName;

								//console.log(datalist_array[i].innerText);
						}
				
						
					var input_com_datalist = element_list.value.replaceAll(/\s+/g," ");
					
						 array_valores_dos_options.forEach(opt => {
						

							// ------------------strOrigem.replaceAll(/\s+/," "); -------------------
							// EXPRESSÃO REGULAR REGEX - que retira espaços em branco entre as palavras
							let option_limpo_espacos = opt.option_descri.replaceAll(/\s+/g," ");

						
							//- TESTA IGUALDADE ENTRE VALOR_DO_OPTION COM  VALORES_DO-ARRAY_OPTIONS
							if( option_limpo_espacos.trim().localeCompare(input_com_datalist.trim() ) == 0){
								
								element_list.setAttribute(attribute_para_input, opt.option_id);
								
							}
							
						});
					//console.log(inp_local);


			}),




	Gerar_vencimento: 			
			//pt.stackoverflow.com/questions/155782/parcelamento-com-data-pulando-m%C3%AAs-de-fevereiro
			function calcularParcelas(parcelas, stringData) {
				// --   retorna 2010-07-31  entre os indices da string ---
			    var ano = stringData.substring(0,4);
			    var mes = stringData.substring(5,7);
			    var dia = stringData.substring(8,10);
			    var dia_31 = stringData.substring(8,10);
			    parcelas = parseInt(parcelas);
			    	
				
				function correcaoDia(dia) {
				    if (isNaN(dia)) return false;
				    
				    return dia < 10 ? "0" + dia : dia ;
				}

				function correcaoMes(mes) {
				    if (isNaN(mes)) return false;
				    
				    return mes < 10 ? "0" + mes : mes ;
				}


		       	function CorrecaoDia31(mes_venc){
		       		let mes_31_dias = false;
		        	["01", "03", "05", "07", "08", "10", "12"].forEach( mes_31 => {
		        		
		        		if(parseInt(mes_31) === parseInt(mes_venc) ){

							mes_31_dias = true;		
        						        			
		        		}  
		        	
		        	});

		        	if(mes_31_dias === true){
		        		
		        	}

		        	if(mes_31_dias === false){
		        		dia_vencimento = dia_31 -1;
		        		
		        	}

		      	}


				 //http://stackoverflow.com/a/16353241/2467235
				 function leapYear(year){
					return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

				  }


				//if( dia == '31') dia ='30';				    
			  	if( dia =='29' && leapYear(ano ) )  dia = '28';

			    var dataInicial = new Date(ano,mes,dia);

			    		
						//console.log("datainicial", isNaN(dataInicial.getDate()), dataInicial.getMonth(), dataInicial.getFullYear() );
			    var dataParcela = new Date();
			    var resultado = [];
			    var novoMes = 0;
			    //var novoAno = 0;
			    var novoAno = dataInicial.getFullYear();
			    	

			   	for ( var p = 1 ; p < parcelas+1 ; p++ ) {

			   		//console.log( dataInicial.getMonth() );

			        novoMes = ( dataInicial.getMonth() + p ) % 12;
			        novoMes = novoMes == 0 ? 12 : novoMes;       
	 		
	 				//dataParcela.setDate(dia);
		       	    //dataParcela.setMonth(novoMes);
		       	    //dataParcela.setYear(novoMes);
			        novoMes = correcaoMes(novoMes);
			        novoMes == 1 ? novoAno = novoAno+1 : ''; 
			        let novoDia = dia;			       	
			        dataParcela.setYear(novoAno);

			        var dia_vencimento = correcaoDia( novoDia );
			        var mes_vencimento = novoMes;
			        var ano_vencimento = dataParcela.getFullYear();

			        	if(dia == '31'){ 
							CorrecaoDia31(novoMes);

				        }

				        if(mes_vencimento == '02'){
				        	dia_vencimento = "28";
				        }


			        resultado.push(dia_vencimento +"/" + mes_vencimento + "/" + ano_vencimento);
							       
			    }

			    return resultado;


			},


			


	Validacao_ul_dados_pagto: document.querySelector("html").addEventListener("change", 
			function Valida_ul_dados_pagto(event){

				// dois eventos ['click', 'keydown'].forEach(i => input.addEventListener(i, funcao));

				event.preventDefault();

				let inputs_preenchidos = Array.from(document.querySelectorAll(".ul_dados_pagto input") ).every( (input) => input.value !== '' );
				let select_preenchidos = Array.from(document.querySelectorAll(".ul_dados_pagto select") ).every( (select) => select.value !== '' );


				let quant_parcelas = document.querySelectorAll("#select_pgto_quant_parcelas");
				let tipo_vista_prazo = document.querySelectorAll(".li_vista_prazo")[0]?.lastElementChild.id;

			
				//             GERA GRID DE  PAGAMENTO PARCELADO
				//------------------------------------------------------------------
				if(tipo_vista_prazo === "select_pgto_intervalo_parcela"){


					//             MOSTRA  - QUANT PARCELAS E GRID DE PARCELAMENTO
					//------------------------------------------------------------------	
					document.querySelector("#select_pgto_quant_parcelas").parentElement.classList.add("quant_parcela");
					document.querySelector("#select_pgto_quant_parcelas").classList.remove("disabled");
					
					
					//           INICIA CALCULO DE PARCELAS - ASSIM QUE OS CAMPOS ESTIVEREM PREENCHIDOS
					//-----------------------------------------------------------------------------
					if(inputs_preenchidos && select_preenchidos && quant_parcelas[0]?.value > 1 ){

							//------------ REMOVE AS UL_PARCELAMENTO ANTERIORES ---------------------
							document.querySelectorAll(".ul_parcelamento").forEach( ul => ul.remove() );
											
							let data_gasto = document.querySelector("#inp_gasto_data").value;
							let valor_gasto = document.querySelector("#inp_gasto_valor").cloneNode(true);
							let id_forma_pgto = document.querySelector("#select_pgto_forma").value;
							let forma_pgto = document.querySelector("#select_pgto_forma").selectedOptions[0].textContent;
							let plano_conta = document.querySelector(".li_pagto > input").attributes.plano_conta.value;
							let conta_pgto = document.querySelector(".li_pagto > input").value;
							let valor_parcela = valor_gasto.value / quant_parcelas[0].value;		
							let array_parcelas = [];
								
								//console.log("forma_pagto", forma_pgto);
							
						
							for(let i=quant_parcelas[0].value; i>0; i--){
								
								if( i > 1){
									array_parcelas.push({

														//venc_parc: Modulo_gastando_completo.Gerar_vencimento(quant_parcelas[0].value,data_gasto)[i], 
														vlr_parc: valor_parcela.toFixed(2)

														});

												
								}

								if( i === 1){
									let ultima_parcela = valor_gasto.value - ( valor_parcela.toFixed(2) *(quant_parcelas[0].value-1));
									array_parcelas.push({

														//venc_parc: Modulo_gastando_completo.Gerar_vencimento(quant_parcelas[0].value,data_gasto)[i], 
														vlr_parc: ultima_parcela.toFixed(2)

														});
								}

								
							}

							array_parcelas.forEach( (parc,idx) => { 

								parc['num_parc'] = idx+1;
								parc['venc_parc'] =  Modulo_gastando_completo.Gerar_vencimento(quant_parcelas[0].value,data_gasto)[idx];
								parc['forma_pgto_id'] = id_forma_pgto;
								parc['forma_pgto'] = forma_pgto;
								parc['plano_conta_pgto'] = plano_conta;
								parc['conta_pgto'] = conta_pgto;

							

							});

							
							//console.log("array_parcelas", array_parcelas);


							//             MOSTRA  - cabecalho de parcelamento
							//------------------------------------------------------------------	
							document.querySelector(".ul_hearder_parcelamento").style.display = "inline-block";

							var parcelamento = "";


							array_parcelas.forEach( (parcela) => {

		
								parcelamento +=`<ul class="ul_parcelamento" style="display:;">
														<li class="tam1"><label>Nº parcela: </label>      <br> 
															<input type="text" name="inp_pgto_num_parcela" value="${parcela.num_parc}"  maxlength="" size="" class="input disabled" required="required" disabled="true">
														</li>
														<li class="tam1"><label>Data Vencimento:</label>   <br> 
															<input type="date"  name="inp_pgto_vencimento" value="${parcela.venc_parc.split("/").reverse().join("-")}" maxlength="10" size="10" class="input disabled" required="required" disabled="true">
														</li>
														<li class="tam3"><label>Valor parcela:</label>     <br> 
															<input type="number" name="inp_pgto_vlr_parcela" value="${parcela.vlr_parc}"  maxlength="" size="" class="input disabled" required="required" disabled="true">
														</li>

														<li class="tam2"><label>Form pagto:</label>     <br> 
																<select type="text" name="select_pgto_forma_parcela" class="input disabled" disabled="true">
																	<option value="${parcela.forma_pgto_id}">${parcela.forma_pgto}</option>
																	<option value="1">Dinheiro</option>
																	<option value="2">Cartão de Crédito</option>
																	<option value="3">Cartão de Débito</option>
																	<option value="4">Cheque pré-datado</option>
																	<option value="5">Carne da Loja</option>
																	<option value="6">Débito em Conta</option>
																 </select>
														</li>

														<li class="li_pagto"><label>${document.querySelector(".li_pagto > label").innerHTML}</label>   <br> 
																<input type="search" plano_conta="${parcela.plano_conta_pgto}" id="inp_pgto_carne" name="inp_pgto_carne" value="${parcela.conta_pgto}"class="input disabled" placeholder="Nome do devedor na loja" list="comb_pgto_carne" required autofocus size="" disabled="true">
																	
														</li>
														<li class="li_botoes">
															<button class="btn editar"><img src="icones/pencil-sharp.svg"></button>
															<button class="btn excluir"><img src="icones/trash-sharp.svg"></button>
														</li>
											
													</ul>`;


							});

							
								
							//------TRANSFORMA STRING em OBJETO HTML ----------
							var parser = new DOMParser();
							var doc_HTML = parser.parseFromString(parcelamento, "text/html");
											

							//---------LANÇA OPÇÃO DA FOFMA PAGAMENTO  ------------------
							//document.querySelector(".ul_hearder_parcelamento").after(doc_HTML);
							Array.from(doc_HTML.querySelectorAll("body > ul ")).reverse().forEach( ul => document.querySelector(".ul_hearder_parcelamento").after(ul) );
						
						
		
					}

					//       OCULTA UL_PARCELAMENTO SE OS CAMPOS NÃO ESTIVEREM PREENCHIDOS ou PARCELA MENOR QUE 2
					//-------------------------------------------------------------------------------
					if (inputs_preenchidos && select_preenchidos && quant_parcelas[0]?.value < 2){

											
						document.querySelectorAll(".ul_hearder_parcelamento")[0].style.display = "none";

						document.querySelectorAll(".ul_parcelamento").forEach( ul => ul.remove() );


					}

				}


				//           PAGAMENTO A VISTA  => OCULTA QUANT PARCELAS E GRID DE PARCELAMENTO
				//------------------------------------------------------------------
				if(tipo_vista_prazo === "inp_pgto_data"){

						document.querySelector("#select_pgto_quant_parcelas").classList.add("disabled");
						document.querySelector("#select_pgto_quant_parcelas").parentElement.classList.remove("quant_parcela");
						document.querySelectorAll(".ul_hearder_parcelamento")[0].style.display = "none";				
						document.querySelectorAll(".ul_parcelamento").forEach( ul => ul.remove() );

						
				}



			}),


	Select_repete_lanc: document.querySelector("html").addEventListener("change", 
			function Lista_repeticao_gasto(element){

				let element_list = element.target;


				if(element_list.id === 'select_gasto_repetir'){

			
					//-- REMOVE A SELEÇÃO REPETICAO ANTERIOR ---
					document.querySelectorAll(".li_repete_gasto").forEach( (element) => {
						element.setAttribute("style", 'display:none;');
						element.children[2].classList.add("disabled");
						element.children[2].setAttribute("disabled",true);

					});

				
					var repeticao_selecionada = "";


					switch(element_list.value){


						case '0':
								repeticao_selecionada = `<li >

														</li>`;
							break;


						case '1':
	
								//         SIM : MOSTRA OPÇÕES DE REPETICAO DO LANÇAMENTO
								//------------------------------------------------------------------	
								document.querySelector("[name=select_gasto_repetir_quando]").parentElement.classList.add("repete_gasto");
								document.querySelector("[name=select_gasto_repetir_quando]").parentElement.removeAttribute("style");
								document.querySelector("[name=select_gasto_repetir_quando]").removeAttribute("disabled");
								document.querySelector("[name=select_gasto_repetir_quando]").classList.remove("disabled");
								document.querySelector("[name=inp_gasto_venc_repeticao]").parentElement.classList.add("repete_gasto");
								document.querySelector("[name=inp_gasto_venc_repeticao]").parentElement.removeAttribute("style");
								document.querySelector("[name=inp_gasto_venc_repeticao]").removeAttribute("disabled");
								document.querySelector("[name=inp_gasto_venc_repeticao]").classList.remove("disabled");

							break;


						case '2':
							
								//         HOJE : MOSTRA OPÇÕES DE REPETICAO DO LANÇAMENTO
								//------------------------------------------------------------------	
								document.querySelector("[name=inp_gasto_quant_repeticao]").parentElement.classList.add("repete_gasto");
								document.querySelector("[name=inp_gasto_quant_repeticao]").parentElement.removeAttribute("style");
								document.querySelector("[name=inp_gasto_quant_repeticao]").removeAttribute("disabled");
								document.querySelector("[name=inp_gasto_quant_repeticao]").classList.remove("disabled");
								

							break;


					}

				}

			}),



}

