import React from 'react';
import { Link } from 'react-router';

export default class GoldenGirlsMenu extends React.Component {
  render() {
    return (
      <nav className="characters-menu">
        {this.props.characters.map(menuCharacter => {
          return <Link key={menuCharacter.id} to={`/character/${menuCharacter.id}`} activeClassName="active">
            {menuCharacter.character_name}
          </Link>;
        })}
      </nav>
    );
  }
}