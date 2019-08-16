import * as React from 'react';
import { Link } from 'react-router-dom';

import { ICardProps, Editor, ICardState, Icons } from '../../models';
import { Icon } from '../../components';

import { Strings } from '../../constants';

class Card extends React.Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);
    this.state = {
      isFrontSide: true
    };
  }

  private rotateImage = () => {
    this.setState({ isFrontSide: !this.state.isFrontSide });
  }

  private getManageIcons = () => {
    return <p className='card__manageIcons'>
      <span><Link to={`/${this.props._id}`} ><Icon name={Icons.Names.OPEN} /></Link></span>
      <span onClick={() => this.props.removeCard && this.props.removeCard(this.props._id)}>
        <Icon name={Icons.Names.TRASH} />
      </span>
    </p>;
  }

  public render(): JSX.Element {
    return (
      <div className='card'>
        {this.getManageIcons()}

        <div className='card__content'>
          <div onMouseEnter={this.rotateImage} className={this.state.isFrontSide ? 'card__content__img' : 'card__content__img rotate'} >
            <div className='card__content__img__front'>
              {
                this.props.frontImageUrl.length > 3 ? <img src={this.props.frontImageUrl} /> :
                  <img src='https://res.cloudinary.com/dwg7mxlg4/image/upload/v1553694922/Money-library/coin_PNG36944.png' />
              }
            </div>
            <div className='card__content__img__back'>
              {
                this.props.backImageUrl.length > 3 ? <img src={this.props.backImageUrl} /> :
                  <img src='https://res.cloudinary.com/dwg7mxlg4/image/upload/v1553694922/Money-library/coin_PNG36944.png' />
              }

            </div>
          </div>
          <div className='card__content__description' >
            <h3>{Strings['DESCRIPTION']}</h3>
            <span className='card__content__date'>{Strings[Editor.Selectors.Names.DATE]}:{this.props.date}</span>
            <span className='card__content__value'>{Strings[Editor.Selectors.Names.VALUE]}: {this.props.value}</span>
          </div>
        </div>
      </div >
    );
  }
}

export default Card;
