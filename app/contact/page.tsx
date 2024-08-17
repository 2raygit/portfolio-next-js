// components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setStatus("Message sent successfully!");
    }, 1000);
  };

  return (
    <section>
      {" "}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://unblast.com/wp-content/uploads/2021/01/Space-Background-Images.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          objectFit: "cover",
          clipPath: "polygon(0 0%, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-4 justify-center items-center mt-40  z-50 "
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
          {status && (
            <p className="text-green-600 mt-4 text-center">{status}</p>
          )}
        </form>
      </div>{" "}
    </section>
  );
}
