export const config = {
  runtime: "nodejs"
};

import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Método não permitido");
  }

  const data = req.body;
  const filePath = path.join("/tmp", "desbloqueados.json");

  let jsonAtual = {};
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath);
    try {
      jsonAtual = JSON.parse(raw);
    } catch (e) {
      jsonAtual = {};
    }
  }

  const novo = { ...jsonAtual, ...data };
  fs.writeFileSync(filePath, JSON.stringify(novo, null, 2));

  res.status(200).json({ status: "ok" });
}
