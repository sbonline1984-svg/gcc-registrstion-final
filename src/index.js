import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <div style={{ 
      padding: '50px 20px', 
      textAlign: 'center', 
      backgroundColor: '#020617', 
      minHeight: '100vh', 
      color: 'white', 
      fontFamily: 'sans-serif' 
    }}>
      {/* হেডাৰ অংশ */}
      <h1 style={{ color: '#38bdf8', fontSize: '28px', marginBottom: '10px' }}>
        গোলঘাট কমাৰ্চ কলেজ
      </h1>
      <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px' }}>
        ৰেজিষ্ট্ৰেচন কাৰ্ড প’ৰ্টেল (২০২৬)
      </p>
      
      {/* ডাউনলোড কাৰ্ড */}
      <div style={{ 
        padding: '35px 25px', 
        border: '1px solid #1e293b', 
        borderRadius: '20px', 
        backgroundColor: '#0f172a', 
        display: 'inline-block',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
      }}>
        <h3 style={{ marginBottom: '20px', color: '#f8fafc' }}>প্ৰমাণপত্ৰ: ১১৫৯ খন</h3>
        
        <a 
          href="/final-cards.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          style={{ 
            padding: '15px 35px', 
            backgroundColor: '#38bdf8', 
            color: '#020617', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            borderRadius: '10px', 
            fontSize: '18px', 
            display: 'inline-block',
            transition: '0.3s'
          }}
        >
          PDF ফাইলটো খোলক
        </a>

        <div style={{ marginTop: '25px', fontSize: '14px', color: '#64748b', textAlign: 'left', maxWidth: '350px' }}>
          <p><b>সহায়িকা:</b></p>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
            <li>বুটামটো টিপিলে PDF টো খোল খাব।</li>
            <li>মোবাইলত PDF খোল খোৱাৰ পিছত <b>Search/Find</b> আইকনটো ব্যৱহাৰ কৰি নিজৰ নাম বা নম্বৰ বিচাৰিব।</li>
            <li>ফাইলটোৰ আকাৰ ৬ এম বি, গতিকে নেটৱৰ্ক অনুযায়ী অলপ সময় ল'ব পাৰে।</li>
          </ul>
        </div>
      </div>
      
      <p style={{ marginTop: '50px', fontSize: '12px', color: '#334155' }}>
        Developed for Golaghat Commerce College
      </p>
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
