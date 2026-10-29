/* ═══ HIPÓTESES LEGAIS DE RETENÇÃO ═══════════════════════════════════
   Fonte de verdade do motor. Cada hipótese é uma entrada de lista fechada em lei.
   ir:   { aliq, cod, base, modo }   modo: 'reter' | 'prestador' (auto-retenção / agência) | 'confirmar'
   pcc:  base legal da CSRF (Lei 10.833/2003, art. 30; IN SRF 459/2004, art. 1º)
   inss: { art: '111' (cessão ou empreitada) | '112' (só cessão), inc }  — IN RFB 2.110/2022
   fed:  código da IN RFB 1.234/2012 quando diferente do padrão 6190
   ressalva: exceção que consta da própria lei                                              */
const IR714 = { aliq: 1.5, cod: 'DARF 1708', base: 'RIR/2018, art. 714, § 1º' };
const IR716 = { aliq: 1.0, cod: 'DARF 1708', base: 'RIR/2018, art. 716' };
const PCC_PROF = 'Lei 10.833/2003, art. 30; IN SRF 459/2004, art. 1º, § 2º, IV (serviços profissionais do art. 714, § 1º do RIR)';
const PCC_30 = 'Lei 10.833/2003, art. 30; IN SRF 459/2004, art. 1º';

const HIP = {};
function prof(id, nome, ressalva) {
  HIP[id] = { grupo: 'Serviço profissional (art. 714)', nome, ressalva, ir: IR714, pcc: PCC_PROF };
}
/* RIR/2018, art. 714, § 1º — 40 serviços profissionais */
prof('p-adm',    'Administração de bens ou negócios em geral', 'exceto consórcios ou fundos mútuos para aquisição de bens');
prof('p-adv',    'Advocacia');
prof('p-anclin', 'Análise clínica laboratorial');
prof('p-antec',  'Análises técnicas');
prof('p-arq',    'Arquitetura');
prof('p-asstec', 'Assessoria e consultoria técnica', 'exceto assistência técnica prestada a terceiros relativa a ramo de indústria ou comércio explorado pelo prestador');
prof('p-assoc',  'Assistência social');
prof('p-aud',    'Auditoria');
prof('p-aval',   'Avaliação e perícia');
prof('p-bio',    'Biologia e biomedicina');
prof('p-calc',   'Cálculo em geral');
prof('p-cons',   'Consultoria');
prof('p-cont',   'Contabilidade');
prof('p-des',    'Desenho técnico');
prof('p-eco',    'Economia');
prof('p-proj',   'Elaboração de projetos');
prof('p-eng',    'Engenharia', 'exceto construção de estradas, pontes, prédios e obras assemelhadas');
prof('p-ens',    'Ensino e treinamento');
prof('p-est',    'Estatística');
prof('p-fisio',  'Fisioterapia');
prof('p-fono',   'Fonoaudiologia');
prof('p-geo',    'Geologia');
prof('p-leil',   'Leilão');
prof('p-med',    'Medicina', 'exceto a prestada por ambulatório, banco de sangue, casa de saúde, casa de recuperação ou repouso sob orientação médica, hospital e pronto-socorro');
prof('p-nutri',  'Nutricionismo e dietética');
prof('p-odonto', 'Odontologia');
prof('p-feiras', 'Organização de feiras de amostras, congressos, seminários, simpósios e congêneres');
prof('p-pesq',   'Pesquisa em geral');
prof('p-plan',   'Planejamento');
prof('p-prog',   'Programação');
prof('p-prot',   'Prótese');
prof('p-psi',    'Psicologia e psicanálise');
prof('p-quim',   'Química');
prof('p-radio',  'Radiologia e radioterapia');
prof('p-rp',     'Relações públicas');
prof('p-desp',   'Serviço de despachante');
prof('p-to',     'Terapêutica ocupacional');
prof('p-trad',   'Tradução ou interpretação comercial');
prof('p-urb',    'Urbanismo');
prof('p-vet',    'Veterinária');

