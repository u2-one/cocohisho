import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Theme, PageData } from '../types';
import '../styles/PageLayout.css';

interface PageLayoutProps {
  children: ReactNode;
  theme: Theme;
  pageName: string;
  data: PageData;
  basePath?: string;
  themeId?: string;
}

// Helper to extract RGB values from hex or rgb string
const hexToRgb = (color: string): string => {
  if (color.startsWith('#')) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }
  const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    return `${match[1]}, ${match[2]}, ${match[3]}`;
  }
  return '0, 0, 0';
};

function PageLayout({ children, theme, pageName, data, basePath, themeId }: PageLayoutProps): JSX.Element {
  const location = useLocation();
  const base = basePath || `/${pageName}`;
  const isHome = location.pathname === base || location.pathname === `${base}/`;

  const themeStyle = {
    '--theme-primary': theme.primary,
    '--theme-primary-rgb': hexToRgb(theme.primary),
    '--theme-secondary': theme.secondary,
    '--theme-attention': theme.attention || '',
    '--theme-background': theme.background || '#ffffff',
    '--theme-text': theme.text || '#333333',
    '--theme-accent': theme.accent || theme.primary,
    '--theme-accent-rgb': hexToRgb(theme.accent || theme.primary),
  } as React.CSSProperties;

  const scopingClass = themeId ? `theme-item-${themeId}` : `theme-item-${pageName.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className={`page-layout ${scopingClass}`} style={themeStyle}>
      <div className="page-layout-header">
        <h1 className="page-layout-title">{data.pageName}</h1>
        <nav className="page-layout-nav">
          <Link to={base} className={isHome ? 'active' : ''}>
            説明
          </Link>
          <Link to={`${base}/characters`} className={location.pathname.includes('/characters') ? 'active' : ''}>
            ライブラリ一覧
          </Link>
        </nav>
      </div>
      <div className="page-layout-content">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
