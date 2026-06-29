import React from 'react';
import '../styles/AboutPage.css';

function AboutPage(): JSX.Element {
  return (
    <div className="about-page">
      <div className="about-page-container">
        <h1 className="about-page-title">関係者</h1>
        <div className="about-page-content">
          <section className="about-section">
            <h2>サイト運営者</h2>
            <p>
              本サイトは、UTAU向け音声ライブラリを配布するために運営されています。
            </p>
          </section>
          <section className="about-section">
            <h2>ライブラリ製作者</h2>
            <div className="about-creators">
              <div className="about-creator">
                <h3>NODE03</h3>
                <p>近未来的な世界観の音声ライブラリを制作</p>
              </div>
              <div className="about-creator">
                <h3>まよい奇象報告</h3>
                <p>日本の気象をテーマにした音声ライブラリを制作</p>
              </div>
              <div className="about-creator">
                <h3>24時間対応中</h3>
                <p>暗い洋風の屋敷をイメージした音声ライブラリを制作</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
