import React from 'react';

function MailThreadList({ threads, activeThreadId, onSelect }) {
  return (
    <section className="flex-1 sm:w-[380px] sm:shrink-0 flex flex-col border-r border-gmail-border bg-white sm:max-lg:w-[300px]">
      <div className="flex items-center gap-2 px-3 py-[10px] border-b border-gmail-border shrink-0">
        <input type="checkbox" className="w-4 h-4 accent-gmail-blue cursor-pointer" readOnly />
        <span className="font-medium text-[0.88rem] text-gmail-muted">Inbox</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {threads.map((thread) => {
          const first = thread.messages[0];
          const sender = thread.participants.join(', ');
          const initials = first.from.split(' ').map((w) => w[0]).join('').slice(0, 2);
          return (
            <button
              key={thread.id}
              className={`flex items-center gap-2 w-full px-3 py-[10px] border-0 border-b border-[#f0f0f0] text-left cursor-pointer font-sans sm:py-[6px] ${
                activeThreadId === thread.id ? 'bg-gmail-active' : 'bg-transparent hover:bg-gmail-hover'
              }`}
              type="button"
              onClick={() => onSelect(thread.id)}
            >
              <div className="flex items-center gap-1 shrink-0">
                <input type="checkbox" className="hidden sm:inline w-4 h-4 accent-gmail-blue cursor-pointer" readOnly onClick={(e) => e.stopPropagation()} />
                <span className="text-[#dadce0] text-base hover:text-[#fcc934]">☆</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-semibold text-[0.88rem] text-gmail-text truncate">{sender}</span>
                  <span className="shrink-0 text-[0.78rem] text-gmail-muted whitespace-nowrap">{first.time}</span>
                </div>
                <span className="text-[0.88rem] text-gmail-text truncate block">
                  {thread.subject}
                  <span className="text-gmail-muted font-normal"> — {thread.preview}</span>
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default MailThreadList;
