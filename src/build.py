"""Gera ../index.html a partir das fontes desta pasta.
Uso: python3 src/build.py  (a partir da raiz do repositório)"""
import json, os
d = os.path.dirname(os.path.abspath(__file__))
r = lambda f: open(os.path.join(d, f), encoding='utf-8').read()
t = r('template.html')
t = t.replace('__LOGO__', r('logo_src.txt').strip())
t = t.replace('__ITENS__', json.dumps(json.loads(r('lc116_norm.json')), ensure_ascii=False))
t = t.replace('__ART3__', r('art3.js'))
t = t.replace('__HIPOTESES__', r('hipoteses.js'))
t = t.replace('__ITENSHIP__', r('itens.js'))
open(os.path.join(d, '..', 'index.html'), 'w', encoding='utf-8').write(t)
print('index.html gerado:', len(t), 'caracteres')
