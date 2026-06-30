import React from 'react';
import '../styles/TermsPage.css';

function TermsPage(): JSX.Element {
  return (
    <div className="terms-page">
      <div className="terms-page-container">
        <h1 className="terms-page-title">利用規約</h1>
        <div className="terms-page-content">
          <section className="terms-section">
            <h2>ご利用について</h2>
            <p>本サイトで配布されている音声ライブラリは、UTAU向けの無料音声ライブラリです。</p>
            <p>利用にあたっては、以下の規約に同意していただく必要があります。</p>
            <p style={{ fontSize: '0.9em', color: '#666', marginTop: '1em' }}>
              ※ 各音源ページ及びREAD MEに特筆事項がある場合、本規約に加えてそちらもご確認ください。
            </p>
          </section>

          <section className="terms-section">
            <h2>禁止事項</h2>
            <ul className="terms-list">
              <li>このサイトの配布物は全てAI学習を禁じています。絶対に利用しないでください。</li>
              <li>このサイトの配布物の再配布、著作権の主張等はしないでください。</li>
              <li>素音源（加工なし）の利用はご遠慮ください。</li>
              <li>公序良俗に反する行為、宗教勧誘、政治活動には絶対に使用しないでください。</li>
              <li>同梱立ち絵をSNSのアイコンやヘッダーへ設定および商用利用するのはお控えください。</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>その他注意事項など</h2>
            <ol className="terms-list ordered">
              <li>弊音源をご利用の際は、音源名を明記してください。</li>
              <li>WAVE両端カット、原音設定の改変、ノイズ除去は自由です。</li>
              <li>二次創作、同人利用、HANASU等への利用の際は、報告は不要です。</li>
            </ol>
          </section>

          <section className="terms-section">
            <h2>免責事項</h2>
            <p>本サイトで配布されている音声ライブラリの使用により生じたトラブル等について、</p>
            <p>当サイトおよびライブラリ製作者は一切の責任を負いません。</p>
          </section>

          <section className="terms-section">
            <h2>規約について</h2>
            <p>
              本規約は今後変更される可能性があります。ご了承ください。
            </p>
            <p>
              その他、著作権など諸々の権利は各音源の管理者に委ねられています。
            </p>
            <p>
              管理者からNGが出た場合はその指示に従ってください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;
