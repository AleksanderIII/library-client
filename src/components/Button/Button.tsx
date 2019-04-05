import * as React from 'react';

import { IButtonProps } from '../../models';

import './Button.css';

export default class Button extends React.Component<IButtonProps> {
  public render(): JSX.Element {
    const { handleClick, disabled, text } = this.props;
    return (
        <div className='button'>
        <button className={'btn'} disabled={disabled} onClick={handleClick}>
            {text}
        </button>
        </div>
    );
  }
}
