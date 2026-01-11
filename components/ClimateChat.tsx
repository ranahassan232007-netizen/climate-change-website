
import React, { useState } from 'react';
import { askClimateAssistant } from '../services/gemini';

const ClimateChat: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    try {
      const result = await askClimateAssistant(question);
      setAnswer(result);
    } catch (error) {
      setAnswer("Sorry, I'm having trouble connecting to the climate database. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden mt-12">
      <div className="bg-emerald-600 px-6 py-4 flex items-center space-x-3">
        <div className="bg-white/20 p-2 rounded-full">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
        <h3 className="text-white font-bold">Ask the Climate Assistant</h3>
      </div>
      <div className="p-6">
        <p className="text-slate-600 text-sm mb-4">Have a specific question about global warming? Ask our AI expert for an easy-to-understand explanation.</p>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., Why is the Arctic melting so fast?"
            className="flex-grow px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Thinking...' : 'Ask'}
          </button>
        </form>

        {answer && (
          <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <p className="text-slate-800 leading-relaxed text-sm whitespace-pre-wrap">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClimateChat;
