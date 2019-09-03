import * as React from 'react';
import { connect } from 'react-redux';

import { Icon } from '../../components';
import { CardDetails } from '..';

import { ICardProps, CardInformation, ICardState, Icons, IDispatchProp } from '../../models';
import { AppConfig } from '../../configs';
import { Strings } from '../../constants';
import { CardDetailsActions } from '../../actions';

class Card extends React.Component<ICardProps & IDispatchProp, ICardState> {
  constructor(props: ICardProps & IDispatchProp) {
    super(props);
    this.state = {
      isFrontSide: true
    };
  }

  private rotateImage = () => {
    this.setState({ isFrontSide: !this.state.isFrontSide });
  }

  private showCardDetails = () => {
    const container = {
      header: Strings['CARD_DETAILS'],
      content: <CardDetails cardId={this.props._id} />,
    };
    this.props.dispatch(CardDetailsActions.openCardDetails(container));
  }

  private getManageIcons = () => {

    return <p className='card__manageIcons'>
      <span onClick={() => this.showCardDetails()} >
        {/* <Link to={`/${this.props._id}`} >*/}
        <Icon name={Icons.Names.OPEN} />
        {/* </Link>*/}
      </span>
      <span onClick={() => this.props.removeCard(this.props._id)}>
        <Icon name={Icons.Names.TRASH} />
      </span>
    </p >;
  }

  private getMoneySideImage = (url: string, styleClass: string): JSX.Element => {
    return <div className={styleClass}>
      {
        url.length > 3 ? <img src={url} /> :
          <img src={AppConfig.components.card.defaultPictureUrl} />
      }
    </div>;
  }

  public render(): JSX.Element {
    const { frontImageUrl, backImageUrl } = this.props;
    const classForRotate = this.state.isFrontSide ? 'card__content__img' : 'card__content__img rotate';
    return (
      <div className='card'>
        {this.getManageIcons()}
        <div className='card__content'>
          <div onMouseEnter={this.rotateImage} className={classForRotate} >
            {this.getMoneySideImage(frontImageUrl, 'card__content__img__front')}
            {this.getMoneySideImage(backImageUrl, 'card__content__img__back')}
          </div>
          <div className='card__content__description' >
            <h3>{Strings[CardInformation.Fields.DESCRIPTION]}</h3>
            <span className='card__content__value'>
              {Strings[CardInformation.Fields.VALUE]}: {this.props.value}
            </span>
            <span className='card__content__date'>
              {Strings[CardInformation.Fields.CREATION_YEAR]}: {this.props.date}
            </span>
          </div>
        </div>
      </div >
    );
  }
}

export default connect()(Card);
