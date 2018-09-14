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
        <GoldenGirlsMenu characters={characters}/>
        <div className="character">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${character.image}`}/>
            <h2 className="name">{character.character_first_name}</h2>
          </div>
           <section className="actor_bio">
            <ul>
             <li>Actress Name: {character.actress_name}</li>
             <li>Birth Name: {character.birth_name}</li>
             <li>Height: {character.height}</li>
             <li>Born: {character.born}</li>
             <li>Died: {character.died}</li>
            </ul>
           
          </section>
          <section className="character_bio">
            <p>{character.character_bio} </p>
          </section>
         
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}