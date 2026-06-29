import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import WorldView from '../components/WorldView';
import CharacterList from '../components/CharacterList';
import CharacterDetail from '../components/CharacterDetail';
import { node03Data } from '../data/node03/node03Data';
import { Theme } from '../types';
import '../styles/Node03Page.css';

function Node03Page(): JSX.Element {
  const pageName = 'NODE03';
  const theme: Theme = {
    primary: node03Data.theme.primary,
    secondary: node03Data.theme.secondary,
    attention: node03Data.theme.attention,
    background: '#f8f9fa', // Bright Gray
    text: '#212529',
  };

  const basePath = `/${pageName}`;

  return (
    <PageLayout theme={theme} pageName={pageName} data={node03Data} basePath={basePath} themeId="node03">
      <Routes>
        <Route
          path="/"
          element={<WorldView data={node03Data} />}
        />
        <Route
          path="/characters"
          element={<CharacterList characters={node03Data.characters} basePath={basePath} />}
        />
        <Route
          path="/characters/:characterId"
          element={<CharacterDetail characters={node03Data.characters} theme={theme} basePath={basePath} />}
        />
      </Routes>
    </PageLayout>
  );
}

export default Node03Page;
