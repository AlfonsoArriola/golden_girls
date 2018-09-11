import React from 'react';
import CharacterPreview from './CharacterPreview';
import characters from '../data/characters';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="characters-selector">
          {characters.map(characterData => <CharacterPreview key={characterData.id} {...characterData} />)}
        </div>
      </div>
    );
  }
}