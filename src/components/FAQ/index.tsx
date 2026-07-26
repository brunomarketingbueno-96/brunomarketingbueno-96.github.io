import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeader from '@/components/SectionHeader';

const faqs = [
  {
    id: 1,
    question_key: 'faq.faq_1_question',
    question_default: "Does Bruno's service work for physical businesses or only digital ones?",
    answer_key: 'faq.faq_1_answer',
    answer_default: "It works for both. The 4-pillar methodology has already generated results in diverse niches, from clinics and physical stores (retail/wholesale) to e-commerces, digital products, and startups. The focus of the 1st Pillar (Diagnosis) is precisely to adapt the strategy to the reality of your business model."
  },
  {
    id: 2,
    question_key: 'faq.faq_2_question',
    question_default: "Do you work like a traditional marketing agency?",
    answer_key: 'faq.faq_2_answer',
    answer_default: "No. In a traditional agency, the focus is usually just on delivering 'posts and likes'. I act as a digital strategist focused on processes, sales, and conversion. I work on integrating marketing with your sales team (Inbound, Outbound, CRM, and Automations) to ensure scale and real profit."
  },
  {
    id: 3,
    question_key: 'faq.faq_3_question',
    question_default: "My sales team is struggling. Do you help in this stage?",
    answer_key: 'faq.faq_3_answer',
    answer_default: "Absolutely! That is my 2nd Pillar (Area Integration). There's no point in marketing generating hundreds of leads if the sales team can't close. I help optimize CRM tools, sales funnels, WhatsApp automations, and even script training for your team."
  },
  {
    id: 4,
    question_key: 'faq.faq_4_question',
    question_default: "How long until I start seeing results?",
    answer_key: 'faq.faq_4_answer',
    answer_default: "I use the Pareto Principle (focusing on the 20% of actions that generate 80% of results) and the MVP model to validate strategies quickly. Although marketing requires a solid foundation, my goal is to find the 'money leaks' and apply quick wins in the very first weeks of execution."
  },
  {
    id: 5,
    question_key: 'faq.faq_5_question',
    question_default: "How will I know what is being done in the project?",
    answer_key: 'faq.faq_5_answer',
    answer_default: "Total transparency. I apply agile methodologies (3rd Pillar) using tools like Trello and Notion. You will have access to schedules, metrics, and will know exactly what task is being executed and when it will be delivered."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappNumber = "5545991566359";
  const whatsappMessage = encodeURIComponent(
    t('faq.whatsapp_message', { defaultValue: 'Hello Bruno, I read the FAQs on the website and still have some questions. Can we talk?' })
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="FAQ" className="py-24 bg-white px-6 md:px-20 border-t border-zinc-100">
      <div>

        <SectionHeader
          subtitle={t('faq.subtitle', { defaultValue: 'Clear your doubts' })}
          title={t('faq.title', { defaultValue: 'Frequently Asked Questions' })}
          description={t('faq.description', { defaultValue: 'Still wondering if this is the right choice for your business?' })}
        />

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
                    {t(faq.question_key, { defaultValue: faq.question_default })}
                  </span>

                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-amber-600 text-white' : 'bg-zinc-100 text-zinc-500'}`}>
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

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 text-zinc-600 leading-relaxed">
                      {t(faq.answer_key, { defaultValue: faq.answer_default })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            {t('faq.button_text', { defaultValue: 'I still have questions' })}
            <svg
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
