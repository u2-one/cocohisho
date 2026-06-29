import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import WorldView from '../components/WorldView';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';
import { aroundData } from '../data/around/aroundData';
import { Theme } from '../types';
import '../styles/AroundTheClockPage.css';

function AroundTheClockPage(): JSX.Element {
  const pageName = 'Around_the_Clock';
  const theme: Theme = {
    primary: aroundData.theme.primary,
    secondary: aroundData.theme.secondary,
    background: aroundData.theme.background,
    text: aroundData.theme.text,
    accent: aroundData.theme.accent,
  };

  const basePath = `/${pageName}`;

  return (
    <PageLayout theme={theme} pageName={pageName} data={aroundData} basePath={basePath} themeId="around">
      <Routes>
        <Route
          path="/"
          element={<WorldView data={aroundData} />}
        />
        <Route
          path="/characters"
          element={<CharacterList characters={aroundData.characters} basePath={basePath} />}
        />
        <Route
          path="/characters/:characterId"
          element={<CharacterDetail characters={aroundData.characters} theme={theme} basePath={basePath} themeId="around" />}
        />
      </Routes>
    </PageLayout>
  );
}

export default AroundTheClockPage;
