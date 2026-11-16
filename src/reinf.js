/* ═══ CÓDIGOS DA EFD-REINF ══════════════════════════════════════════
   Fonte: Receita Federal — SPED, pacote "EFD-REINF Tabelas 15/01/2026"
   (Tabela 01 – Natureza de Rendimentos, Anexo I dos leiautes v2.1.2) e
   Portal do Sped Tabelas, tabela "Reinf - Classificação de Serviços Prestados
   Mediante Cessão de Mão de Obra/Empreitada" (Tabela 06).
   Conferido em 16/11/2026. As NTs 02 e 04/2026 não alteram os grupos usados aqui.

   NAT_PRIV:  natureza do rendimento (R-4020) por hipótese — tomador privado (grupos 15 e 20)
   NAT_PUB:   natureza (R-4020) para órgão público na forma da IN 1.234/2012 (grupo 17)
   TIPO_SERV: tipo de serviço da Tabela 06 (R-2010/R-2020) por hipótese de INSS          */
const NAT_PRIV = {
  'p-adm': '15003', 'p-adv': '15004', 'p-anclin': '15005', 'p-antec': '15006', 'p-arq': '15007',
  'p-asstec': '15008', 'p-assoc': '15009', 'p-aud': '15010', 'p-aval': '15011', 'p-bio': '15012',
  'p-calc': '15013', 'p-cons': '15014', 'p-cont': '15015', 'p-des': '15016', 'p-eco': '15017',
  'p-proj': '15018', 'p-eng': '15019', 'p-ens': '15020', 'p-est': '15021', 'p-fisio': '15022',
  'p-fono': '15023', 'p-geo': '15024', 'p-leil': '15025', 'p-med': '15026', 'p-nutri': '15027',
  'p-odonto': '15028', 'p-feiras': '15029', 'p-pesq': '15030', 'p-plan': '15031', 'p-prog': '15032',
  'p-prot': '15033', 'p-psi': '15034', 'p-quim': '15035', 'p-radio': '15036', 'p-rp': '15037',
  'p-desp': '15038', 'p-to': '15039', 'p-trad': '15040', 'p-urb': '15041', 'p-vet': '15042',
  'l-limp': '15043', 'l-cons': '15044', 'l-seg': '15045', 'l-vig': '15045', 'l-tval': '15045', 'l-lmo': '15046',
  'c-manut': '15044',
  'c-credit': '15047', 'c-merc': '15047', 'c-gcred': '15047', 'c-contas': '15047',
  'm-comis': '15052', 'm-rep': '15052', 'm-med': '15052',
  'm-publi': '20001',
  'm-auto': '20002 a 20009, conforme a operação'
};
const NAT_COOP_PRIV = '15001 (cooperativa de trabalho) ou 15002 (associação profissional)';

const NAT_PUB = {
  'l-limp': '17032', 'l-seg': '17031', 'l-vig': '17031', 'l-lmo': '17033',
  'm-comis': '17034', 'm-rep': '17034', 'm-med': '17034',
  'm-publi': '17050 (agência em conformidade com o art. 16 da IN 1.234) ou 17049',
  'x-locmov': '17035', 'x-locimo': '17035', 'x-direitos': '17035', 'x-merc': '17009'
};
/* Natureza do grupo 17 a partir do código de DARF da IN 1.234 e do item */
function natPublica(p, cod) {
  if (cod === '8863') return '17025';
  if (cod === '6175') return '17023';
  if (cod === '6188') return '17026';
  if (cod === '6147') {
    if (p.item === '04.03') return '17005';
    if (p.item === '16.02') return '17006';
    if (p.hips.includes('x-merc')) return '17009';
    if (p.hips.includes('i-cc')) return '17004';
    return '17003';
  }
  const n = [...new Set(p.hips.map(h => NAT_PUB[h]).filter(Boolean))];
  return n.length ? n.join(' ou ') : '17099';
}

const TIPO_SERV = {
  'l-limp': '100000001', 'l-cons': '100000001', 'l-seg': '100000002', 'l-vig': '100000002',
  'i-cc': '100000003', 'i-rural': '100000004', 'i-dig': '100000005', 'i-prep': '100000006',
  'i-acab': '100000007', 'i-emb': '100000008', 'i-acond': '100000009', 'i-cobr': '100000010',
  'i-lixo': '100000011', 'i-copa': '100000012', 'i-hotel': '100000013', 'i-corte': '100000014',
  'i-distr': '100000015', 'i-ens': '100000016', 'i-entr': '100000017', 'i-lmed': '100000018',
  'i-leit': '100000019', 'i-manut': '100000020', 'c-manut': '100000020', 'i-mont': '100000021',
  'i-oper': '100000022', 'i-ped': '100000023', 'i-transp': '100000024', 'i-port': '100000025',
  'i-movm': '100000026', 'i-promo': '100000027', 'i-secr': '100000028', 'i-saude': '100000029',
  'i-tel': '100000030'
};
const natPrivada = hs => [...new Set(hs.map(h => NAT_PRIV[h]).filter(Boolean))].join(' ou ');
const tipoServ = hs => [...new Set(hs.map(h => TIPO_SERV[h]).filter(Boolean))].join(' ou ');
