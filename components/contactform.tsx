'use client';

import { useState, FormEvent } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !subject.trim() || !message.trim()) {
      setStatus('error');
      setErrorMsg('All fields are required.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, subject, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Something went wrong');
      }

      setStatus('success');
      setName('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full max-w-md mx-auto p-6 duration-300 rounded-xl border border-white/10 bg-white/5 hover:shadow-xl hover:shadow-[#3A2FE9]/20 hover:bg-linear-180 hover:from-[#0A0A0A]/5 hover:from-[40%] hover:to-[#3A2FE9]/8 hover:border-[#00FF00]/20 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm text-white/70">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="bg-transparent border border-white/15 rounded-md px-4 py-5 text-white placeholder:text-white/30 outline-none focus:border-white/40 transition-all ease-in duration-300 hover:border-[#00FF00]/20 hover:rounded-[100px]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-sm text-white/70">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What's this about?"
          className="bg-transparent border border-white/15 rounded-md px-4 py-5 text-white placeholder:text-white/30 outline-none focus:border-white/40 transition-all ease-in duration-300 hover:border-[#00FF00]/20 hover:rounded-[100px]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-white/70">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message..."
          rows={5}
          className="bg-transparent border border-white/15 rounded-md px-4 py-5 text-white placeholder:text-white/30 outline-none focus:border-white/40 transition-all ease-in duration-300 hover:border-[#00FF00]/20 hover:rounded-[25px] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 bg-white text-black font-medium rounded-md py-2.5 disabled:opacity-50 transition-all hover:bg-[#00FF00] ease-in duration-100 hover:border-2 hover:border-bleck hover:rounded-[25px] disabled:cursor-not-allowed cursor-pointer"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-400 text-sm text-center">
          Message sent. I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center">{errorMsg}</p>
      )}
    </form>
  );
}