import { forwardRef } from "react";

export const Contact = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <section 
      ref={ref}
      id="Contact" 
      className="min-h-screen flex flex-col items-center justify-center border-t border-white/5 bg-black/20"
    >
      <h2 className="font-serif text-5xl mb-8">Contato</h2>
      <p className="text-gray-400">Aqui vai entrar o scroll horizontal...</p>
    </section>
  );
});

Contact.displayName = "Contact";