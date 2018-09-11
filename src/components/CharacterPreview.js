import React from 'react';
import { Link } from 'react-router';

export default class CharacterPreview extends React.Component {
  render() {
    return (
      <Link to={`/character/${this.props.id}`}>
        <div className="character-preview">
          <h2 className="character-name">{this.props.character_name}</h2>
          <img src={`img/${this.props.image}`}/>
          <h3 className="actress-name">{this.props.actress_name}</h3>
        </div>
      </Link>
    );
  }
}