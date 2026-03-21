import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

const WELCOME = "Hi! I'm the VLC Construction assistant. Ask me anything about our services, team, or how to get a quote.";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: WELCOME }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Focus input when chat opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [open]);

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Exclude the static welcome message — only send real conversation
          messages: newMessages.slice(1),
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Request failed');

      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, something went wrong. Please try again or email us at info@vlcconstruction.co.za.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50 w-[340px] max-w-[calc(100vw-2rem)] flex flex-col rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden bg-white dark:bg-dark-card"
            role="dialog"
            aria-label="VLC Construction Chat Assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-brand to-accent text-white">
              <div className="p-2 rounded-full bg-white/20">
                <FaRobot className="text-lg" aria-hidden="true" />
              </div>
              <div className="flex-1 leading-tight">
                <div className="font-bold text-sm">VLC Assistant</div>
                <div className="text-xs opacity-80">Ask me anything</div>
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
              className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80"
              aria-live="polite"
              aria-atomic="false"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div className={`flex-shrink-0 p-1.5 rounded-full self-end ${
                    msg.role === 'user'
                      ? 'bg-brand text-white'
                      : 'bg-gray-100 dark:bg-white/10 text-brand dark:text-gold'
                  }`}>
                    {msg.role === 'user'
                      ? <FaUser className="text-xs" aria-hidden="true" />
                      : <FaRobot className="text-xs" aria-hidden="true" />
                    }
                  </div>
                  <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-brand to-accent text-white rounded-tr-sm'
                      : 'bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {loading && (
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

            {/* Input */}
            <form
              onSubmit={sendMessage}
              className="flex gap-2 p-3 border-t border-gray-200 dark:border-white/10"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask a question…"
                disabled={loading}
                className="flex-1 px-3 py-2 text-sm rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-dark-page text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-brand dark:focus:border-gold transition-colors disabled:opacity-50"
                aria-label="Chat message input"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="p-2.5 rounded-xl bg-gradient-to-r from-brand to-accent text-white hover:shadow-lg transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className="text-sm" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={open}
        className="fixed bottom-5 right-5 z-50 p-4 rounded-full bg-gradient-to-r from-brand to-accent text-white shadow-2xl hover:shadow-brand/40 hover:scale-110 transition-all duration-300"
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <FaTimes className="text-xl" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <FaComments className="text-xl" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
