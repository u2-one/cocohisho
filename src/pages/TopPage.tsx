import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundVideo from '../components/common/BackgroundVideo';
import { topPageData } from '../data/topPageData';
import '../styles/TopPage.css';

const TopPage: React.FC = () => {
  return (
    <div className="top-page">
      <BackgroundVideo />
      <div className="top-page-content">
        <header className="top-page-header">
          <h1 className="top-page-title">UTAU 音源配布所</h1>
        </header>

        <div className="top-page-grid">
          {topPageData.pages.map((page) => (
            <div
              key={page.id}
              className={`grid-item-wrapper wrapper-${page.id}`}
            >
              <div className={`grid-item item-${page.id}`}>
                <Link to={page.path}>
                  <img
                    src={page.closeImageUrl}
                    alt={page.name}
                    className="img-close"
                    loading="lazy"
                  />
                  <img
                    src={page.openImageUrl}
                    alt=""
                    className="img-open"
                    aria-hidden="true"
                    loading="eager"
                    decoding="sync"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <footer className="top-page-footer">
          <p className="footer-text">--- UTAU Voice Library</p>
        </footer>
      </div>
    </div>
  );
};

export default TopPage;
