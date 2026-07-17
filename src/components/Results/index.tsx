import { useState, useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';
import CallToAction from '@/components/CallToAction';

const AnimatedCounter = ({ end, prefix = "", suffix = "", decimals = 0 }: { end: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  // Detect visibility using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Smooth animation using requestAnimationFrame
  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = 0;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // easeOutExpo for smooth braking at the end
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * end);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals).replace(".", ",")}
      {suffix}
    </span>
  );
};

const caseStudies = [
  {
    id: 1,
    niche: "Nicho: Produto Perpétuo",
    title: "Escala Rápida em Vendas",
    description: "Transformamos um e-book de fornecedores de moda em um produto de alta rentabilidade 100% online.",
    end: 150,
    prefix: "+R$ ",
    suffix: " mil",
    decimals: 0,
    time: "em apenas 3 meses",
  },
  {
    id: 2,
    niche: "Nicho: Medicina Integrativa",
    title: "Retorno sobre Investimento",
    description: "Lançamento focado em público quente, gerando um faturamento bruto de quase R$ 64 mil com alto lucro.",
    end: 35.6,
    prefix: "ROAS ",
    suffix: "x",
    decimals: 1,
    time: "Retorno por real investido",
  },
  {
    id: 3,
    niche: "Nicho: Tecnologia em Saúde",
    title: "Premiação Internacional",
    description: "Premiação como 4º lugar no Brasil por uma multinacional americana, com homenagem direta em Cancún, México.",
    end: 75,
    prefix: "U$ ",
    suffix: " mil",
    decimals: 0,
    time: "em vendas diretas",
  },
  {
    id: 4,
    niche: "Nicho: Naturopatia",
    title: "Lançamento Digital",
    description: "Conversão estratégica com público alvo altamente engajado, gerando mais de R$ 60 mil de faturamento bruto.",
    end: 27.5,
    prefix: "ROAS ",
    suffix: "x",
    decimals: 1,
    time: "Retorno por real investido",
  }
];

export default function Results() {
  return (
    <section id="resultados" className="py-24 bg-white px-6 md:px-20 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto">

        <SectionHeader
          subtitle="Estudos de Caso"
          title="Resultados que falam mais alto que promessas."
          description="Números reais de quem vive o front de batalha do digital, gerando lucro em múltiplos nichos e modelos de negócio."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
            >
              {/* Subtle background decoration on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full z-0 transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>

              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white border border-zinc-200 text-zinc-500 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                  {item.niche}
                </span>

                {/* Animated large number */}
                <div className="text-5xl lg:text-6xl font-extrabold text-amber-600 mb-2 tracking-tighter">
                  <AnimatedCounter
                    end={item.end}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    decimals={item.decimals}
                  />
                </div>

                <span className="block text-zinc-800 font-semibold mb-4 bg-amber-100/50 w-max px-2 py-0.5 rounded text-sm">
                  {item.time}
                </span>

                <h4 className="text-xl font-bold text-zinc-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <CallToAction
          buttonText="Quero esse nível de resultado no meu negócio"
          whatsappMessage="Olá Bruno, vi os resultados do seu portfólio e gostaria de entender como aplicar essas estratégias na minha empresa."
        />

      </div>
    </section>
  );
}
