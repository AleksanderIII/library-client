import * as React from 'react';
import { Link } from 'react-router-dom';

import { ICardProps, Editor, ICardState } from '../../models';
import { Icons } from '../../components';

import './Card.css';
import { Strings } from '../../constants';

class Card extends React.Component<ICardProps, ICardState> {
  constructor(props: ICardProps) {
    super(props);
    this.state = {
      isFrontSide: true
    };
    this.rotateImage = this.rotateImage.bind(this);
  }

  public rotateImage(): void {
    this.setState({ isFrontSide: !this.state.isFrontSide });
  }

  public render(): JSX.Element {
    return (
      <div className='card'>
        <p className='card_manageIcons'>
          <span><Link to={`/${this.props._id}`} ><Icons name='openIcon' /></Link></span>
          <span onClick={() => this.props.removeCard(this.props._id)}><Icons name='trashIcon' /></span>
        </p>
        <div className='card_content'>
          <div onMouseEnter={this.rotateImage} className={this.state.isFrontSide ? 'card_content_img' : 'card_content_img rotate'} >
            <div className='card_content_img_front'>
              {
                this.props.frontImageUrl.length > 3 ? <img src={this.props.frontImageUrl} /> :
                  <img src='https://res.cloudinary.com/dwg7mxlg4/image/upload/v1553694922/Money-library/coin_PNG36944.png' />
              }
            </div>
            <div className='card_content_img_back'>
              {
                this.props.backImageUrl.length > 3 ? <img src={this.props.backImageUrl} /> :
                  <img src='https://res.cloudinary.com/dwg7mxlg4/image/upload/v1553694922/Money-library/coin_PNG36944.png' />
              }

            </div>
          </div>
          <div className='card_content_description' >
            <h3>{Strings['DESCRIPTION']}</h3>
            <span className='card_content_date'>{Strings[Editor.Filters.Names.DATE]}:{this.props.date}</span>
            <span className='card_content_value'>{Strings[Editor.Filters.Names.VALUE]}: {this.props.value}</span>
          </div>
        </div>
      </div >
    );
  }
}

export default Card;
