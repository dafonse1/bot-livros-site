"use client";

import { useEffect, useState } from "react";

export default function Desbloquear() {
  const [userId, setUserId] = useState("");
  const [livro, setLivro] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const user = params.get("u");
    const book = params.get("l");
    if (user) setUserId(user);
    if (book) setLivro(book);
  }, []);

  async function desbloquear() {
    for (let i = 0; i < 3; i++) {
      window.open("https://www.google.com", "_blank"); // substitui por link do adsterra
    }
    const res = await fetch("/api/registar_desbloqueio", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [userId]: livro })
    });
    const json = await res.json();
    alert("✅ Desbloqueio enviado!");
  }

  return (
    <div>
      <h1>📚 Desbloquear Livro</h1>
      <p>Livro: {livro}</p>
      <button onClick={desbloquear}>✅ Já vi a publicidade</button>
    </div>
  );
}