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
    categoria: 'pt' },
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
    sinopse: 'Amy St. Clair e Harry Ryder não se suportam desde a primeira vez que se viram. Eles eram o velho clichê: Amy não o tolera e Harry adora provocá-la. Ainda assim, por debaixo de toda aquela aversão, faíscas voam quando se encontram.\n\nAgora seus melhores amigos estão se casando e, como padrinhos dessa união, os dois terão que se aturar durante um mês para ajudar nos preparativos da cerimônia. Presos um ao outro como cão e gato, eles sentirão o ódio se transformar em algo mais.\n\nAfinal de contas, o amor nem sempre vem em pacotes convenientes.\n\nUma comédia romântica enemies to lovers +18 de arrancar risadas e te deixar de coração quentinho.', 
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
    categoria: 'pt' },
  { id: 'alianca-perfeita', 
    titulo: 'Aliança Perfeita', 
    serie: null, 
    capa: 'CAPAS/12. Aliança Perfeita.jpg', 
    lancamento: '10/05/2023', idioma: 'Português', 
    paginas: 411, 
    ebook: 'https://a.co/d/0axA1E4e', 
    sinopse: 'Lize Wilson pensava que se vestir de princesa cinco dias da semana seria bem mais divertido do que realmente é, mas a aspirante a atriz consegue encontrar alguma diversão sendo a animadora de festas infantis no meio de bolos, balões e crianças birrentas, principalmente se Aiden, seu melhor amigo e príncipe nas festas, estiver junto.\n\nAiden Smith é um misterio. Dirigindo um carro legal demais para o salário de animador de festas, tendo um passaporte canadense e a inabilidade de sorrir, ele é tudo que ninguém espera numa festa infantil.\n\nAinda mais considerando que, secretamente, ele é o herdeiro de uma das maiores fortunas do seu país.\n\nNo entanto, quando Aiden recebe uma carta misteriosa de deportação da imigração, Lize sabe que precisa ajudá-lo.\n\nA única forma de fazer isso é casando com o melhor amigo.\n\nEm busca de um Green Card, Lize e Aidan vão criar lembranças, fraudar processos e, quem sabe, revelar sentimentos que sempre estiveram ali.\n\nEm Aliança Perfeita, uma trama digna de um conto de fadas e produções Disney, Olivia Uviplais continua a encantar com seus personagens reais e provar o porquê é a deusa das comédias românticas hot.', 
    tropes: ['FAKE DATING', 'FRIENDS TO LOVERS', 'SÓ TEM UMA CAMA', 'ELE ODEIA TODO MUNDO MENOS ELA'], 
    categoria: 'pt' },
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
    categoria: 'pt' },
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
    categoria: 'pt' },
  { id: 'um-comeco-imperfeito', 
    titulo: 'Um Começo Imperfeito: a bebê secreta do magnata', 
    serie: null, capa: 'CAPAS/16. Um Começo Imperfeito a bebê secreta do magnata.jpg', 
    lancamento: '13/06/2024', 
    idioma: 'Português', 
    paginas: 305, 
    ebook: 'https://a.co/d/00su91QD', 
    sinopse: 'Eles não se conhecem, mas vão cuidar de uma bebê juntos.\n\nIzzy Miller nunca se imaginou como a responsável por uma criança. A jovem fotógrafa se julgava inocente e inexperiente demais para o papel de mãe, e isso sempre esteve longe de seus planos.\n\nMas quando sua melhor amiga morre deixando para trás a pequena Stella, uma linda garotinha de nove meses, Izzy percebe que precisa assumir aquele dever.\n\nMattia Fabri é um homem de casos de uma noite. Um dos empresários mais influentes da Itália. Frio, enigmático e arrogante, ele nunca quis relacionamentos. Apesar de ter como meta formar uma família, sua carreira sempre foi sua única prioridade. E ele estava feliz com o arranjo.\n\nAté receber a notícia de que uma mulher de um dos seus casos de uma noite faleceu e deixou para trás uma herdeira sua. Uma bebê que Mattia nunca teve conhecimento sobre. Porém, sua filha não vem sozinha.\n\nIzzy está tentando o seu melhor pela pequena Stella quando o milionário sedutor aparece em sua porta com uma demanda: quer reivindicar a bebê que nunca teve oportunidade de conhecer.', 
    tropes: ['AGE GAP', 'GRAVIDEZ INESPERADA', 'CONVIVÊNCIA FORÇADA', 'ITALIANO POSSESSIVO E PROTETOR'], 
    categoria: 'pt' },
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
    categoria: 'pt' },
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
    categoria: 'pt' },
  { id: 'amor-por-acidente', 
    titulo: 'Amor Por Acidente - Livro 1 da Série Irmãos Callahan', 
    serie: 'Irmãos Callahan · Livro 1', 
    capa: 'CAPAS/19. Amor Por Acidente (Irmãos Callahan Livro 1).jpg', 
    lancamento: '24/03/2025', 
    idioma: 'Português',
   paginas: 709, 
   ebook: 'https://a.co/d/01F0vaPu', 
   sinopse: 'Todo mundo sabe que engenheiras e arquitetos não se dão bem, mas Florence e Garrett vão mostrar que algumas regras podem ser quebradas.\n\nFlorence Beaumont coloca o trabalho em primeiro, segundo e terceiro lugar em sua vida. Na quarta posição, está o ódio que ela sente pelo herdeiro da Callahan Structures, um arquiteto playboy e mulherengo, que está sempre competindo com ela pelos melhores projetos. Uma disputa que termina com uma aposta inocente: quem tiver mais projetos aprovados em um ano ganhará a chance de fazer o que quiser com o outro. E Florence está pronta para fazer o badboy se ferrar.\n\nGarrett Callahan sabe que a vida é curta demais para se preocupar tanto. Herdeiro de um império no ramo das construções, sua vida é tão fácil quanto pode ser. Exceto por uma engenheira nervosa em seu caminho. E ele gosta disso. A mulher sistemática e competitiva reprova totalmente seus hábitos de conquista, e ele já sabe o que fazer quando ganhar aquela aposta estúpida: Garrett levará Florence para uma noite ao seu lado. Um encontro que provará à engenheira que existe uma razão pela qual as mulheres sempre voltam pedindo mais.\n\nNo entanto, as coisas fogem do controle quando todo o ódio reprimido do casal cão e gato se transforma em uma atração avassaladora.\n\nAgora, os dois inimigos terão que lidar com a consequência daquela noite que, em nove meses, estará nos braços deles.\n\nInimigos podem se tornar… algo mais?', 
   tropes: ['HATERS TO LOVERS', 'GRAVIDEZ INESPERADA', 'CONVIVÊNCIA FORÇADA', 'GRUMPY X SUNSHINE'], 
   categoria: 'pt' },
  { id: 'chefe-quase-perfeito', 
    titulo: 'Um chefe (Quase) Perfeito - Livro 2 da Série Irmãos Callahan', 
    serie: 'Irmãos Callahan · Livro 2', 
    capa: 'CAPAS/20. Um Chefe (Quase) Perfeito (Irmãos Callahan Livro 2).jpg', 
    lancamento: '11/08/2025', idioma: 'Português', 
    paginas: 597, ebook: 'https://a.co/d/04Y02MC0', 
    sinopse: 'Uma noite. Um nome falso. Nenhuma regra.\nEles só não esperavam se reencontrar no escritório… como chefe e funcionária.\n\nCamille Beaumont não queria o estágio na Callahan Structures, mas agora é a única chance que tem de concluir a graduação. E, para comemorar sua desgraça, a garota resolve afogar as mágoas em uma decisão impulsiva: passar a noite com um estranho doze anos mais velho, que ela nunca mais veria na vida.\n\nSem nomes reais. Sem promessas. Sem chances de vê-lo de novo. Ou assim ela pensava.\n\nNa manhã seguinte, Camille descobre que seu novo chefe é ninguém menos que o homem que conheceu no bar. CEO. Herdeiro da construtora. E, agora, o maior problema da sua vida.\n\nRaiden Callahan carrega o peso do world nos ombros e, naquela noite, tudo o que queria era uma pausa do papel de executivo impiedoso. O que ele não imaginava era que sua fuga teria cabelos cor-de-rosa, um nome inventado… e um crachá de estagiária na segunda-feira.\n\nAgora, os dois precisam trabalhar lado a lado fingindo que nada aconteceu, mas a tensão entre eles diz o contrário. Chefe e funcionária podem se tornar… algo mais?', 
    tropes: ['AGE GAP', 'CONVIVÊNCIA FORÇADA', 'CHEFE X FUNCIONÁRIA', 'GRUMPY X SUNSHINE'], 
    categoria: 'pt' },
  { id: 'como-salvar-mafioso', 
    titulo: 'Como Salvar Um Mafioso', 
    serie: null, 
    capa: 'CAPAS/21. Como Salvar Um Mafioso.jpg', 
    lancamento: '07/11/2025', 
    idioma: 'Português', 
    paginas: 412, 
    ebook: 'https://a.co/d/09mpKRyN', 
    sinopse: 'Lila Harris levava uma vida normal como motorista de aplicativos, até um homem armado e todo ensanguentado entrar no carro dela com uma única palavra: dirige. Ele não precisava dizer duas vezes.\n\nRocco Bazzini é um príncipe da máfia. Prestes a subir para o cargo mais alto da La Mano Scarlatta, sofreu uma emboscada em Nova Iorque. A cúpula da organização mafiosa e seus inimigos não sabem que ele está vivo, e quer vingança.\n\nCheio de ódio e muito ferido, tudo que ele tem é uma garota inocente de olhos curiosos que salvou sua vida e… um bulldog velho. Para se recuperar, Rocco precisa de abrigo e dos cuidados dela, mas Lila é atraente demais para o próprio bem.\n\nA chama proibida entre eles ganha contornos ainda mais irresistíveis quando o mafioso faz uma proposta: por 100 mil dólares a motorista o levará para o esconderijo da máfia fora de Nova Iorque. E Lila sabe que recusar não é uma opção. Ela precisa do dinheiro e… Rocco é um mafioso mimado demais para ouvir um não.\n\nAgora, o caminho do futuro Don da máfia e da jovem tagarela se cruzaram, tornando ambos os mundos muito mais próximos do que eles poderiam imaginar.', 
    tropes: ['COMÉDIA ROMÂNTICA COM MAFIOSO', 'GRUMPY X SUNSHINE', 'CONVIVÊNCIA FORÇADA'], 
    categoria: 'pt' },
  { id: 'improvisado', 
    titulo: 'Improvisado O Clube dos Pais Solteiros do Hóquei', 
    serie: 'O Clube dos Pais Solteiros do Hóquei', 
    capa: 'CAPAS/22. Improvisado O Clube dos Pais Solteiros do Hóquei.jpg', 
    lancamento: '06/04/2026', idioma: 'Português', paginas: 551, ebook: 'https://a.co/d/0g4GXayq', 
    sinopse: '“Casa comigo?” A brasileira e assistente pessoal Anna Tereza Barcelos não imaginava que ouviria aquelas palavras saindo da boca de seu chefe, ainda mais quando a relação deles era estritamente profissional.\n\nEle precisava de alguém para lembrá-lo dos compromissos? Feito.\nEle precisava resolver problemas antes que virassem manchetes? Conte com ela.\nEle queria alguém em quem confiar sem precisar explicar nada? Tudo sob controle.\n\nMas, quando o serviço de imigração liga informando que Anna não foi aprovada para mais um visto de trabalho, o jogador de hóquei sério e frio faz a proposta: um casamento falso para mantê-la no país.\n\nWeston Burke é o homem das cavernas do New York Warriors. O maior ala esquerda da história do time coleciona vitórias, mas sua vida privada é um segredo para os torcedores. Tudo o que se sabe sobre o dia a dia do astro do hóquei é que ele é pai de um garotinho, solteiro e jamais é visto sorrindo em público.\n\nE agora ele vai se casar em uma cerimônia midiática — um relacionamento falso que precisa convencer o mundo inteiro de que Wes e Tessa estão apaixonados.\n\nMas, no meio de todo esse noivado improvisado, um sentimento real pode nascer?', 
    tropes: ['CASAMENTO POR CONVENIÊNCIA', 'AGE GAP', 'GRUMPY X SUNSHINE', 'CHEFE X FUNCIONÁRIA'], 
    categoria: 'pt' },
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
    lancamento: 'N/A', idioma: 'Português', 
    paginas: 310, ebook: 'https://a.co/d/04k3otwX', 
    sinopse: 'Marina Dantas é uma advogada recém-formada, determinada a mostrar que tem tudo para se tornar implacável na profissão. Quando recebe a missão de convencer um padeiro a vender sua loja, enxerga na tarefa a oportunidade perfeita para provar seu valor em um dos maiores escritórios do país.\n\nO que ela não esperava era enfrentar Estevão Avelar, um chef de cozinha que jamais quis herdar a padaria da família. Sonhador e apaixonado pela culinária internacional, ele se vê preso ao legado dos Avelar, agora ameaçado pela construção de um shopping no local.\n\nEla quer fechar o negócio. Ele quer salvar a padaria. Ambos têm boas razões para não ceder. O que nenhum dos dois contava era com a atração imediata que transforma a convivência forçada em uma batalha de provocações, sarcasmo e sentimentos inesperados.\n\nEm meio a negociações tensas e faíscas emocionais, Marina e Estevão descobrem que, quando o jogo é entre rivais, o coração pode ser o maior dos imprevistos. E no fim das contas, um só ganha se o outro perder.', 
    tropes: ['ENEMIES TO LOVERS', 'GRUMPY X SUNSHINE', 'APROXIMAÇÃO FORÇADA'], 
    categoria: 'tradicionais' }
];

