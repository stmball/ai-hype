import React from 'react';

function MailThreadList({ threads, activeThreadId, onSelect }) {
  return (
    <section className="w-[380px] shrink-0 flex flex-col border-r border-gmail-border bg-white max-lg:w-[300px] max-sm:w-full max-sm:border-r-0">
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
              className={`flex items-center gap-2 w-full px-3 py-[6px] border-0 border-b border-[#f0f0f0] text-left cursor-pointer font-sans ${
                activeThreadId === thread.id ? 'bg-gmail-active' : 'bg-transparent hover:bg-gmail-hover'
              }`}
              type="button"
              onClick={() => onSelect(thread.id)}
            >
              <div className="flex items-center gap-1 shrink-0">
                <input type="checkbox" className="w-4 h-4 accent-gmail-blue cursor-pointer" readOnly onClick={(e) => e.stopPropagation()} />
                <span className="text-[#dadce0] text-base hover:text-[#fcc934]">☆</span>
              </div>
              <span className="w-[140px] shrink-0 font-semibold text-[0.88rem] text-gmail-text truncate max-lg:w-[100px]">{sender}</span>
              <span className="flex-1 min-w-0 text-[0.88rem] text-gmail-text truncate">
                {thread.subject}
                <span className="text-gmail-muted font-normal"> — {thread.preview}</span>
              </span>
              <span className="shrink-0 text-[0.78rem] text-gmail-muted whitespace-nowrap">{first.time}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default MailThreadList;
