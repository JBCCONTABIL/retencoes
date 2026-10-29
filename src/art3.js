/* LC 116/2003, art. 3º — exceções ao local do estabelecimento prestador (base da Isabela / Econet, 27/10/2026).
   Incisos alterados pela LC 157/2016 e declarados inconstitucionais (ADI 5.835 e 5.862) seguem a redação anterior.
   XXIII (4.22, 4.23, 5.09), XXIV (15.01) e XXV (15.09) foram declarados inconstitucionais: voltam ao estabelecimento prestador. */
const ART3 = {
  '03.05': { inc: 'II',    local: 'da instalação dos andaimes, palcos, coberturas e outras estruturas' },
  '07.02': { inc: 'III',   local: 'da execução da obra' },
  '07.19': { inc: 'III',   local: 'da execução da obra' },
  '14.14': { inc: 'III',   local: 'da execução da obra', obs: 'Incluído no inciso III pela LC 218/2025, com efeitos a partir de 25/09/2025.' },
  '07.04': { inc: 'IV',    local: 'da demolição' },
  '07.05': { inc: 'V',     local: 'das edificações em geral, estradas, pontes, portos e congêneres' },
  '07.09': { inc: 'VI',    local: 'da execução da varrição, coleta, remoção e tratamento de lixo e resíduos' },
  '07.10': { inc: 'VII',   local: 'da execução da limpeza, manutenção e conservação' },
  '07.11': { inc: 'VIII',  local: 'da execução da decoração e jardinagem, do corte e poda de árvores' },
  '07.12': { inc: 'IX',    local: 'do controle e tratamento do efluente e de agentes físicos, químicos e biológicos' },
  '07.16': { inc: 'XII',   local: 'do florestamento, reflorestamento, semeadura e congêneres', obs: 'Vale a redação anterior à LC 157/2016 (ADI 5.835 e 5.862).' },
  '07.17': { inc: 'XIII',  local: 'da execução do escoramento e contenção de encostas' },
  '07.18': { inc: 'XIV',   local: 'da limpeza e dragagem' },
  '11.01': { inc: 'XV',    local: 'onde o bem estiver guardado ou estacionado' },
  '11.02': { inc: 'XVI',   local: 'dos bens ou do domicílio das pessoas vigiados', obs: 'Vale a redação anterior à LC 157/2016 (ADI 5.835 e 5.862), sem "segurados ou monitorados".' },
  '11.04': { inc: 'XVII',  local: 'do armazenamento, depósito, carga, descarga, arrumação e guarda do bem' },
  '16.01': { inc: 'XIX',   local: 'onde está sendo executado o transporte', obs: 'Vale a redação anterior à LC 157/2016 (ADI 5.835 e 5.862).' },
  '16.02': { inc: 'XIX',   local: 'onde está sendo executado o transporte', obs: 'Vale a redação anterior à LC 157/2016 (ADI 5.835 e 5.862).' },
  '17.05': { inc: 'XX',    local: 'do estabelecimento do tomador da mão de obra', tomador: 1 },
  '17.10': { inc: 'XXI',   local: 'da feira, exposição, congresso ou congênere' },
  '20.01': { inc: 'XXII',  local: 'do porto, aeroporto, ferroporto ou terminal', obs: 'Serviços em águas marítimas são devidos no estabelecimento prestador (§ 3º), exceto os do próprio 20.01.' },
  '20.02': { inc: 'XXII',  local: 'do porto, aeroporto, ferroporto ou terminal' },
  '20.03': { inc: 'XXII',  local: 'do porto, aeroporto, ferroporto ou terminal' },
  '03.04': { inc: '§ 1º',  local: 'em cada município em cujo território haja extensão da ferrovia, rodovia, postes, cabos ou dutos', multi: 1 },
  '22.01': { inc: '§ 2º',  local: 'em cada município em cujo território haja extensão de rodovia explorada', multi: 1 }
};
['12.01','12.02','12.03','12.04','12.05','12.06','12.07','12.08','12.09','12.10','12.11','12.12','12.14','12.15','12.16','12.17']
  .forEach(k => ART3[k] = { inc: 'XVIII', local: 'da execução do serviço de diversão, lazer ou entretenimento' });
/* Itens que já tiveram local no tomador e voltaram à regra geral por inconstitucionalidade */
const ART3_ADI = { '04.22': 'XXIII', '04.23': 'XXIII', '05.09': 'XXIII', '15.01': 'XXIV', '15.09': 'XXV' };
/* LC 116/2003, art. 6º, § 2º, II — tomador PJ responsável por lei complementar */
const ART6_II = ['03.05','07.02','07.04','07.05','07.09','07.10','07.12','07.16','07.17','07.19','11.02','17.05','17.10'];