const TIMELINE = [
  { ano: '1999', titulo: 'Origens em Minas', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
  { ano: 'xxxx', titulo: 'O primeiro fanfic', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
  { ano: 'xxxx', titulo: 'Wattpad', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
  { ano: 'xxxx', titulo: 'Top 17 Kindle', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
  { ano: 'xxxx', titulo: 'Os Padrinhos', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' },
  { ano: 'xxxx', titulo: 'Best-Seller Amazon', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' }
];

const AGENDA = [
  { dia: '15', mes: 'Ago', ano: '2026', tipo: 'Feira', titulo: 'Bienal do Livro SP', local: 'São Paulo, SP', desc: 'Mesa de debates sobre comédias românticas brasileiras contemporâneas.' },
  { dia: '20', mes: 'Set', ano: '2026', tipo: 'Lançamento', titulo: 'Live de Lançamento', local: 'Online · Instagram', desc: 'Live com a autora, revelação de novo livro e Q&A ao vivo com leitoras.' },
  { dia: '12', mes: 'Out', ano: '2026', tipo: 'Evento', titulo: 'Encontro com Leitoras', local: 'Belo Horizonte, MG', desc: 'Sessão de autógrafos e bate-papo exclusivo no maior evento literário de MG.' }
];

const selectors = {
  header: '#site-header',
  navToggle: '#nav-toggle',
  navLinks: '#nav-links',
  page: '.page',
  pageLink: '[data-page]',
  modalOverlay: '#modal-overlay',
  modalBox: '#modal-box'
};

document.addEventListener('DOMContentLoaded', initSite);

function initSite() {
  initRouter();
  initMenu();
  buildTimeline();
  buildBookshelf();
  buildAgenda();
  initForms();
  initBioToggle();
  initModal();
}

function initRouter() {
  const links = document.querySelectorAll(selectors.pageLink);
  const initialPage = getPageFromHash();

  document.addEventListener('click', (event) => {
    const link = event.target.closest(selectors.pageLink);
    if (!link) return;

    event.preventDefault();
    showPage(link.dataset.page || 'home');
  });

  window.addEventListener('hashchange', () => showPage(getPageFromHash(), false));
  window.addEventListener('scroll', updateHeaderMode, { passive: true });

  links.forEach((link) => {
    link.classList.toggle('active', link.dataset.page === initialPage);
  });
  showPage(initialPage, false);
}

function getPageFromHash() {
  const page = window.location.hash.replace('#', '');
  return document.getElementById(page) ? page : 'home';
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

  const pageId = getPageFromHash();
  const isHero = pageId === 'home' && window.scrollY <= 80;
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
    tradicionais: document.getElementById('bookshelf-tradicionais')
  };

  if (!filterNav || !shelves.pt || !shelves.idiomas || !shelves.tradicionais) return;

  filterNav.replaceChildren(createTropeButton('Todos', 'all', true));

  getAllTropes().forEach((trope) => {
    filterNav.appendChild(createTropeButton(trope, trope));
  });

  BOOKS.forEach((book) => {
    shelves[book.categoria].appendChild(createBookElement(book));
  });

  // Aguarda o navegador terminar de desenhar a página
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      initTropeFilterOverflow(filterNav);
    });
  });

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
function initTropeFilterOverflow(filterNav) {
  const buttons = Array.from(filterNav.querySelectorAll('.trope-btn'));

  let moreButton = filterNav.querySelector('.trope-more-toggle');

  if (!moreButton) {
    moreButton = document.createElement('button');
    moreButton.type = 'button';
    moreButton.className = 'trope-more-toggle';
    moreButton.textContent = 'Ver mais';
    moreButton.hidden = true;
    moreButton.setAttribute('aria-expanded', 'false');
    filterNav.appendChild(moreButton);
  }

  let firstLineLimit = buttons.length;

  const updateOverflowState = () => {
    buttons.forEach(button => button.hidden = false);

    const gap = parseFloat(
      getComputedStyle(filterNav).columnGap ||
      getComputedStyle(filterNav).gap ||
      '0'
    );

    const availableWidth = filterNav.clientWidth;

    let usedWidth = 0;
    firstLineLimit = 0;

    buttons.forEach((button, index) => {
      const width = Math.ceil(button.getBoundingClientRect().width);

      if (
        index === 0 ||
        usedWidth + gap + width <= availableWidth
      ) {
        usedWidth = index === 0 ? width : usedWidth + gap + width;
        firstLineLimit = index + 1;
      }
    });

    buttons.slice(firstLineLimit).forEach(button => {
      button.hidden = true;
    });

    const hasOverflow = firstLineLimit < buttons.length;

    moreButton.hidden = !hasOverflow;
    moreButton.textContent = 'Ver mais';
    moreButton.setAttribute('aria-expanded', 'false');
  };

  moreButton.onclick = () => {
    const expand = moreButton.getAttribute('aria-expanded') === 'false';

    buttons.slice(firstLineLimit).forEach(button => {
      button.hidden = !expand;
    });

    moreButton.textContent = expand ? 'Ver menos' : 'Ver mais';
    moreButton.setAttribute('aria-expanded', String(expand));
  };

  requestAnimationFrame(updateOverflowState);

  window.addEventListener('load', updateOverflowState);

  if (document.fonts) {
    document.fonts.ready.then(updateOverflowState);
  }

  window.addEventListener('resize', updateOverflowState, {
    passive: true
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
      <figcaption class="book-overlay"><span>Detalhes</span></figcaption>
    </figure>
    <section class="book-meta">
      <h3>${escapeHTML(book.titulo)}</h3>
      <p>${escapeHTML(book.serie || book.idioma)}</p>
      <ul class="book-tropes" role="list">
        ${book.tropes.map((trope, index) => `<li><b class="badge ${getBadgeColor(index)}">${escapeHTML(trope)}</b></li>`).join('')}
      </ul>
    </section>
  `;

  button.addEventListener('click', () => playBookTransition(book));
  item.appendChild(button);
  return item;
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
    if (event.key === 'Escape') closeModal();
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
    <article class="info-livro"><small>Formato</small><strong>${book.paginas} páginas · ${escapeHTML(book.idioma)}</strong></article>
  `;
  modal.querySelector('.modal-tropes').innerHTML = book.tropes
    .map((trope) => `<li><b class="trope-clicavel">${escapeHTML(trope)}</b></li>`)
    .join('');
  modal.querySelector('.modal-actions').innerHTML = `
    <a href="${book.ebook}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Comprar eBook</a>
  `;

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

function buildTimeline() {
  const row = document.getElementById('timeline-row');
  const track = document.getElementById('timeline-track');
  if (!row || !track) return;

  row.replaceChildren(...TIMELINE.map((item) => {
    const element = document.createElement('li');
    element.className = 'tl-item';
    element.innerHTML = `
      <i class="tl-connector" aria-hidden="true"></i>
      <article class="tl-card">
        <time>${escapeHTML(item.ano)}</time>
        <h3>${escapeHTML(item.titulo)}</h3>
        <p>${escapeHTML(item.desc)}</p>
      </article>
    `;
    return element;
  }));

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
  if (!list) return;

  list.replaceChildren(...AGENDA.map((eventItem) => {
    const item = document.createElement('li');
    item.className = 'agenda-item';
    item.innerHTML = `
      <time class="agenda-date" datetime="${eventItem.ano}">
        <strong>${escapeHTML(eventItem.dia)}</strong>
        <small>${escapeHTML(eventItem.mes)} ${escapeHTML(eventItem.ano)}</small>
      </time>
      <article class="agenda-info">
        <p class="agenda-tipo">${escapeHTML(eventItem.tipo)}</p>
        <h3>${escapeHTML(eventItem.titulo)}</h3>
        <p>${escapeHTML(eventItem.desc)}</p>
        <address>${escapeHTML(eventItem.local)}</address>
      </article>
    `;
    return item;
  }));
}

function initForms() {
  const forms = [
    { id: 'form-nl-page', message: 'Inscrição registrada. Bem-vinda ao Oliviverso!' },
    { id: 'form-contato', message: 'Mensagem enviada para a assessoria!' }
  ];

  forms.forEach(({ id, message }) => {
    const form = document.getElementById(id);
    form?.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      toast(message);
      form.reset();
    });
  });
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
