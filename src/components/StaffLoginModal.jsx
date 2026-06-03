import React from 'react';

function StaffLoginModal({ feedback, login, onClose, onSubmit, onChange }) {
  return (
    <div className="fixed inset-0 z-20 grid place-items-center p-5 bg-[rgba(3,6,10,0.64)] backdrop-blur-md" role="presentation" onClick={onClose}>
      <div
        className="w-full max-w-[520px] p-6 bg-surface border border-line rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="staff-login-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="m-0 mb-[14px] text-accent-2 uppercase tracking-[0.13em] text-[0.72rem]">Staff login</p>
            <h2 className="text-soft font-serif text-[clamp(1.8rem,2.6vw,2.6rem)] leading-[0.98] m-0" id="staff-login-title">Access the inbox</h2>
          </div>
          <button
            className="px-[0.95rem] py-[0.78rem] border border-line rounded-full bg-white/[0.03] text-soft cursor-pointer transition hover:-translate-y-px hover:border-line-strong hover:bg-white/6"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>

        <p className="text-muted leading-[1.65]">Use one of the staff accounts to open the mail app.</p>

        <form className="grid gap-3 mt-[18px]" onSubmit={onSubmit}>
          <label className="grid gap-2 p-[14px] rounded-[16px] border border-white/8 bg-white/[0.03] text-muted">
            <input
              className="border-0 outline-0 bg-transparent text-soft p-0"
              value={login.username}
              onChange={(e) => onChange({ ...login, username: e.target.value })}
              placeholder="Username"
            />
          </label>
          <label className="grid gap-2 p-[14px] rounded-[16px] border border-white/8 bg-white/[0.03] text-muted">
            <input
              className="border-0 outline-0 bg-transparent text-soft p-0"
              value={login.password}
              onChange={(e) => onChange({ ...login, password: e.target.value })}
              placeholder="Password"
              type="password"
            />
          </label>

          <button
            className="inline-flex items-center justify-center px-[1.05rem] py-[0.9rem] rounded-full bg-gradient-to-r from-accent to-[#d7efff] text-[#06111b] border border-white/10 font-bold cursor-pointer transition hover:-translate-y-px"
            type="submit"
          >
            Open inbox
          </button>
        </form>

        {feedback ? <p className="text-[#f0a4a4] leading-[1.65] text-sm">{feedback}</p> : null}
      </div>
    </div>
  );
}

export default StaffLoginModal;
