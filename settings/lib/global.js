exports.registerUserLFM = (p) => {
    return `Você esqueceu de colocar o user do LastFM após o comando. Lembre-se de sincronizar com o Spotify.`   
 }

exports.blackList = (GroupMetadata_, sab2) => { 
participant = sab2.participants[0].split("@")[0]
response = [`*@${participant}* foi removido do *${GroupMetadata_.subject}* por está na lista negra.`, `*@${participant}* foi detectado seu número na lista negra, sinto muito você será removido.`, `*@${participant}* você está na lista negra por esse motivo será removido.`, `*@${participant}* acaba de ser removido do grupo, por está na lista negra.`]
return response[Math.floor(Math.random() * response.length)]
}

exports.phrasesLeft = (sab2, encodeURIComponent) => {
response = ["Devemos brindar pela partida dele(a)?", "Menos um nessa indústria virtual...", "Nada pra ver aqui, ele saiu por 'acidente'..."]
return response[Math.floor(Math.random() * response.length)]
}

exports.promoteUser = (usern) => {
response = [ 
    `Foi promovido um novo gerente na administração do grupo. @${usern.split("@")[0]} 🗣️`, 
    `Atenção participantes, foi promovido + 1 adminstrador no grupo. @${usern.split("@")[0]} 🗣️ `, 
    `Acaba de entrar um novo comandante na administração do grupo. @${usern.split("@")[0]} 🗣️`
];
  return response[Math.floor(Math.random() * response.length)]
}

exports.rebaixarUser = (usern) => {
response = [
  `Por decisão técnica @${usern.split("@")[0]} acaba de ser rebaixado a membro comum.`,
  `Por ordem superior @${usern.split("@")[0]} acaba de perder o cargo de (adm) do grupo.`,
  `Desculpe @${usern.split("@")[0]} você não faz mais parte da equipe de (adm) do grupo.`
];
  return response[Math.floor(Math.random() * response.length)];
}

exports.phrasesWelcome = (mdata_2, sab2, encodeURIComponent) => {
response = [`${encodeURIComponent(mdata_2.subject)}`, `Um novo integrante acaba de chegar cheio de assunto!`, "Leia as regras e divirta-se!", "Ja entre no grupo participando!", "Fique avontade pra interagir!", "Colabore com o grupo seja ativo!"]
return response[Math.floor(Math.random() * response.length)]
}

