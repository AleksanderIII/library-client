import * as React from 'react';
import { connect } from 'react-redux';

import { Editor, IDispatchProp, ICardDetailsState, IAppState, ICardDetailsComponentState, Icons, ICardDetailsProps } from '../../models';
import { Icon, Loader } from '../../components';
import { Strings } from '../../constants';
import { CardDetailsActions } from '../../actions';

class CardDetails extends React.Component<ICardDetailsProps & IDispatchProp & ICardDetailsState, ICardDetailsComponentState> {
    constructor(props: ICardDetailsProps & IDispatchProp & ICardDetailsState) {
        super(props);
        this.state = {
            isActiveEdit: false
        };
    }

    public componentDidMount(): void {
        this.props.dispatch(CardDetailsActions.getCardDataRequest(this.props.cardId));
    }

    private toggleEdit = () => {
        this.setState({ isActiveEdit: !this.state.isActiveEdit });
    }

    private getInputValue = () => {
        console.log(1);
    }

    private createInput = (title: string, value: string | number, name: string): JSX.Element => {
        return <React.Fragment>
            <span>{title}: {value || '-'}</span>
        </ React.Fragment>;
    }

    public render(): JSX.Element {
        const { material, continent, country, date, value, addInformation, form, code } = this.props.data;
        return (
            <React.Fragment>
                {this.props.isLoading ?
                    <Loader /> :
                    <div className='cardDetails'>
                        <div className='cardDetails__container'>
                            <div className='cardDetails__container__header'>
                                <span></span>
                                <span><b>{Strings[continent]}</b> <i>({Strings.COUNTRIES[country]})</i></span>
                                <img className={`flag flag-${code && code.toLowerCase()}`} />
                            </div>
                            <div className='cardDetails__container__mainInfo'>
                                <div className='cardDetails__container__mainInfo__images'>
                                    <img src={this.props.data.frontImageUrl} alt='It missed' />
                                    <img src={this.props.data.backImageUrl} alt='It missed' />
                                </div>
                                <div className='cardDetails__container__content'>
                                    {this.createInput(Strings[Editor.Selectors.Names.DATE], date || '-', 'date')}
                                    {this.createInput(Strings[Editor.Selectors.Names.VALUE], value || '-', 'value')}
                                    {this.createInput(Strings[Editor.Selectors.Names.MATERIAL], material || '-', 'material')}
                                    {this.createInput(Strings[Editor.Selectors.Names.FORM], form || '-', 'form')}
                                    {this.createInput(Strings[Editor.Selectors.Names.ADD_INFO], addInformation || '-', 'addInfo')}
                                </div>
                            </div>
                            <div className='cardDetails__container__manage'>
                                <span>
                                    <Icon name={Icons.Names.TRASH} />
                                </span>
                                <span>
                                    <Icon name={Icons.Names.SAVE} />
                                </span>
                                <span onClick={this.toggleEdit}>
                                    <Icon name={Icons.Names.EDIT} />
                                </span>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: IAppState): ICardDetailsState => {
    return {
        data: state.cardDetails.data,
        isLoading: state.cardDetails.isLoading,
    };
};

export default connect(mapStateToProps)(CardDetails);
