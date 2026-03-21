import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaComments, FaTimes, FaPaperPlane, FaHardHat, FaUser, FaChevronDown } from 'react-icons/fa';

// ---------------------------------------------------------------------------
// Knowledge base
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
    answer: "We conduct rigorous quality control and inspection at every stage to ensure all steelwork meets industry standards and project specifications."
  },
  {
    tags: ['maintenance', 'repair', 'upkeep'],
    answer: "Our Maintenance and Repair service provides routine upkeep and emergency repair to keep steel structures and equipment in optimal operating condition."
  },
  {
    tags: ['demolition', 'dismantling', 'remove structure', 'tear down'],
    answer: "We offer safe and efficient Demolition and Dismantling of steel structures and industrial facilities, following strict safety protocols and maximising material recovery."
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
    tags: ['team', 'staff', 'people', 'who works', 'employees'],
    answer: "Our team includes:\n\n• CEO – Viran Chand\n• Assistant CEO – Quinton Douwie\n• Site Manager – Victor Ratshimolo\n• Supervisor – Shivesh\n• Admin – Anna\n\nVisit our Team page to meet the full team."
  },
  {
    tags: ['quote', 'price', 'cost', 'how much', 'pricing', 'rates', 'estimate', 'get a quote'],
    answer: "We provide free project consultations and quotes! Please visit our Contact page or email info@vlcconstruction.co.za with details of your project. We'll get back to you within 24 hours."
  },
  {
    tags: ['industries', 'sectors', 'who do you work with', 'clients'],
    answer: "We serve a wide range of industries across South Africa, including:\n\n• Manufacturing\n• Petrochemical\n• Construction\n• Mining"
  },
  {
    tags: ['south africa', 'nationwide', 'where do you work', 'coverage'],
    answer: "VLC Construction provides services nationwide across South Africa, with our head office based in Rustenburg, North West."
  },
  {
    tags: ['safety', 'safe', 'safety standards'],
    answer: "Safety is a top priority at VLC Construction. We adhere to industry-leading safety standards on every project, following strict protocols to protect our workers and clients."
  },
  {
    tags: ['quality', 'ethos', 'values', 'commitment', 'punctuality'],
    answer: "Our ethos is built on quality and punctuality. We employ rigorous quality control from initial planning to final execution, and meticulously schedule projects to ensure timely delivery — every time."
  },
  {
    tags: ['community', 'charity', 'social', 'local'],
    answer: "Community is at our core. VLC actively participates in charity initiatives, holds staff events, supports local suppliers, and hires locally in Rustenburg."
  },
  {
    tags: ['thank', 'thanks', 'thank you', 'cheers', 'great', 'helpful'],
    answer: "You're welcome! Don't hesitate to ask if you have more questions. You can also reach us at info@vlcconstruction.co.za."
  },
  {
    tags: ['bye', 'goodbye', 'see you', 'later'],
    answer: "Goodbye! Feel free to come back anytime. You can also reach us at info@vlcconstruction.co.za or call 083 303 0722."
  },
];

const FALLBACK = "I don't have specific information on that. For detailed enquiries please contact us at info@vlcconstruction.co.za or call 083 303 0722 (Mon–Fri, 08:00–17:00).";

function getAnswer(input) {
  const q = input.toLowerCase().trim();
  let best = null;
  let bestScore = 0;
  for (const entry of KB) {
    let score = 0;
    for (const tag of entry.tags) {
      if (q.includes(tag)) score += tag.length;
    }
    if (score > bestScore) { bestScore = score; best = entry; }
  }
  return bestScore > 0 ? best.answer : FALLBACK;
}

