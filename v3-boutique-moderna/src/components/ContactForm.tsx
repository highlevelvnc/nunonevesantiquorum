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
    "w-full rounded-xl border border-emerald-600/25 bg-forest-950/40 px-4 py-3 font-sans text-sm text-ink-100 placeholder:text-ink-400 outline-none transition-all duration-300 focus:border-emerald-400/70 focus:bg-forest-900/50 focus:ring-2 focus:ring-emerald-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="nome" required placeholder="Nome" className={field} />
        <input
          name="telefone"
          required
          placeholder="Telefone"
          className={field}
        />
      </div>
      <input
        name="email"
        type="email"
        placeholder="Email (opcional)"
        className={field}
      />
      <select
        name="assunto"
        required
        defaultValue=""
        className={`${field} text-ink-200`}
      >
        <option value="" disabled>
          Assunto
        </option>
        {SUBJECT_OPTIONS.map((s) => (
          <option key={s} value={s} className="bg-forest-900 text-ink-100">
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
      <button type="submit" className="btn-primary w-full">
        <Send className="h-4 w-4" strokeWidth={1.8} />
        Enviar pelo WhatsApp
      </button>
      {sent && (
        <p className="text-center font-serif text-base italic text-emerald-200">
          A abrir o WhatsApp… se não abrir, ligue 963 863 208.
        </p>
      )}
    </form>
  );
}
