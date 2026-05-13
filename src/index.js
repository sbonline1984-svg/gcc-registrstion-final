import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const RegistrationSearch = () => {
  const [page, setPage] = useState('');
  const [error, setError] = useState('');

  const handleSearch = () => {
    const pageNum = parseInt(page);
    if (!pageNum || pageNum < 1 || pageNum > 1159) {
      setError('অনুগ্ৰহ কৰি ১ ৰ পৰা ১১৫৯ ৰ ভিতৰত এটা পৃষ্ঠা নম্বৰ লিখক।');
      return;
    }
    setError('');
    // পৃষ্ঠা নম্বৰ অনুযায়ী PDF টো খোলিব
    const url = `/final-cards.pdf#page=${pageNum}`;
    window.open(url, '_blank');
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#020617', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#38bdf8', fontSize: '24px' }}>গোলঘাট কমাৰ্চ কলেজ</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>ৰেজিষ্ট্ৰেচন কাৰ্ড প’ৰ্টেল (২০২৬)</p>

      <div style={{ backgroundColor: '#0f172a', padding: '30px', borderRadius: '15px', maxWidth: '400px', margin: '0 auto', border: '1px solid #1e293b', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
        <p style={{ marginBottom: '15px', fontSize: '15px' }}>আপোনাৰ <b>পৃষ্ঠা নম্বৰ (Page Number)</b> লিখক:</p>
        
        <input 
          type="number" 
          placeholder="যেনে: 45" 
          value={page}
          onChange={(e) => setPage(e.target.value)}
          style={{ padding: '15px', width: '85%', borderRadius: '10px', border: '2px solid #334155', backgroundColor: '#020617', color: 'white', marginBottom: '15px', fontSize: '18px', textAlign: 'center' }}
        />
        
        <button 
          onClick={handleSearch}
          style={{ padding: '15px', borderRadius: '10px', border: 'none', backgroundColor: '#38bdf8', color: '#020617', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontSize: '16px' }}
        >
          কাৰ্ডখন বিচাৰক (Search)
        </button>

        {error && <p style={{ marginTop: '15px', color: '#ef4444', fontSize: '13px' }}>{error}</p>}
      </div>

      <div style={{ marginTop: '40px', padding: '20px', color: '#64748b', fontSize: '13px', backgroundColor: '#0f172a', borderRadius: '10px', display: 'inline-block', textAlign: 'left', maxWidth: '400px' }}>
          <p style={{fontWeight: 'bold', color: '#94a3b8'}}>কেনেকৈ বিচাৰিব?</p>
          <ol style={{ paddingLeft: '20px' }}>
            <li>প্ৰথমে লিষ্টৰ পৰা আপোনাৰ পৃষ্ঠা নম্বৰটো জানি লওক।</li>
            <li>উপৰৰ বক্সত সেই নম্বৰটো লিখি Search টিপক।</li>
            <li>পোনপটীয়াকৈ সেই পৃষ্ঠাখন খোল খাব।</li>
          </ol>
          <p style={{marginTop: '10px'}}>গোটেই ফাইলটো একেলগে খুলিবলৈ <a href="/final-cards.pdf" target="_blank" style={{color: '#38bdf8'}}>ইয়াত ক্লিক কৰক</a>।</p>
      </div>
      
      <p style={{ marginTop: '50px', fontSize: '11px', color: '#334155' }}>Admin Support: GCC Office</p>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<RegistrationSearch />);
