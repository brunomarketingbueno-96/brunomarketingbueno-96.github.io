import { useState } from 'react';

// Copywriting estratégico: As perguntas antecipam as objeções de quem vai comprar um serviço de alto valor.
const faqs = [
  {
    id: 1,
    question: "O serviço do Bruno serve para empresas físicas ou só digitais?",
    answer: "Serve para ambos. A metodologia dos 4 pilares já gerou resultados em nichos diversos, desde clínicas e lojas físicas (varejo/atacado) até e-commerces, infoprodutos e startups. O foco do 1º Pilar (Diagnóstico) é justamente adaptar a estratégia à realidade do seu modelo de negócio."
  },
  {
    id: 2,
    question: "Você funciona como uma agência de marketing tradicional?",
    answer: "Não. Na agência tradicional o foco costuma ser apenas na entrega de 'posts e curtidas'. Eu atuo como estrategista digital focado em processos, vendas e conversão. Trabalho a integração do marketing com o seu comercial (Inbound, Outbound, CRM e Automações) para garantir escala e lucro real."
  },
  {
    id: 3,
    question: "Minha equipe comercial tem dificuldades. Você ajuda nessa etapa?",
    answer: "Com certeza! Esse é o meu 2º Pilar (Integração de Áreas). De nada adianta o marketing gerar centenas de contatos se a equipe de vendas não consegue fechar. Ajudo a otimizar ferramentas de CRM, funis de vendas, automações de WhatsApp e até no treinamento de scripts para o seu time."
  },
  {
    id: 4,
    question: "Em quanto tempo começo a ver os resultados?",
    answer: "Eu utilizo o Princípio de Pareto (focar nos 20% das ações que geram 80% dos resultados) e o modelo MVP para validar estratégias rapidamente. Embora o marketing exija uma construção sólida, minha meta é encontrar os 'ralos de dinheiro' e aplicar vitórias rápidas já nas primeiras semanas de execução."
  },
  {
    id: 5,
    question: "Como saberei o que está sendo feito no projeto?",
    answer: "Transparência total. Aplico metodologias ágeis (3º Pilar) usando ferramentas como Trello e Notion. Você terá acesso aos cronogramas, métricas e saberá exatamente qual tarefa está sendo executada e quando será entregue."
  }
];

export default function FAQ() {
  // Estado para controlar qual pergunta está aberta (null = todas fechadas)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white px-6 md:px-20 border-t border-zinc-100">
      <div className="max-w-4xl mx-auto">

        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-wide uppercase text-sm mb-3">
            Tire suas dúvidas
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-800 leading-tight mb-4">
            Perguntas Frequentes
          </h3>
          <p className="text-zinc-600 text-lg">
            Ainda tem dúvidas se essa é a escolha certa para o seu negócio?
          </p>
        </div>

        {/* Lista de Acordeão (FAQ) */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-colors duration-300 ${isOpen ? 'border-amber-600 bg-amber-50/30' : 'border-zinc-200 bg-white hover:border-amber-300'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className={`font-bold text-lg pr-4 ${isOpen ? 'text-amber-700' : 'text-zinc-800'}`}>
                    {faq.question}
                  </span>

                  {/* Ícone de + e - animado */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-amber-600 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                      )}
                    </svg>
                  </div>
                </button>

                {/* Conteúdo Expansível com truque de CSS Grid para animação fluida de altura */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 text-zinc-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}