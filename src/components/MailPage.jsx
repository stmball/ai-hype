import React, { useEffect } from 'react';
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { accounts } from '../data';
import MailSidebar from './MailSidebar';
import MailThreadList from './MailThreadList';
import MailReader from './MailReader';

function MailPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const accountId = searchParams.get('account') || localStorage.getItem('vistamail_account');
  const account = accountId ? accounts[accountId] : null;

  useEffect(() => {
    if (accountId && account) {
      localStorage.setItem('vistamail_account', accountId);
    }
  }, [accountId, account]);

  if (!account) {
    return <Navigate to="/" replace />;
  }

  const threadId = searchParams.get('thread') ?? account.threads[0]?.id;
  const activeThread = account.threads.find((t) => t.id === threadId) ?? account.threads[0];

  function selectThread(id) {
    setSearchParams({ account: account.username, thread: id });
  }

  function signOut() {
    localStorage.removeItem('vistamail_account');
    navigate('/');
  }

  const initials = account.displayName.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <div className="gmail-font flex flex-col h-screen bg-white text-gmail-text">
      <header className="flex items-center gap-3 px-4 py-2 border-b border-gmail-border bg-white shrink-0">
        <div className="flex items-center gap-2 min-w-[200px]">
          <div className="w-10 h-10 rounded-full grid place-items-center text-[1.2rem] text-gmail-muted cursor-pointer hover:bg-black/6" onClick={signOut}>
            ☰
          </div>
          <span className="text-[1.3rem] font-medium text-gmail-muted tracking-[-0.02em]">VistaMail</span>
        </div>

        <div className="flex-1 max-w-[720px] flex items-center gap-2 h-[46px] px-4 rounded-lg bg-gmail-search text-gmail-muted cursor-text">
          <span>🔍</span>
          <span className="text-[0.95rem]">Search mail</span>
        </div>

        <button
          className="ml-auto w-[34px] h-[34px] rounded-full border-0 bg-gmail-blue text-white font-medium text-[0.85rem] cursor-pointer grid place-items-center hover:shadow-[0_1px_4px_rgba(0,0,0,0.2)] transition-shadow"
          type="button"
          onClick={signOut}
          title={account.displayName}
        >
          {initials}
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <MailSidebar account={account} onSignOut={signOut} />
        <MailThreadList threads={account.threads} activeThreadId={activeThread?.id} onSelect={selectThread} />
        <MailReader thread={activeThread} />
      </div>
    </div>
  );
}

export default MailPage;
