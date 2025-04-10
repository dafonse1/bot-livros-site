
import { useEffect, useState } from "react";

export default function Desbloquear() {
  const [userId, setUserId] = useState("");
  const [livro, setLivro] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUserId(params.get("user_id"));
    setLivro(params.get("livro"));
  }, []);

  const desbloquear = async () => {
    if (!userId || !livro) {
      alert("Parâmetros inválidos!");
      return;
    }

    const payload = { [userId]: livro };

    try {
      const res = await fetch("/api/registar_desbloqueio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("✅ Livro desbloqueado! Verifica o Telegram.");
      } else {
        alert("❌ Erro ao comunicar com o servidor.");
      }
    } catch (err) {
      alert("⚠️ Erro de rede.");
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>📚 Desbloquear Livro</h1>
      <p>Vê os anúncios abaixo e depois clica no botão.</p>

      <iframe
        src="https://www.propellerads.com/"
        width="300"
        height="250"
        style={{ border: "none" }}
      ></iframe>

      <br />
      <button style={{ padding: 15, fontSize: 18 }} onClick={desbloquear}>
        Já vi a publicidade
      </button>
    </div>
  );
}
