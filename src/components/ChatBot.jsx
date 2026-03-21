import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

// ---------------------------------------------------------------------------
// Knowledge base — pure static data, zero cost, runs entirely in the browser
// ---------------------------------------------------------------------------
const KB = [
  {
    tags: ['hello', 'hi', 'hey', 'howzit', 'good morning', 'good afternoon', 'greetings'],
    answer: "Hi there! Welcome to VLC Construction. I can help you with information about our services, team, location, and more. What would you like to know?"
  },
  {
    tags: ['what do you do', 'what does vlc do', 'company', 'about vlc', 'about you', 'who are you', 'what is vlc'],
    answer: "VLC Construction (Pty) Ltd is a premier provider of high-quality steel products and comprehensive construction services for industrial plant projects across South Africa. We specialise in structural steel, piping, manufacturing, labour hire, and turnkey project solutions."
  },
  {
    tags: ['services', 'offerings', 'what can you do', 'list services'],
    answer: "Our core services include:\n\n• Structural Steel Installation\n• Steel Piping Fabrication & Installation\n• Steel Manufacturing & Fabrication\n• Labour Hire\n• Nickel Plate Maintenance\n• Construction Erection\n• Turnkey Project Solutions\n\nWe also offer Design & Engineering, Welding, Surface Coating, Quality Control, Project Management, Maintenance & Repair, and Demolition."
  },
  {
    tags: ['structural steel', 'steel installation', 'steel framework', 'steel structure'],
    answer: "Our Structural Steel Installation service covers everything from initial design and fabrication to on-site erection. We ensure precise, stable steel frameworks built to full safety and industry standards."
  },
  {
    tags: ['piping', 'pipes', 'pipe fabrication', 'pipeline', 'steel piping'],
    answer: "We fabricate and install all types of steel piping — carbon steel, stainless steel, and alloy piping. Services include custom pipe bending, welding, and on-site installation for industrial and commercial applications."
  },
  {
    tags: ['manufacturing', 'fabrication', 'steel manufacturing', 'steel fabrication', 'carbon steel', 'stainless'],
    answer: "VLC manufactures and fabricates a wide range of steel components including carbon steel and stainless-steel products. Our state-of-the-art facilities produce high-quality, durable steel tailored to each client's needs."
  },
  {
    tags: ['labour hire', 'workers', 'staffing', 'welders', 'fitters', 'riggers', 'tradespeople'],
    answer: "We offer Labour Hire services providing experienced welders, fitters, riggers, and tradespeople for construction and maintenance projects. Our workers ensure the right expertise is on-site to complete jobs safely and efficiently."
  },
  {
    tags: ['nickel', 'nickel plate', 'nickel maintenance', 'buffing', 'restoration'],
    answer: "Our Process Division handles maintenance and restoration of nickel-plated surfaces using advanced buffing techniques to ensure optimal condition, durability, and appearance."
  },
  {
    tags: ['erection', 'building erection', 'construction erection', 'commercial', 'industrial building', 'residential'],
    answer: "Our Construction Erection services cover commercial, industrial, and residential projects. We accurately position and securely fasten all structural elements while adhering to stringent safety and quality standards."
  },
  {
    tags: ['turnkey', 'end to end', 'full project', 'complete project', 'design to completion'],
    answer: "Our Turnkey Project Solutions manage your entire project from inception to completion — including design, procurement, construction, and commissioning — delivering a fully operational facility on time."
  },
  {
    tags: ['welding', 'metal joining', 'weld'],
    answer: "We provide expert welding and metal joining services for both assembly and repair of steel parts, ensuring structural integrity throughout."
  },
  {
    tags: ['coating', 'surface treatment', 'painting', 'galvanizing', 'powder coating', 'corrosion'],
    answer: "Our Surface Treatment and Coating service applies protective coatings — including galvanizing, painting, and powder coating — to prevent corrosion and extend the lifespan of steel components."
  },
  {
    tags: ['quality control', 'inspection', 'quality', 'standards'],
    answer: "We conduct rigorous quality control and inspection at every stage to ensure all steelwork meets industry standards and project specifications — from planning right through to final execution."
  },
  {
    tags: ['maintenance', 'repair', 'upkeep'],
    answer: "Our Maintenance and Repair service provides routine upkeep and emergency repair to keep steel structures and equipment in optimal operating condition."
  },
  {
    tags: ['demolition', 'dismantling', 'remove structure', 'tear down'],
    answer: "We offer safe and efficient Demolition and Dismantling of steel structures and industrial facilities. Our team follows strict safety protocols for controlled removal, while maximising material recovery and recycling."
  },
  {
    tags: ['design', 'engineering', 'design services'],
    answer: "Our Design & Engineering team provides innovative design solutions and comprehensive engineering services for steel structures and construction projects."
  },
  {
    tags: ['project management', 'manage project', 'project oversight'],
    answer: "We offer comprehensive Project Management services covering all aspects of steelwork projects from inception to completion, ensuring everything runs on time and within budget."
  },
  {
    tags: ['consultation', 'technical support', 'advice', 'expert advice'],
    answer: "Our team offers expert Consultation and Technical Support to ensure the success of your steelwork and construction projects. Feel free to reach out to info@vlcconstruction.co.za."
  },
  {
    tags: ['location', 'address', 'where are you', 'office', 'head office', 'rustenburg', 'where is vlc'],
    answer: "Our office is located at:\n\n192A Kock Street\nRustenburg, NW 0299\nSouth Africa"
  },
  {
    tags: ['hours', 'open', 'when open', 'business hours', 'working hours', 'time'],
    answer: "We are open Monday to Friday, 08:00 – 17:00 SAST. We aim to respond to all enquiries within 24 business hours."
  },
  {
    tags: ['contact', 'email', 'reach', 'get in touch', 'info email', 'general enquiry'],
    answer: "You can reach us at:\n\n📧 info@vlcconstruction.co.za\n🌐 www.vlc-construction.com\n📍 192A Kock Street, Rustenburg\n\nOr use the Contact page to send us a message directly."
  },
  {
    tags: ['phone', 'call', 'telephone', 'number', 'phone number'],
    answer: "You can call us on:\n\n📞 CEO Viran Chand: 083 303 0722\n📞 Site Manager Victor: 079 219 3017\n📞 Site Manager Quinton: 068 547 3287"
  },
  {
    tags: ['ceo', 'viran', 'viran chand', 'director', 'owner', 'boss'],
    answer: "Our CEO is Viran Chand.\n📧 viran@vlcconstruction.co.za\n📞 083 303 0722"
  },
  {
    tags: ['quinton', 'quinton douwie', 'assistant ceo'],
    answer: "Quinton Douwie is one of our Assistant CEOs.\n📧 quinton@vlcconstruction.co.za\n📞 068 547 3287"
  },
  {
    tags: ['victor', 'victor ratshimolo', 'site manager'],
    answer: "Victor Ratshimolo is one of our Site Managers.\n📧 victor@vlcconstruction.co.za\n📞 079 219 3017"
  },
  {
    tags: ['shivesh', 'supervisor'],
    answer: "Shivesh is our Supervisor.\n📧 shivesh@vlcconstruction.co.za"
  },
  {
    tags: ['anna', 'admin', 'administration'],
    answer: "Anna handles Admin Enquiries.\n📧 anna@vlcconstruction.co.za"
  },
  {
    tags: ['team', 'staff', 'people', 'who works', 'employees'],
    answer: "Our team includes:\n\n• CEO – Viran Chand\n• Assistant CEO – Quinton Douwie\n• Site Manager – Victor Ratshimolo\n• Supervisor – Shivesh\n• Admin – Anna\n\nVisit our Team page to meet the full team."
  },
  {
    tags: ['quote', 'price', 'cost', 'how much', 'pricing', 'rates', 'estimate', 'get a quote'],
    answer: "We provide free project consultations and quotes! Please visit our Contact page or email info@vlcconstruction.co.za with details of your project. We'll get back to you within 24 hours."
  },
  {
    tags: ['industries', 'sectors', 'who do you work with', 'clients', 'customers'],
    answer: "We serve a wide range of industries across South Africa, including:\n\n• Manufacturing\n• Petrochemical\n• Construction\n• Mining"
  },
  {
    tags: ['south africa', 'nationwide', 'where do you work', 'coverage', 'area'],
    answer: "VLC Construction provides services nationwide across South Africa, with our head office based in Rustenburg, North West."
  },
  {
    tags: ['safety', 'safe', 'safety standards'],
    answer: "Safety is a top priority at VLC Construction. We adhere to industry-leading safety standards on every project, following strict safety protocols to protect our workers and clients."
  },
  {
    tags: ['quality', 'ethos', 'values', 'commitment', 'punctuality', 'on time'],
    answer: "Our ethos is built on quality and punctuality. We employ rigorous quality control from initial planning to final execution, and we meticulously schedule projects to ensure timely delivery — every time."
  },
  {
    tags: ['community', 'charity', 'social', 'csr', 'local'],
    answer: "Community is at our core. VLC actively participates in charity initiatives, holds regular staff events, supports local suppliers, and hires locally in Rustenburg to give back to our community."
  },
  {
    tags: ['sustainability', 'environment', 'green', 'eco', 'recycling'],
    answer: "VLC is committed to sustainable practices, including maximising material recovery and recycling during demolition and dismantling work, and implementing eco-conscious construction methods wherever possible."
  },
  {
    tags: ['website', 'www', 'web', 'online', 'vlc-construction.com'],
    answer: "Our website is www.vlc-construction.com — you can find all our services, projects, and contact information there."
  },
  {
    tags: ['thank', 'thanks', 'thank you', 'cheers', 'great', 'awesome', 'helpful'],
    answer: "You're welcome! Don't hesitate to ask if you have more questions. You can also reach us anytime at info@vlcconstruction.co.za."
  },
  {
    tags: ['bye', 'goodbye', 'see you', 'later', 'take care'],
    answer: "Goodbye! Feel free to come back anytime. You can also reach us at info@vlcconstruction.co.za or call 083 303 0722."
  },
];

