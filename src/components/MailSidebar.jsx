import React from 'react';

const folders = [
  { label: 'Inbox', icon: '▦', count: true },
  { label: 'Starred', icon: '☆' },
  { label: 'Snoozed', icon: '◷' },
  { label: 'Sent', icon: '➤' },
  { label: 'Drafts', icon: '✎' },
  { label: 'Spam', icon: '⚠' },
  { label: 'Trash', icon: '🗑' },
];

function MailSidebar({ account, onSignOut, isOpen, onClose }) {
  const initials = account.displayName.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <>
      <aside className="w-[240px] shrink-0 flex-col gap-1 p-2 pt-2 bg-white border-r border-gmail-border hidden lg:flex">
        <button className="flex items-center gap-3 px-5 py-[14px] mb-2 border-0 rounded-full bg-gmail-light-blue text-[#001d35] font-medium text-[0.9rem] cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.12)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-shadow" type="button">
          <span className="text-[1.1rem]">✏</span>
          <span>Compose</span>
        </button>

        <nav className="flex flex-col gap-[2px] flex-1">
          {folders.map((f) => (
            <button
              key={f.label}
              className={`flex items-center gap-[10px] px-4 py-2 border-0 rounded-r-[20px] text-left text-[0.88rem] cursor-pointer ${
                f.label === 'Inbox'
                  ? 'bg-[#d3e3fd] text-[#001d35] font-semibold'
                  : 'bg-transparent text-gmail-text hover:bg-black/4'
              }`}
              type="button"
            >
              <span className="w-5 text-center text-[0.95rem]">{f.icon}</span>
              <span className="flex-1">{f.label}</span>
              {f.count && <span className="text-gmail-muted text-[0.8rem] font-medium">{account.threads.length}</span>}
            </button>
          ))}
        </nav>

        <div className="flex items-center justify-between px-4 py-3 border-t border-gmail-border mt-auto">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gmail-blue text-white font-medium text-[0.7rem] grid place-items-center">{initials}</span>
            <span className="text-[0.82rem] text-gmail-muted">{account.displayName}</span>
          </div>
          <button className="border-0 bg-transparent text-gmail-muted text-[0.8rem] cursor-pointer px-2 py-1 rounded hover:bg-black/6" type="button" onClick={onSignOut}>
            Sign out
          </button>
        </div>
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />
          <aside className="relative w-[280px] h-full flex flex-col gap-1 p-2 pt-2 bg-white shadow-xl">
            <div className="flex items-center justify-between px-3 py-1 mb-1">
              <span className="text-[1.1rem] font-medium text-gmail-muted">VistaMail</span>
              <button className="w-8 h-8 rounded-full border-0 bg-transparent text-gmail-muted text-[1.3rem] cursor-pointer grid place-items-center hover:bg-black/6" type="button" onClick={onClose}>
                ✕
              </button>
            </div>
            <button className="flex items-center gap-3 px-5 py-[14px] mb-2 border-0 rounded-full bg-gmail-light-blue text-[#001d35] font-medium text-[0.9rem] cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.12)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-shadow" type="button">
              <span className="text-[1.1rem]">✏</span>
              <span>Compose</span>
            </button>
            <nav className="flex flex-col gap-[2px] flex-1">
              {folders.map((f) => (
                <button
                  key={f.label}
                  className={`flex items-center gap-[10px] px-4 py-2 border-0 rounded-r-[20px] text-left text-[0.88rem] cursor-pointer ${
                    f.label === 'Inbox'
                      ? 'bg-[#d3e3fd] text-[#001d35] font-semibold'
                      : 'bg-transparent text-gmail-text hover:bg-black/4'
                  }`}
                  type="button"
                >
                  <span className="w-5 text-center text-[0.95rem]">{f.icon}</span>
                  <span className="flex-1">{f.label}</span>
                  {f.count && <span className="text-gmail-muted text-[0.8rem] font-medium">{account.threads.length}</span>}
                </button>
              ))}
            </nav>
            <div className="flex items-center justify-between px-4 py-3 border-t border-gmail-border mt-auto">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-gmail-blue text-white font-medium text-[0.7rem] grid place-items-center">{initials}</span>
                <span className="text-[0.82rem] text-gmail-muted">{account.displayName}</span>
              </div>
              <button className="border-0 bg-transparent text-gmail-muted text-[0.8rem] cursor-pointer px-2 py-1 rounded hover:bg-black/6" type="button" onClick={onSignOut}>
                Sign out
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

export default MailSidebar;
