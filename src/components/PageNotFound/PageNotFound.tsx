import * as React from 'react';
import { Link } from 'react-router-dom';

import './PageNotFound.css';

class Card extends React.Component {
    public render(): JSX.Element {
        return (
            <div className='page-not-found central-align'>
                Page not found
                <br />
                <Link to='/registration'>Home</Link>
            </div>
        );
    }
}
export default Card;