const FALLBACK = "I don't have specific information on that. For detailed enquiries, please contact us at info@vlcconstruction.co.za or call 083 303 0722 (Mon–Fri, 08:00–17:00).";

function getAnswer(input) {
  const q = input.toLowerCase().trim();

  // Score each KB entry by how many of its tags appear in the question
  let best = null;
  let bestScore = 0;

  for (const entry of KB) {
    let score = 0;
    for (const tag of entry.tags) {
      if (q.includes(tag)) {
        // Longer tag matches score higher (more specific)
        score += tag.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }

  return bestScore > 0 ? best.answer : FALLBACK;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const WELCOME = "Hi! I'm the VLC Construction assistant. Ask me anything about our services, team, location, or how to get a quote.";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', content: WELCOME }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  function handleSend(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing) return;

    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setTyping(true);

    // Simulate a brief "typing" pause so it feels natural
    setTimeout(() => {
      const answer = getAnswer(text);
      setMessages(prev => [...prev, { role: 'bot', content: answer }]);
      setTyping(false);
    }, 500 + Math.random() * 400);
  }

  // Suggested quick questions
  const suggestions = ['Our services', 'Get a quote', 'Contact details', 'Office location'];

  function pickSuggestion(s) {
    setMessages(prev => [...prev, { role: 'user', content: s }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', content: getAnswer(s) }]);
      setTyping(false);
    }, 500);
  }

  const showSuggestions = messages.length === 1; // only show on fresh open

  return (
    <>
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden bg-white dark:bg-dark-card"
            role="dialog"
            aria-label="VLC Construction Chat"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-brand to-accent text-white flex-shrink-0">
              <div className="p-2 rounded-full bg-white/20">
                <FaRobot className="text-lg" aria-hidden="true" />
              </div>
              <div className="flex-1 leading-tight">
                <div className="font-bold text-sm">VLC Assistant</div>
                <div className="text-xs opacity-80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-300 inline-block" />
                  Always online
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <FaTimes aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[320px]"
              aria-live="polite"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 p-1.5 rounded-full self-end ${
                    msg.role === 'user'
                      ? 'bg-brand text-white'
                      : 'bg-gray-100 dark:bg-white/10 text-brand dark:text-gold'
                  }`}>
                    {msg.role === 'user'
                      ? <FaUser className="text-xs" aria-hidden="true" />
                      : <FaRobot className="text-xs" aria-hidden="true" />}
                  </div>
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-brand to-accent text-white rounded-tr-sm'
                      : 'bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing dots */}
              {typing && (
                <div className="flex gap-2">
                  <div className="flex-shrink-0 p-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-brand dark:text-gold self-end">
                    <FaRobot className="text-xs" aria-hidden="true" />
                  </div>
                  <div className="px-3 py-3 rounded-2xl rounded-tl-sm bg-gray-100 dark:bg-white/10 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-brand dark:bg-gold rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1.5 h-1.5 bg-brand dark:bg-gold rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 bg-brand dark:bg-gold rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick suggestions (shown only at the start) */}
            {showSuggestions && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {suggestions.map(s => (
                  <button
                    key={s}
                    onClick={() => pickSuggestion(s)}
                    className="px-3 py-1.5 text-xs rounded-full border border-brand dark:border-gold text-brand dark:text-gold hover:bg-brand hover:text-white dark:hover:bg-gold dark:hover:text-gray-900 transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="flex gap-2 p-3 border-t border-gray-200 dark:border-white/10 flex-shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask a question…"
                disabled={typing}
                className="flex-1 px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-dark-page text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand dark:focus:border-gold transition-colors disabled:opacity-50"
                aria-label="Type your question"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send"
                className="p-2.5 rounded-xl bg-gradient-to-r from-brand to-accent text-white hover:shadow-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className="text-sm" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 p-4 rounded-full bg-gradient-to-r from-brand to-accent text-white shadow-2xl hover:shadow-brand/40 hover:scale-110 transition-all duration-300"
        whileTap={{ scale: 0.93 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <FaTimes className="text-xl" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <FaComments className="text-xl" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
