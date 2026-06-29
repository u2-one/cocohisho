import React from 'react';
import '../styles/TermsPage.css';

function TermsPage(): JSX.Element {
  return (
    <div className="terms-page">
      <div className="terms-page-container">
        <h1 className="terms-page-title">利用規約</h1>
        <div className="terms-page-content">
          <section className="terms-section">
            <h2>1. 利用について</h2>
            <p>
              本サイトで配布されている音声ライブラリは、UTAU向けの無料音声ライブラリです。
              利用にあたっては、以下の規約に同意していただく必要があります。
            </p>
          </section>
          <section className="terms-section">
            <h2>2. 使用許諾</h2>
            <p>
              本サイトで配布されている音声ライブラリは、個人利用・商用利用を問わず自由にご利用いただけます。
              ただし、二次配布や改変については、各ライブラリの規約をご確認ください。
            </p>
          </section>
          <section className="terms-section">
            <h2>3. 免責事項</h2>
            <p>
              本サイトで配布されている音声ライブラリの使用により生じた損害について、
              当サイトおよびライブラリ製作者は一切の責任を負いません。
            </p>
          </section>
          <section className="terms-section">
            <h2>4. お問い合わせ</h2>
            <p>
              ご不明な点がございましたら、各ライブラリの製作者までお問い合わせください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;
