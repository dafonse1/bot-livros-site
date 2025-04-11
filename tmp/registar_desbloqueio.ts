export const config = {
  runtime: "nodejs"
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end("Método não permitido");
  }

  console.log("RECEBIDO:", req.body);

  res.status(200).json({ status: "ok", recebido: req.body });
}
