import * as React from 'react';
import { connect } from 'react-redux';

import { IGridSectionProps, IDispatchProp, IGridSectionState, Icons } from '../../models';
import { ViewActions } from '../../actions';
import { Card, Icon } from '../../components';
import { AppConfig } from '../../configs';

import '../../public/flags.css';

class GridSection extends React.Component<IGridSectionProps & IDispatchProp, IGridSectionState> {
  constructor(props: IGridSectionProps & IDispatchProp) {
    super(props);
    this.removeCard = this.removeCard.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.state = {
      top: 0
    };
  }

  public removeCard(id: string): void {
    this.props.dispatch(ViewActions.removeCardRequest(id));
  }

  public previousSlide(): void {
    if (this.state.top + AppConfig.components.gridSection.sliderStep <= 0) {
      const newTopCoordinate = this.state.top + AppConfig.components.gridSection.sliderStep;
      this.setState({ top: newTopCoordinate });
    }
  }

  public nextSlide(): void {
    const slidesQuantity = this.props.countryData.length / 4;
    if (Math.ceil(slidesQuantity) * AppConfig.components.gridSection.sliderStep > -(this.state.top - AppConfig.components.gridSection.sliderStep)) {
      const newTopCoordinate = this.state.top - AppConfig.components.gridSection.sliderStep;
      this.setState({ top: newTopCoordinate });
    }
  }

  public render(): JSX.Element {
    return (
      <div>
        {
          this.props.countryData.length ?
            <div className='gridSection'>
              <div className='gridSection__header'>
                <img className={`flag flag-${this.props.countryData[0] ? this.props.countryData[0].code.toLowerCase() : ''}`} />
                <h2>{this.props.countryName} </h2>
                <p className='gridSection__header__controls'>
                  <span onClick={this.previousSlide}> <Icon name={Icons.Names.ARROW_UP} /></span>
                  <span onClick={this.nextSlide}><Icon name={Icons.Names.ARROW_DOWN} /></span>
                </p>
              </div>
              <hr />
              <div className='gridSection__cards'  >
                <div className='gridSection__cards__slider' style={{ top: `${this.state.top}px` }} >
                  {
                    this.props.countryData.map((elem, index) =>
                      <Card
                        key={index}
                        removeCard={this.removeCard}
                        _id={elem._id}
                        value={elem.value}
                        frontImageUrl={elem.frontImageUrl}
                        backImageUrl={elem.backImageUrl}
                        date={elem.date}
                      />)
                  }
                </div>
              </div>
            </div> : <div>По этой стране нет таких данных</div>
        }
      </div>
    );
  }
}
export default connect()(GridSection);
