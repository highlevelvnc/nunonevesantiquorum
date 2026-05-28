"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { WHATSAPP_NUMBER, SUBJECT_OPTIONS } from "@/lib/constants";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    const nome = (data.get("nome") as string) || "";
    const telefone = (data.get("telefone") as string) || "";
    const email = (data.get("email") as string) || "";
    const assunto = (data.get("assunto") as string) || "";
    const mensagem = (data.get("mensagem") as string) || "";

    const texto =
      `Olá! Gostaria de pedir uma avaliação.%0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*Telefone:* ${telefone}%0A` +
      `*Email:* ${email}%0A` +
      `*Assunto:* ${assunto}%0A%0A` +
      `${mensagem}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
    setSent(true);
    f.reset();
    window.setTimeout(() => setSent(false), 6000);
  };

  const field =
    "w-full bg-transparent border border-gold-600/30 px-4 py-3 font-sans text-sm text-gold-100 placeholder:text-gold-100/35 outline-none transition-colors focus:border-gold-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="nome" required placeholder="Nome" className={field} />
        <input name="telefone" required placeholder="Telefone" className={field} />
      </div>
      <input name="email" type="email" placeholder="Email (opcional)" className={field} />
      <select name="assunto" required defaultValue="" className={`${field} text-gold-100/80`}>
        <option value="" disabled>
          Assunto
        </option>
        {SUBJECT_OPTIONS.map((s) => (
          <option key={s} value={s} className="bg-noir-900 text-gold-100">
            {s}
          </option>
        ))}
      </select>
      <textarea
        name="mensagem"
        rows={4}
        placeholder="Descreva as peças que pretende vender…"
        className={`${field} resize-none`}
      />
      <button type="submit" className="btn-gold w-full justify-center">
        <Send className="h-4 w-4" />
        Enviar pelo WhatsApp
      </button>
      {sent && (
        <p className="text-center font-serif text-base italic text-gold-300">
          A abrir o WhatsApp… se não abrir, ligue {`963 863 208`}.
        </p>
      )}
    </form>
  );
}
