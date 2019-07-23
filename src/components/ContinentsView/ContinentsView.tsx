import * as React from 'react';
import { Link } from 'react-router-dom';

class ContinentsView extends React.Component {

  public render(): JSX.Element {
    return (
      <div className='continentsView'>
        <div>
          <Link to='/continents/All'>
            <p>Все</p>
          </Link>
          <Link to='/continents/NorthAmerica'>
            <p>Северная Америка</p>
          </Link>
          <Link to='/continents/Europe'>
            <p>Европа</p>
          </Link>
          <Link to='/continents/Africa'>
            <p>Африка</p>
          </Link>
          <Link to='/continents/Asia'>
            <p>Азия</p>
          </Link>
          <Link to='/continents/SouthAmerica'>
            <p>Южная Америка</p>
          </Link>
          <Link to='/continents/Antarctica'>
            <p>Антарктика</p>
          </Link>
          <Link to='/continents/Oceania'>
            <p>Австралия</p>
          </Link>

        </div>
      </div >
    );
  }
}

export default ContinentsView;
