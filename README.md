# Consultor de Retenções — JBC Micro Sistemas

Consulta se há retenção na fonte de IRRF, CSLL, PIS, COFINS, INSS e ISS para um serviço (item da LC 116/2003 ou hipótese legal), conforme o tomador e o regime do prestador. Só consulta: sem campos de valor.

Publicado em https://jbccontabil.github.io/retencoes/

## Estrutura
- `index.html` — a ferramenta (arquivo único, sem dependências além da fonte Lato).
- `src/hipoteses.js` — fonte de verdade: hipóteses legais de retenção (RIR/2018 arts. 714, 716, 718, 719; Lei 10.833/2003 arts. 29 e 30 c/c IN SRF 459/2004; IN RFB 2.110/2022 arts. 111 a 115; operações fora da LC 116).
- `src/itens.js` — ligação de cada item da LC 116 às hipóteses em que se enquadra.
- `src/art3.js` — local de incidência do ISS (LC 116/2003, art. 3º) e responsabilidade do tomador (art. 6º, § 2º, II).
- `src/template.html`, `src/lc116_norm.json`, `src/logo_src.txt` — página, lista de itens e logo.

## Como alterar
Edite os arquivos em `src/` e rode `python3 src/build.py` para regenerar o `index.html`.

## Pendência
Validar `src/itens.js` item a item contra o RETENSERV (Econet).
