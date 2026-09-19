/* ================================================================
   OLIVIA UVIPLAIS — SITE OFICIAL
   ================================================================ */

'use strict';

const BOOKS = [
  { id: 'jogos-de-poder', 
    titulo: 'Jogos de Poder', 
    serie: 'Série Jogos da Máfia · Livro 1', 
    capa: 'CAPAS/1. Jogos de Poder - Livro 1 da Série Jogos da Máfia.jpg', 
    lancamento: '07/07/2020', 
    idioma: 'Português',
    paginas: 243, 
    ebook: 'https://a.co/d/0dEQYiMH', 
    sinopse: '“A máfia não pode ser parada”\n\nSerena Greco tentou ao máximo fugir do fato de que era filha da família que comandava a máfia em Chicago, a Outfit. Mas agora era hora de voltar e, numa armadilha de seu próprio pai, ela será o elo de ligação entre a Outfit e a Cosa Nostra.\n\nEdward Bellini, o Corvo, é o Capo da Cosa Nostra e quer comandar Las Vegas do jeito que ele e seus irmãos sempre sonharam. O primeiro passo: destruir a Outifit de dentro para fora. E quando os Greco mandam Serena para casar-se com ele, Edward vê ali uma nova oportunidade.\n\nUma das duas famílias cairá, mas um sentimento nascerá disso. Edward e Serena poderão deixar que esse sentimento viva?', 
    tropes: ['MÁFIA ROMANCE', 'FAMÍLIAS RIVAIS', 'CASAMENTO POR CONVENIÊNCIA'], 
    categoria: 'pt' },
  { id: 'jogos-de-ruina', 
    titulo: 'Jogos de Ruína', 
    serie: 'Série Jogos da Máfia · Livro 2', 
    capa: 'CAPAS/2. Jogos de Ruína - Livro 2 da Série Jogos da Máfia.jpg', 
    lancamento: '20/04/2021', idioma: 'Português', paginas: 233, 
    ebook: 'https://a.co/d/0iLdRCc4', 
    sinopse: 'A mortal Verônica Greco foi traída. Seu próprio pai, durante todo esse tempo, estava armando para matá-la, unindo a Chicago Outfit com a máfia Rússia. Agora ela quer vingança, e a única forma de o fazer é juntando-se aos Bellini, seus maiores inimigos.\n\nGeorge Bellini se sentiu atraído pela assassina Greco desde a primeira vez que a viu, e agora ela estava em seu território, sob o seu domínio. Ele a queria e faria de tudo para tê-la, mesmo que aquilo significasse entrar em uma guerra.\n\nÓdio e desejo é o que liga ambos, mas o que fazer quando um sentimento cresce em meio a escuridão?\n\nUm romance de máfia hot - segundo livro da trilogia Jogos da Máfia.', 
    tropes: ['ENEMIES TO LOVERS', 'CASAMENTO ARRANJADO', 'ELA E ELE SÃO MAFIOSOS'], 
    categoria: 'pt' },
  { id: 'jogos-de-vitoria', 
    titulo: 'Jogos de Vitória', 
    serie: 'Série Jogos da Máfia · Livro 3', 
    capa: 'CAPAS/3. Jogos de Vitória  - Livro 3 da Série Jogos da Máfia.jpg', 
    lancamento: '04/03/2022', 
    idioma: 'Português', 
    paginas: 237, 
    ebook: 'https://a.co/d/026x6vcf', 
    sinopse: 'Thomas Bellini é o Consigliere da Cosa Nostra. Considerado bastard pelo pai, construiu seu lugar na máfia com sangue e força. Seu único propósito de vida era matar e guerrear, seu único laço vinha dos seus irmãos e sua única pretensão era fazer sua famiglia se tornar a maior e mais forte.\n\nAté que um dia tudo muda.\n\nDaria Zhukova não conhece o mundo. Tudo que sabe sobre a vida aprendeu nos porões onde cresceu sob a proteção da mãe que tentava a todo custo livrá-la da vida difícil que levava como prisioneira da máfia russa. Mas Daria guarda um segredo que foi escondido até mesmo dela.\n\nAmbos os caminhos se unem. O homem sem coração da Cosa Nostra salva a vida da mulher misteriosa da Bratva.\n\nFúria e medo é o que os domina, mas o que fazer quando um sentimento cresce em meio a escuridão?', 
    tropes: ['MÁFIA ROMANCE', 'MÁFIA RIVAIS', 'MOCINHA PRISIONEIRA', 'MAFIOSO PROTETOR'], 
    categoria: 'pt' },
  { id: 'faca-um-pedido', 
    titulo: 'Faça Um Pedido', 
    serie: null, capa: 'CAPAS/4. Faça Um Pedido.jpg', 
    lancamento: '04/11/2021', 
    idioma: 'Português', 
    paginas: 287, 
    ebook: 'https://a.co/d/0bBaRj3e', 
    sinopse: 'Uma viagem no tempo é capaz de mudar tudo?\n\nNada podia ser pior do que os aniversários da solitária Maeve Carter. A moça não tinha com quem comemorar a data especial porque sem família e amigos, uma vida vazia era tudo que lhe restava.\n\nEm um momento triste a jovem acende uma velinha para si mesma e faz o mais puro dos pedidos: queria ser amada.\n\nE na manhã seguinte tudo estava diferente. Maeve acorda numa casa estranha com duas menininhas espertas a chamando de mamãe e uma aliança no dedo que pertence a Theo Jones, um deus grego amoroso, compreensivo e gostoso.\n\nO que parecia uma loucura, na verdade se torna um aprendizado: O amor nem sempre vem em pacotes convenientes.', 
    tropes: ['VIAGEM NO TEMPO', 'GRUMPY X SUNSHINE', 'SEGUNDA CHANCE', 'CRIANÇAS FOFAS'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/FAÇA UM PEDIDO/1.png', 'ILUSTRAÇÕES/FAÇA UM PEDIDO/2.png', 'ILUSTRAÇÕES/FAÇA UM PEDIDO/3.png'] },
  { id: 'eu-pediria-por-voce', 
    titulo: 'Eu Pediria Por Você', 
    serie: 'Spin-Off de Faça Um Pedido', 
    capa: 'CAPAS/5. Eu Pediria Por Você - Spin-Off de Faça Um Pedido.jpg', 
    lancamento: '23/02/2024', 
    idioma: 'Português', 
    paginas: 149, 
    ebook: 'https://a.co/d/0av7zL2g', 
    sinopse: 'Theo Jones amou Maeve Carter em todas as linhas temporais existentes. Em Faça Um Pedido, quando ela viaja no tempo e se encontra casada com ele, o marido faz de tudo — mesmo sem saber sobre a viagem no tempo — para que sua esposa o ame.\n\nO que aconteceria se Theo viajasse no tempo e encontrasse uma Maeve que nunca o conheceu, mas que precisa dele? Uma versão da esposa que acabou de fugir do antigo relacionamento e está quebrada, tentando se recuperar.\n\nNeste conto de Faça Um Pedido, vemos Theo Jones mostrar para Maeve Carter que ele a acharia. Sempre.\n\nEsta versão contém:\nConto Eu Pediria Por Você;\nConteúdo extra com o pedido de casamento;\nConteúdo extra do dia da adoção de Zola e Annie;\nConteúdo extra com o Dia dos Namorados de Theo e Maeve;\nConteúdo extra do Halloween da família Carter-Jones.', 
    tropes: ['CONTO', 'CONTEÚDO EXTRA'], 
    categoria: 'pt' },
  { id: 'contrato-em-las-vegas', 
    titulo: 'Contrato em Las Vegas', 
    serie: null, 
    capa: 'CAPAS/6. Contrato em Las Vegas.jpg', 
    lancamento: '18/07/2022', 
    idioma: 'Português', 
    paginas: 345, 
    ebook: 'https://a.co/d/0dwm1Qzr', 
    sinopse: 'No jogo do amor, o azar é de quem não se apaixona.\n\nMaya García sonhou a vida inteira em ser uma cantora de sucesso, e é em um dos maiores cassino de Las Vegas, o Lucky, que o sonho pode virar realidade. Mas quando conhece seu novo chefe arrogante, tudo se transforma em um pesadelo. Um pesadelo picante.\n\nComo toda sorte pode ter seus revezes, o playboy Liam Graham precisa andar conforme as regras do pai para herdar seu império. E a condição do magnata não podia ser mais inusitada: para ganhar o cassino, Liam precisa colocar uma aliança no dedo de alguma mulher confiável.\n\nVindos de mundos diferentes, não há qualquer chance de os dois se tolerarem. Até uma noite de bebedeira e um casamento por contrato mudarem tudo.', 
    tropes: ['ENEMIES TO LOVERS', 'FAKE DATING', 'GRUMPY X SUNSHINE'], 
    categoria: 'pt' },
  { id: 'contos-de-contrato', 
    titulo: 'Contos de Contrato em Las Vegas', 
    serie: 'Universo Las Vegas', 
    capa: 'CAPAS/7. Contos de Contrato em Las Vegas.jpg', 
    lancamento: '15/09/2022', 
    idioma: 'Português', 
    paginas: 47, 
    ebook: 'https://a.co/d/07S3VASl', 
    sinopse: 'Desde que Maya García e Liam Graham assinaram o contrato que os levou para o seu felizes para sempre, Las Vegas tem sido o lugar mais amoroso do mundo.\n\nNo entanto, alguns momentos da história ficaram escondidos. Nessa seleção de contos, vocês verão: a manhã de compras online de Maya e Liam, o casal usando o presente inusitado, o compromisso à tarde de marido e esposa, o caminho de Liam até o aeroporto, a adoção de Colin Bridgerton e um bônus super especial.\n\nAcompanhe mais uma vez momentos fofos, engraçados e hots do casal mais sortudo de Las Vegas.', 
    tropes: ['CONTOS', 'ROMANCE'], 
    categoria: 'pt' },
  { id: 'os-padrinhos', 
    titulo: 'Os Padrinhos', 
    serie: null, 
    capa: 'CAPAS/8. Os Padrinhos.jpg', 
    lancamento: '05/07/2021', 
    idioma: 'Português', 
    paginas: 262, ebook: 'https://a.co/d/06epa6a3', 
    sinopse: 'Amy St. Clair e Harry Ryder não se suportam desde a primeira vez que se viram. Eles eram o velho clichê: Amy não o tolera e Harry adora provocá-la. Still, por debaixo de toda aquela aversão, faíscas voam quando se encontram.\n\nAgora seus melhores amigos estão se casando e, como padrinhos dessa união, os dois terão que se aturar durante um mês para ajudar nos preparativos da cerimônia. Presos um ao outro como cão e gato, eles sentirão o ódio se transformar em algo mais.\n\nAfinal de contas, o amor nem sempre vem em pacotes convenientes.\n\nUma comédia romântica enemies to lovers +18 de arrancar risadas e te deixar de coração quentinho.', 
    tropes: ['ENEMIES TO LOVERS', 'GRUMPY X SUNSHINE', 'CONVIVÊNCIA FORÇADA'], 
    categoria: 'pt' },
  { id: 'o-pedido', 
    titulo: 'O Pedido: Um conto de Os Padrinhos', 
    serie: 'Conto — Universo Os Padrinhos', 
    capa: 'CAPAS/9. O Pedido Um conto de Os Padrinhos.jpg', 
    lancamento: '03/05/2022', 
    idioma: 'Português', 
    paginas: 75, 
    ebook: 'https://a.co/d/06eyhLiv', 
    sinopse: 'Um conto inédito de Os Padrinhos, a comédia romântica best-seller.\n\nQue Amy St. Clair e Harry Ryder são ótimos organizando casamentos, todo mundo já sabe. Mas será que eles são bons em planejar presentes um para o outro?\n\nCom a ajuda de Cindy, Jules e David – o icônico trio da fofoca –, eles têm uma missão quase impossível: Harry surpreender Amy em seu aniversário com um pedido de casamento e Amy revelar seu próprio segredo para Harry.\n\nAcompanhe o grupo de amigos em sua mais nova empreitada, que envolve alianças, um desastre nuclear e a certeza de que o amor nem sempre vem em pacotes convenientes.', 
    tropes: ['CONTO', 'ROMANCE'], 
    categoria: 'pt' },
  { id: 'lance-proibido', 
    titulo: 'Lance Proibido', 
    serie: null, capa: 'CAPAS/10. Lance Proibido.jpg', 
    lancamento: '02/11/2022', 
    idioma: 'Português', 
    paginas: 192, 
    ebook: 'https://a.co/d/0f719EkQ', 
    sinopse: 'Pietra Coutinho está tendo a oportunidade de sua vida. Recém-formada em fisioterapia, a brasileira, jovem e inocente, acaba de ganhar a chance de trabalhar com a Inglaterra na Copa do Mundo.\n\nÉ o momento de virada da sua carreira, mas há alguém que pode colocar tudo a perder: o possessivo astro da seleção que a odeia instantaneamente.\n\nErza Wood é o capitão da equipe inglesa, o jogador mais velho do campeonato, o maior artilheiro da história do país. Por seu jeito frio, misterioso e dominador, ele é uma incógnita para os fãs, a mídia e os outros jogadores.\n\nMas quando a fisioterapeuta treze anos mais jovem e inocente aparece, tudo se torna arriscado e, sobretudo, proibido.', 
    tropes: ['AGE GAP', 'ENEMIES TO LOVERS', 'GRUMPY X SUNSHINE'], 
    categoria: 'pt' },
  { id: 'os-socios', 
    titulo: 'Os Sócios', 
    serie: null, 
    capa: 'CAPAS/11. Os Sócios.jpg', 
    lancamento: '01/03/2023', 
    idioma: 'Português', 
    paginas: 289, 
    ebook: 'https://a.co/d/09wczkWK', 
    sinopse: 'Cindy Tredici, a patricinha excêntrica e obstinada, quer mudar de ares depois do término com Kevin. E agora, com seus pais prestes a se aposentarem, ela decide que quer ser uma mulher de negócios e pede um mês para coordenar a rede de hotéis da família.\n\nKevin Charles está tentando superar o furacão rosa que sacudiu sua vida e quando o sogro do seu irmão pede ajuda com a troca de gestão, ele sabe que aquela é sua chance. O homem bem-sucedido e sedutor está mais do que satisfeito com a oportunidade, que pode ser um passo decisivo de reencontro em sua carreira.\n\nTudo estaria perfeito para os dois, se não fosse um pequeno detalhe: ambos trabalharão na mesma empresa e se tornarão rivais por ela.\n\nOs sentimentos do passado voltarão ou sucumbirão à convivência forçada?\n\nUma patricinha e seu ex em uma disputa profissional na comédia romântica spin-off de Os Padrinhos.', 
    tropes: ['RIVALS TO LOVERS', 'SEGUNDA CHANCE', 'ROMANCE DE ESCRITÓRIO'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/OS SÓCIOS/1.png', 'ILUSTRAÇÕES/OS SÓCIOS/2.png'] },
  { id: 'alianca-perfeita', 
    titulo: 'Aliança Perfeita', 
    serie: null, 
    capa: 'CAPAS/12. Aliança Perfeita.jpg', 
    lancamento: '10/05/2023', idioma: 'Português', 
    paginas: 411, 
    ebook: 'https://a.co/d/0axA1E4e', 
    sinopse: 'Lize Wilson pensava que se vestir de princesa cinco dias da semana seria bem mais divertido do que realmente é, mas a aspirante a atriz consegue encontrar alguma diversão sendo a animadora de festas infantis no meio de bolos, balões and crianças birrentas, principalmente se Aiden, seu melhor amigo e príncipe nas festas, estiver junto.\n\nAiden Smith é um misterio. Dirigindo um carro legal demais para o salário de animador de festas, tendo um passaporte canadense e a inabilidade de sorrir, ele é tudo que ninguém espera numa festa infantil.\n\nAinda mais considerando que, secretamente, ele é o herdeiro de uma das maiores fortunas do seu país.\n\nNo entanto, quando Aiden recebe uma carta misteriosa de deportação da imigração, Lize sabe que precisa ajudá-lo.\n\nA única forma de fazer isso é casando com o melhor amigo.\n\nEm busca de um Green Card, Lize e Aidan vão criar lembranças, fraudar processos e, quem sabe, revelar sentimentos que sempre estiveram ali.\n\nEm Aliança Perfeita, uma trama digna de um conto de fadas e produções Disney, Olivia Uviplais continua a encantar com seus personagens reais e provar o porquê é a deusa das comédias românticas hot.', 
    tropes: ['FAKE DATING', 'FRIENDS TO LOVERS', 'SÓ TEM UMA CAMA', 'ELE ODEIA TODO MUNDO MENOS ELA'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/ALIANÇA PERFEITA/1.png', 'ILUSTRAÇÕES/ALIANÇA PERFEITA/2.png'] },
  { id: 'meu-detestavel-chefe', 
    titulo: 'Meu Detestável Chefe', 
    serie: null, 
    capa: 'CAPAS/13. Meu Detestável Chefe.jpg', 
    lancamento: '12/06/2023', 
    idioma: 'Português', 
    paginas: 275, ebook: 'https://a.co/d/03YMmUu0', 
    sinopse: 'Sara Webber ama muitas coisas. Seus afilhados, seu emprego, escrever enquanto toma chocolate quente e sua coleção de livros.\n\nSó tem uma coisa que ela odeia: seu chefe rabugento.\n\nAlexander Wright odeia muitas coisas. O barulho dos saltos de sua secretária, a forma como ela sorri o tempo todo ou como ela é atraente demais para o bem de sua sanidade.\n\nNo geral, ele odeia sua secretária sempre sorridente.\n\nMas quando a mãe de Alex aparece na cidade logo depois da pequena mentira do magnata sobre ter uma namorada, Sara é a única que pode ajudá-lo. O acordo é simples: um namoro de fachada por quinze dias em troca da publicação de um livro.\n\nTudo estaria perfeito, exceto pelo fato de que, no fundo, o ódio é algo mais.', tropes: ['FAKE DATING', 'SÓ TEM UMA CAMA', 'HATERS TO LOVERS'], 
    categoria: 'pt' },
  { id: 'protegida-guarda-costas', 
    titulo: 'Protegida Pelo Guarda-Costas', 
    serie: null, capa: 'CAPAS/14. Protegida Pelo Guarda-Costas.jpg', 
    lancamento: '14/09/2023', 
    idioma: 'Português', 
    paginas: 397, 
    ebook: 'https://a.co/d/09nLYUpN', 
    sinopse: 'Luna Blackwood é a cantora pop do momento. Queridinha da América por seu jeito inocente, indomável e brilhante, a jovem artista arrasta uma legião de fãs pelo mundo, mas, aparentemente, também fez inimigos. Quando a popstar sofre um atentado misterioso, sua equipe sabe que ela precisa de proteção.\n\nDante Reyes está fora do mundo dos guarda-costas há muito tempo. O homem frio, duro e dezoito anos mais velho não quer se envolver nos problemas de ser o protetor de uma cantora pirralha, no entanto, quando um antigo amigo pede ajuda, ele não pode negar.\n\nDante é intenso, rude e possessivo.\nLuna é uma boa menina, obstinada e proibida para ele.\nA antipatia é imediata. E a atração também.\n\nDois universos que jamais se tocariam estão em rota de colisão, e o contato vai ser explosivo.', 
    tropes: ['AGE GAP', 'SLOWBURN', 'ROMANCE PROIBIDO', 'CONVIVÊNCIA FORÇADA'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/PROTEGIDA PELO GUARDA COSTAS/1.png', 'ILUSTRAÇÕES/PROTEGIDA PELO GUARDA COSTAS/2.png', 'ILUSTRAÇÕES/PROTEGIDA PELO GUARDA COSTAS/3.png'] },
  { id: 'manual-conquista', 
    titulo: 'Manual da Conquista Imperfeita', 
    serie: null, 
    capa: 'CAPAS/15. Manual da Conquista Imperfeita.jpg', 
    lancamento: '10/11/2023', 
    idioma: 'Português', 
    paginas: 427, 
    ebook: 'https://a.co/d/08EM88dU', 
    sinopse: 'Augustus Miller tem um segredo. Bem, não é exatamente um segredo. Uma fofoca inventada levou a outra e, de repente, o goleiro nerd golden boy do Michigan Lynx é considerado o maior pegador do campus. O que não seria um problema se não fosse por um pequeno detalhe: Gus é virgem.\n\nKira Mori está indo mal na faculdade. Muito mal mesmo. Prestes a reprovar em Ética 101, parando de ir a festas para estudar, desinstalando o Tinder para se concentrar e prestando mais atenção nas aulas do que nas fofocas de atleta na cafeteria, ela precisa de um professor particular.\n\nE Gus, the melhor de todos, não está disponível.\n\nOs mundos da caloura popular e do geek astro do hóquei jamais se encontrariam se não fosse pela vodca, pela vontade de Kira em ajudar os embriagados e pela tendência de Gus de contar certos segredos quando está bêbado.\n\nDe repente, um acordo é feito.\n\nGus ensina teorias da Ética.\n\nKira ensina a arte da conquista.\n\nAprender nunca foi tão divertido. E delicioso.', 
    tropes: ['CLICHÊ INVERTIDO', 'FAKE DATING', 'SÓ TEM UMA CAMA', 'GAROTA POPULAR X NERD'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/MANUAL DA CONQUISTA IMPERFEITA/1.png', 'ILUSTRAÇÕES/MANUAL DA CONQUISTA IMPERFEITA/2.png'], topAmazon: true },
  { id: 'um-comeco-imperfeito', 
    titulo: 'Um Começo Imperfeito: a bebê secreta do magnata', 
    serie: null, capa: 'CAPAS/16. Um Começo Imperfeito a bebê secreta do magnata.jpg', 
    lancamento: '13/06/2024', 
    idioma: 'Português', 
    paginas: 305, 
    ebook: 'https://a.co/d/00su91QD', 
    sinopse: 'Eles não se conhecem, mas vão cuidar de uma bebê juntos.\n\nIzzy Miller nunca se imaginou como a responsible por uma criança. A jovem fotógrafa se julgava inocente e inexperiente demais para o papel de mãe, e isso sempre esteve longe de seus planos.\n\nMas quando sua melhor amiga morre deixando para trás a pequena Stella, uma linda garotinha de nove meses, Izzy percebe que precisa assumir aquele dever.\n\nMattia Fabri é um homem de casos de uma noite. Um dos empresários mais influentes da Itália. Frio, enigmático e arrogante, ele nunca quis relacionamentos. Apesar de ter como meta formar uma família, sua carreira sempre foi sua única prioridade. E ele estava feliz com o arranjo.\n\nAté receber a notícia de que uma mulher de um dos seus casos de uma noite faleceu e deixou para trás uma herdeira sua. Uma bebê que Mattia nunca teve conhecimento sobre. Porém, sua filha não vem sozinha.\n\nIzzy está tentando o seu melhor pela pequena Stella quando o milionário sedutor aparece em sua porta com uma demanda: quer reivindicar a bebê que nunca teve oportunidade de conhecer.', 
    tropes: ['AGE GAP', 'GRAVIDEZ INESPERADA', 'CONVIVÊNCIA FORÇADA', 'ITALIANO POSSESSIVO E PROTETOR'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/UM COMEÇO IMPERFEITO/1.png', 'ILUSTRAÇÕES/UM COMEÇO IMPERFEITO/2.png'] },
  { id: 'o-principio-do-amor', 
    titulo: 'O Princípio do Amor', 
    serie: null, 
    capa: 'CAPAS/17. O Principio do Amor.jpg', 
    lancamento: '16/09/2024', 
    idioma: 'Português', 
    paginas: 361, 
    ebook: 'https://a.co/d/0dmxxJgJ', 
    sinopse: 'Todo mundo sabe que cientistas e jornalistas não se misturam, mas Henry e Jenna vão mostrar que algumas regras podem ser quebradas.\n\nJenna Barnes está no emprego dos seus sonhos e finalmente se considera uma divulgadora científica. Porém, o homem que ela deve documentar e divulgar sua pesquisa é terrível: chato, arrogante e irritante, além de ser bonito demais para o seu próprio bem. Uma grande pedra em seu caminho.\n\nDoutor Henry Adams nasceu para a neurobiologia, mas é uma incógnita para todos na Universidade de Seattle. Calado, genial e intimidador, o cientista é o martírio dos divulgadores da faculdade, ainda mais aqueles de língua afiada.\n\nMas depois de começarem a relação com o pé esquerdo, os neurônios desses dois inimigos se conectam quando o cientista não sabe o que está dando errado com sua pesquisa e a jornalista é a única que pode acobertá-lo até que ele descubra: por que os ratinhos da sua experiência estão se curando tão rápido?', 
    tropes: ['CIENTISTA X JORNALISTA', 'AGE GAP', 'GRUMPY X SUNSHINE', 'ENEMIES TO LOVERS'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/O PRINCÍPIO DO AMOR/1.png', 'ILUSTRAÇÕES/O PRINCÍPIO DO AMOR/2.png', 'ILUSTRAÇÕES/O PRINCÍPIO DO AMOR/3.png'] },
  { id: 'o-principio-do-amor-audiobook', 
    titulo: 'O Princípio do Amor', 
    serie: 'Audiolivro', 
    capa: 'CAPAS/17. O Principio do Amor.jpg', 
    lancamento: '16/09/2024', 
    idioma: 'Português', 
    formatoLabel: 'Audiolivro · Audible', 
    ebook: 'https://www.audible.com.br/pd/O-Principio-do-Amor-Audiolivro/B0H46R3TQZ', 
    ctaLabel: 'Ouça na Audible', 
    sinopse: 'Todo mundo sabe que cientistas e jornalistas não se misturam, mas Henry e Jenna vão mostrar que algumas regras podem ser quebradas.\n\nJenna Barnes está no emprego dos seus sonhos e finalmente se considera uma divulgadora científica. Porém, o homem que ela deve documentar e divulgar sua pesquisa é terrível: chato, arrogante e irritante, além de ser bonito demais para o seu próprio bem. Uma grande pedra em seu caminho.\n\nDoutor Henry Adams nasceu para a neurobiologia, mas é uma incógnita para todos na Universidade de Seattle. Calado, genial e intimidador, o cientista é o martírio dos divulgadores da faculdade, ainda mais aqueles de língua afiada.\n\nMas depois de começarem a relação com o pé esquerdo, os neurônios desses dois inimigos se conectam quando o cientista não sabe o que está dando errado com sua pesquisa e a jornalista é a única que pode acobertá-lo até que ele descubra: por que os ratinhos da sua experiência estão se curando tão rápido?', 
    tropes: ['CIENTISTA X JORNALISTA', 'AGE GAP', 'GRUMPY X SUNSHINE', 'ENEMIES TO LOVERS'], 
    categoria: 'audiobooks', ilustracoes: ['ILUSTRAÇÕES/O PRINCÍPIO DO AMOR/1.png', 'ILUSTRAÇÕES/O PRINCÍPIO DO AMOR/2.png', 'ILUSTRAÇÕES/O PRINCÍPIO DO AMOR/3.png']},
  { id: 'temporada-de-farsa', 
    titulo: 'Temporada de Farsa e Gelo', 
    serie: null, 
    capa: 'CAPAS/18. Temporada de Farsa & Gelo.jpg', 
    lancamento: '08/12/2024', 
    idioma: 'Português', 
    paginas: 555, 
    ebook: 'https://a.co/d/016kh07K', 
    sinopse: 'Todo mundo conhece os quadrigêmeos do hóquei. O perfeitinho, o carismático, o super inteligente e... o outro. Tomas McKinley é esse o outro. Criado à sombra dos irmãos, ele precisa se destacar porque as chances de que um time de hóquei o procure depois da formatura são baixas. Tom precisa ser mais do que o quarto irmão geek, virgem e que talvez um dia seja um profissional.\n\nE uma garota pode ajudá-lo com isso.\n\nEllie Davis é a sensação do campus. Todo mundo a conhece. Pelo menos todo mundo pensa que a conhece porque, na verdade, a garota vive uma farsa. Nada de pai embaixador que viaja muito, nada de estágio em uma empresa privada. Ellie é filha de um bêbado inveterado, trabalha como garçonete fora do campus e tem o peso do mundo — e da mentira — sobre suas costas.\n\nMas agora o jogador de hóquei tímido sabe seu segredo.\n\nE um acordo nasce desse encontro.\n\nEllie vai ajudar Tom a se transformar no golden boy do momento, se ele a ajudar a manter sua mentira.\n\nE como eles farão isso? Com um namoro falso.', 
    tropes: ['CLICHÊ INVERTIDO', 'FAKE DATING', 'GAROTA POPULAR X NERD', 'FOUND FAMILY'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/TEMPORADA DE FARSA E GELO/1.png', 'ILUSTRAÇÕES/TEMPORADA DE FARSA E GELO/2.png', 'ILUSTRAÇÕES/TEMPORADA DE FARSA E GELO/3.png'], topAmazon: true },
  { id: 'temporada-de-farsa-audiobook', 
    titulo: 'Temporada de Farsa e Gelo', 
    serie: 'Audiolivro', 
    capa: 'CAPAS/18. Temporada de Farsa & Gelo.jpg', 
    lancamento: '08/12/2024', 
    idioma: 'Português', 
    formatoLabel: 'Audiolivro · Audible', 
    ebook: 'https://www.audible.com.br/pd/Temporada-de-Farsa-Gelo-Audiolivro/B0H7F9QS1Q?source_code=ASSGB149080119000H&share_location=pdp', 
    ctaLabel: 'Ouça na Audible', 
    sinopse: 'Todo mundo conhece os quadrigêmeos do hóquei. O perfeitinho, o carismático, o super inteligente e... o outro. Tomas McKinley é esse o outro. Criado à sombra dos irmãos, ele precisa se destacar porque as chances de que um time de hóquei o procure depois da formatura são baixas. Tom precisa ser mais do que o quarto irmão geek, virgem e que talvez um dia seja um profissional.\n\nE uma garota pode ajudá-lo com isso.\n\nEllie Davis é a sensação do campus. Todo mundo a conhece. Pelo menos todo mundo pensa que a conhece porque, na verdade, a garota vive uma farsa. Nada de pai embaixador que viaja muito, nada de estágio em uma empresa privada. Ellie é filha de um bêbado inveterado, trabalha como garçonete fora do campus e tem o peso do mundo — e da mentira — sobre suas costas.\n\nMas agora o jogador de hóquei tímido sabe seu segredo.\n\nE um acordo nasce desse encontro.\n\nEllie vai ajudar Tom a se transformar no golden boy do momento, se ele a ajudar a manter sua mentira.\n\nE como eles farão isso? Com um namoro falso.', 
    tropes: ['CLICHÊ INVERTIDO', 'FAKE DATING', 'GAROTA POPULAR X NERD', 'FOUND FAMILY'], 
    categoria: 'audiobooks', ilustracoes: ['ILUSTRAÇÕES/TEMPORADA DE FARSA E GELO/1.png', 'ILUSTRAÇÕES/TEMPORADA DE FARSA E GELO/2.png', 'ILUSTRAÇÕES/TEMPORADA DE FARSA E GELO/3.png'] },
  { id: 'amor-por-acidente', 
    titulo: 'Amor Por Acidente', 
    serie: 'Irmãos Callahan · Livro 1', 
    capa: 'CAPAS/19. Amor Por Acidente (Irmãos Callahan Livro 1).jpg', 
    lancamento: '24/03/2025', 
    idioma: 'Português',
    paginas: 709, 
    ebook: 'https://a.co/d/01F0vaPu', 
    sinopse: 'Todo mundo sabe que engenheiras e arquitetos não se dão bem, mas Florence e Garrett vão mostrar que algumas regras podem ser quebradas.\n\nFlorence Beaumont coloca o trabalho em primeiro, second e terceiro lugar em sua vida. Na quarta posição, está o ódio que ela sente pelo herdeiro da Callahan Structures, um arquiteto playboy e mulherengo, que está sempre competindo com ela pelos melhores projetos. Uma disputa que termina com uma aposta inocente: quem tiver mais projetos aprovados em um ano ganhará a chance de fazer o que quiser com o outro. E Florence está pronta para fazer o badboy se ferrar.\n\nGarrett Callahan sabe que a vida é curta demais para se preocupar tanto. Herdeiro de um império no ramo das construções, sua vida é tão fácil quanto pode ser. Exceto por uma engenheira nervosa em seu caminho. E ele gosta disso. A mulher sistemática e competitiva reprova totalmente seus hábitos de conquista, e ele já sabe o que fazer quando ganhar aquela aposta estúpida: Garrett levará Florence para uma noite ao seu lado. Um encontro que provará à engenheira que existe uma razão pela qual as mulheres sempre voltam pedindo mais.\n\nNo entanto, as coisas fogem do controle quando todo o ódio reprimido do casal cão e gato se transforma em uma atração avassaladora.\n\nNow, os dois inimigos terão que lidar com a consequência daquela noite que, em nove meses, estará nos braços deles.\n\nInimigos podem se tornar… algo mais?', 
    tropes: ['HATERS TO LOVERS', 'GRAVIDEZ INESPERADA', 'CONVIVÊNCIA FORÇADA', 'GRUMPY X SUNSHINE'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/AMOR POR ACIDENTE/1.png', 'ILUSTRAÇÕES/AMOR POR ACIDENTE/2.png', 'ILUSTRAÇÕES/AMOR POR ACIDENTE/3.png'], topAmazon: true },
      { id: 'amor-por-acidente', 
    titulo: 'Amor Por Acidente', 
    serie: 'Audiolivro', 
    capa: 'CAPAS/19. Amor Por Acidente (Irmãos Callahan Livro 1).jpg', 
    lancamento: '24/03/2025', 
    idioma: 'Português',
    formatoLabel: 'Audiolivro · Audible', 
    ebook: 'https://www.audible.com.br/pd/Amor-Por-Acidente-Audiolivro/B0H9P87MD7?source_code=ASSGB149080119000H&share_location=pdp', 
    ctaLabel: 'Ouça na Audible', 
    sinopse: 'Todo mundo sabe que engenheiras e arquitetos não se dão bem, mas Florence e Garrett vão mostrar que algumas regras podem ser quebradas.\n\nFlorence Beaumont coloca o trabalho em primeiro, second e terceiro lugar em sua vida. Na quarta posição, está o ódio que ela sente pelo herdeiro da Callahan Structures, um arquiteto playboy e mulherengo, que está sempre competindo com ela pelos melhores projetos. Uma disputa que termina com uma aposta inocente: quem tiver mais projetos aprovados em um ano ganhará a chance de fazer o que quiser com o outro. E Florence está pronta para fazer o badboy se ferrar.\n\nGarrett Callahan sabe que a vida é curta demais para se preocupar tanto. Herdeiro de um império no ramo das construções, sua vida é tão fácil quanto pode ser. Exceto por uma engenheira nervosa em seu caminho. E ele gosta disso. A mulher sistemática e competitiva reprova totalmente seus hábitos de conquista, e ele já sabe o que fazer quando ganhar aquela aposta estúpida: Garrett levará Florence para uma noite ao seu lado. Um encontro que provará à engenheira que existe uma razão pela qual as mulheres sempre voltam pedindo mais.\n\nNo entanto, as coisas fogem do controle quando todo o ódio reprimido do casal cão e gato se transforma em uma atração avassaladora.\n\nNow, os dois inimigos terão que lidar com a consequência daquela noite que, em nove meses, estará nos braços deles.\n\nInimigos podem se tornar… algo mais?', 
    tropes: ['HATERS TO LOVERS', 'GRAVIDEZ INESPERADA', 'CONVIVÊNCIA FORÇADA', 'GRUMPY X SUNSHINE'], 
    categoria: 'audiobooks', ilustracoes: ['ILUSTRAÇÕES/AMOR POR ACIDENTE/1.png', 'ILUSTRAÇÕES/AMOR POR ACIDENTE/2.png', 'ILUSTRAÇÕES/AMOR POR ACIDENTE/3.png'] },
  { id: 'chefe-quase-perfeito', 
    titulo: 'Um chefe (Quase) Perfeito', 
    serie: 'Irmãos Callahan · Livro 2', 
    capa: 'CAPAS/20. Um Chefe (Quase) Perfeito (Irmãos Callahan Livro 2).jpg', 
    lancamento: '11/08/2025', idioma: 'Português', 
    paginas: 597, ebook: 'https://a.co/d/04Y02MC0', 
    sinopse: 'Uma noite. Um nome falso. Nenhuma regra.\nEles só não esperavam se reencontrar no escritório… como chefe e funcionária.\n\nCamille Beaumont não queria o estágio na Callahan Structures, mas agora é a única chance que tem de concluir a graduação. E, para comemorar sua desgraça, a garota resolve afogar as mágoas em uma decisão impulsiva: passar a noite com um estranho doze anos mais velho, que ela nunca mais veria na vida.\n\nSem nomes reais. Sem promessas. Sem chances de vê-lo de novo. Ou assim ela pensava.\n\nNa manhã seguinte, Camille descobre que seu novo chefe é ninguém menos que o homem que conheceu no bar. CEO. Herdeiro da construtora. E, agora, o maior problema da sua vida.\n\nRaiden Callahan carrega o peso do world nos ombros e, naquela noite, tudo o que queria era uma pausa do papel de executivo impiedoso. O que ele não imaginava era que sua fuga teria cabelos cor-de-rosa, um nome inventado… e um crachá de estagiária na segunda-feira.\n\nAgora, os dois precisam trabalhar lado a lado fingindo que nada aconteceu, mas a tensão entre eles diz o contrário. Chefe e funcionária podem se tornar… algo mais?', 
    tropes: ['AGE GAP', 'CONVIVÊNCIA FORÇADA', 'CHEFE X FUNCIONÁRIA', 'GRUMPY X SUNSHINE'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/UM CHEFE QUASE PERFEITO/1.png', 'ILUSTRAÇÕES/UM CHEFE QUASE PERFEITO/2.png', 'ILUSTRAÇÕES/UM CHEFE QUASE PERFEITO/3.png'], topAmazon: true },
  { id: 'chefe-quase-perfeito-audiobook', 
    titulo: 'Um chefe (Quase) Perfeito', 
    serie: 'Audiolivro', 
    capa: 'CAPAS/20. Um Chefe (Quase) Perfeito (Irmãos Callahan Livro 2).jpg', 
    lancamento: '11/08/2025', idioma: 'Português', 
    formatoLabel: 'Audiolivro · Audible', 
    ebook: 'https://www.audible.com.br/pd/Um-Chefe-Quase-Perfeito-Audiolivro/B0H9BTKGYY?source_code=ASSGB149080119000H&share_location=pdp', 
    ctaLabel: 'Ouça na Audible', 
    sinopse: 'Uma noite. Um nome falso. Nenhuma regra.\nEles só não esperavam se reencontrar no escritório… como chefe e funcionária.\n\nCamille Beaumont não queria o estágio na Callahan Structures, mas agora é a única chance que tem de concluir a graduação. E, para comemorar sua desgraça, a garota resolve afogar as mágoas em uma decisão impulsiva: passar a noite com um estranho doze anos mais velho, que ela nunca mais veria na vida.\n\nSem nomes reais. Sem promessas. Sem chances de vê-lo de novo. Ou assim ela pensava.\n\nNa manhã seguinte, Camille descobre que seu novo chefe é ninguém menos que o homem que conheceu no bar. CEO. Herdeiro da construtora. E, agora, o maior problema da sua vida.\n\nRaiden Callahan carrega o peso do world nos ombros e, naquela noite, tudo o que queria era uma pausa do papel de executivo impiedoso. O que ele não imaginava era que sua fuga teria cabelos cor-de-rosa, um nome inventado… e um crachá de estagiária na segunda-feira.\n\nAgora, os dois precisam trabalhar lado a lado fingindo que nada aconteceu, mas a tensão entre eles diz o contrário. Chefe e funcionária podem se tornar… algo mais?', 
    tropes: ['AGE GAP', 'CONVIVÊNCIA FORÇADA', 'CHEFE X FUNCIONÁRIA', 'GRUMPY X SUNSHINE'], 
    categoria: 'audiobooks', ilustracoes: ['ILUSTRAÇÕES/AMOR POR ACIDENTE/1.png', 'ILUSTRAÇÕES/AMOR POR ACIDENTE/2.png', 'ILUSTRAÇÕES/AMOR POR ACIDENTE/3.png'], topAmazon: true },
  { id: 'como-salvar-mafioso', 
    titulo: 'Como Salvar Um Mafioso', 
    serie: null, 
    capa: 'CAPAS/21. Como Salvar Um Mafioso.jpg', 
    lancamento: '07/11/2025', 
    idioma: 'Português', 
    paginas: 412, 
    ebook: 'https://a.co/d/09mpKRyN', 
    sinopse: 'Lila Harris levava uma vida normal como motorista de aplicativos, até um homem armado e todo ensanguentado entrar no carro dela com uma única palavra: dirige. Ele não precisava dizer duas vezes.\n\nRocco Bazzini é um príncipe da máfia. Prestes a subir para o cargo mais alto da La Mano Scarlatta, sofreu uma emboscada em Nova Iorque. A cúpula da organização mafiosa e seus inimigos não sabem que ele está vivo, e quer vingança.\n\nCheio de ódio e muito ferido, tudo que ele tem é uma garota inocente de olhos curiosos que salvou sua vida e… um bulldog velho. Para se recuperar, Rocco precisa de abrigo e dos cuidados dela, mas Lila é atraente demais para o próprio bem.\n\nA chama proibida entre eles ganha contornos ainda mais irresistíveis quando o mafioso faz uma proposta: por 100 mil dólares a motorista o levará para o esconderijo da máfia fora de Nova Iorque. E Lila sabe que recusar não é uma opção. Ela precisa do dinheiro e… Rocco é um mafioso mimado demais para ouvir um não.\n\nAgora, o caminho do futuro Don da máfia e da jovem tagarela se cruzaram, tornando ambos os mundos muito mais próximos do que eles ponderiam imaginar.', 
    tropes: ['COMÉDIA ROMÂNTICA COM MAFIOSO', 'GRUMPY X SUNSHINE', 'CONVIVÊNCIA FORÇADA'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/COMO SALVAR UM MAFIOSO/1.png', 'ILUSTRAÇÕES/COMO SALVAR UM MAFIOSO/2.png', 'ILUSTRAÇÕES/COMO SALVAR UM MAFIOSO/3.png'], topAmazon: true },
  { id: 'improvisado', 
    titulo: 'Improvisado', 
    serie: 'O Clube dos Pais Solteiros do Hóquei', 
    capa: 'CAPAS/22. Improvisado O Clube dos Pais Solteiros do Hóquei.jpg', 
    lancamento: '06/04/2026', idioma: 'Português', paginas: 551, ebook: 'https://a.co/d/0g4GXayq', 
    sinopse: '“Casa comigo?” A brasileira e assistente pessoal Anna Tereza Barcelos não imaginava que ouviria aquelas palavras saindo da boca de seu chefe, ainda mais quando a relação deles era estritamente profissional.\n\nEle precisava de alguém para lembrá-lo dos compromissos? Feito.\nEle precisava resolver problemas antes que virassem manchetes? Conte com ela.\nEle queria alguém em quem confiar sem precisar explicar nada? Tudo sob controle.\n\nMas, quando o serviço de imigração liga informando que Anna não foi aprovada para mais um visto de trabalho, o jogador de hóquei sério e frio faz a proposta: um casamento falso para mantê-la no país.\n\nWeston Burke é o homem das cavernas do New York Warriors. O maior ala esquerda da história do time coleciona vitórias, mas sua vida privada é um segredo para os torcedores. Tudo o que se sabe sobre o dia a dia do astro do hóquei é que ele é pai de um garotinho, solteiro e jamais é visto sorrindo em público.\n\nE agora ele vai se casar em uma cerimônia midiática — um relacionamento falso que precisa convencer o mundo inteiro de que Wes e Tessa estão apaixonados.\n\nMas, no meio de todo esse noivado improvisado, um sentimento real pode nascer?', 
    tropes: ['CASAMENTO POR CONVENIÊNCIA', 'AGE GAP', 'GRUMPY X SUNSHINE', 'CHEFE X FUNCIONÁRIA'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/IMPROVISADO/1.png', 'ILUSTRAÇÕES/IMPROVISADO/2.png', 'ILUSTRAÇÕES/IMPROVISADO/3.png'], topAmazon: true },
      { id: 'de-ferias-com-a-noiva', 
    titulo: 'De Férias com a Noiva', 
    serie: 'Irmãos Callahan · Livro 3', 
    capa: 'CAPAS/27. De Ferias com a Noiva.jpg', 
    lancamento: '27/08/2026', idioma: 'Português', paginas: 466, ebook: 'https://a.co/d/0gCIwwEx', 
    sinopse: 'Zayn Callahan está prestes a viver o dia mais caótico de sua vida. Apaixonado por sua melhor amiga desde a adolescência, o herdeiro milionário decidiu que não vai assistir, em silêncio, ao momento em que ela diz "sim" para outro homem. Seu plano é simples — e completamente insano: quando o padre perguntar se alguém tem algo contra aquela união, ele vai se levantar e declarar que a ama. \nMas o destino consegue ser ainda mais imprevisível. Antes que Zayn tenha a chance de colocar seu plano em prática, o noivo abandona Sophie no altar.\nSophie Rogers sempre seguiu o roteiro perfeito de filha exemplar, médica dedicada e noiva ideal. Tudo se encontrava no lugar, até o noivo fugir com a própria madrinha no dia do casamento.\nEla não baixará a cabeça, não inventará desculpas para proteger o ex, não mostrará o seu coração dilacerado e... não perderá as passagens da lua de mel para o Havaí. Pelo contrário, ela levará a única pessoa para quem ela nunca precisou mentir.\nO que começa como uma oportunidade para juntar os pedaços do coração, pode se tornar algo muito mais intenso. Enquanto Sophie tenta se redescobrir, Zayn enxerga na viagem sua última chance de provar que o amor da vida dela sempre esteve ao seu lado.\nEntre praias paradisíacas, planos românticos frustrados e sentimentos que já não podem mais ser ignorados, eles descobrirão a linha tênue entre amizade e amor. Talvez o final feliz apenas espere o momento certo para acontecer.\n\nMelhores amigos podem se tornar... algo mais?', 
    tropes: ['AMIGOS DE INFÂNCIA', 'CONVIVÊNCIA FORÇADA', 'YEARNING', 'SOULMATES', 'FOUND FAMILY'], 
    categoria: 'pt', ilustracoes: ['ILUSTRAÇÕES/DE FERIAS COM A NOIVA/1.png', 'ILUSTRAÇÕES/DE FERIAS COM A NOIVA/2.png', 'ILUSTRAÇÕES/DE FERIAS COM A NOIVA/3.png'] },
  { id: 'maid-for-each-other', 
    titulo: 'Maid For Each Other', 
    serie: null, 
    capa: 'CAPAS/23. Maid For Each Other.jpg', 
    lancamento: '30/07/2023', 
    idioma: 'Inglês', 
    paginas: 261, 
    ebook: 'https://a.co/d/0dJxigmz', 
    sinopse: 'He is my enemy, a player playboy with a sunshine personality... and now we are going to organize a wedding together.\n\nAmy St. Clair and Harry Ryder can\'t stand each other since the first time they met. They were the old cliché: Amy despises him, and Harry loves to tease her. Yet underneath all that animosity, sparks fly when they meet.\n\nNow their best friends are getting married and, as the maid of honor and the best man of this union, the two will have to put up with each other for a month to help with the preparations for the ceremony. Stuck together fighting like cats and dogs, they\'ll feel the hatred turn into something more.\n\nAfter all, love doesn\'t always come in convenient packages.', tropes: ['ENEMIES TO LOVERS', 'FAKE DATING', 'FORCED PROXIMITY'], 
    categoria: 'idiomas' },
  { id: 'seduction-effect', 
    titulo: 'The Seduction Effect', 
    serie: null, capa: 'CAPAS/24. The Seduction Effect.jpg', 
    lancamento: '14/05/2024', 
    idioma: 'Inglês', 
    paginas: 374, 
    ebook: 'https://a.co/d/06NyVjFi', 
    sinopse: 'Augustus Miller has a secret. Well, it’s not exactly a secret. One made-up gossip led to another, and suddenly the Michigan Lynx’s golden boy goalie is considered the biggest womanizer on campus. Which wouldn’t be a problem if it weren’t for one small detail: Gus is a virgin.\n\nKira Mori is doing poorly in college. Very bad indeed. About to fail Ethics 101, she needs to stop going to parties to study, uninstall Tinder to focus, and pay more attention to class than cafeteria gossip, she needs a private tutor.\n\nAnd Gus, the best of them all, is unavailable.\n\nThe worlds of the outgoing freshman and the geeky hockey star would never meet if it weren’t for vodka, Kira’s willingness to help drunks, and Gus’ tendency to tell secrets when he’s drunk.\n\nSuddenly, a deal is made.\nGus teaches Ethics theories.\nKira teaches the art of seduction.\n\nLearning has never been so fun. And delicious.', 
    tropes: ['CLICHÊ INVERTIDO', 'FAKE DATING', 'SÓ TEM UMA CAMA', 'GAROTA POPULAR X NERD'], 
    categoria: 'idiomas' },
  { id: 'les-temoins', 
    titulo: 'Les Témoins de Mariage', 
    serie: null, 
    capa: 'CAPAS/25. Les Témoins de Mariage.jpg', 
    lancamento: '24/06/2024', 
    idioma: 'Francês', 
    paginas: 290, 
    ebook: 'https://a.co/d/0frkqZzR', 
    sinopse: 'Amy St. Clair et Harry Ryder ne se supportent pas depuis la première fois qu\'ils se sont vus. Ils étaient le vieux cliché : Amy ne le tolère pas et Harry adore la provoquer. Pourtant, sous toute cette aversion, des étincelles jaillissent lorsqu\'ils se rencontrent.\n\nMaintenant, leurs meilleurs amis se marient et, en tant que témoins de cette union, ils devront se supporter pendant un mois pour aider à préparer la cérémonie. Liés l\'un à l\'autre comme chien et chat, ils verront leur haine se transformer en quelque chose de plus.\n\nAprès tout, l\'amour ne vient pas toujours dans des emballages pratiques.', 
    tropes: ['ENEMIES TO LOVERS', 'WEDDING', 'FORCED PROXIMITY'], 
    categoria: 'idiomas' },
  { id: 'doces-rivais', 
    titulo: 'Doces Rivais', 
    serie: null, capa: 'CAPAS/26. Doces Rivais.jpg', 
    lancamento: '24/07/2025', idioma: 'Português', 
    paginas: 310, ebook: 'https://a.co/d/04k3otwX', 
    compras: [
      { url: 'https://a.co/d/04k3otwX', label: 'Comprar eBook' },
      { url: 'https://a.co/d/09Xq3cCw', label: 'Comprar Livro' }
    ], 
    sinopse: 'Marina Dantas é uma advogada recém-formada, determinada a mostrar que tem tudo para se tornar implacável na profissão. Quando recebe a missão de convencer um padeiro a vender sua loja, enxerga na tarefa a oportunidade perfeita para provar seu valor em um dos maiores escritórios do país.\n\nO que ela não esperava era enfrentar Estevão Avelar, um chef de cozinha que jamais quis herdar a padaria da família. Sonhador e apaixonado pela culinária internacional, ele se vê preso ao legado dos Avelar, agora ameaçado pela construção de um shopping no local.\n\nEla quer fechar o negócio. Ele quer salvar a padaria. Ambos têm boas razões para não ceder. O que nenhum dos dois contava era com a atração imediata que transforma a convivência forçada em uma batalha de provocações, sarcasmo e sentimentos inesperados.\n\nEm meio a negociações tensas e faíscas emocionais, Marina e Estevão descobrem que, quando o jogo é entre rivais, o coração pode ser o maior dos imprevistos. E no fim das contas, um só ganha se o outro perder.', 
    tropes: ['ENEMIES TO LOVERS', 'GRUMPY X SUNSHINE', 'APROXIMAÇÃO FORÇADA'], 
    categoria: 'tradicionais', ilustracoes: ['ILUSTRAÇÕES/DOCES RIVAIS/1.png', 'ILUSTRAÇÕES/DOCES RIVAIS/2.png', 'ILUSTRAÇÕES/DOCES RIVAIS/3.png'] }
];

const TIMELINE = [
  { ano: '1999', titulo: 'O início de tudo', desc: '05 de julho de 1999 é o início da minha história: eu nasci!' },
  { ano: '2016', titulo: 'Wattpad e a estreia', desc: 'Publiquei Adorável Babá, minha primeira história no Wattpad. Posteriormente, lancei o e-book na Amazon.' },
  { ano: '2020', titulo: 'Estreia na Amazon', desc: 'Estreei na Amazon com Jogos de Poder (série Jogos de Máfia).' },
  { ano: '2021', titulo: 'Três lançamentos em um ano', desc: 'Lancei Jogos de Ruína, Os Padrinhos e Faça um Pedido.' },
  { ano: '2022', titulo: 'Novos títulos e o primeiro conto', desc: 'Publiquei Jogos de Vitória, o conto O Pedido, Contrato em Las Vegas, Contos de Contrato em Las Vegas e o livro em parceria Lance Proibido.' },
  { ano: '2023', titulo: 'Ano de expansão', desc: 'Lancei Os Sócios, Aliança Perfeita, Meu Detestável Chefe, Protegida pelo Guarda-Costas, Manual da Conquista Imperfeita e minha primeira versão em inglês: Maid For Each Other.' },
  { ano: '2024', titulo: 'Mais lançamentos internacionais', desc: 'Publiquei Eu Pediria por Você, Um Começo Imperfeito, O Princípio do Amor e Temporada de Farsa e Gelo. Também saíram as edições internacionais The Seduction Effect (inglês) e Les Témoins de Mariage (francês).' },
  { ano: '2025', titulo: 'Mercado tradicional e três TOP 1', desc: 'Cheguei ao mercado tradicional com o anúncio e pré-venda física de Doces Rivais pela Qualis Editora. Na Amazon, lancei Amor por Acidente, Um Chefe (Quase) Perfeito e Como Salvar um Mafioso. Os três títulos chegaram ao TOP 1 do ranking geral da plataforma.' },
  { ano: '2026', titulo: 'Selo Neon e Selo Amore', desc: 'Relancei Doces Rivais em digital, ingressei para o Selo Neon da Editora Buzz, publiquei Improvisado em formato independente (mais um TOP 1 para a lista!) e fui anunciada como a primeira autora nacional do Selo Amore da Editora VR, com nota exclusiva no PublishNews.' }
];

const AGENDA = [
  { dia: '03', mes: 'Ago', ano: '2026', tipo: 'Lançamento', titulo: 'Live de Lançamento do Site', local: 'Online · Instagram Oficial (@autoraoliviauviplais)', desc: 'Live de lançamento do site oficial, direto do Instagram da autora.', horaInicio: '19:30', horaFim: '20:00' },
  { dia: '7', mes: 'Set', ano: '2026', tipo: 'Feira', titulo: 'Sessão de Autógrafos Grupo Editorial Portal', local: 'Distrito Anhembi', desc: 'Sessão de autógrafos na Bienal Internacional do Livro de São Paulo - Rua F18.', horaInicio: '14:00', horaFim: '16:00' },
  { dia: '11', mes: 'Set', ano: '2026', tipo: 'Evento', titulo: 'Encontro de Leitores NEON Editora ', local: 'Distrito Anhembi', desc: 'Encontro de fãs promovido pela Buzz Editora, com acesso exclusivo a spoilers do lançamento de 2027. | Bienal Internacional do Livro de São Paulo - Rua H70', horaInicio: '16:30', horaFim: '17:30' },
  { dia: '12', mes: 'Set', ano: '2026', tipo: 'Feira', titulo: 'Sessão de Autógrafos Unicorn Books', local: 'Distrito Anhembi', desc: 'Sessão de autógrafos na Bienal Internacional do Livro de São Paulo, no estande da Unicorn Books - Rua J30.', horaInicio: '14:30', horaFim: '16:00' }
];

const AGENDA_MES_INDEX = { Jan: 0, Fev: 1, Mar: 2, Abr: 3, Mai: 4, Jun: 5, Jul: 6, Ago: 7, Set: 8, Out: 9, Nov: 10, Dez: 11 };

const AGENDA_TIPO_INFO = {
  'Feira':      { cor: 'azul',     icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-7h6v7"/></svg>' },
  'Lançamento': { cor: 'vermelho', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/></svg>' },
  'Evento':     { cor: 'rosa',     icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>' }
};

const AGENDA_ICON_PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>';
const AGENDA_ICON_CALENDAR = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>';
const AGENDA_ICON_INSTA = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none"/></svg>';
const AGENDA_ICON_CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>';

function getAgendaEventDate(eventItem) {
  const mesIndex = AGENDA_MES_INDEX[eventItem.mes] ?? 0;
  return new Date(Number(eventItem.ano), mesIndex, Number(eventItem.dia));
}

function getAgendaStatus(eventDate) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const diffDias = Math.round((eventDate - hoje) / 86400000);

  if (diffDias < 0) return { label: 'Realizado', classe: 'passado' };
  if (diffDias === 0) return { label: 'É hoje!', classe: 'hoje' };
  if (diffDias === 1) return { label: 'Amanhã', classe: 'em-breve' };
  if (diffDias <= 30) return { label: `Em ${diffDias} dias`, classe: 'em-breve' };
  return { label: null, classe: '' };
}

function buildAgendaCalendarLink(eventItem, eventDate) {
  const pad = (n) => String(n).padStart(2, '0');
  let datesParam;

  if (eventItem.horaInicio && eventItem.horaFim) {
    const [hI, mI] = eventItem.horaInicio.split(':');
    const [hF, mF] = eventItem.horaFim.split(':');
    const dataBase = `${eventItem.ano}${pad(AGENDA_MES_INDEX[eventItem.mes] + 1)}${pad(eventItem.dia)}`;
    datesParam = `${dataBase}T${pad(hI)}${pad(mI)}00/${dataBase}T${pad(hF)}${pad(mF)}00`;
  } else {
    const inicio = new Date(eventDate);
    const fim = new Date(eventDate);
    fim.setDate(fim.getDate() + 1);
    const formatar = (d) => d.toISOString().slice(0, 10).replace(/-/g, '');
    datesParam = `${formatar(inicio)}/${formatar(fim)}`;
  }

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${eventItem.tipo}: ${eventItem.titulo}`,
    dates: datesParam,
    details: eventItem.desc,
    location: eventItem.local,
    ...(eventItem.horaInicio && eventItem.horaFim ? { ctz: 'America/Sao_Paulo' } : {})
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function buildAgendaMapsLink(local) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(local)}`;
}

/* ================================================================
   BLOG — CONTENTFUL INTEGRATION (UPDATED)
   ================================================================ */
const CONTENTFUL_CONFIG = {
  spaceId: 'bikxsvvhd2dh',
  accessToken: '3kCZ2e_GBDPxbpLqpXRmGaKgk_0AZCHSt7awwJrzGes',
  environment: 'master',
  contentType: 'blogPost'
};

let BLOG_POSTS = [];

const BLOG_CATEGORIA_COR = {
  'Lançamento': 'vermelho',
  'Bastidores': 'azul',
  'Agenda': 'ciano',
  'Comunidade': 'rosa'
};

/* ================================================================
   NOTÍCIAS NA MÍDIA & CLIPPING (NA-MIDIA)
   Para adicionar novas notícias no futuro, basta incluir um novo objeto
   na lista abaixo seguindo a estrutura padrão.
   ================================================================ */
const NOTICIAS_MIDIA = [
  {
    id: 'tribuna-do-agreste-bienal-2026',
    titulo: 'VR Editora registra aumento de vendas na 28ª Bienal do Livro de São Paulo',
    veiculo: 'Tribuna do Agreste',
    veiculoBadge: 'azul',
    data: '14/09/2026',
    dataFormatada: '14 de setembro de 2026',
    autor: 'Gabriela Cuerba',
    resumo: 'Balanço oficial da 28ª Bienal Internacional do Livro de São Paulo destaca crescimento expressivo da editora e encontros de Olivia Uviplais com influenciadores e leitores, antecipando o lançamento em livro físico de Como Salvar um Mafioso.',
    citacaoDestaque: '“A editora ainda promoveu encontro com os leitores e influenciadores literários para compartilhar as novidades dos selos Plataforma21 e AMORE, e contou com a participação da autora best-seller de romances nacionais Olivia Uviplais, que lançará em 2027 Como salvar um mafioso pela AMORE e contará com capítulo inédito.”',
    linkOriginal: 'https://www.tribunadoagreste.com.br/variedades/2026/09/14/978507-vr-editora-registra-aumento-de-vendas-na-28a-bienal-do-livro-de-sao-paulo',
    imagens: [
      {
        src: 'NA-MIDIA/trinuna14-09-26/tribuna-14-09.webp',
        alt: 'Matéria na Tribuna do Agreste sobre a VR Editora na Bienal de São Paulo',
        legenda: 'Capa da matéria no portal Tribuna do Agreste'
      },
      {
        src: 'NA-MIDIA/trinuna14-09-26/tribuna-14-09(2).webp',
        alt: 'Recorte destacando citação sobre a autora Olivia Uviplais e lançamento de Como Salvar um Mafioso',
        legenda: 'Recorte destacando a participação de Olivia Uviplais e lançamento pelo selo AMORE'
      }
    ]
  },
  {
    id: 'publishnews-bienal-buzz-2026',
    titulo: 'Literare Books e Buzz Editora dividem estande pela primeira vez na Bienal de São Paulo',
    veiculo: 'PublishNews',
    veiculoBadge: 'vermelho',
    data: '02/09/2026',
    dataFormatada: '02 de setembro de 2026',
    autor: 'Redação PublishNews',
    resumo: 'PublishNews divulga a programação de peso da Buzz Editora na 28ª Bienal de São Paulo, que incluiu ativação e encontro oficial de Olivia Uviplais com seu público no estande da casa editorial.',
    citacaoDestaque: '“Dia 11 de setembro, às 16h30 — Olivia Uviplais | Estande Buzz Editora | Ativação”',
    linkOriginal: 'https://www.publishnews.com.br/materias/2026/09/02/literare-books-e-buzz-editora-dividem-estande-pela-primeira-vez-na-bienal-de-sao-paulo',
    imagens: [
      {
        src: 'NA-MIDIA/publishnews-02-09-26/publishnews02-09.webp',
        alt: 'PublishNews: Literare Books e Buzz Editora dividem estande na Bienal de São Paulo',
        legenda: 'Capa da reportagem sobre o estande na Bienal de São Paulo'
      },
      {
        src: 'NA-MIDIA/publishnews-02-09-26/publishnews02-09(2).webp',
        alt: 'Programação oficial com destaque para o encontro e ativação de Olivia Uviplais',
        legenda: 'Programação oficial da Bienal com presença de Olivia Uviplais'
      }
    ]
  },
  {
    id: 'radar-digital-brasilia-bienal-2026',
    titulo: 'Buzz Editora reúne autores em debates sobre IA, saúde mental e comportamento na Bienal de São Paulo',
    veiculo: 'Radar Digital Brasília',
    veiculoBadge: 'ciano',
    data: '02/09/2026',
    dataFormatada: '02 de setembro de 2026',
    autor: 'Gabriel',
    resumo: 'Radar Digital Brasília noticia a expressiva programação da Buzz Editora na Bienal Internacional do Livro de SP e ressalta a ativação e interação com leitores de Olivia Uviplais no estande.',
    citacaoDestaque: '“O estande será outro ponto de encontro entre a editora e seu público. Em 11 de setembro, às 16h30, Olivia Uviplais participa de uma ativação no espaço.”',
    linkOriginal: 'https://radardigitalbrasilia.com.br/brasil/buzz-editora-reune-autores-em-debates-sobre-ia-saude-mental-e-comportamento-na-bienal-de-sao-paulo/',
    imagens: [
      {
        src: 'NA-MIDIA/radar-02-09-23/radar 02-09.webp',
        alt: 'Radar Digital Brasília: Cobertura da Buzz Editora na 28ª Bienal de São Paulo',
        legenda: 'Capa da cobertura no portal Radar Digital Brasília'
      },
      {
        src: 'NA-MIDIA/radar-02-09-23/radar 02-09(2).webp',
        alt: 'Trecho do texto confirmando a participação e ativação de Olivia Uviplais',
        legenda: 'Trecho do artigo destacando a presença de Olivia Uviplais no estande'
      }
    ]
  },
  {
    id: 'gazeta-do-estado-como-salvar-um-mafioso',
    titulo: 'Do digital para as livrarias: "Como Salvar um Mafioso" ganhará edição física em 2027',
    veiculo: 'Gazeta do Estado',
    veiculoBadge: 'rosa',
    data: '23/08/2026',
    dataFormatada: '23 de agosto de 2026',
    autor: 'Emi Martins (Coluna Literanews)',
    resumo: 'Em sua edição impressa de circulação em Goiás, Tocantins e DF, o jornal Gazeta do Estado noticiou que o fenômeno digital de Olivia Uviplais chegará às livrarias de todo o país em formato físico pelo selo Amore (VR Editora).',
    citacaoDestaque: '“Como Salvar um Mafioso, de Olivia Uviplais, ganhará edição física em 2027 pelo selo Amore, da Plataforma 21. A comédia romântica apresenta Lila Harris, uma motorista de aplicativo cuja rotina muda completamente quando um homem armado e ferido entra em seu carro.”',
    linkOriginal: null,
    imagens: [
      {
        src: 'NA-MIDIA/gazeta 23-08-26/gazeta-23-08.webp',
        alt: 'Página completa do jornal Gazeta do Estado com a coluna Literanews sobre Como Salvar um Mafioso',
        legenda: 'Página impressa da Gazeta do Estado (Coluna Literanews de 23/08/2026)'
      }
    ]
  },
  {
    id: 'publishnews-selo-amore-primeira-autora',
    titulo: 'Olivia Uviplais é a primeira autora nacional do selo Amore',
    veiculo: 'PublishNews',
    veiculoBadge: 'vermelho',
    data: '29/06/2026',
    dataFormatada: '29 de junho de 2026',
    autor: 'Redação PublishNews',
    resumo: 'O mais relevante portal do mercado editorial brasileiro anunciou Olivia Uviplais como o primeiro nome nacional contratado pelo selo AMORE da VR Editora, ressaltando seus mais de 300 milhões de páginas lidas na Amazon e 4 títulos em TOP 1.',
    citacaoDestaque: '“A VR Editora terá sua primeira autora nacional publicada pelo selo AMORE, braço editorial dedicado às histórias românticas da casa. O nome escolhido para inaugurar essa nova fase é Olivia Uviplais. Com números expressivos no digital, a escritora soma mais de 300 milhões de páginas lidas na Amazon...”',
    linkOriginal: 'https://www.publishnews.com.br/materias/2026/06/29/olivia-uviplais-e-a-primeira-autora-nacional-do-selo-amore',
    imagens: [
      {
        src: 'NA-MIDIA/publisnews-29-06-26/publishnews-29-06.webp',
        alt: 'Matéria do PublishNews anunciando Olivia Uviplais no selo AMORE',
        legenda: 'Matéria na íntegra no portal PublishNews (29/06/2026)'
      }
    ]
  }
];

const selectors = {
  header: '#site-header',
  navToggle: '#nav-toggle',
  navLinks: '#nav-links',
  page: '.page',
  pageLink: '[data-page]',
  modalOverlay: '#modal-overlay',
  modalBox: '#modal-box',
  blogGrid: '#blog-grid'
};

document.addEventListener('DOMContentLoaded', initSite);

function parseDateBR(value) {
  if (!value || value === 'N/A') return new Date(0);
  const [day, month, year] = value.split('/').map(Number);
  return new Date(year, month - 1, day);
}

function getBooksByRecency() {
  return [...BOOKS].sort((a, b) => parseDateBR(b.lancamento) - parseDateBR(a.lancamento));
}

function buildDestaque() {
  const latest = getBooksByRecency()[0];
  if (!latest) return;

  const titulo = document.getElementById('destaque-titulo');
  const serie = document.getElementById('destaque-serie');
  const sinopse = document.getElementById('destaque-sinopse');
  const ctas = document.getElementById('destaque-ctas');
  const capaImg = document.getElementById('destaque-capa-img');
  if (!titulo || !serie || !sinopse || !ctas || !capaImg) return;

  titulo.textContent = latest.titulo;
  serie.textContent = latest.serie || `${latest.paginas} páginas · ${latest.idioma}`;
  sinopse.textContent = latest.sinopse.split(/\n\n/)[0].replace(/^[“"]|[”"]$/g, '');
  ctas.innerHTML = latest.ebook
    ? `<a href="${latest.ebook}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Comprar agora</a>`
    : '';
  capaImg.src = latest.capa;
  capaImg.alt = latest.titulo;
}

function buildFooterDestaques() {
  const list = document.getElementById('footer-destaques');
  if (!list) return;

  const top3 = getBooksByRecency().slice(0, 3);
  list.replaceChildren(...top3.map((book) => {
    const item = document.createElement('li');
    item.innerHTML = `<a href="#livros" data-page="livros">${escapeHTML(book.titulo)}</a>`;
    return item;
  }));
}

function initSite() {
  initRouter();
  initMenu();
  buildTimeline();
  buildBookshelf();
  initTropeReveal();
  buildDestaque();
  buildFooterDestaques();
  buildNaMidia();
  buildAgenda();
  buildBlog();
  initBlogPaginacao();
  initBioToggle();
  initModal();
}

function initRouter() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest(selectors.pageLink);
    if (!link) return;

    event.preventDefault();
    showPage(link.dataset.page || 'home');
  });

  window.addEventListener('hashchange', handleRouteChange);
  window.addEventListener('scroll', updateHeaderMode, { passive: true });

  handleRouteChange();
}

function handleRouteChange() {
  const hash = window.location.hash.replace('#', '');
  const postMatch = hash.match(/^post-(.+)$/);

  if (postMatch) {
    const post = BLOG_POSTS.find((item) => item.slug === postMatch[1]);
    if (post) {
      renderPost(post);
      showPage('post', false);
      document.querySelectorAll(selectors.pageLink).forEach((link) => {
        link.classList.toggle('active', link.dataset.page === 'blog');
      });
      return;
    }
  }

  showPage(getPageFromHash(), false);
}

function getPageFromHash() {
  const page = window.location.hash.replace('#', '');
  return document.getElementById(page) ? page : 'home';
}

const PAGE_META = {
  home: {
    title: 'Olivia Uviplais — Escritora de Comédias Românticas',
    description: 'Olivia Uviplais — Escritora de comédias românticas. Best-Seller Amazon. Autora de Jogos de Poder, Os Padrinhos e muito mais.'
  },
  sobre: {
    title: 'Sobre Olivia Uviplais — Escritora de Romances',
    description: 'Conheça a trajetória de Olivia Uviplais, escritora best-seller Amazon de comédias românticas.'
  },
  livros: {
    title: 'Livros — Olivia Uviplais',
    description: 'Explore todos os livros de Olivia Uviplais: eBooks, publicações por editoras, audiobooks e edições internacionais.'
  },
  'na-midia': {
    title: 'Na Mídia — Olivia Uviplais',
    description: 'Confira matérias, reportagens, entrevistas e recortes de jornais e portais sobre Olivia Uviplais e suas obras literárias.'
  },
  blog: {
    title: 'Blog da Uvinha — Olivia Uviplais',
    description: 'Bastidores da escrita, novidades e conteúdos exclusivos no blog de Olivia Uviplais.'
  },
  agenda: {
    title: 'Agenda — Olivia Uviplais',
    description: 'Confira a agenda de eventos, lives e encontros com Olivia Uviplais.'
  },
  contato: {
    title: 'Contato — Olivia Uviplais',
    description: 'Contato para imprensa, agenciamento e mídia kit de Olivia Uviplais.'
  }
};

function updatePageMeta(pageId) {
  const meta = PAGE_META[pageId] || PAGE_META.home;
  document.title = meta.title;

  let descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute('content', meta.description);

  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.title);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', meta.description);
}

function showPage(pageId = 'home', updateHash = true) {
  const pages = document.querySelectorAll(selectors.page);
  const links = document.querySelectorAll(selectors.pageLink);
  const target = document.getElementById(pageId) || document.getElementById('home');

  pages.forEach((page) => {
    const isActive = page === target;
    page.classList.toggle('active', isActive);
    page.toggleAttribute('aria-hidden', !isActive);
  });

  links.forEach((link) => {
    link.classList.toggle('active', link.dataset.page === target.id);
  });

  updatePageMeta(target.id);
  closeMenu();
  updateHeaderMode();
  window.scrollTo({ top: 0, behavior: 'auto' });

  if (updateHash && window.location.hash !== `#${target.id}`) {
    history.pushState(null, '', `#${target.id}`);
  }
}

window.showPage = showPage;

function updateHeaderMode() {
  const header = document.querySelector(selectors.header);
  if (!header) return;

  const activePageId = document.querySelector('.page.active')?.id;
  const isHero = activePageId === 'home' && window.scrollY <= 80;
  const navLogoImg = document.querySelector('#nav-logo-img');

  header.classList.toggle('hero-mode', isHero);
  header.classList.toggle('solid-mode', !isHero);

  if (navLogoImg) {
    navLogoImg.src = isHero ? 'ID/LOGO-CLARA.png' : 'ID/PRINCIPAL.png';
  }
}

function initMenu() {
  const toggle = document.querySelector(selectors.navToggle);
  const nav = document.querySelector(selectors.navLinks);
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

function closeMenu() {
  const nav = document.querySelector(selectors.navLinks);
  const toggle = document.querySelector(selectors.navToggle);
  if (!nav || !toggle) return;

  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}

function buildBookshelf() {
  const filterNav = document.getElementById('trope-filter-nav');
  const shelves = {
    pt: document.getElementById('bookshelf-pt'),
    idiomas: document.getElementById('bookshelf-idiomas'),
    tradicionais: document.getElementById('bookshelf-tradicionais'),
    audiobooks: document.getElementById('bookshelf-audiobooks')
  };

  if (!filterNav || !shelves.pt || !shelves.idiomas || !shelves.tradicionais || !shelves.audiobooks) return;

  filterNav.replaceChildren(createTropeButton('TODAS', 'all', true));

  getAllTropes().forEach((trope) => {
    const button = createTropeButton(trope, trope);
    button.hidden = true;
    filterNav.appendChild(button);
  });

  filterNav.appendChild(createTropeMoreToggle(filterNav));

  getBooksByRecency().forEach((book) => {
    shelves[book.categoria].appendChild(createBookElement(book));
  });

  initShelfDragScroll();

  filterNav.addEventListener('click', (event) => {
    const button = event.target.closest('.trope-btn');
    if (!button) return;

    filterNav.querySelectorAll('.trope-btn').forEach((item) => {
      item.classList.toggle('is-active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });

    filterBooks(button.dataset.trope);
  });
}

function createTropeMoreToggle(filterNav) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'trope-more-toggle';
  button.textContent = 'Ver mais';
  button.setAttribute('aria-expanded', 'false');

  button.addEventListener('click', () => {
    const expand = button.getAttribute('aria-expanded') === 'false';

    filterNav.querySelectorAll('.trope-btn').forEach((item) => {
      if (item.dataset.trope !== 'all') item.hidden = !expand;
    });

    button.textContent = expand ? 'Ver menos' : 'Ver mais';
    button.setAttribute('aria-expanded', String(expand));
  });

  return button;
}

function initShelfDragScroll() {
  document.querySelectorAll('.suporte-fisico-prateleira').forEach((shelf) => {
    let isDown = false;
    let didDrag = false;
    let startX = 0;
    let startScroll = 0;

    shelf.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
      isDown = true;
      didDrag = false;
      startX = event.clientX;
      startScroll = shelf.scrollLeft;
    });

    shelf.addEventListener('pointermove', (event) => {
      if (!isDown || event.pointerType !== 'mouse') return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 8) {
        didDrag = true;
        shelf.classList.add('is-dragging');
      }
      if (didDrag) {
        shelf.scrollLeft = startScroll - delta;
      }
    });

    const endDrag = () => {
      isDown = false;
      shelf.classList.remove('is-dragging');
    };

    shelf.addEventListener('pointerup', endDrag);
    shelf.addEventListener('pointerleave', endDrag);
    shelf.addEventListener('pointercancel', endDrag);

    shelf.addEventListener('click', (event) => {
      if (didDrag) {
        event.stopPropagation();
        event.preventDefault();
      }
    }, true);
  });
}

function getAllTropes() {
  return [...new Set(BOOKS.flatMap((book) => book.tropes))].sort((a, b) => a.localeCompare(b));
}

function createTropeButton(label, trope, active = false) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `trope-btn${active ? ' is-active' : ''}`;
  button.dataset.trope = trope;
  button.textContent = label;
  button.setAttribute('aria-pressed', String(active));
  return button;
}

function createBookElement(book) {
  const item = document.createElement('li');
  const button = document.createElement('button');

  button.type = 'button';
  button.className = 'book-item';
  button.dataset.tropes = JSON.stringify(book.tropes);
  button.setAttribute('aria-label', `Abrir detalhes de ${book.titulo}`);
  button.innerHTML = `
    <figure class="book-cover">
      <img src="${book.capa}" alt="Capa do livro ${escapeHTML(book.titulo)}" width="300" height="450" loading="lazy">
      <figcaption class="book-overlay">
        <span class="book-overlay-titulo">${escapeHTML(book.titulo)}</span>
        <span class="book-overlay-serie">${escapeHTML(book.serie || 'Ver detalhes')}</span>
      </figcaption>
    </figure>
    <ul class="book-tropes" role="list">
      ${book.tropes.map((trope, index) => `<li><b class="badge ${getBadgeColor(index)}">${escapeHTML(trope)}</b></li>`).join('')}
    </ul>
  `;

  button.addEventListener('click', () => playBookTransition(book));
  item.appendChild(button);
  return item;
}

function initTropeReveal() {
  const button = document.getElementById('trope-reveal-btn');
  const wrap = document.getElementById('organizador-estantes-realistas');
  if (!button || !wrap) return;

  button.addEventListener('click', () => {
    const revealed = wrap.classList.toggle('tropes-visiveis');
    button.setAttribute('aria-pressed', String(revealed));
    button.textContent = revealed ? 'Ocultar as tropes' : 'Revelar as tropes';
  });
}

function getBadgeColor(index) {
  return ['badge-rosa', 'badge-azul', 'badge-ciano'][index % 3];
}

function filterBooks(trope) {
  document.querySelectorAll('.book-item').forEach((bookButton) => {
    const tropes = JSON.parse(bookButton.dataset.tropes || '[]');
    const visible = trope === 'all' || tropes.includes(trope);
    bookButton.parentElement.hidden = !visible;
  });

  document.querySelectorAll('.estante-categoria').forEach((category) => {
    const hasVisibleBooks = [...category.querySelectorAll('li')].some((item) => !item.hidden);
    category.hidden = !hasVisibleBooks;
  });
}

function playBookTransition(book) {
  const stage = document.getElementById('transicao-cenica-estante');
  if (!stage || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    openModal(book);
    return;
  }

  stage.innerHTML = `<figure><img src="${book.capa}" alt=""><var></var></figure>`;
  stage.classList.add('executando-voo');

  window.setTimeout(() => openModal(book), 700);
  window.setTimeout(() => {
    stage.classList.remove('executando-voo');
    stage.replaceChildren();
  }, 1200);
}

function initModal() {
  const overlay = document.querySelector(selectors.modalOverlay);
  const closeButton = document.getElementById('modal-close');

  closeButton?.addEventListener('click', closeModal);
  overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
      closeModal();
    }
  });

  document.querySelectorAll('.modal-tab-btn').forEach((tabButton) => {
    tabButton.addEventListener('click', () => switchModalTab(tabButton.dataset.tab));
  });

  document.querySelector('.modal-galeria-ilustracoes')?.addEventListener('click', (event) => {
    const img = event.target.closest('img');
    if (img) openLightbox(img.src, img.alt);
  });

  initLightbox();
}

function initLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  const closeButton = document.getElementById('lightbox-close');

  closeButton?.addEventListener('click', closeLightbox);
  overlay?.addEventListener('click', (event) => {
    if (event.target === overlay) closeLightbox();
  });
}

function openLightbox(src, alt) {
  const overlay = document.getElementById('lightbox-overlay');
  const img = document.getElementById('lightbox-img');
  if (!overlay || !img) return;

  img.src = src;
  img.alt = alt || '';
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  if (!overlay?.classList.contains('open')) return;

  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
}

function switchModalTab(tab) {
  document.querySelectorAll('.modal-tab-btn').forEach((tabButton) => {
    const active = tabButton.dataset.tab === tab;
    tabButton.classList.toggle('is-active', active);
    tabButton.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.modal-tab-panel').forEach((panel) => {
    panel.hidden = panel.dataset.panel !== tab;
  });
}

function openModal(book) {
  const overlay = document.querySelector(selectors.modalOverlay);
  const modal = document.querySelector(selectors.modalBox);
  if (!overlay || !modal) return;

  const cover = modal.querySelector('.modal-cover');
  const coverImage = modal.querySelector('.modal-cover img');

  cover.style.setProperty('--modal-cover-bg', `url("${book.capa}")`);
  coverImage.src = book.capa;
  coverImage.alt = `Capa do livro ${book.titulo}`;
  modal.querySelector('.modal-serie').textContent = book.serie || 'Romance · Olivia Uviplais';
  modal.querySelector('.modal-title').textContent = book.titulo;
  modal.querySelector('.modal-sinopse').textContent = book.sinopse;
  modal.querySelector('.modal-meta').innerHTML = `
    <article class="info-livro"><small>Lançamento</small><strong>${escapeHTML(book.lancamento)}</strong></article>
    <article class="info-livro"><small>Formato</small><strong>${book.formatoLabel ? escapeHTML(book.formatoLabel) : `${book.paginas} páginas · ${escapeHTML(book.idioma)}`}</strong></article>
  `;
  modal.querySelector('.modal-tropes').innerHTML = book.tropes
    .map((trope) => `<li><b class="trope-clicavel">${escapeHTML(trope)}</b></li>`)
    .join('');
  modal.querySelector('.modal-actions').innerHTML = Array.isArray(book.compras) && book.compras.length
    ? book.compras
        .map((compra, index) => `<a href="${compra.url}" target="_blank" rel="noopener noreferrer" class="btn ${index === 0 ? 'btn-primary' : 'btn-outline-dark'}">${escapeHTML(compra.label)}</a>`)
        .join('')
    : `<a href="${book.ebook}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${book.ctaLabel ? escapeHTML(book.ctaLabel) : 'Comprar eBook'}</a>`;

  const selo = modal.querySelector('.modal-selo-top1');
  if (selo) selo.hidden = !book.topAmazon;

  const hasIlustracoes = Array.isArray(book.ilustracoes) && book.ilustracoes.length > 0;
  const tabIlustracoes = modal.querySelector('.modal-tab-btn[data-tab="ilustracoes"]');
  if (tabIlustracoes) tabIlustracoes.hidden = !hasIlustracoes;

  const galeria = modal.querySelector('.modal-galeria-ilustracoes');
  if (galeria) {
    galeria.innerHTML = hasIlustracoes
      ? book.ilustracoes
          .map((src, index) => `<figure><img src="${src}" alt="Ilustração ${index + 1} de ${escapeHTML(book.titulo)}" loading="lazy"></figure>`)
          .join('')
      : '';
  }

  switchModalTab('sinopse');

  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('modal-close')?.focus();
}

function closeModal() {
  const overlay = document.querySelector(selectors.modalOverlay);
  if (!overlay?.classList.contains('open')) return;

  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

window.closeModal = closeModal;

const BLOG_PAGE_SIZE = 9;
let blogPaginaAtual = 1;

async function buildBlog() {
  const grid = document.querySelector(selectors.blogGrid);
  const paginacao = document.getElementById('blog-paginacao');
  if (!grid) return;

  const url = `https://cdn.contentful.com/spaces/${CONTENTFUL_CONFIG.spaceId}/environments/${CONTENTFUL_CONFIG.environment}/entries?content_type=${CONTENTFUL_CONFIG.contentType}&access_token=${CONTENTFUL_CONFIG.accessToken}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Erro ao buscar posts do Contentful');
    
    const data = await response.json();
    
    const assetsMap = new Map(
      data.includes?.Asset?.map(asset => [asset.sys.id, 'https:' + asset.fields.file.url]) || []
    );

    BLOG_POSTS = data.items.map(item => {
      const c = item.fields;
      const capaAssetId = c.capa?.sys?.id;
      
      let dataFormatada = 'Sem data';
      if (c.data) {
        const [ano, mes, dia] = c.data.split('-');
        if (dia && mes && ano) {
          dataFormatada = `${dia.slice(0,2)}/${mes}/${ano}`;
        } else {
          dataFormatada = new Date(c.data).toLocaleDateString('pt-BR');
        }
      }
      
      return {
        id: item.sys.id,
        slug: c.slug || item.sys.id,
        titulo: c.titulo || 'Sem título',
        categoria: c.categoria || 'Geral',
        data: dataFormatada,
        resumo: c.resumo || '',
        corpo: c.corpo || '',
        capa: assetsMap.get(capaAssetId) || 'OLIVIA-FOTOS/OLIVIA_UVIPLAIS_4.jpg'
      };
    });

    if (BLOG_POSTS.length === 0) {
      grid.innerHTML = '<p>Nenhum post encontrado.</p>';
      return;
    }

    BLOG_POSTS.sort((a, b) => parseDateBR(b.data) - parseDateBR(a.data));

    renderBlogPage(1);

    // Recheck hash router in case a direct link to post was hit before fetch finished
    const hash = window.location.hash.replace('#', '');
    const postMatch = hash.match(/^post-(.+)$/);
    if (postMatch) {
      const post = BLOG_POSTS.find((item) => item.slug === postMatch[1]);
      if (post) {
        renderPost(post);
        showPage('post', false);
      }
    }

  } catch (error) {
    console.error('Erro na integração com Contentful:', error);
    grid.innerHTML = '<p>Erro ao carregar os posts do blog. Tente novamente mais tarde.</p>';
  }
}

function renderBlogPage(pagina) {
  const grid = document.querySelector(selectors.blogGrid);
  const paginacao = document.getElementById('blog-paginacao');
  if (!grid) return;

  const totalPaginas = Math.max(1, Math.ceil(BLOG_POSTS.length / BLOG_PAGE_SIZE));
  blogPaginaAtual = Math.min(Math.max(1, pagina), totalPaginas);

  const inicio = (blogPaginaAtual - 1) * BLOG_PAGE_SIZE;
  const postsDaPagina = BLOG_POSTS.slice(inicio, inicio + BLOG_PAGE_SIZE);

  grid.replaceChildren(...postsDaPagina.map((post) => createBlogCard(post)));

  if (paginacao) {
    if (totalPaginas <= 1) {
      paginacao.replaceChildren();
    } else {
      const botoes = [];
      botoes.push(`<button type="button" class="blog-pag-btn blog-pag-nav" data-pagina="${blogPaginaAtual - 1}" ${blogPaginaAtual === 1 ? 'disabled' : ''} aria-label="Página anterior">←</button>`);
      for (let i = 1; i <= totalPaginas; i += 1) {
        botoes.push(`<button type="button" class="blog-pag-btn${i === blogPaginaAtual ? ' is-active' : ''}" data-pagina="${i}" aria-current="${i === blogPaginaAtual ? 'page' : 'false'}">${i}</button>`);
      }
      botoes.push(`<button type="button" class="blog-pag-btn blog-pag-nav" data-pagina="${blogPaginaAtual + 1}" ${blogPaginaAtual === totalPaginas ? 'disabled' : ''} aria-label="Próxima página">→</button>`);
      paginacao.innerHTML = botoes.join('');
    }
  }
}

function initBlogPaginacao() {
  const paginacao = document.getElementById('blog-paginacao');
  paginacao?.addEventListener('click', (event) => {
    const button = event.target.closest('.blog-pag-btn');
    if (!button || button.disabled) return;
    renderBlogPage(Number(button.dataset.pagina));
    document.getElementById('blog')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
}

function createBlogCategoriaBadge(categoria) {
  const cor = BLOG_CATEGORIA_COR[categoria] || 'vermelho';
  return `<span class="blog-badge blog-badge-${cor}">${escapeHTML(categoria)}</span>`;
}

function createBlogCard(post) {
  const card = document.createElement('a');
  card.href = `#post-${post.slug}`;
  card.className = 'blog-card';
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', `Ler o post: ${post.titulo}`);
  card.innerHTML = `
    <figure class="blog-card-capa">
      <img src="${post.capa}" alt="" loading="lazy">
    </figure>
    <section class="blog-card-corpo">
      <p class="blog-card-meta">${createBlogCategoriaBadge(post.categoria)} <span>${escapeHTML(post.data)}</span></p>
      <h3>${escapeHTML(post.titulo)}</h3>
      <p class="blog-card-resumo">${escapeHTML(post.resumo)}</p>
      <span class="blog-card-link">Ler post completo →</span>
    </section>
  `;
  return card;
}

function renderPost(post) {
  const metaEl = document.getElementById('post-meta');
  const tituloEl = document.getElementById('post-titulo');
  const capaEl = document.getElementById('post-capa-img');
  const corpoEl = document.getElementById('post-corpo');
  const relacionadosEl = document.getElementById('post-relacionados-grid');
  if (!metaEl || !tituloEl || !capaEl || !corpoEl || !relacionadosEl) return;

  metaEl.innerHTML = `${createBlogCategoriaBadge(post.categoria)} <span>${escapeHTML(post.data)}</span>`;
  tituloEl.textContent = post.titulo;
  capaEl.src = post.capa;
  capaEl.alt = post.titulo;

  // PROCESSA PARÁGRAFOS E IMAGENS DO MARKDOWN
  corpoEl.replaceChildren(...post.corpo.split(/\n\n/).map((paragrafo) => {
    const p = document.createElement('p');
    
    // Expressão regular para identificar ![texto](url)
    const markdownImageRegex = /!\[(.*?)\]\((.*?)\)/;
    const match = paragrafo.match(markdownImageRegex);

    if (match) {
      const altText = match[1];
      let imgUrl = match[2].trim();
      
      // Garante o protocolo https: se a URL do Contentful vier com //
      if (imgUrl.startsWith('//')) {
        imgUrl = 'https:' + imgUrl;
      }

      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = altText || post.titulo;
      img.style.maxWidth = '100%';
      img.style.borderRadius = 'var(--radius)';
      img.style.margin = '1.5rem 0';

      return img; // Retorna a imagem renderizada como elemento HTML real
    }

    p.textContent = paragrafo;
    return p;
  }));

  const relacionados = BLOG_POSTS
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => parseDateBR(b.data) - parseDateBR(a.data))
    .slice(0, 3);

  relacionadosEl.replaceChildren(...relacionados.map((item) => createBlogCard(item)));
}

function buildTimeline() {
  const row = document.getElementById('timeline-row');
  const track = document.getElementById('timeline-track');
  if (!row || !track) return;

  const linha = document.createElement('div');
  linha.className = 'tl-line';
  linha.setAttribute('aria-hidden', 'true');
  linha.style.gridColumn = `1 / span ${TIMELINE.length}`;

  const itens = TIMELINE.map((item, index) => {
    const coluna = index + 1;
    const posicao = index % 2 === 0 ? 'top' : 'bottom';

    const element = document.createElement('li');
    element.className = 'tl-item';
    element.innerHTML = `
      <article class="tl-card tl-card--${posicao}" style="grid-column:${coluna}; grid-row:${posicao === 'top' ? 1 : 3};">
        <time>${escapeHTML(item.ano)}</time>
        <h3>${escapeHTML(item.titulo)}</h3>
        <p>${escapeHTML(item.desc)}</p>
      </article>
      <i class="tl-dot" style="grid-column:${coluna};" aria-hidden="true"></i>
    `;
    return element;
  });

  row.replaceChildren(linha, ...itens);
  initHorizontalDrag(track);
}

function initHorizontalDrag(track) {
  let dragging = false;
  let startX = 0;
  let startScroll = 0;

  track.addEventListener('pointerdown', (event) => {
    dragging = true;
    startX = event.clientX;
    startScroll = track.scrollLeft;
    track.classList.add('dragging');
    track.setPointerCapture(event.pointerId);
  });

  track.addEventListener('pointermove', (event) => {
    if (!dragging) return;
    track.scrollLeft = startScroll - (event.clientX - startX) * 1.4;
  });

  track.addEventListener('pointerup', endDrag);
  track.addEventListener('pointercancel', endDrag);

  function endDrag() {
    dragging = false;
    track.classList.remove('dragging');
  }
}

function buildAgenda() {
  const list = document.getElementById('agenda-list');
  const empty = document.getElementById('agenda-empty');
  if (!list) return;

  if (!AGENDA.length) {
    list.hidden = true;
    if (empty) empty.hidden = false;
    return;
  }

  list.hidden = false;
  if (empty) empty.hidden = true;

  const eventosComData = AGENDA
    .map((eventItem) => ({ eventItem, eventDate: getAgendaEventDate(eventItem) }))
    .sort((a, b) => {
      const aPassado = getAgendaStatus(a.eventDate).classe === 'passado';
      const bPassado = getAgendaStatus(b.eventDate).classe === 'passado';
      if (aPassado !== bPassado) return aPassado ? 1 : -1;
      return a.eventDate - b.eventDate;
    });

  const proximoIndex = eventosComData.findIndex(({ eventDate }) => getAgendaStatus(eventDate).classe !== 'passado');

  list.replaceChildren(...eventosComData.map(({ eventItem, eventDate }, index) => {
    const info = AGENDA_TIPO_INFO[eventItem.tipo] || { cor: 'azul', icon: '' };
    const status = getAgendaStatus(eventDate);
    const isOnline = /online/i.test(eventItem.local);
    const isProximo = index === proximoIndex;

    const item = document.createElement('li');
    item.className = `agenda-item agenda-tipo-${info.cor}${status.classe ? ` is-${status.classe}` : ''}`;

    const acaoLocal = isOnline
      ? `<a class="agenda-acao agenda-acao-outline" href="https://www.instagram.com/autoraoliviauviplais/" target="_blank" rel="noopener noreferrer">${AGENDA_ICON_INSTA} Ver no Instagram</a>`
      : `<a class="agenda-acao agenda-acao-outline" href="${buildAgendaMapsLink(eventItem.local)}" target="_blank" rel="noopener noreferrer">${AGENDA_ICON_PIN} Ver no mapa</a>`;

    const horario = eventItem.horaInicio && eventItem.horaFim
      ? `<p class="agenda-horario">${AGENDA_ICON_CLOCK}das ${escapeHTML(eventItem.horaInicio)} às ${escapeHTML(eventItem.horaFim)}</p>`
      : '';

    item.innerHTML = `
      ${isProximo ? '<p class="agenda-destaque-tag">Próximo evento</p>' : ''}
      <time class="agenda-date" datetime="${eventItem.ano}-${String(AGENDA_MES_INDEX[eventItem.mes] + 1).padStart(2, '0')}-${escapeHTML(eventItem.dia)}">
        <strong>${escapeHTML(eventItem.dia)}</strong>
        <small>${escapeHTML(eventItem.mes)} · ${escapeHTML(eventItem.ano)}</small>
      </time>
      <article class="agenda-info">
        <div class="agenda-info-topo">
          <p class="agenda-tipo">${info.icon}${escapeHTML(eventItem.tipo)}</p>
          ${status.label ? `<p class="agenda-status">${escapeHTML(status.label)}</p>` : ''}
        </div>
        <h3>${escapeHTML(eventItem.titulo)}</h3>
        <p class="agenda-desc">${escapeHTML(eventItem.desc)}</p>
        <div class="agenda-info-meta">
          ${horario}
          <address>${AGENDA_ICON_PIN}${escapeHTML(eventItem.local)}</address>
        </div>
        ${status.classe !== 'passado' ? `
        <div class="agenda-acoes">
          <a class="agenda-acao agenda-acao-primaria" href="${buildAgendaCalendarLink(eventItem, eventDate)}" target="_blank" rel="noopener noreferrer">${AGENDA_ICON_CALENDAR} Adicionar à agenda</a>
          ${acaoLocal}
        </div>` : ''}
      </article>
    `;
    return item;
  }));
}

/* ================================================================
   NA MÍDIA — RENDERIZAÇÃO, FILTROS & LIGHTBOX
   ================================================================ */
function buildNaMidia() {
  const grid = document.getElementById('midia-grid');
  if (!grid) return;

  grid.replaceChildren(...NOTICIAS_MIDIA.map((item) => createMidiaCard(item)));
}

function createMidiaCard(item) {
  const card = document.createElement('article');
  card.className = 'midia-card';
  card.setAttribute('role', 'listitem');
  card.dataset.id = item.id;
  card.dataset.tipo = item.tipo;
  card.dataset.categoria = item.categoria;

  const primeiraImg = item.imagens[0];
  const citacaoImg = item.imagens.length > 1 ? item.imagens[1] : null;

  const citacaoHtml = citacaoImg
    ? `
    <div class="midia-citacao-secao">
      <div class="midia-citacao-barra">
        <span class="midia-citacao-tag">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          Recorte / Citação na matéria
        </span>
      </div>
      <figure class="midia-frame midia-frame-citacao" tabindex="0" role="button" aria-label="Ampliar recorte com citação: ${escapeHTML(item.titulo)}">
        <img class="midia-preview-img midia-citacao-img" src="${citacaoImg.src}" alt="${escapeHTML(citacaoImg.alt)}" loading="lazy">
        <div class="midia-frame-overlay">
          <span class="midia-zoom-hint">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            Clique para ampliar citação
          </span>
        </div>
      </figure>
    </div>`
    : '';

  const ctaLinkHtml = item.linkOriginal
    ? `<footer class="midia-card-acoes">
         <a href="${item.linkOriginal}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-dark midia-btn-link" title="Acessar publicação no veículo original">
           Ler matéria original ↗
         </a>
       </footer>`
    : '';

  card.innerHTML = `
    <header class="midia-card-topo">
      <div class="midia-card-meta">
        <span class="midia-badge midia-badge-${item.veiculoBadge}">${escapeHTML(item.veiculo)}</span>
      </div>
      <time class="midia-card-data" datetime="${item.data.split('/').reverse().join('-')}">${escapeHTML(item.dataFormatada)}</time>
    </header>

    <div class="midia-preview-wrap">
      <figure class="midia-frame midia-frame-capa" tabindex="0" role="button" aria-label="Ampliar print da matéria: ${escapeHTML(item.titulo)}">
        <img class="midia-preview-img" src="${primeiraImg.src}" alt="${escapeHTML(primeiraImg.alt)}" loading="lazy">
        <div class="midia-frame-overlay">
          <span class="midia-zoom-hint">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            Clique para ampliar
          </span>
        </div>
      </figure>
      ${citacaoHtml}
    </div>

    <div class="midia-card-corpo">
      <div class="midia-card-info">
        <h3 class="midia-card-titulo">${escapeHTML(item.titulo)}</h3>
        ${item.autor ? `<p class="midia-card-autor">Por <strong>${escapeHTML(item.autor)}</strong></p>` : ''}
      </div>
      ${ctaLinkHtml}
    </div>
  `;

  const frameCapa = card.querySelector('.midia-frame-capa');
  if (frameCapa) {
    const openCapa = () => openLightbox(primeiraImg.src, `${item.veiculo} — ${item.titulo}`);
    frameCapa.addEventListener('click', openCapa);
    frameCapa.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCapa();
      }
    });
  }

  const frameCitacao = card.querySelector('.midia-frame-citacao');
  if (frameCitacao && citacaoImg) {
    const openCitacao = () => openLightbox(citacaoImg.src, `${item.veiculo} (Citação) — ${item.titulo}`);
    frameCitacao.addEventListener('click', openCitacao);
    frameCitacao.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCitacao();
      }
    });
  }

  return card;
}

function initBioToggle() {
  const button = document.getElementById('bio-toggle');
  const expandable = document.getElementById('bio-expandable');
  if (!button || !expandable) return;

  button.type = 'button';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'bio-expandable');

  button.addEventListener('click', () => {
    const open = expandable.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Recolher história ↑' : 'Ler história completa ↓';
  });
}

function toast(message) {
  document.querySelectorAll('.toast').forEach((item) => item.remove());

  const element = document.createElement('output');
  element.className = 'toast';
  element.textContent = message;
  element.setAttribute('role', 'status');

  document.body.appendChild(element);
  window.setTimeout(() => element.remove(), 3800);
}

function escapeHTML(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}