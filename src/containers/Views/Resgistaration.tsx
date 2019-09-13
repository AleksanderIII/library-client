import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { IRegistrationState, IDispatchProp, SiteComponents, Registration, ValidationTypes, Notes } from '../../models';
import { Strings } from '../../constants';
import { Button, Input } from '../../components';
import { UserDataActions } from '../../actions';
import { validateField } from '../../utils';

class RegistrationView extends React.Component<IDispatchProp & RouteComponentProps, IRegistrationState> {
    private nameInput: Input;
    private passwordInput: Input;
    private notes: string[] = [];

    constructor(props: IDispatchProp & RouteComponentProps) {
        super(props);
        this.state = {
            name: '',
            password: '',
        };
    }

    public changeValue = (name: string, value: string) => {
        this.props.dispatch(UserDataActions.changeValue(name, value));
        this.setState({ ...this.state, [name]: value });
    }

    public postData = () => {
        this.props.dispatch(UserDataActions.postUserData());
        this.resetValues();
        this.props.history.push(`/continents`);
    }

    public resetValues = () => {
        if (this.nameInput && this.passwordInput) {
            this.nameInput.resetValue();
            this.passwordInput.resetValue();
        }
    }

    public render(): JSX.Element {

        return (
            <div className='form'>
                <h1>{Strings[SiteComponents.Names.REGISTRATION]}</h1>
                <Input
                    ref={nameInput => this.nameInput = nameInput}
                    placeholder={Strings[Registration.Fields.NAME]}
                    maxLength={15}
                    name={Registration.Fields.NAME.toLowerCase()}
                    isValid={validateField(this.state.name, ValidationTypes.NAME)}
                    getValue={this.changeValue} />
                <Input
                    ref={passwordInput => this.passwordInput = passwordInput}
                    placeholder={Strings[Registration.Fields.PASSWORD]}
                    maxLength={15}
                    name={Registration.Fields.PASSWORD.toLowerCase()}
                    isValid={validateField(this.state.password, ValidationTypes.PASSWORD)}
                    getValue={this.changeValue} />
                <Button text={Strings[Registration.Fields.REGISTER]} handleClick={() => this.postData()} />
                <div className='notes'>
                    {
                        <p >{Strings[Notes.validationNotes.NAME]}</p>
                    }
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(RegistrationView));
