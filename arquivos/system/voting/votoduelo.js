const fs = require('fs');
const votacao = JSON.parse(fs.readFileSync('./arquivos/system/voting/db/votacaoduelo.json'));

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const delVotoDuelo = (ID) => {
    pesquisar = ID;
    processo = votacao.indexOf(pesquisar);
    while(processo >= 0) {
        votacao.splice(processo, 1)
        processo = votacao.indexOf(pesquisar);
    }
    fs.writeFileSync(`./arquivos/system/voting/db/votacaoduelo.json`, JSON.stringify(votacao));
    fs.unlinkSync(`./arquivos/system/voting/db/p1_votos/${ID}.json`); // votos
    fs.unlinkSync(`./arquivos/system/voting/db/p2_votos/${ID}.json`); // p_votos
}

const addVotoDuelo = async(ID , _valor1 , _valor2 , _valor3, _valor4 , reply) => {
    votacao.push(ID);
    fs.writeFileSync(`./arquivos/system/voting/db/p2_votos/${ID}.json` , '[]');
    fs.writeFileSync(`./arquivos/system/voting/db/p1_votos/${ID}.json` , '[]');
    fs.writeFileSync('./arquivos/system/voting/db/votacaoduelo.json', JSON.stringify(votacao));
    await sleep(2000);
    let votos = JSON.parse(fs.readFileSync(`./arquivos/system/voting/db/p1_votos/${ID}.json`));
    votos.push({
        razao: _valor1 ? _valor1 : '-' ,
        votos: _valor2.trim() + '@s.whatsapp.net' ,
        votos2: _valor3.trim() + '@s.whatsapp.net',
        duracao: _valor4
    })
    fs.writeFileSync(`./arquivos/system/voting/db/p1_votos/${ID}.json`, JSON.stringify(votos));
    setTimeout(async function() {
        voto = JSON.parse(fs.readFileSync(`./arquivos/system/voting/db/p2_votos/${ID}.json`));
        let verdade = voto.filter(dds => dds.votacao == '1');
        let falso = voto.filter(dds => dds.votacao == '2');
        await reply(`🗳 Votação encerrada ⏰️\n\n• Total de votos para o 1° participante: ${verdade.length}\n• Total de votos para o 2° participante: ${falso.length}`);
        fs.unlinkSync(`./arquivos/system/voting/db/p1_votos/${ID}.json`);
        fs.unlinkSync(`./arquivos/system/voting/db/p2_votos/${ID}.json`);
        fs.writeFileSync(`./arquivos/system/voting/db/votacaoduelo.json`, JSON.stringify(votacao));
    } ,  _valor4 * 60 * 1000);
}

module.exports = {
    delVotoDuelo,
    addVotoDuelo
}
