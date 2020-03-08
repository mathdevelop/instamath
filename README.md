# Instamath

Tenha suas imagens do Instagram no seu site, de maneira simples e rápida.

Todos os Plugins que utilizavam a API do Instagram sofriam com a troca constante de Tokens para manter seu funcionamento, mas agora com o desativação da API básica ao final de março/2020, vão parar de funcionar completamente. A saída encontrada para alguns sites foi adicionar Widgets de terceiros que varrem a página do perfil à procura das imagens sem a necessidade da API, estes possuem muitas vezes recursos pagos para funcionar em sua forma completa.

O Instamath foi desenvolvido com o intuito de ser uma solução gratuita para obter diretamente as fotos sem ter nenhum servidor intermediário, oferecendo liberdade para customização e velocidade na execução.


## Uso

Instamath não depende de nenhuma biblioteca para o seu funcionamento.

```
<div id="instamath"></div>

<script src="https://cdn.jsdelivr.net/gh/mathdevelop/instamath/instamath.min.js"></script>
<script>
    document.querySelector('#instamath').instamath({
        user: 'mathdevelop', // Obrigatório¹
        limit: 5, // Máximo: 12
        resolution: 150, // Resoluções²: 150, 240, 320, 480, 640
        after: function() {
            // Função executada após recuperar as imagens da conta (Ideal para Plugins de Carousel)
        }
    });
</script>
```
Observações:
1) O usuário a ser utilizado deve ser público.
2) Utilizar uma resolução maior e limitar o tamanho por CSS oferecerá uma qualidade maior, pondere o ganho de qualidade com o peso da imagem.

## CDN

Caso você desejar, poderá utilizar o Link abaixo com a versão mais atual ou baixar o arquivo para importar no projeto.

```bash
https://cdn.jsdelivr.net/gh/mathdevelop/instamath/instamath.min.js
```

## Demo
[Instamath com Slick](https://instamath.netlify.com/)