// ---------------------------------------------------------------------------
// Styles (plain objects — no Tailwind, no Framer Motion)
// ---------------------------------------------------------------------------
const S = {
  // Floating button
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: '50%',
    background: 'linear-gradient(135deg,#1f2d5c 0%,#8b5a2b 60%,#d4b06a 100%)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    boxShadow: '0 4px 24px rgba(31,45,92,0.5)',
    zIndex: 2147483647,   // max possible z-index
    outline: 'none',
    transition: 'transform 0.15s ease',
  },
  // Chat panel
  panel: {
    position: 'fixed',
    bottom: 90,
    right: 12,
    left: 12,
    maxWidth: 370,
    marginLeft: 'auto',
    maxHeight: 'calc(100vh - 100px)',
    zIndex: 2147483646,
    borderRadius: 20,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 16px 64px rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.15)',
  },
  // Header
  header: {
    background: 'linear-gradient(135deg,#1f2d5c 0%,#8b5a2b 60%,#d4b06a 100%)',
    color: '#fff',
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexShrink: 0,
  },
  headerIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    background: 'rgba(255,255,255,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    flexShrink: 0,
  },
  closeBtn: {
    marginLeft: 'auto',
    background: 'rgba(255,255,255,0.15)',
    border: 'none',
    borderRadius: 8,
    color: '#fff',
    cursor: 'pointer',
    padding: '6px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
  },
  // Messages area
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    background: '#f8f9fb',
    minHeight: 0,
  },
  // Message row
  msgRowBot: { display: 'flex', gap: 8, alignItems: 'flex-end' },
  msgRowUser: { display: 'flex', gap: 8, alignItems: 'flex-end', flexDirection: 'row-reverse' },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    flexShrink: 0,
    color: '#fff',
  },
  avatarBot: { background: 'linear-gradient(135deg,#d4b06a,#1f2d5c)' },
  avatarUser: { background: 'linear-gradient(135deg,#1f2d5c,#8b5a2b)' },
  bubbleBot: {
    maxWidth: '78%',
    background: '#fff',
    color: '#1a1a2e',
    borderRadius: '16px 16px 16px 4px',
    padding: '10px 14px',
    fontSize: 13,
    lineHeight: 1.5,
    whiteSpace: 'pre-line',
    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
    border: '1px solid #e8e8ee',
  },
  bubbleUser: {
    maxWidth: '78%',
    background: 'linear-gradient(135deg,#1f2d5c,#8b5a2b)',
    color: '#fff',
    borderRadius: '16px 16px 4px 16px',
    padding: '10px 14px',
    fontSize: 13,
    lineHeight: 1.5,
    whiteSpace: 'pre-line',
  },
  // Typing
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#1f2d5c',
    display: 'inline-block',
  },
  // Suggestions
  suggestions: {
    padding: '8px 12px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    background: '#f8f9fb',
    borderTop: '1px solid #e8e8ee',
    flexShrink: 0,
  },
  chip: {
    padding: '5px 12px',
    borderRadius: 20,
    fontSize: 12,
    fontWeight: 600,
    border: '1.5px solid #1f2d5c',
    background: '#fff',
    color: '#1f2d5c',
    cursor: 'pointer',
  },
  // Input bar
  inputBar: {
    display: 'flex',
    gap: 8,
    padding: '10px 12px',
    background: '#fff',
    borderTop: '1px solid #e8e8ee',
    flexShrink: 0,
  },
  input: {
    flex: 1,
    padding: '9px 14px',
    borderRadius: 20,
    border: '1.5px solid #d1d5db',
    fontSize: 13,
    outline: 'none',
    background: '#f8f9fb',
    color: '#111',
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'linear-gradient(135deg,#1f2d5c,#8b5a2b)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    flexShrink: 0,
  },
  // Tooltip
  tooltip: {
    position: 'fixed',
    bottom: 90,
    right: 12,
    zIndex: 2147483646,
    background: '#fff',
    color: '#111',
    fontSize: 13,
    fontWeight: 600,
    padding: '10px 16px',
    borderRadius: '14px 14px 4px 14px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    border: '1px solid #e8e8ee',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    whiteSpace: 'nowrap',
  },
};

