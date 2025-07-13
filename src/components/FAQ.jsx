import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    { question: 'What are your working hours?', answer: 'We are open from 9 AM to 6 PM, Monday to Saturday.' },
    { question: 'Do you accept insurance?', answer: 'Yes, we accept most major dental insurance plans.' },
    { question: 'How can I book an appointment?', answer: 'You can call us or use the contact form on this website.' },
  ];

  return (
    <section className="faq">
      <h2>FAQs</h2>
      {faqs.map((faq, idx) => (
        <div key={idx}>
          <button onClick={() => setOpen(open === idx ? null : idx)}>
            {faq.question}
          </button>
          {open === idx && <p>{faq.answer}</p>}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
