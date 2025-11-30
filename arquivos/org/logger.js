const colors = require('colors');

exports.sayLog = (message) => {
  console.log(colors.bold.bgCyan.white("[𝐃𝐑𝐀𝐊𝐄 - 𝐁𝐎𝐓 | 𝐓𝐀𝐋𝐊]"), message);
};

exports.inputLog = (message) => {
  console.log(colors.bold.bgMagenta.white("[𝐃𝐑𝐀𝐊𝐄 - 𝐁𝐎𝐓 | 𝐈𝐍𝐏𝐔𝐓]"), message);
};

exports.infoLog = (message) => {
  console.log(colors.bold.bgBlue.white("[𝐃𝐑𝐀𝐊𝐄 - 𝐁𝐎𝐓 | 𝐈𝐍𝐅𝐎]"), message);
};

exports.successLog = (message) => {
  console.log(colors.bold.bgGreen.white("[𝐃𝐑𝐀𝐊𝐄 - 𝐁𝐎𝐓 | 𝐒𝐔𝐂𝐂𝐄𝐒𝐒]"), message); 
}

exports.warningLog = (message) => {
  console.log(colors.bold.bgYellow.black("[𝐃𝐑𝐀𝐊𝐄 - 𝐁𝐎𝐓 | 𝐖𝐀𝐑𝐍𝐈𝐍𝐆]"), message); 
};

exports.eventLog = (type, { user, group, isGroup, date, time, content, messageType }) => {
  const eventType = colors.bold.bgBlue.white(`[ ${type.toUpperCase()} ]`);
  const location = isGroup ? `${colors.white('Grupo')}: ${colors.bold.cyan(group || 'Desconhecido')}` : `${colors.white('Privado')}`;
  const userDisplay = colors.magenta('Usuário') + `: ${colors.bold(user || 'Desconhecido')}`;
  const contentDisplay = colors.white('Conteúdo') + `: ${colors.dim(content || "N/A")}`;
  const typeDisplay = messageType ? colors.gray(`(${messageType || "Desconhecido"})`) : '';
  const dateTime = colors.white(`${date} às ${time}`);
  console.log(`${eventType} ${dateTime} | ${userDisplay} | ${location} | ${contentDisplay} ${typeDisplay}`);
};
