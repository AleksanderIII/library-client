import * as React from 'react';
import { connect } from 'react-redux';

import { Editor, IDispatchProp, ICardDetailsState, IAppState, ICardDetailsComponentState, Icons, ICardDetailsProps } from '../../models';
import { Icon, Loader, YearInput, Input } from '../../components';
import { Strings } from '../../constants';
import { CardDetailsActions } from '../../actions';
import { createSelector } from '../utils';
import { AppConfig } from '../../configs';

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

    private createField = (title: string, value: string | number): JSX.Element => {
        return <React.Fragment>
            <span className='cardDetails__container__content__field' >{title}: {value || '-'}</span>
        </ React.Fragment>;
    }

    private createTextEditField = (title: string, value: string) => {
        return <React.Fragment>
            <span className='cardDetails__container__content__field' >{Strings[title]}: <Input name={title} defaultValue={value} getValue={this.updateValue} /></span>
        </ React.Fragment>;
    }

    private getReadModeData = (date: number, value: string, material: string, form: string, addInformation: string): JSX.Element => {
        return <React.Fragment>
            {this.createField(Strings[Editor.Selectors.Names.DATE], date)}
            {this.createField(Strings[Editor.Selectors.Names.VALUE], value)}
            {this.createField(Strings[Editor.Selectors.Names.MATERIAL], material)}
            {this.createField(Strings[Editor.Selectors.Names.FORM], form)}
            {this.createField(Strings[Editor.Selectors.Names.ADD_INFO], addInformation)}
        </React.Fragment>;
    }

    private getEditModeData = (date: number, type: string, value: string, material: string, form: string, addInformation: string): JSX.Element => {
        const moneyValues: { [key: string]: string } = type === Editor.Selectors.Options.TYPE.COINS ?
            AppConfig.containers.editor.options.coins :
            AppConfig.containers.editor.options.cash;
        const values = Object.keys(moneyValues).map(value => moneyValues[value]);
        return <React.Fragment>
            {createSelector(Editor.Selectors.Names.VALUE, values, false, value, Editor.Selectors.Names.VALUE, this.updateValue)}
            <YearInput name={Editor.Selectors.Names.DATE} defaultValue={date.toString()} getValue={this.updateValue} />
            {this.createTextEditField(Editor.Selectors.Names.MATERIAL, material)}
            {this.createTextEditField(Editor.Selectors.Names.FORM, form)}
            {this.createTextEditField(Editor.Selectors.Names.ADD_INFO, addInformation)}
        </React.Fragment>;
    }

    private updateValue = (fieldName: string, value: string) => {
        const matchedFieldName = this.matchFieldName(fieldName);
        this.props.dispatch(CardDetailsActions.updateValue(matchedFieldName, value));
    }

    private matchFieldName = (fieldName: string) => {
        switch (fieldName) {
            case Editor.Selectors.Names.ADD_INFO: return 'addInformation';
            default: return fieldName.toLowerCase();
        }
    }

    private publishUpdates = () => {
        this.props.dispatch(CardDetailsActions.publishUpdates());
    }

    public render(): JSX.Element {
        const { material, continent, country, date, value, addInformation, form, code, type } = this.props.data;
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
                                    {
                                        this.state.isActiveEdit ?
                                            this.getEditModeData(date, type, value as string, material, form, addInformation) :
                                            this.getReadModeData(date, value as string, material, form, addInformation)
                                    }
                                </div>
                            </div>
                            <div className='cardDetails__container__manage'>
                                <span>
                                    <Icon name={Icons.Names.TRASH} />
                                </span>
                                <span onClick={this.toggleEdit}>
                                    <Icon name={Icons.Names.EDIT} />
                                </span>
                                {
                                    this.state.isActiveEdit ?
                                        <span onClick={() => this.publishUpdates()}>
                                            <Icon name={Icons.Names.SAVE} />
                                        </span>
                                        : null
                                }
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
