import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// VARIÁVEIS DE AMBIENTE
const token = process.env.WHATSAPP_TOKEN;
const verifyToken = process.env.VERIFY_TOKEN;
const phoneId = process.env.PHONE_NUMBER_ID;

// WEBHOOK - VERIFICAÇÃO OBRIGATÓRIA
app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const challenge = req.query["hub.challenge"];
  const verify = req.query["hub.verify_token"];

  console.log("Webhook verification request:", { mode, verify });

  if (mode === "subscribe" && verify === verifyToken) {
    return res.status(200).send(challenge);
  }

  return res.sendStatus(403);
});

// RECEBENDO MENSAGENS DO WHATSAPP
app.post("/webhook", async (req, res) => {
  try {
    const data = req.body;

    if (data.object) {
      const entry = data.entry?.[0]?.changes?.[0]?.value;
      const messages = entry?.messages;

      if (messages && messages[0]) {
        const msg = messages[0];
        const from = msg.from;
        const text = msg.text?.body || "";

        console.log("Mensagem recebida:", text, "de", from);

        // Detectar se é grupo
        const isGroup = from.includes("@g.us");

        // Responder apenas em GRUPOS
        if (isGroup) {
          await sendMessage(
            from,
            `🔥 Uchiha Bot Online!\nVocê disse: *${text}*\n(Grupo detectado)`
          );
        }
      }
    }

    res.sendStatus(200);
  } catch (e) {
    console.error("Erro ao receber mensagem:", e);
    res.sendStatus(500);
  }
});

// FUNÇÃO PARA ENVIAR MENSAGENS
async function sendMessage(to, message) {
  try {
    await axios.post(
      `https://graph.facebook.com/v17.0/${phoneId}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        text: { body: message }
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Mensagem enviada para", to);
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error?.response?.data || error);
  }
}

// SERVIDOR ONLINE
app.listen(process.env.PORT || 3000, () =>
  console.log("🔥 Uchiha Bot rodando no Render!")
);
