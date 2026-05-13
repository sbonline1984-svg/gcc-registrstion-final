import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const RegistrationPortal = () => {
  const [regNo, setRegNo] = useState('');
  const [error, setError] = useState('');

  // ইয়াৰ তলত আপুনি কলেজৰ ৰেজিষ্ট্ৰেচন নম্বৰৰ নিৰ্দিষ্ট ফৰ্মেটটো দিব পাৰে
  // ধৰি লওক ৰেজিষ্ট্ৰেচন নম্বৰটো ১০ টা অংকৰ হ'ব লাগে
  const REG_LENGTH = 10; 

  const handleSearch = () => {
    // ১. খালী আছে নেকি চেক কৰিব
    if (!regNo) {
      setError('অনুগ্ৰহ কৰি ৰেজিষ্ট্ৰেচন নম্বৰটো লিখক।');
      return;
    }

    // ২. সম্পূৰ্ণ নম্বৰটো লিখিছে নে নাই চেক কৰিব (ধৰি লওক ১০ টা অংক)
    // যদি আপোনাৰ কলেজৰ নম্বৰবোৰৰ দৈৰ্ঘ্য বেলেগ, তেন্তে '10' ৰ ঠাইত সেইটো লিখক
    if (regNo.length < REG_LENGTH) {
      setError(`অনুগ্ৰহ কৰি সম্পূৰ্ণ ${REG_LENGTH} টা অংকৰ ৰেজিষ্ট্ৰেচন নম্বৰটো লিখক।`);
      return;
    }

    setError('');
    // সকলো ঠিকে থাকিলে PDF টো খোল খাব
    // মনত ৰাখিব: PDF টো খোল খোৱাৰ পিছত ছাত্ৰজনে পুনৰ তাত চাৰ্চ কৰিব লাগিব
    window.open('/final-cards.pdf', '_blank');
  };

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#020617', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#38bdf8', fontSize: '24px' }}>গোলঘাট কমাৰ্চ কলেজ</h1>
      <p style={{ color: '#94a3b8', marginBottom: '30px' }}>ৰেজিষ্ট্ৰেচন কাৰ্ড প’ৰ্টেল (২০২৬)</p>

      <div style={{ backgroundColor: '#0f172a', padding: '30px', borderRadius: '15px', maxWidth: '400px', margin: '0 auto', border: '1px solid #1e293b', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
        <p style={{ marginBottom: '15px', fontSize: '15px' }}>আপোনাৰ <b>সম্পূৰ্ণ ৰেজিষ্ট্ৰেচন নম্বৰ</b> লিখক:</p>
        
        <input 
          type="text" 
          placeholder="Enter Registration No." 
          value={regNo}
          onChange={(e) => setRegNo(e.target.value)}
          style={{ 
            padding: '15px', 
            width: '85%', 
            borderRadius: '10px', 
            border: error ? '2px solid #ef4444' : '2px solid #334155', 
            backgroundColor: '#020617', 
            color: 'white', 
            marginBottom: '10px', 
            fontSize: '18px', 
            textAlign: 'center',
            outline: 'none'
          }}
        />
        
        {error && <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '15px' }}>{error}</p>}

        <button 
          onClick={handleSearch}
          style={{ 
            padding: '15px', 
            borderRadius: '10px', 
            border: 'none', 
            backgroundColor: regNo.length >= REG_LENGTH ? '#38bdf8' : '#64748b', 
            color: '#020617', 
            fontWeight: 'bold', 
            cursor: regNo.length >= REG_LENGTH ? 'pointer' : 'not-allowed', 
            width: '100%', 
            fontSize: '16px',
            transition: '0.3s'
          }}
          disabled={regNo.length < REG_LENGTH}
        >
          কাৰ্ডখন বিচাৰক
        </button>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', color: '#64748b', fontSize: '13px', textAlign: 'left', maxWidth: '400px', margin: '40px auto', backgroundColor: '#0f172a', borderRadius: '10px' }}>
        <p style={{fontWeight: 'bold'}}>কিদৰে ব্যৱহাৰ কৰিব?</p>
        <ol style={{ paddingLeft: '20px' }}>
          <li>ওপৰত আপোনাৰ সম্পূৰ্ণ ৰেজিষ্ট্ৰেচন নম্বৰটো টাইপ কৰক।</li>
          <li>নম্বৰটো সম্পূৰ্ণ হ’লেহে বুটামটো নীলা হ’ব আৰু কাম কৰিব।</li>
          <li>PDF টো খোল খোৱাৰ পিছত 🔍 আইকনটো ব্যৱহাৰ কৰি পুনৰ নিজৰ নম্বৰটো বিচাৰিব।</li>
        </ol>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<RegistrationPortal />);