/* RIR/2018, art. 716 (1%) + CSRF + INSS (IN 2.110, art. 111) */
HIP['l-limp'] = { grupo: 'Limpeza, conservação, segurança (art. 716)', nome: 'Limpeza', ir: IR716, pcc: PCC_30, inss: { art: '111', inc: 'I' } };
HIP['l-cons'] = { grupo: 'Limpeza, conservação, segurança (art. 716)', nome: 'Conservação', ressalva: 'conservação de imóveis; reformas e obras são construção civil', ir: IR716, pcc: PCC_30, inss: { art: '111', inc: 'I' } };
HIP['l-seg']  = { grupo: 'Limpeza, conservação, segurança (art. 716)', nome: 'Segurança', ir: IR716, pcc: PCC_30, inss: { art: '111', inc: 'II' } };
HIP['l-vig']  = { grupo: 'Limpeza, conservação, segurança (art. 716)', nome: 'Vigilância', ressalva: 'para o INSS, monitoramento eletrônico não sofre retenção', ir: IR716, pcc: PCC_30, inss: { art: '111', inc: 'II' } };
HIP['l-lmo']  = { grupo: 'Limpeza, conservação, segurança (art. 716)', nome: 'Locação de mão de obra', ir: IR716, pcc: PCC_30 };
HIP['l-tval'] = { grupo: 'Limpeza, conservação, segurança (art. 716)', nome: 'Transporte de valores', ressalva: 'IR de 1% por ser tratado como segurança/vigilância', ir: IR716, pcc: PCC_30 };

/* Lei 10.833/2003, art. 30 — CSRF sem IR do art. 714 */
HIP['c-manut']  = { grupo: 'CSRF (Lei 10.833, art. 30)', nome: 'Manutenção de bens, máquinas, veículos, equipamentos e instalações', pcc: PCC_30, inss: { art: '112', inc: 'XIV' } };
const IR29 = { aliq: 1.5, cod: 'DARF 5944', base: 'Lei 10.833/2003, art. 29', modo: 'confirmar', obs: 'A RFB associa o código 5944 a empresas de factoring. Confirme se o prestador é empresa de fomento mercantil.' };
HIP['c-credit'] = { grupo: 'CSRF (Lei 10.833, art. 30)', nome: 'Assessoria creditícia', ir: IR29, pcc: PCC_30 };
HIP['c-merc']   = { grupo: 'CSRF (Lei 10.833, art. 30)', nome: 'Assessoria mercadológica', ressalva: 'propaganda e publicidade não se enquadram (SC SRRF 9ª RF 225/2004)', ir: IR29, pcc: PCC_30 };
HIP['c-gcred']  = { grupo: 'CSRF (Lei 10.833, art. 30)', nome: 'Gestão de crédito, seleção e riscos', ir: IR29, pcc: PCC_30 };
HIP['c-contas'] = { grupo: 'CSRF (Lei 10.833, art. 30)', nome: 'Administração de contas a pagar e a receber', ir: IR29, pcc: PCC_30 };

/* RIR/2018, arts. 718 e 719 */
HIP['m-comis'] = { grupo: 'Comissões e mediação (art. 718)', nome: 'Comissões e corretagens', ir: { aliq: 1.5, cod: 'DARF 8045', base: 'RIR/2018, art. 718, I' } };
HIP['m-rep']   = { grupo: 'Comissões e mediação (art. 718)', nome: 'Representação comercial', ir: { aliq: 1.5, cod: 'DARF 8045', base: 'RIR/2018, art. 718, I' } };
HIP['m-med']   = { grupo: 'Comissões e mediação (art. 718)', nome: 'Mediação de negócios', ir: { aliq: 1.5, cod: 'DARF 8045', base: 'RIR/2018, art. 718, I' } };
HIP['m-publi'] = { grupo: 'Comissões e mediação (art. 718)', nome: 'Propaganda e publicidade',
  ressalva: 'o IR é recolhido pela agência, por ordem e conta do anunciante; repasses a veículos ficam fora da base (IN SRF 123/1992; SC Cosit 234/2025)',
  ir: { aliq: 1.5, cod: 'DARF 8045 (pela agência)', base: 'RIR/2018, art. 718, II', modo: 'prestador' } };
HIP['m-auto']  = { grupo: 'Comissões e mediação (art. 718)', nome: 'Comissões com auto-retenção (IN SRF 153/1987)',
  ressalva: 'venda de passagens, excursões ou viagens; administração de cartões de crédito; colocação de títulos; câmbio; refeições-convênio e administração de convênios — o IR é recolhido pelo próprio prestador',
  ir: { aliq: 1.5, cod: 'DARF 8045 (pelo prestador)', base: 'RIR/2018, art. 718, I; IN SRF 153/1987', modo: 'prestador' } };