const WELCOME = "👋 Hi! I'm the VLC Construction assistant. Ask me anything about our services, team, location, or how to get a quote.";
const SUGGESTIONS = ['Our services', 'Get a quote', 'Contact details', 'Office location'];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', content: WELCOME }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Ensure portal target exists
  useEffect(() => { setMounted(true); }, []);

  // Auto-show tooltip after 3s
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
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  function send(e) {
    e?.preventDefault();
    const text = input.trim();
    if (!text || typing) return;
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', content: getAnswer(text) }]);
      setTyping(false);
    }, 500 + Math.random() * 300);
  }

  function quickAsk(s) {
    setMessages(prev => [...prev, { role: 'user', content: s }]);
    setTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', content: getAnswer(s) }]);
      setTyping(false);
    }, 400);
  }

  const showSuggestions = messages.length === 1;

  if (!mounted) return null;

  const portalTarget = document.getElementById('chatbot-portal') || document.body;

  return createPortal(
    <>
      {/* Chat panel */}
      {open && (
        <div style={S.panel} role="dialog" aria-label="VLC Construction Chat">
          {/* Header */}
          <div style={S.header}>
            <div style={S.headerIcon}>
              <FaHardHat />
            </div>
            <div style={{ flex: 1, lineHeight: 1.3 }}>
              <div style={{ fontWeight: 800, fontSize: 14 }}>VLC Construction</div>
              <div style={{ fontSize: 11, opacity: 0.85, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                Assistant · Always online
              </div>
            </div>
            <button style={S.closeBtn} onClick={() => setOpen(false)} aria-label="Close chat">
              <FaChevronDown />
            </button>
          </div>

          {/* Messages */}
          <div style={S.messages} aria-live="polite">
            {messages.map((msg, i) => (
              <div key={i} style={msg.role === 'bot' ? S.msgRowBot : S.msgRowUser}>
                <div style={{ ...S.avatar, ...(msg.role === 'bot' ? S.avatarBot : S.avatarUser) }}>
                  {msg.role === 'bot' ? <FaHardHat /> : <FaUser />}
                </div>
                <div style={msg.role === 'bot' ? S.bubbleBot : S.bubbleUser}>
                  {msg.content}
                </div>
              </div>
            ))}

            {typing && (
              <div style={S.msgRowBot}>
                <div style={{ ...S.avatar, ...S.avatarBot }}><FaHardHat /></div>
                <div style={{ ...S.bubbleBot, padding: '12px 16px' }}>
                  <span style={{ ...S.typingDot, animation: 'bounce 1s infinite 0ms' }} />
                  {' '}
                  <span style={{ ...S.typingDot, animation: 'bounce 1s infinite 150ms' }} />
                  {' '}
                  <span style={{ ...S.typingDot, animation: 'bounce 1s infinite 300ms' }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions */}
          {showSuggestions && (
            <div style={S.suggestions}>
              {SUGGESTIONS.map(s => (
                <button key={s} style={S.chip} onClick={() => quickAsk(s)}>{s}</button>
              ))}
            </div>
          )}

          {/* Input */}
          <form style={S.inputBar} onSubmit={send}>
            <input
              ref={inputRef}
              style={S.input}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your question…"
              disabled={typing}
              aria-label="Type your question"
            />
            <button
              type="submit"
              style={{ ...S.sendBtn, opacity: (!input.trim() || typing) ? 0.4 : 1 }}
              disabled={!input.trim() || typing}
              aria-label="Send"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      {/* Tooltip */}
      {showTooltip && !open && (
        <div style={S.tooltip} onClick={() => { setOpen(true); setShowTooltip(false); }}>
          💬 Need help? Ask me anything!
          <button
            onClick={e => { e.stopPropagation(); setShowTooltip(false); }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: 16, lineHeight: 1, padding: 0 }}
            aria-label="Dismiss"
          >×</button>
        </div>
      )}

      {/* Floating button */}
      <button
        style={S.fab}
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>
    </>,
    portalTarget
  );
}
