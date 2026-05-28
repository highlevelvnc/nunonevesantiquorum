"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
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
    "w-full border-0 border-b border-ink-900/20 bg-transparent px-1 py-3 font-sans text-sm text-ink-900 placeholder:text-ink-500 outline-none transition-colors focus:border-brass-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-1 block font-sans text-[0.62rem] uppercase tracking-wider3 text-ink-500">
            Nome
          </label>
          <input name="nome" required placeholder="O seu nome" className={field} />
        </div>
        <div>
          <label className="mb-1 block font-sans text-[0.62rem] uppercase tracking-wider3 text-ink-500">
            Telefone
          </label>
          <input
            name="telefone"
            required
            placeholder="Contacto telefónico"
            className={field}
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block font-sans text-[0.62rem] uppercase tracking-wider3 text-ink-500">
          Email <span className="text-ink-400">(opcional)</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="email@exemplo.pt"
          className={field}
        />
      </div>
      <div>
        <label className="mb-1 block font-sans text-[0.62rem] uppercase tracking-wider3 text-ink-500">
          Assunto
        </label>
        <select
          name="assunto"
          required
          defaultValue=""
          className={`${field} text-ink-700`}
        >
          <option value="" disabled>
            Selecione um assunto
          </option>
          {SUBJECT_OPTIONS.map((s) => (
            <option key={s} value={s} className="bg-ivory-50 text-ink-900">
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1 block font-sans text-[0.62rem] uppercase tracking-wider3 text-ink-500">
          Mensagem
        </label>
        <textarea
          name="mensagem"
          rows={4}
          placeholder="Descreva as peças que pretende vender…"
          className={`${field} resize-none`}
        />
      </div>
      <button type="submit" className="btn-ink w-full">
        Enviar pelo WhatsApp
        <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
      </button>
      {sent && (
        <p className="text-center font-serif text-lg italic text-oxblood-600">
          A abrir o WhatsApp… se não abrir, ligue 963 863 208.
        </p>
      )}
    </form>
  );
}