/* IN RFB 2.110/2022 — hipóteses só de INSS */
const inssH = (id, art, inc, nome, ressalva) => HIP[id] = { grupo: art === '111' ? 'INSS — cessão ou empreitada (IN 2.110, art. 111)' : 'INSS — cessão de mão de obra (IN 2.110, art. 112)', nome, ressalva, inss: { art, inc } };
inssH('i-cc',     '111', 'III',  'Construção civil (construção, demolição, reforma, ampliação e complementares)');
inssH('i-rural',  '111', 'IV',   'Serviços de natureza rural');
inssH('i-dig',    '111', 'V',    'Digitação');
inssH('i-prep',   '111', 'VI',   'Preparação de dados para processamento');
inssH('i-acab',   '112', 'I',    'Acabamento');
inssH('i-emb',    '112', 'II',   'Embalagem');
inssH('i-acond',  '112', 'III',  'Acondicionamento');
inssH('i-cobr',   '112', 'IV',   'Cobrança');
inssH('i-lixo',   '112', 'V',    'Coleta ou reciclagem de lixo ou de resíduos', 'exceto com uso de contêineres ou caçambas estacionárias');
inssH('i-copa',   '112', 'VI',   'Copa');
inssH('i-hotel',  '112', 'VII',  'Hotelaria');
inssH('i-corte',  '112', 'VIII', 'Corte ou ligação de serviços públicos');
inssH('i-distr',  '112', 'IX',   'Distribuição');
inssH('i-ens',    '112', 'X',    'Treinamento e ensino');
inssH('i-entr',   '112', 'XI',   'Entrega de contas e de documentos');
inssH('i-lmed',   '112', 'XII',  'Ligação de medidores');
inssH('i-leit',   '112', 'XIII', 'Leitura de medidores');
inssH('i-manut',  '112', 'XIV',  'Manutenção de instalações, de máquinas ou de equipamentos');
inssH('i-mont',   '112', 'XV',   'Montagem');
inssH('i-oper',   '112', 'XVI',  'Operação de máquinas, de equipamentos e de veículos');
inssH('i-ped',    '112', 'XVII', 'Operação de pedágio ou de terminal de transporte');
inssH('i-transp', '112', 'XVIII','Operação de transporte de passageiros');
inssH('i-port',   '112', 'XIX',  'Portaria, recepção ou ascensorista');
inssH('i-movm',   '112', 'XX',   'Recepção, triagem ou movimentação de materiais');
inssH('i-promo',  '112', 'XXI',  'Promoção de vendas ou de eventos');
inssH('i-secr',   '112', 'XXII', 'Secretaria e expediente');
inssH('i-saude',  '112', 'XXIII','Saúde');
inssH('i-tel',    '112', 'XXIV', 'Telefonia ou telemarketing');

/* Operações fora da Lista da LC 116 (sem ISS). Na NFS-e Nacional: códigos 99.XX.YY */
HIP['x-locmov'] = { grupo: 'Fora da LC 116', foraLC: '99.04.01', nome: 'Locação de bens móveis', nenhuma: 'Locação de bens não consta de nenhuma lista de retenção entre pessoas jurídicas (RIR/2018, arts. 714 a 719; Lei 10.833/2003, art. 30). Se houver operador cedido junto com o equipamento, avalie locação de mão de obra.' };
HIP['x-locimo'] = { grupo: 'Fora da LC 116', foraLC: '99.03.01 a 99.03.05', nome: 'Locação, cessão, arrendamento ou servidão de imóveis', nenhuma: 'Aluguel pago a pessoa jurídica não sofre retenção de IR nem de CSRF (o IR sobre aluguel só alcança pagamento a pessoa física).' };
HIP['x-direitos'] = { grupo: 'Fora da LC 116', foraLC: '99.02.01', nome: 'Cessão de direitos, royalties e direitos autorais', nenhuma: 'Royalties e direitos autorais pagos a pessoa jurídica no país não sofrem retenção de IR nem de CSRF (há retenção quando o beneficiário é pessoa física ou residente no exterior).' };
HIP['x-merc']   = { grupo: 'Fora da LC 116', foraLC: '—', nome: 'Fornecimento de bens e mercadorias', fed: '6147', nenhuma: 'Venda de mercadorias entre pessoas jurídicas privadas não tem retenção. Para órgão público federal, aplica-se a IN 1.234/2012 (código 6147, 5,85%).' };
HIP['x-outros'] = { grupo: 'Fora da LC 116', foraLC: '99.01.01', nome: 'Outras operações sujeitas a IBS/CBS sem ISS', nenhuma: 'Sem hipótese de retenção identificada. Verifique se a operação se enquadra em alguma das hipóteses legais (pesquise pelo nome da atividade).' };
