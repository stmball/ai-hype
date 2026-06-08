import React from 'react';

function MailReader({ thread, onBack }) {
  if (!thread) {
    return (
      <section className="flex-1 bg-white grid place-items-center text-gmail-muted text-[0.95rem]">
        Select a thread to read
      </section>
    );
  }

  return (
    <section className="flex-1 bg-white overflow-y-auto flex flex-col">
      <div className="pt-5 px-4 sm:px-6 pb-0">
        <div className="flex items-center gap-2 mb-2 sm:hidden">
          <button
            className="border-0 bg-transparent text-gmail-muted text-[0.88rem] cursor-pointer flex items-center gap-1 px-0 py-1"
            type="button"
            onClick={onBack}
          >
            ← Back to inbox
          </button>
        </div>
        <h2 className="m-0 mb-1 text-[1.1rem] sm:text-[1.3rem] font-medium text-gmail-text font-sans">{thread.subject}</h2>
        <p className="m-0 text-[0.88rem] text-gmail-muted">{thread.participants.join(', ')}</p>
      </div>

      <div className="p-4 px-4 sm:px-6 flex flex-col gap-3">
        {thread.messages.map((msg, i) => {
          const initials = msg.from.split(' ').map((w) => w[0]).join('').slice(0, 2);
          return (
            <div key={i} className="border border-gmail-border rounded-xl p-3 sm:p-4 bg-white">
              <div className="flex items-center gap-[10px]">
                <span className="w-9 h-9 rounded-full bg-gmail-blue text-white font-medium text-[0.8rem] grid place-items-center shrink-0">{initials}</span>
                <div className="min-w-0">
                  <strong className="text-sm">{msg.from}</strong>
                  <span className="block text-[0.8rem] text-gmail-muted truncate">{msg.email}</span>
                </div>
                <span className="ml-auto text-[0.78rem] text-gmail-muted whitespace-nowrap">{msg.time}</span>
              </div>
              <div className="mt-3 flex flex-col gap-2 text-[0.88rem] sm:text-[0.92rem] leading-[1.6] text-gmail-text">
                {msg.body.map((p, j) => (
                  <p key={j} className="m-0">{p}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default MailReader;
