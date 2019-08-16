import * as React from 'react';
import { connect } from 'react-redux';

import { Editor, IDispatchProp, ICardDetailsState, IAppState, ICardDetailsComponentState, Icons } from '../../models';
import { Icon, Input } from '../../components';
import { Strings } from '../../constants';
import { CardDetailsActions } from '../../actions';

class CardDetails extends React.Component<ICardDetailsState & IDispatchProp, ICardDetailsComponentState> {
    constructor(props: ICardDetailsState) {
        super(props);
        this.state = {
            isActiveEdit: false
        };
    }

    public componentDidMount(): void {
        const cardId = window.location.pathname.replace('/', '');
        this.props.dispatch(CardDetailsActions.getCardDataRequest(cardId));
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
            <span className={`cardDetails__container__content__input ${this.state.isActiveEdit ? '' : 'hidden'}`}>
                <Input name={name} getValue={this.getInputValue} placeholder={'Новое значение'}></Input>
            </span>
        </ React.Fragment>;
    }

    public render(): JSX.Element {
        const { material, continent, country, date, value, addInformation, form, code } = this.props.data;
        return (
            <div className='cardDetails'>
                <div className='cardDetails__container'>
                    <div className='cardDetails__container__header'>
                        <span></span>
                        <span>{continent ? continent.toUpperCase() : ''} ({country ? country.toUpperCase() : ''})</span>
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
