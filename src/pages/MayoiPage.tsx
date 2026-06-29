import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import WorldView from '../components/WorldView';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';
import { mayoiData } from '../data/mayoi/mayoiData';
import { Theme } from '../types';
import '../styles/MayoiPage.css';

function MayoiPage(): JSX.Element {
  const pageName = 'Mayoi_Anomaly_Report';
  const theme: Theme = {
    primary: mayoiData.theme.primary,
    secondary: mayoiData.theme.secondary,
    accent: mayoiData.theme.accent,
    background: '#ffffff', // Clean White
    text: '#2c3e50',
  };

  const basePath = `/${pageName}`;

  return (
    <PageLayout theme={theme} pageName={pageName} data={mayoiData} basePath={basePath} themeId="mayoi">
      <Routes>
        <Route
          path="/"
          element={<WorldView data={mayoiData} />}
        />
        <Route
          path="/characters"
          element={<CharacterList characters={mayoiData.characters} basePath={basePath} />}
        />
        <Route
          path="/characters/:characterId"
          element={<CharacterDetail characters={mayoiData.characters} theme={theme} basePath={basePath} themeId="mayoi" />}
        />
      </Routes>
    </PageLayout>
  );
}

export default MayoiPage;
