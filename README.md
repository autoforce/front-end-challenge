# Front-end Challenge

Esta é a **segunda fase** do processo seletivo para vaga de desenvolvedor front-end da AutoForce.

Se você está vendo isso significa que demos uma olhada no seu currículo e gostamos do que vimos. E torcemos para nos surpreendermos com o que você vai fazer.

Dê o melhor de si e que a força esteja com você.

## Regras

- Implementar as ações seguindo os critérios de [avaliação](#criterios_avaliacao);

- Crie um fork deste repositório para salvar e nos dar acesso ao seu trabalho;

- Não utilize o material disponibilizado pela AutoForce para outros fins que não sejam a realização deste desafio.

## O Prazo

Como estamos em um processo de recrutamento contínuo, não há prazo limite para a entrega do desafio.

Porém, comprometimento, entusiasmo e dedicação também são características avaliadas neste desafio. Por isso, dê o melhor de si e tente entregá-lo o mais rápido que conseguir. Assim você demonstra que realmente tem o espírito intraempreendedor que procuramos.

## O desafio

Você está familiarizado com o Photoshop (ou qualquer outro software que possa abrir sem alterar os elementos de um PSD)? Não? Então é melhor colocar uns tutoriais para rodar.

Esse desafio consiste na implementação do layout, em **PSD**, da versão reduzida de um dos nossos produtos. Você pode baixá-lo ![clicando aqui](https://github.com/autoforce/front-end-challenge/blob/master/public/landing-page.psd). Ele será sua referência para a execução deste desafio. Abaixo estão as instruções para executá-lo da melhor forma possível.

### Tamanhos de fontes e espaços

Seus melhores companheiros neste desafio serão as ferramentas **Letreiro** e **Caractere**.

#### Letreiro

Utilize para verificar a distância (em pixel) entre os elementos do layout. Para ajudar, aconselho posicionar a janela “Informações” em uma das abas do Photoshop para que você possa verificar a distância em tempo real.

![1](https://raw.githubusercontent.com/autoforce/front-end-challenge/master/public/img/1.jpg)

Haverá casos em que a medida dada será em números “quebrados”, como 23px, 11px, 87px. Caso isso aconteça, arredonde para cima números cujo final seja maior que 5 (37 = 40, 28 = 30 etc) e para baixo números cujo final seja menor que 5 (23 = 20, 31 = 30 e etc). Números com final 4, 5 ou 6 devem ser arredondados para 5 (24 = 25, 35 = 35, 46 = 45 etc).

![2](https://raw.githubusercontent.com/autoforce/front-end-challenge/master/public/img/2.jpg)

#### Caractere

O tamanho e estilo das fontes também devem ser seguidos à risca. Como auxílio, você vai usar a janela “Caractere”.

![3](https://raw.githubusercontent.com/autoforce/front-end-challenge/master/public/img/3.jpg)

#### Efeitos e elementos

Aconselho que, quando estiver montando um bloco, você abra todos os grupos pertencentes ao bloco em questão para verificar os possíveis elementos que existam nele.

![5](https://raw.githubusercontent.com/autoforce/front-end-challenge/master/public/img/5.jpg)

Por exemplo, a imagem abaixo mostra o grupo do bloco **HEADER** aberto. Neste, o grupo do elemento **NAV** está aberto; quando você habilitar a visibilidade dos outros grupos verá que novos elementos surgirão na tela. Isso indica que os elementos irão surgir geralmente no **Hover** (quando o mouse pousar sobre o elemento). Muitos dos grupos que indicam que novos elementos devem ser exibidos no hover estarão em uma pasta como o nome **hover** ou **aberto**.

![4](https://raw.githubusercontent.com/autoforce/front-end-challenge/master/public/img/4.jpg)

#### Grupo Info

Em todo projeto haverá um grupo **Info**, que reúne informações como cores utilizadas no projeto e algumas observações.

Nesse projeto, o bloco que chamamos de **Showcase** (vitrine) possui um vídeo como background. Esse vídeo precisa ter origem no **VIMEO**, seu comportamento deve ser responsivo (quando a largura da tela for alterada o vídeo deve se ajustar à tela como acontece com o http://vodkabears.github.io/vide) e, no celular, o vídeo deve ser substituído por uma imagem estática. 

Em resumo: você irá criar um versão do *Vide* que trabalhe com os vídeos do Vimeo, ou procurar algum que alguém já tenha feito.

### Variáveis

Trabalhamos com um conjunto de variáveis **SASS** baseadas no Bootstrap, que você poderá encontrar ![aqui](https://github.com/autoforce/front-end-challenge/blob/master/public/variables.scss). O uso dessas variáveis é obrigatório neste desafio.

### Finalmente

Para este desafio é permitido o uso de plugins seus ou de terceiros. O uso do **SASS** é obrigatório.

### <a name="criterios_avaliacao"/>Critérios de avaliação

Itens que serão avaliados no Front-End Challenge: 

- **Atendimento às obrigatoriedades:** uso das variáveis e do SASS;

- **Organização:** organize o código e seus componentes como se cada elemento fizesse parte de módulos/plugins, de forma que possam ser reutilizados em outros projetos sem muita modificação. O uso de mixin’s no SASS é muito indicado;

- **Complexidade:** tudo deve ser de fácil leitura, de forma que terceiros não sintam dificuldade de entender o que foi pretendido;

- **Desenvoltura:** as decisões tomadas para a execução do projeto;

- **Técnica:** o grau de conhecimento em HTML, SASS, JS e o uso correto do Git;

- **Bom gosto:** o uso de técnicas para deixar a navegação fluida e agradável.

### Dúvidas

Dúvidas podem ser enviadas para o email **desenvolvimento@autoforce.com**, que ficaremos muito felizes em solucioná-las.


