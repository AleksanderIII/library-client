import * as React from 'react';
import { connect } from 'react-redux';

import { Editor, IDispatchProp, ICardDetailsState, IAppState, ICardDetailsComponentState } from '../../models';
import { Icons, Input } from '../../components';
import './CardDetails.css';
import { Strings } from '../../constants';
import { CardDetailsActions } from '../../actions';

class CardDetails extends React.Component<ICardDetailsState & IDispatchProp, ICardDetailsComponentState> {
    constructor(props: ICardDetailsState) {
        super(props);
        this.state = {
            isActiveEdit: false
        };
        this.getInputValue = this.getInputValue.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.createInput = this.createInput.bind(this);
    }

    public componentDidMount(): void {
        this.props.dispatch(CardDetailsActions.getCardDataRequest(window.location.pathname.replace('/', '')));
    }

    public toggleEdit(): void {
        this.setState({ isActiveEdit: !this.state.isActiveEdit });
    }

    public getInputValue(): void {
        console.log(1);
    }

    public createInput(title: string, value: string | number, name: string): JSX.Element {
        return <React.Fragment>
            <span>{title}: {value || '-'}</span>
            <span className={`cardDetails_content_description_elements_input ${this.state.isActiveEdit ? '' : 'hidden'}`}>
                <Input name={name} getValue={this.getInputValue} placeholder={'Новое значение'}></Input>
            </span>
        </ React.Fragment>;
    }

    public render(): JSX.Element {
        const { material, continent, country, date, value, addInformation, form, code } = this.props.data;
        return (
            <div className='cardDetails'>
                <div className='cardDetails_container'>

                    <div className='cardDetails_header'>
                        <span></span>
                        <span>{continent.toUpperCase()} ({country.toUpperCase()})</span>
                        <img className={`flag flag-${code && code.toLowerCase()}`} />
                    </div>
                    <div className='cardDetails_container_mainInfo'>
                        <div className='cardDetails_img'>
                            <img src={this.props.data.frontImageUrl} alt='It missed' />
                            <img src={this.props.data.backImageUrl} alt='It missed' />
                        </div>
                        <div className='cardDetails_content_description_elements'>
                            {this.createInput(Strings[Editor.Filters.Names.DATE], date, 'date')}
                            {this.createInput(Strings[Editor.Filters.Names.VALUE], value, 'value')}
                            {this.createInput(Strings[Editor.Filters.Names.MATERIAL], material, 'material')}
                            {this.createInput(Strings[Editor.Filters.Names.FORM], form, 'form')}
                            {this.createInput(Strings[Editor.Filters.Names.ADD_INFO], addInformation, 'addInfo')}
                        </div>
                    </div>
                    <div className='cardDetails_container_manage'>
                        <span>
                            <Icons name='trashIcon' />
                        </span>
                        <span>
                            <Icons name='save' />
                        </span>
                        <span onClick={this.toggleEdit}>
                            <Icons name='edit' />
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
