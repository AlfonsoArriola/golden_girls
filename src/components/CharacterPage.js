import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import GoldenGirlsMenu from './GoldenGirlsMenu';
import characters from '../data/characters';

export default class CharacterPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const character = characters.filter((character) => character.id === id)[0];
    if (!character) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${character.cover})` };
    return (
      <div className="character-full">
        <CharactersMenu characters={characters}/>
        <div className="character">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${character.image}`}/>
            <h2 className="name">{character.name}</h2>
          </div>
           <section className="actor_bio">
            <ul>
             <li>{character.actress_name}</li>
             <li>{character.birth_name}</li>
             <li>{character.height}</li>
             <li>{character.born}</li>
             <li>{character.died}</li>
            </ul>
           
          </section>
          <section className="character_bio">
            {character.bio} 
          </section>
         
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}