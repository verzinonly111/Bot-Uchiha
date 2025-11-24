import { BOT_NAME } from '../../conf.js';

export async function commandInfo(sock, message) {
    const infoMessage = `╔═══════════════════════════════════╗
║   🔱 INFO DO BOT UCHIHA 🔱      ║
╚═══════════════════════════════════╝

👤 Nome: ${BOT_NAME}
⚙️ Versão: 2.0.0
🛠️ Desenvolvedor: Rúben Silver
📅 Ano: 2024
🔗 Status: ✅ Online

Comandos Disponíveis:
• !menu - Mostrar menu
• !ping - Testar conexão
• !ajuda - Lista de comandos`;
    
    await sock.sendMessage(message.key.remoteJid, { text: infoMessage });
}

export async function commandAjuda(sock, message) {
    const helpMessage = `╔═══════════════════════════════════╗
║        📚 AJUDA DO BOT 📚        ║
╚═══════════════════════════════════╝

💰 ECONOMIA:
• !saldo - Ver seu saldo
• !transferir @user valor - Transferir moedas
• !diario - Recompensa diária

📈 XP E NÍVEIS:
• !xp - Ver seu XP e nível
• !ranking - Top 5 ranking
• !top-ricos - Top 5 mais ricos

🎮 DIVERSÃO:
• !piada - Ouvir uma piada
• !dado - Rolar um dado
• !moeda - Jogar moeda

🛠️ UTILIDADES:
• !ping - Testar conexão
• !info - Informações do bot
• !ajuda - Esta mensagem`;
    
    await sock.sendMessage(message.key.remoteJid, { text: helpMessage });
}
