import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaHardHat, FaUser, FaChevronDown } from 'react-icons/fa';

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
const WELCOME = "👋 Hi! I'm the VLC Construction assistant. Ask me anything about our services, team, location, or how to get a quote.";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', content: WELCOME }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  // Show tooltip bubble after 3s, dismiss on open or manual close
  const [showTooltip, setShowTooltip] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setShowTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  function handleSend(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || typing) return;
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', content: getAnswer(text) }]);
      setTyping(false);
    }, 500 + Math.random() * 400);
  }

  const suggestions = ['Our services', 'Get a quote', 'Contact details', 'Office location'];

  function pickSuggestion(s) {
    setMessages(prev => [...prev, { role: 'user', content: s }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', content: getAnswer(s) }]);
      setTyping(false);
    }, 500);
  }

  const showSuggestions = messages.length === 1;

  return createPortal(
    <>
      {/* ── Chat panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 32, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{
              position: 'fixed',
              bottom: 100,
              right: 12,
              left: 12,
              zIndex: 99999,
              maxWidth: 370,
              marginLeft: 'auto',
              maxHeight: 'calc(100vh - 120px)',
            }}
            className="flex flex-col rounded-3xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.3)] border border-white/20 dark:border-white/10"
            role="dialog"
            aria-label="VLC Construction Chat"
          >
            {/* Header — tall branded block */}
            <div className="relative flex flex-col px-5 pt-5 pb-4 bg-gradient-to-br from-brand via-accent to-gold text-white overflow-hidden flex-shrink-0">
              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute top-8 -right-2 w-14 h-14 rounded-full bg-white/10 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-black/10 pointer-events-none" />

              {/* Top row */}
              <div className="relative flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                  <FaHardHat className="text-xl text-gold" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="font-extrabold text-base tracking-wide">VLC Construction</div>
                  <div className="text-xs font-medium opacity-80 flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                    Assistant · Always online
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="p-2 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <FaChevronDown aria-hidden="true" />
                </button>
              </div>

              {/* Tagline */}
              <p className="relative text-xs font-medium opacity-90 leading-relaxed">
                Ask me about services, the team, pricing or anything VLC — I'll help you out instantly.
              </p>
            </div>

            {/* Messages */}
            <div
              className="overflow-y-auto p-4 space-y-3 flex-1 min-h-0 bg-gray-50 dark:bg-dark-page"
              aria-live="polite"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center self-end shadow ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-brand to-accent text-white'
                      : 'bg-gradient-to-br from-gold to-brand text-white'
                  }`}>
                    {msg.role === 'user'
                      ? <FaUser className="text-[10px]" aria-hidden="true" />
                      : <FaHardHat className="text-[10px]" aria-hidden="true" />}
                  </div>

                  {/* Bubble */}
                  <div className={`max-w-[78%] px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-brand to-accent text-white rounded-2xl rounded-tr-sm'
                      : 'bg-white dark:bg-dark-card text-gray-800 dark:text-gray-100 rounded-2xl rounded-tl-sm border border-gray-100 dark:border-white/10'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing dots */}
              {typing && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold to-brand flex items-center justify-center self-end shadow">
                    <FaHardHat className="text-[10px] text-white" aria-hidden="true" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white dark:bg-dark-card border border-gray-100 dark:border-white/10 shadow-sm flex gap-1.5 items-center">
                    <span className="w-2 h-2 bg-brand rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-gold rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick suggestions */}
            {showSuggestions && (
              <div className="px-4 py-2 bg-gray-50 dark:bg-dark-page border-t border-gray-100 dark:border-white/5 flex flex-wrap gap-2">
                {suggestions.map(s => (
                  <button
                    key={s}
                    onClick={() => pickSuggestion(s)}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white dark:bg-dark-card border border-brand/30 dark:border-gold/30 text-brand dark:text-gold hover:bg-gradient-to-r hover:from-brand hover:to-accent hover:text-white hover:border-transparent dark:hover:from-gold dark:hover:to-brand dark:hover:text-white transition-all duration-200 shadow-sm"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input bar */}
            <form
              onSubmit={handleSend}
              className="flex gap-2 p-3 bg-white dark:bg-dark-card border-t border-gray-100 dark:border-white/10 flex-shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your question…"
                disabled={typing}
                className="flex-1 px-4 py-2.5 text-sm rounded-2xl border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-dark-page text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand dark:focus:border-gold focus:bg-white dark:focus:bg-dark-card transition-all disabled:opacity-50"
                aria-label="Type your question"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send"
                className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white shadow-md hover:shadow-brand/40 hover:scale-105 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <FaPaperPlane className="text-sm" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tooltip bubble ── */}
      <AnimatePresence>
        {showTooltip && !open && (
          <motion.div
            key="tooltip"
            initial={{ opacity: 0, x: 12, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            style={{ position: 'fixed', bottom: 88, right: 84, zIndex: 99999 }}
            className="bg-white dark:bg-dark-card text-gray-800 dark:text-white text-sm font-medium px-4 py-2.5 rounded-2xl rounded-br-sm shadow-xl border border-gray-100 dark:border-white/10 whitespace-nowrap cursor-pointer"
            onClick={() => { setOpen(true); setShowTooltip(false); }}
          >
            💬 Need help? Ask me anything!
            <button
              onClick={e => { e.stopPropagation(); setShowTooltip(false); }}
              className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 leading-none"
              aria-label="Dismiss"
            >×</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating button ── */}
      <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 99999, width: 64, height: 64 }}>
        {/* Pulsing ring */}
        {!open && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0, borderRadius: '9999px',
              backgroundColor: '#1f2d5c', opacity: 0.25,
              animation: 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite',
            }}
          />
        )}
        <motion.button
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close chat' : 'Open chat'}
          aria-expanded={open}
          style={{
            position: 'relative', width: 64, height: 64, borderRadius: '9999px',
            background: 'linear-gradient(135deg, #1f2d5c, #8b5a2b, #d4b06a)',
            color: '#fff', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(31,45,92,0.45)',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <FaTimes style={{ fontSize: 22 }} aria-hidden="true" />
              </motion.span>
            ) : (
              <motion.span key="c" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <FaComments style={{ fontSize: 22 }} aria-hidden="true" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>,
    document.body
  );
}
