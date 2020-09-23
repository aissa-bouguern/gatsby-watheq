import React from 'react';

const Footer = () => (
  <footer className="footer" style={{ textAlign: 'center' }}>
    <div className="footer-container">
      <p className="no-margin padding-2 text-base">
        محتوى المدونة مرخص بموجب{' '}
        <a
          rel="license noreferrer"
          target="_blank"
          href="https://creativecommons.org/licenses/by-sa/4.0/deed.ar"
        >
          رخصة المشاع الإبداعي نَسب المُصنَّف - الترخيص بالمثل 4.0 دولي
        </a>
        . برمجة ومحتوى واثق الشويطر. تصميم{' '}
        <a
          href="https://www.linkedin.com/in/abdulateef-al-radaee-8101171a1/"
          target="_blank"
          rel="noreferrer"
        >
          عبداللطيف الرداعي
        </a>{' '}
        2020.
      </p>
    </div>
  </footer>
);

export default Footer;