exports.wait = () => {
response = [
    "    𝑷𝑹𝑶𝑪𝑬𝑺𝑺𝑨𝑵𝑫𝑶 𝑺𝑼𝑨 𝑺𝑶𝑳𝑰𝑪𝑰𝑻𝑨ÇÃ𝑶..."
]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyAdmins = () => {
response = [
    'Comando rigorosamente privado somente (adms) tem o direito de solicitar.',
    'Como você quer solicitar um comando que e restrito apenas pra (adms).',
    'Aguarde a presença de um (adm) esse comando somente eles tem o aval pra solicitar.',
    'Quem sabe um dia quando você for adminstrador(a) eu irei retornar seu pedido com sucesso.',
    'Desculpe nesse grupo quem manda são os (adms) somente eles pode solicitar esse comando.',
    'Quem dera eu autorizar você à usar comandos administrativos sem fazer parte da organização do grupo.',
]
return response[Math.floor(Math.random() * response.length)]
}

exports.onlyOwner = () => {
response = [
    'Você não tem nenhum direito de usar este comando, somente meu (dono) tem a total liberdade.',
    'Olá somente pessoas autorizadas tem o poder de usar este comando como eu e meu (dono).',
    'Você não faz parte da     organização do bot, somente o (dono) tem acesso a este comando.'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroup = () => {
response = [
    'Foi mal amiguinho, mas somente grupos tem direito de usar este comando.',
    'Como você quer usar um comando de grupo no privado? se este comando é liberado o uso somente em grupos.',
   'Fui configurado para este comando ser executado somente em grupos.',
   'Olá, tudo bem? esta função está reservada para grupos, se quiser usar, basta me adicionar ao grupo (com a permissão do meu querido dono).'   
];
return response[Math.floor(Math.random() * response.length)];
}
    
exports.onlyBotAdmin = () => {
response = [
    'Quem falou a você que eu posso executar comandos administrativos sem o cargo de (adm) no grupo.',
    'Me coloque como (adm) e estarei fazendo meu trabalho sem interrupções.',
    'Pra mim executar certas funções no grupo, preciso do cargo de (adm).'
];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyGroupFun = (prefixo) => {
response = [
    `Ative: ${prefixo}modobrincadeiras 1`, 
    `Ative: ${prefixo}modobrincadeiras 1`
  ];
return response[Math.floor(Math.random() * response.length)];
}

exports.onlyPrivate = () => {
response = [
    '🔐 O comando só está disponível para o uso em conversas privadas.',
    '🔐 O comando é somente liberado em conversas privadas, mais cuidado meu dono(a) deve ter ativado o (anti-pv).'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.bannedUser = () => {
response = [
    'Você está banido de usar meus comandos por tempo indeterminado. 😱',
    'Você está impossibilitado de usar comandos até meus superiores mudar de ideia. 😱',
    'Você deve ter deixado meu dono com muita raiva, ele te baniu de usar meus comandos. 😱'
]
return response[Math.floor(Math.random() * response.length)];
}

exports.forbiddenStateFromDDD = (mentionUser, whichState, extractDDD) => {
  response = [
    `⚠️ Olá @${mentionUser.split('@')[0]}, você está sendo banido(a) do grupo. Por motivo que você está com ddd proibido nele.`, 
   `🪦 Olá @${mentionUser.split('@')[0]}, venho informar que você está sendo banido(a), por motivo que você possuí um número com o DDD de um estado proibido no grupo.`,
   `👺 Suma daqui! números com o DDD ${extractDDD(mentionUser.split('@')[0])} não são bem-vindos neste grupo.`,
   `😾 Ei, você e nem possuidores do DDD ${extractDDD(mentionUser.split('@')[0])} não são bem-vindos neste grupo.`
    ];
  return response[Math.floor(Math.random() * response.length)];
}

exports.errorConvertSticker = () => {
return 'Falha ao converter a mídia encaminhada para sticker. Por favor, tente novamente mais tarde. 👍🏻😉';
}

exports.errorCommandLink = () => {
return 'Certifique-se ️se esse é o link correto a ser utilizado no comando.';
}

exports.ytLimitDL = () => {
  return "Desculpe, peça outra música que contenha uma duração abaixo de 1 hora.";
}

exports.ytSyntax = (prefix) => {
  return `Seja mais claro, coloque o nome do cantor e a música.`;
}

exports.yt = (res, formatNumberDecimal) => {
  return `🎬 *Título*: ${res.resultado[0].title}\n🕒 *Duração*: ${res.resultado[0].timestamp} _(${formatNumberDecimal(res.resultado[0].seconds)} seg)_\n📆 *Publicado*: ${res.resultado[0].ago}\n👁️ *Visualização*: ${formatNumberDecimal(res.resultado[0].views)}\n🆔 *Canal*: ${res.resultado[0].author.name}\n▶️ *Vídeo*: ${res.resultado[0].url}`
}

exports.ytpvid2 = (response) => {
  return `🎬 *Título*: ${response.resultado?.title}\n🕒 *Duração*: ${response.resultado?.timestamp}n 📆 *Publicação*: ${response.resultado?.uploadDate}\n👁️ *Visualização*: ${response.resultado?.viewsCount.replaceAll("visualizações", "")?.trim()}\n🆔 *Canal*: ${response.resultado?.channel}`
}
exports.syntaxDownloadMusic = () => {
return `Seja mais claro, coloque o nome do cantor e a música.`
}

exports.pinterest = (data, formatNumberDecimal) => {
    return `📷 𝑷𝑰𝑵𝑻𝑬𝑹𝑬𝑺𝑻:\n—\n• *Publicação*: ${data.resultado[0]?.fullname} (@${data.resultado[0]?.by})\n• *Descrição*: ${data.resultado[0]?.desc || 'Sem descrição.'}\n• *Seguidores*: ${formatNumberDecimal(data.resultado[0]?.followers)}\n• *Link*: ${data.resultado[0]?.source}`;
}
exports.smartphoneInfo = (listPhones, detailsPhone) => {
return `• Nome: *${listPhones[0].title}*\n• Disponibilidade: *${detailsPhone["Disponibilidade"]}*\n• Dimensões: *${detailsPhone["Dimensoes"]}*\n• Peso: *${detailsPhone["Peso"]}*\n–\n⚙️ *Especificações Técnicas:*\n• Sistema Operacional: *${detailsPhone["Sistema_Operacional"]}*\n• Chipset & Processador: *${detailsPhone["Chipset"]} - ${detailsPhone["Processador"]}*\n• Contém resistência a água? *${detailsPhone["Resistencia_a_agua"] === false ? "Não" : detailsPhone["Resistencia_a_agua"] === true ? "Sim" : "Não"}*\n• Possuí Dual SIM? *${detailsPhone["Dual_Sim"] === false ? "Não" : detailsPhone["Dual_Sim"] === true ? "Sim" : "Não"} (${detailsPhone["Sim_Card"]})*\n• Velocidade 5G (Dados Móveis): *${detailsPhone["5G"] === false ? "Não" : detailsPhone["5G"] === true ? "Sim" : "Não"}*\n• GPU: *${detailsPhone["GPU"]}*\n• Armazenamento máximo: *${detailsPhone["Memoria_Max"]}*\n• Memória RAM: *${detailsPhone["RAM"]}*\n• Armazenamento expansível: *${detailsPhone["Memoria_Expansivel"] === false ? "Não" : detailsPhone["Memoria_Expansivel"] === true ? "Sim" : "Não"}*\n–\n📱 *Especificações da Tela:*\n• Polegadas (Tamanho): *${detailsPhone["Polegadas"]}*\n• Resolução: *${detailsPhone["Resolucao"]}*\n• Densidade de Pixels: *${detailsPhone["Densidade_de_pixels"]}*\n• Proteção na tela? *${detailsPhone["Protecao"] === false ? "Não" : detailsPhone["Protecao"] === true ? "Sim" : "Não"}*\n• Total FPS (Frame per Second - "Quadros por Segundo"): *${detailsPhone["FPS"]}*\n–\n🔋 *Especificações da Bateria:*\n• Tipo: *${detailsPhone["Tipo"]}*\n• Capacidade (mAh): *${detailsPhone["Ampere"]}*`
}

exports.MediaFire = (response) => {
return `→ Sucesso ao baixar o arquivo: *'${response.resultado.fileName}'* Obrigado por esperar.\n• Extensão: *${response.resultado.mimetype}*\n• Peso (Tamanho): *${response.resultado.info.size}*\n• Upload: *${response.resultado.info.uploadDate}*`
}

exports.tiktok = (data) => {
const tags = data.resultado?.hashtag.map((v, index) => `#${v}`).join(' ');
  return  `𝑰𝑵𝑭𝑶𝑹𝑴𝑨ÇÕ𝑬𝑺:
• *Usuário*: @${data.resultado?.author.nickname} (@${data.resultado?.author.username})\n• *Descrição*: ${data.resultado?.description || "Sem descrição."}\n• *Hashtag's*: ${data.resultado?.hashtag.length} | [${tags}]\n–\n𝑬𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪𝑨:\n• *Comentários*: ${data.resultado?.statistics.commentCount}\n• *Compartilhado*: ${data.resultado?.statistics.shareCount}\n• *Visualizações*: ${data.resultado?.statistics.playCount}\n–\n𝑰𝑫𝑬𝑵𝑻𝑰𝑭𝑰𝑪𝑨𝑹:
• *Nome do Áudio*: ${data.resultado?.music.title}\n• *Criador do Áudio*: ${data.resultado?.music.author}`
}

exports.tiktokSearch = (data) => ` 𝑰𝑵𝑭𝑶𝑹𝑴𝑨ÇÕ𝑬𝑺:
• *Título*: ${data.resultado[0]?.title}\n• *Link*: ${data.resultado[0]?.link}\n—\n 𝑬𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪𝑨:\n• *Visualizações*: ${data.resultado[0]?.views}\n• *Curtidas*: ${data.resultado[0]?.like}\n• *Comentários*: ${data.resultado[0]?.comment}\n• *Compartilhado*: ${data.resultado[0]?.share}\n• *Downloads*: ${data.resultado[0]?.download}`;

exports.tiktokMusic = (data) => {
  return `• *Título*: ${data.resultado?.music.title}\n• *Criador*: ${data.resultado?.music.author}\n• *Álbum*: ${data.resultado?.music.album || "Sem informação."}`
}  

exports.soundCloudSyntax = (action) => {
   if(action === 'missing-link') {
     return `Link não preenchido ou o link não pertence ao SoundCloud! Por favor, coloque um link do SoundCloud após o comando.`
   }
}
exports.SoundCloud = (data, formatNumberDecimal) => {
   return `🎧 𝑺𝑶𝑼𝑵𝑫𝑪𝑳𝑶𝑼𝑫 🎧\n🎶 𝑴𝑼𝑺𝑰𝑪𝑨: *${data.resultado.title}*\n—\n> *# 𝑰𝑵𝑭𝑶𝑹𝑴𝑨ÇÕ𝑬𝑺 - 𝑨𝑼𝑻𝑶𝑹:*\n• 𝑰𝑫: (𝑨𝑪𝑬𝑺𝑺𝑶) *${data.resultado.author.id}*\n• 𝑵𝑶𝑴𝑬: *${data.resultado.author.first_name.trim() || "—"}* *${data.resultado.author.last_name.trim() || "—"}*\n• 𝑼𝑺𝑼𝑨𝑹𝑰𝑶: *@${data.resultado.author.username}*\n• 𝑳𝑰𝑵𝑲: *${data.resultado. author?.permalink_url}*\n• 𝑪𝑰𝑫𝑨𝑫𝑬: *${data.resultado.author.city || "–"}*\n• 𝑼𝑺𝑼𝑨𝑹𝑰𝑶 𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑫𝑶: *${data.resultado.author.verified === false ? "Não" : data.resultado.author.verified === true ? "Sim" : "Não"}*\n• 𝑵𝑼𝑴𝑬𝑹𝑶 𝑫𝑬 𝑳𝑰𝑲𝑬𝑺: *${formatNumberDecimal(data.resultado.author.likes_count)}*`
}

exports.icmsResult = (data) => {
return `📊 Estado ICMS: *${data.resultado.icms}%*\n–\n• Valor ICMS _(valor líquido/taxa)_: *R$ ${data.resultado.icmsTotal}*\n• Total BRL _(valor apresentado + valor icms, em real.)_: *R$ ${data.resultado.total}*\n• Total USD _(valor apresentado + valor icms, convertido p/dolar)_: *$ ${data.resultado.dolar}*\n–\n📌 *Observação:* O valor na remessa pode ser outro, esse cálculo é uma probabilidade de que pode ser aplicada essa taxa. Também pode variar a *alíquota* de cada estado, que é a tal coisa que está sendo encomendada.\n–\n⚠️ *Como é realizado o cálculo de um valor abaixo de R$50?*\n\tProduto × icms(seu estado) = valor_icms\n\tProduto + valor_icms = total\n–\n⚠️ *Como é realizado o cálculo de um valor acima de R$50?*\n 	 Produto + (60 + icms(seu estado)) = valor_icms\n	 Produto + valor_icms = total`
}

exports.syntaxIcms = (prefix) => {
return `O comando está sendo utilizado de forma errada, _por favor confira abaixo a forma correta de uso, para obter sucesso._\n–\nPara usar este comando é nescessario, usar da seguinte forma: *${prefix}icms 704|82*, _explicando sobre os valores apresentados:_\n\t• *704* ‐ O valor que você deseja saber a probabilidade da possível taxa a ser aplicada sobre o valor.\n\t• *88* - O ddd do estado onde você mora, ou o que você deseja consultar.`
}

exports.syntaxTrackParcels = (prefix) => {
return `• Coloque o código da encomenda fornecido pelo Correios, abaixo tem a *explicação e o exemplo de uso*:\n–\n⚠️ *Exemplo:* ${prefix}Rastrear [Código]\n\t• O *código de rastreamento dos Correios* serve para registrar que uma encomenda foi postada e permite localizá-la durante o processo de envio.\n\t• Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.invalidCodeRastrear = () => {
return `• Código inválido ou nenhum resultado foi retornado. Por favor informe um código válido, _verifique se você seguiu a instrução abaixo:_\n\t• Ele é composto por 9 números e 4 letras, duas delas localizadas no início e duas no final da numeração, como no exemplo: *PC123456789BR*.`
}

exports.rastrearEncomenda = (dataResult, q) => {
return `📦 Rastreio de Encomendas:\n• N° de Rastreio: *${q}*\n• Última atualização: *${dataResult.resultado[0].datePost} (${dataResult.resultado[0].timeCount})*\n——\n📍 Histórico de Localização:\n` + dataResult.resultado.map((info, index) => `*[ ${index+1} ]* Status: ${info.description}\n• Postagem: *${info.timeCount} (${info.datePost})*`).join('\n–\n');
}

exports.result_APOD = (dataSab, resultExp) => {
return `🔭 NASA - APOD:\n—\n• Título: *${dataSab.nasa.title}*\n© Copyright: *${dataSab.nasa.copyright || "Sem resultado."}*\n—\n🌐 Explicação:\n${resultExp.resultado.response[0]}`
}

exports.flagpedia = (data) => {
    return ` 𝑩𝑨𝑵𝑫𝑬𝑰𝑹𝑨 𝑫𝑶 𝑷𝑨Í𝑺:
• *Nome*: ${data.resultado?.info['official_name']}\n• *Descrição*: ${data.resultado?.description?.trim()}\n• *Estado Soberano?* ${data.resultado?.info['sovereign_state']}\n—\n𝑷𝑶𝑵𝑻𝑶 𝑴𝑨𝑰𝑺 𝑨𝑳𝑻𝑶 𝑬 𝑩𝑨𝑰𝑿𝑶:\n• *Ponto mais Alto*: ${data.resultado?.info['highest_point']}\n• *Ponto mais Baixo*: ${data.resultado?.info['lowest_point']}\n—\n𝑰𝑵𝑭𝑶𝑹𝑴𝑨ÇÕ𝑬𝑺 𝑫𝑶 𝑷𝑨Í𝑺:\n• *Continente*: ${data.resultado?.info['continent']}\n• *Cidade Capital*: ${data.resultado?.info['capital_city']}\n• *Código de Ligação*: ${data.resultado?.info['calling_code']}\n• *Sigla*: ${data.resultado?.info['country_codes']}\n• *Domínio Internet - TLD*: ${data.resultado?.info['internet_tld']}\n• *Membro Ativo*: ${data.resultado?.info['member_of']}\n• *Moeda*: ${data.resultado?.info['currency']}\n• *População*: ${data.resultado?.info['population']}\n• *GDP per Capita*: ${data.resultado?.info['gdp_per_capita']}\n• *Área Total*: ${data.resultado?.info['total_area']}`;
}

exports.mediafireDownload = (ABC, encurt) => {
  return `*[ MediaFire ]* - Informações Arquivo:\n–\n• *Nome do Arquivo:* ${ABC.resultado[0].nama}\n• *Tamanho:* ${ABC.resultado[0].size}\n• *Tipo de arquivo a ser enviado:* ${ABC.resultado[0].mime}\n–\n*Por favor, aguarde um pouco estou realizando o envio do arquivo.*\n\t• Caso haver um atraso de *2min* pode ser o tamanho do arquivo a ser enviado.\n\t• *Não enviou?* Realize o download pelo link: ${encurt.data}`
}

exports.speed = (speedConverted, os, TimeCount) => {
return `⚡ *Ping:*\n▢ *Resposta:* ${String(speedConverted.toFixed(3))} segundos.\n▢ *Atividade:* ${TimeCount(process.uptime())}\n—\n⚙️ *Sistema:*\n▢ Sistema Operacional: *${os.type()}*\n▢ Versão: *${os.release()}*\n▢ Memória Usada: *${(os.freemem()/Math.pow(1024, 3)).toFixed(2)} GB*\n▢ Total de Memória: *${(os.totalmem()/Math.pow(1024, 3)).toFixed(2)} GB*\n▢ Uso da CPU: *${os.loadavg()[0].toFixed(2)}%*\n▢ Uso da Memória: *${((os.totalmem() - os.freemem()) / os.totalmem() * 100).toFixed(2)}%*\n▢ Versão do NodeJS: *${process.version}*`
}

exports.horoscopo = (data) =>  {
itensAdicionais = data.resultado.signo.itensAdicionais.map((v, index) => `*${v.title}* - ${v.description}`).join(`\n–\n`);
return `*${data.resultado.date}:*\n• ${data.resultado.forecast}\n—\n *${data.resultado.signo.title}:*\n• ${data.resultado.signo.description}\n–\n${itensAdicionais}`
}

exports.dicionario = (data, dataDicio, capitalizeFirstLetter, III) => {
  return `• *Termo* = (Palavra): ${capitalizeFirstLetter(dataDicio.resultado.term)}\n• *Significado*: ${data.resultado[0].description}\n • *Etimologia* = (Origem da palavra):\n> ${dataDicio.resultado.etymology}\n• *Gramatical*: ${capitalizeFirstLetter(dataDicio.resultado.grammaticalClass)}\n• *Vogais*: ${dataDicio.resultado.otherInfo.vowels.split(" ").map((v, index) => `${v}`).join(', ')}\n• *Consoantes*: ${dataDicio.resultado.otherInfo.consonants.split(" ").map((v, index) => `${v}`).join(', ')}\n*—*\n• *Palavra no plural*: ${III}${dataDicio.resultado.plurals.map((v) => v).join(', ')}${III}\n• *Sinônimos*: ${III}${dataDicio.resultado.synonyms.map((v) => v).join(', ')}${III}\n• *Palavras relacionadas*: ${III}${dataDicio.resultado.relatedWords.map((v) => v).join(', ')}${III}\n*—*\n🔍 Frases e exemplos com a palavra “${data.resultado[0].term}”:\n${dataDicio.resultado.exampleSentences.map((v, index) => `\t*${index + 1}.* _${v.frase}_ — *${v.fonte}*`).join('\n')}\n*—*\n • *Definições*:\n${dataDicio.resultado.definitions.map((v, index) => `\t*${index + 1}*. ${v}`).join('\n')}\n*—*\n✒️ Lexicógrafo(a):\n\t• *Nome*: ${dataDicio.resultado.authorInfo.name}\n\t• *Biografia*: ${dataDicio.resultado.authorInfo.biography}`
}

exports.respostaChatGPT = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaResumida = (dataResulted) => {
return `${dataResulted.result}`
}

exports.respostaRedacao = (dataResulted) => {
return `${dataResulted.result}`
}

exports.wikiResposta = (wikis) => {
return `${wikis.data.query.pages[Object.keys(wikis.data.query.pages)].extract}`
}

exports.stickerMetadata = (stickerMetadata) => {
return `• *Emojis*: ${stickerMetadata?.emojis?.join(' ') || '❌'}\n• *Nome do Pacote*: ${stickerMetadata['sticker-pack-name'] || '❌'}\n• *Autor do Pacote*:  ${stickerMetadata['sticker-pack-publisher'] || stickerMetadata['sticker-author-name'] || '❌'}\n• *Sticker Maker _(Android)_*: ${stickerMetadata['android-app-store-link'] || '❌'}\n• *Sticker Maker _(iOS)_*: ${stickerMetadata['ios-app-store-link']|| '❌'}`;
}

exports.emojiGraph = (res) => {
  return `• *Nome*: ${res.resultado?.title}\n• *Descrição*: ${res.resultado?.description}\n• *Emoji*: ${res.resultado?.emoji}\n• *Significado*: ${res.resultado?.meaning}\n—\n• *Plataformas*:\n${res.resultado?.platforms.map((v, index) => `*${index+1}.* ${v.name}: *${v.media}*`).join('\n')}\n—\n• *Grupo*: ${res.resultado?.categoria}\n• *Sub-grupo*: ${res.resultado?.subgrupo}\n• *Codepoint*: ${res.resultado?.codepoints}\n• *Tags*: _${res.resultado?.tags.map((v, index) => v).join(', ')}_`
}
exports.googleImage = (data) => {
return `• *Título*: ${data.origin.title || "Não existe título na imagem."}\n• *Link*: ${data.origin.website.url || "Sem URL."} \n• *Fonte*: ${data.origin.website.name || "Sem informação."} _(${data.origin.website.domain || "Sem informação."})_\n• *Resolução*: ${data.height || "0"} × ${data.width || "0"}`
}

exports.aptoide = (getApk, sizeApk, lnDown) => {
return `• *Nome*: ${getApk.name}\n• *Pacote do Aplicativo*: ${getApk.package}\n • *Tamanho do arquivo à ser Enviado*: ${sizeApk} MB\n• *Versão do aplicativo à ser Enviado*: ${getApk.file.vername}\n——\n [📁] *Não baixou?* Clique no link abaixo e realize o processo:\n↳ ${lnDown.data}`
}

exports.translator = (bla) => {
return `*${bla.resultado.response[0]}*`
}

exports.clima = (wttrin) => {
return `️📡 → 𝑰𝑵𝑭𝑶𝑹𝑴𝑨ÇÕ𝑬𝑺 𝑴𝑬𝑻𝑬𝑶𝑹𝑶𝑳Ó𝑮𝑰𝑪𝑨𝑺 𝑫𝑶 𝑪𝑳𝑰𝑴𝑨 𝑵𝑶 𝑳𝑶𝑪𝑨𝑳: ${wttrin.nearest_area.map((j, i) => j.areaName[i].value+', '+ j.region[i].value +', ' + j.country[i].value).flat().join(' | ')}\n—\n️• *Temperatura Atual*: ${wttrin.current_condition.map(j => j.temp_C).flat().join(' | ')} C° \n• *Sensação Térmica*: ${wttrin.current_condition.map(j => j.FeelsLikeC).flat().join(' | ')} C° \n• *Umidade do Ar*: ${wttrin.current_condition.map(j => j.humidity).flat().join(' | ')}%\n• *Chuvas em Polegadas*: ${wttrin.current_condition.map(j => j.precipInches).flat().join(' | ')} \n• *Cobertura de Nuvens*: ${wttrin.current_condition.map(j => j.cloudcover).flat().join(' | ')}%\n• *Índice de UV _(UltraVioleta)_*: ${wttrin.current_condition.map(j => j.uvIndex).flat().join(' | ')}\n• *Visibilidade*: ${wttrin.current_condition.map(j => j.visibility).flat().join(' | ')} KM - [${wttrin.current_condition.map(j => j.visibilityMiles).flat().join(' | ')} M.]\n• *Descrição*: ${wttrin.current_condition.map(j => j.weatherDesc).flat().map(j => j.value).flat().join(', ')} - [ID #${wttrin.current_condition.map(j => j.weatherCode).flat().join(' | ')}]\n• *Direção do Vento*: ${wttrin.current_condition.map(j => j.winddir16Point).flat().join(', ')} - [${wttrin.current_condition.map(j => j.winddirDegree).flat().join(', ')}°]\n• *Velocidade dos Ventos:*: ${wttrin.current_condition.map(j => j.windspeedKmph).flat().join(', ')} KM \n• *Pressão do Ar*: ${wttrin.current_condition.map(j => j.pressure).flat().join(' | ')} hPa \n—\n️🏘 → 𝑰𝑵𝑭𝑶𝑹𝑴𝑨ÇÕ𝑬𝑺 𝑫𝑶 𝑳𝑶𝑪𝑨𝑳:\n• *Total de Habitantes*: ${wttrin.nearest_area.map(j => j.population).flat().join(' | ')}\n• *Data & Hora*: ${wttrin.current_condition.map(j => j.localObsDateTime).flat().join(', ')}\n• *Horário da Observação*: ${wttrin.current_condition.map(j => j.observation_time).flat().join(', ')}`
}

exports.shazam = (dados) => {
return `✅️🤖 - 𝑺𝑬𝑮𝑼𝑬 𝑨𝑺 𝑰𝑵𝑭𝑶𝑹𝑴𝑨ÇÕ𝑬𝑺 𝑫𝑨 𝑴Ú𝑺𝑰𝑪𝑨 𝑺𝑶𝑳𝑰𝑪𝑰𝑻𝑨𝑫𝑨:\n—\n🔷 𝑴𝑼𝑺𝑰𝑪𝑨: ${dados.music}\n🔷 𝑨𝑹𝑻𝑰𝑺𝑻𝑨: ${dados.artists_name}\n🔷 𝑨𝑳𝑩𝑼𝑴: ${dados.album_name}\n🔷 𝑷𝑹𝑶𝑫𝑼𝑻𝑶𝑹: ${dados.producer || 'Não especificado.'}\n🔷 𝑫𝑼𝑹𝑨ÇÃ𝑶: ${dados.duration}\n🔷 𝑳𝑨𝑵Ç𝑨𝑴𝑬𝑵𝑻𝑶: ${dados.launch}\n🔷 𝑶𝑹𝑰𝑮𝑬𝑴: ${dados.genres.map((v, index) => v).join(', ')}`
}

exports.movies = (movieInfo) => {
return `• *Título*: ${movieInfo.data.results[0].title} (${movieInfo.data.results[0].original_title})\n• *Lançamento*: _${movieInfo.data.results[0].release_date}_\n• *Avaliações*: _${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votos)_\n• *Popularidade do Filme (%)*: ${movieInfo.data.results[0].popularity.toFixed(1)}%\n• *Classificação adulta?* ${movieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n• *Linguagem Oficial*: ${movieInfo.data.results[0].original_language}\n–\n [🎬] *Sinopse do Filme:*\n↳ ${movieInfo.data.results[0].overview}`
}

exports.series = (serieInfo) => {
return `• *Título*: ${serieInfo.data.results[0].name} (${serieInfo.data.results[0].original_name})\n• *Lançamento*: ${serieInfo.data.results[0].first_air_date}\n• *Avaliações*: ${serieInfo.data.results[0].vote_average} - (${serieInfo.data.results[0].vote_count} Votos)\n• *Popularidade da Série (%)*: ${serieInfo.data.results[0].popularity.toFixed(1)}%\n• *Classificação adulta?* ${serieInfo.data.results[0].adult ? 'Sim.' : 'Não.'}\n• *Linguagem Oficial*: *${serieInfo.data.results[0].original_language}*\n–\n• *Sinopse da Série:*\n↳ ${serieInfo.data.results[0].overview}`
}

exports.searchIpAdress = (ip) => {
return `*📡 Localizar + Informações ${ip.data.type}*\n-\n• *Código IP:* ${ip.data.ip}\n• *Tipo de Endereço IP:* ${ip.data.type}\n• *Província:* ${ip.data.region} / ${ip.data.city}\n• *Latitude:* ${ip.data.latitude}\n• *Longitude:* ${ip.data.longitude}\n• *Provedor Wi-Fi:* ${ip.data.isp}\n• *Continente:* ${ip.data.continent} - ${ip.data.continent_code}\n• *País:* ${ip.data.country} - *DDI:* ${ip.data.country_phone}\n• *Sigla:* ${ip.data.country_code} - *Capital:* ${ip.data.country_capital}\n• *Fuso Horário:* ${ip.data.timezone} ${ip.data.timezone_name} ${ip.data.timezone_gmt}\n• *Moeda do País:* ${ip.data.currency} - ${ip.data.currency_code}`
}

exports.searchCep = (res) => {
return `🏠 *Consulta CEP:*\n–\n*Número informado:* ${res.cep}\n• *Logradouro:* ${res.street}\n• *Complemento:* Não encontrado.\n• *Código do DDD:* ${res.ddd}\n• *Bairro:* ${res.neighborhood}\n• *Cidade/Estado:* ${res.city} - ${res.state}\n• *Código do IBGE:* ${res.ibge}\n• *Código do Siafi:* ${res.siafi}`
}

exports.noresult = () => {
return `Desculpe, não consegui encontrar o que você procurava utilizando essa forma, pode tentar de outra maneira.`;
}

exports.profileInformation = (pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, status) => {
return `╭─━━━━━━⊱ 〘 ✨ 𝐒𝐄𝐔 𝐏𝐄𝐑𝐅𝐈𝐋 ✨ 〙⊰━━━━━━─╮
│
├ 🎭 *𝙽𝚒𝚌𝚔*:
│  ➤ *@${sender.split("@")[0]}*
│
├ ✒️ *𝙱𝚒𝚘*:
│  ➤  *Whats* 🪀
│
├ 📲 *𝙲𝚎𝚕𝚞𝚕𝚊𝚛*:
│  ➤ ${info.key.id.length > 21 ? '*Android*' : info.key.id.substring(0, 2) == '3A' ? '*iOS*' : '*Windows/Linux*'} 📲
│
├ 😈↦ *𝑵Í𝑽𝑬𝑳 𝑻𝑹𝑨𝑵𝒁𝑨𝑵𝑻𝑬*: │${putar}${putar2}%
├ 🥵↦ *𝑵Í𝑽𝑬𝑳 𝑮𝑶𝑺𝑻𝑶𝑺𝑶(𝑨)*: │${gostosurar}${gostosurar2}%
├ 🫣↦ *𝑵Í𝑽𝑬𝑳 𝑷𝑬𝑮𝑨𝑫𝑶𝑹(𝑨)*: │${nivelgador}${nivelgado2r}%
├ 🍼↦ *𝑽𝑨𝑳𝑶𝑹 𝑫𝑶 𝑷𝑹𝑶𝑮𝑨𝑴𝑨*: │R$${programa}
│
╰─━━━━━━⊱ 〘 ✨ 𝐁𝐄𝐌 - 𝐕𝐈𝐍𝐃𝐎𝐒 ✨ 〙⊰━━━━━━─╯`
}

exports.warningAdvertencia = (menc_os2, dfqn) => {
return `Olá @${menc_os2.split("@")[0]} - Você foi advertido ${dfqn}/3, tome cuidado com 3 advertências, você será removido...`
}

exports.finishAdvertencia = (menc_os2) => {
return `Adeus usuário: @${menc_os2.split("@")[0]} - Você completou 3 advertências, fale com a administração do grupo para ter noção do que foi ocorrido.`
}

exports.syntaxAnonymousMail = (prefix) => {
return `*Para usar o correio elegante ou não*, pode ser uma indireta também.. 😬\n–\nVocê deve primeiramente copiar o número do seu crush ou inimigo(a), após isso, pense em uma mensagem.\n   • Exemplo: *${prefix}correio [número/msg]*\n   • Exemplo sendo usado em prática: *${prefix}correio +5588.../eu te amo*`
}

exports.anonymousMail = (txt2) => {
return `📪 Você recebeu uma mensagem do maior correio anônimo do Brasil.\n–\n▶️ Quem te enviou? *Desconhecido*\n–\n`+"```"+txt2+"```"
}

exports.sucessAnonymousMail = () => {
return `✅ O correio foi enviado para o remetente com sucesso.\n–\n• *Obs:* Ele(a) pode descobrir quem enviou. _Não me responsabilizo se você enviou mensagens desencorajadas._`
}

exports.unbannedMessage = (blcp) => {
return `@${blcp.split('@')[0]} foi desbanido e poderá novamente usar os comandos do bot.`
}

exports.bannedMessage = (blcp) => {
return `@${blcp.split('@')[0]} foi banido e não poderá mais usar os comandos do bot.`
}

exports.ownersList = (NomeDoBot, numerodono_ofc, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6) => {
return `Olá, aqui está a lista de proprietários do bot: ${NomeDoBot}\n–\n*Dono Oficial:* wa.me/${numerodono_ofc}\n–\nDono [ 1 ] - wa.me/${numero_dono1}\nDono [ 2 ] - wa.me/${numero_dono2}\nDono [ 3 ] - wa.me/${numero_dono3}\nDono [ 4 ] - wa.me/${numero_dono4}\nDono [ 5 ] - wa.me/${numero_dono5}\nDono [ 6 ] - wa.me/${numero_dono6}`
}

exports.statusBot = (isAnticall, isAntiPv, isAntiPv2, isAntiPv3, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isAntiDDD, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn) => {
return `Status de funcionalidades ativaveis para proteger o grupo / se divertir com seus participantes.\nAs funcionalidades como *Anti Privado - Anti Ligação - Modo Aluguel*, são ativações que somente o dono, pode executar, _então caso esteja ativa você não poderá executar comandos no privado ou fazer ligações ao número do bot._\n–\n➱ Anti Ligação: ${isAnticall ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV Block: ${isAntiPv ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV (2) - Sem bloqueio de usuário(s): ${isAntiPv2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti PV (3) - Não responde ninguém no privado: ${isAntiPv3 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Imagem: ${isAntiImg ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Vídeo: ${isAntiVid ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Áudio: ${isAntiAudio? '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Sticker: ${isAntiSticker ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Documento: ${Antidoc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Contato ${isAntiCtt ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Localização: ${Antiloc ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Link Grupo: ${isAntilinkgp ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Link Hard: ${isAntiLinkHard ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Fake: ${isAntifake ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Notas: ${isAntiNotas ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Catalogo: ${isAnticatalogo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti Palavrão: ${isPalavrao ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Limite Caracteres: ${isAntiFlood ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Bem Vindo 1: ${isWelkom ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Bem Vindo 2: ${isWelkom2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Simi 1: ${isSimi ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Simi 2: ${isSimi2 ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Auto Sticker: ${isAutofigu ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Auto Resposta: ${isAutorepo ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Modo Brincadeira: ${isModobn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Modo Aluguel: ${isModoAluguel ?  '✓ - Função ativa.' : '✕ - Não ativado.'}\n➱ Level: ${isLevelingOn ?  '✓ - Função ativa.' : '✕ - Desativado.'}\n➱ Anti DDD: ${isAntiDDD ?  '✓ - Função ativa.' : '✕ - Desativado.'}`
}

exports.errorUploadImage = () => {
return `❌️ Ocorreu um erro na conversão ou pode ser que a duração do vídeo foi ultrapassada, só converto vídeos de até 30s.`
}

exports.noArgsSearch = () => {
return `Como deseja realizar uma pesquisa sem conter nenhum argumento.`
}

exports.syntaxLogos = () => {
return `Cadê o texto? Para eu criar uma logo preciso que você coloque um texto atribuído ao comando.`
}

exports.quoteCurrencies = (response) => {
return `*[COTAÇÃO]* - Os dados informados são atualizados 24h por dia: 🗣💰\n–\n• Moeda: *${response.name}*\n• Valor da moeda mais alto em 24 horas: *R$ ${Number(reponse.high).toFixed(2)}*\n• Valor da moeda mais baixo em 24 horas: *R$ ${Number(repose.low).toFixed(2)}*\n• Valor da moeda atualizado agora no momento: *R$ ${Number(resposta.bid).toFixed(2)}*`
}

exports.syntaxWebSticker = (prefix) => {
    return `🤖 *Como usar o comando 'figuweb'?*\n• *Função:* Criar uma figurinha com texto personalizado e fundo colorido.\n——\n• *Sintaxe do Comando:*\n\t- ${prefix}figuweb [texto]/[número da cor]\n• *Escolhendo a Cor de Fundo:*\n\t- Você pode escolher entre 4 cores diferentes para o fundo da sua figurinha. Basta adicionar o número correspondente à cor desejada após o texto, separado por uma barra (/).\n—\n• *Numerações das cores dos fundos da figurinha de texto:*\n\t- 1. Preto (Padrão), 2. Branco, 3. Vermelho, 4. Azul\n—\n• *Exemplos de usos:*\n \t- ${prefix}figuweb Olá, como vai?/1 (Fundo na cor Preto)\n\t- ${prefix}figuweb Bom dia!/2 (Fundo na cor Branco)\n\t- ${prefix}figuweb Boa tarde!/3 (Fundo na cor Vermelho)\n\t- ${prefix}figuweb Boa noite!/4 (Fundo na cor Azul)\n—\n• Se você não especificar uma cor, o fundo padrão (Preto) será usado.`
}

exports.groupInvitation = (sender, cnvt, prefix) => {
return `*[SOLICITAÇÃO]* - Foi enviado um convite para o bot entrar em um grupo.\n–\n⚙️ *Informações:*\n      • Número: *wa.me/${sender.split("@")[0]}*\n      • Link: *${cnvt}*\n–\n📑 *Como aceitar ou recusar o pedido?*\n      • Para aceitar o pedido é nescessario você usar o comando: ${prefix}entrar e o link do grupo do(a) solicitante.\n          Ex: *${prefix}entrar ${cnvt}*\n      • *Recusar o pedido é fácil!* Mas lembrando ele só serve para notificar o usuário que o pedido foi recusado.\n          Ex: *${prefix}recusar ${sender.split("@")[0]}*`
}

exports.removeUserAntiPlvr = () => {
return `*「 REMOVIDO(A) POR UTILIZAR UMA PALAVRA PROIBIDA 」*\nVocê será banido do grupo, na próxima veja as regras ao digitar qualquer palavra.`
}

exports.permissionDenied_rUser = () => {
return `Infelizmente não sou um (adm) então não posso te banir.`
}

exports.antisRandomMessage = () => {
return `Uma dessas opções estão ativada, mas por você ser adm, não será removido(a) _(ANTI CONTATO - ANTI CATALOGO - ANTI LOCALIZAÇÃO)_`
}

exports.charactersAnti = () => {
return `⚠️ Muitos caracteres foram enviados em uma só mensagem por ordem dos (adms) e pela segurança do grupo irei remover o membro.`;
}

exports.markingAllMember = () => {
return `Foi detectado uma mensagem marcando todos os participantes do grupo, só (adms) tem poder pra isso, por este motivo o membro acaba de ser removido.`;
}

exports.absenceRecordOwner = (NickDono, tabelin) => {
return `Olá, o meu proprietário "${NickDono}" se encontra ausente no momento.\n↺Desde do Horário: ${tabelin.Ausente_Desde}\n–\n☇ Mensagem de Ausência: ${tabelin.Motivo_Da_Ausência}`
}

exports.absenceRecordAdmin = (blak) => {
return `*Registro de Ausência* - O (adm) "@${blak.id.split("@")[0]}" se encontra *ausente* nesse momento.\n–\n☇ Mensagem: ${blak.msg}`
}

exports.floodCommands = () => {
return `Espere *5s* para usar outro comando ou executar o mesmo...`
}

exports.timeRequired = () => {
return `Não é possível realizar download de áudios ou vídeos acima de *20 minutos*.`
}

exports.error = () => {
return `Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.`
}

exports.messageProhibitedDetAdmin = () => {
return `> ⚠️ Mensagem proibida  Detectada: Olá adminstrador(a) sua punição foi anulada pois você pertence à equipe de organização do grupo.`;
}

exports.linkProhibitedDetAdmin = () => {
return `> ⚠️ Link Detectado: Por você ser (adm) tem privilégios em relação aos demais, caso algum membro faça isso não terá a mesma sorte.`
}

exports.pollMessageDetect = (senderUser) => {
  return `⚠️ *[@${senderUser.split('@')[0]}]* - A enquete criada será apagada um dos (adms) ativou uma das configurações de segurança que impede membros inferiores de criar enquetes no grupo.`;
}

exports.messageProhibitedDetUser = () => {
return `⚠️- Mensagem proibida detectada: De acordo com as regras do grupo e antis ativados estou realizando o banimento do infrator.`;
}

exports.antiCalls = () => {
return `📵 - Olá, tudo bem? Você não pode realizar ligações para o bot. Lembrando, o anti ligações está ativado então você será bloqueado no privado, fale com meu/minha chefe para realizar o desbloqueio.`;
}

exports.helpGroupSettings = (prefix, sender) => {
return `🤠 Olá administrador(a) *@${sender.split("@")[0]}*! Tudo bem?\n> Seja bem vindo(a), ao menu de ajuda do comando *'grupo'*:\n–\n1. _${prefix}grupo_ *-open* _→_ Permite o envio das mensagens por todos os participantes do grupo.\n\n2. _${prefix}grupo_ *-close* _→_ Permite o envio de mensagens apenas somente para administradores do grupo.\n\n3. _${prefix}grupo_ *-livre* _→_ Permite a todos os integrantes que editem os dados.\n\n4. _${prefix}grupo_ *-private* _→_ Só irá permitir que as alterações nos dados do grupo, sejam alteradas somente por administradores do mesmo.`
}

exports.helpPhotoPrivacy = (prefix, sender) => {
return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n> Seja bem vindo(a), ao menu de ajuda do comando *'wprivacyph'*:\n–\n1. _${prefix}wprivacyph_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, vejam a foto de perfil.\n\n2. _${prefix}wprivacyph_ *-all* _→_ Permite que todos vejam a foto de perfil do bot.\n\n3. _${prefix}wprivacyph_ *-noall* _→_ Ninguém irá ver a foto de perfil colocada no bot, ou seja, até o proprietário está restrito(oculto) de ver.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade da foto de perfil, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações.`
}

exports.helpGroupPrivacy = (prefix, sender) => {
return `🤪 Olá proprietário(a) *@${sender.split("@")[0]}*! Tudo bem?\n> Seja bem vindo(a), ao menu de ajuda do comando *'wprivacygp'*:\n–\n1. _${prefix}wprivacygp_ *-cntt* _→_ Permite somente que os contatos salvos no dispositivo, adicionem em grupo.\n\n2. _${prefix}wprivacygp_ *-all* _→_ Permite que todos os contatos adicionem no grupo, sem nenhuma interferência.\n\n3. _${prefix}wprivacygp_ *-noall* _→_ Ninguém conseguirá adicionar o bot em grupos, até o(a) dono(a) está restrito.\n–\n📍 *Função:* O comando tem a função de alterar a privacidade de todos os usuários adicionar o contato da bot em grupos, ou seja, você tem como alterar diretamente do bot, sem a precisão abrir o numero do bot e mexer nas configurações do número.`
}

exports.GshowGE = (dataResult) => {
return dataResult.resultado.map((info, index) => `*${index+1}*. ${info.horarioPostagem || 'Há X horas.'} - ${info.trechoManchete || 'Manchete sem descrição.'}\n• URL: ${info.linkNoticia}`).join('\n–\n');
}

exports.helpNoticesG = (sender, prefix) => {
return `Escolha o jogo o qual você quer acompanhar as notícias atuais através do Globo Esporte. *Confira o exemplo:*
• Exemplo: _${prefix}gamenews -[jogo]_
–
🎮 Jogos:
1. _${prefix}gamenews -cod_ → Notícias E-Sport sobre Call of Duty;
2. _${prefix}gamenews -csgo_ → Notícias E-Sport sobre Counter-Strike;
3. _${prefix}gamenews -fifa_ → Notícias E-Sport sobre FIFA 2025;
4. _${prefix}gamenews -fortnite_ → Notícias E-Sport sobre Fortnite;
5. _${prefix}gamenews -gamexp_ → Notícias E-Sport sobre GameXP;
6. _${prefix}gamenews -pes_→ Notícias E-Sport sobre PES;
7. _${prefix}gamenews -lol_→ Notícias E-Sport sobre League of Legends;
8. _${prefix}gamenews -pokemon_→ Notícias E-Sport sobre Pokemon;
9. _${prefix}gamenews -r6_→ Notícias E-Sport sobre Rainbow 6;
10. _${prefix}gamenews -valorant_→ Notícias E-Sport sobre Valorant;
11. _${prefix}gamenews -tcg_→ Notícias E-Sport sobre Pokemon TCG.`
}

exports.helpNoticesEsporte = (sender, prefix) => {
return `🌟 Olá @${sender.split('@')[0]}, seja bem-vindo ao menu de ajuda e tutoriais do comando: *'esporte_noticias'* | *'esportenews'*\n–\n> O comando possuí 18 argumentações de uso, cada uma tem um filtro de notícia. Lembrando, este comando é somente para notícias de esportes! Para ver notícias de jogos online, use: _${prefix}gamenews_.\n–\n*01.* Todas as categorias agrupadas à um só parâmetro: ${prefix}esportenews -all\n*02.* Futebol: ${prefix}esportenews -futebol\n*03.* Futsal: ${prefix}esportenews -futsal\n*04.* Skate: ${prefix}esportenews -skate\n*05.* Surfe: ${prefix}esportenews -surf\n*06.* Basquete: ${prefix}esportenews -basquete\n*07.* Vôlei: ${prefix}esportenews -volei\n*08.* Tênis: ${prefix}esportenews -tenis\n*09.* Atletismo: ${prefix}esportenews -atletismo\n*10.* Natação: ${prefix}esportenews -natacao\n*11.* Ciclismo: ${prefix}esportenews -ciclismo\n*12.* Boxe: ${prefix}esportenews -boxe\n*13.* Beisebol: ${prefix}esportenews -beisebol\n*14.* Futebol EUA: ${prefix}esportenews -futebol-eua\n*15.* Judô: ${prefix}esportenews -judo\n*16.* Ginástica: ${prefix}esportenews -ginastica\n*17.* Golfe: ${prefix}esportenews -golfe\n*18.* Fórmula 1: ${prefix}esportenews -f1`
}

exports.cmdBlockGroup = () => {
return `A função está bloqueada no grupo, um (adm) restringiu o uso deste comando.`;
}

exports.cmdBlockGlobal = () => {
return `Este comando foi bloqueado pelo meu (dono) para todos os usuários.`;
}