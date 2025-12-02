import express from "express";
import helmet from "helmet";
import { loadEnv } from "./config/env";
import logger from "./utils/logger";
import { verifyToken } from "./controllers/verifyController";
import { receiveMessage } from "./controllers/messageController";
import { verifySignature, apiRateLimiter } from "./utils/security";
import { sendLogToWhodbok } from "./services/whodbok.service";

loadEnv();

const app = express();
app.use(express.json({ limit: "1mb" }));
app.use(helmet());
app.use(apiRateLimiter);

app.get("/webhook", verifyToken);
app.post("/webhook", verifySignature, async (req, res) => {
  await sendLogToWhodbok({ event: "webhook_received", body: req.body });
  return receiveMessage(req, res);
});

const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => {
  logger.info(`Uchiha-Bot v10.0.1 rodando na porta ${PORT}`);
});
