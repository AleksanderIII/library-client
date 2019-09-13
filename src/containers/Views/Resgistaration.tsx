import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { IRegistrationState, IDispatchProp, SiteComponents, Registration, IAppState } from '../../models';
import { Strings } from '../../constants';
import { Button, Input } from '../../components';
import { UserDataActions } from '../../actions';

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

    private validateField = (data: string, type: string): boolean => {
        if (!data || !data.length) {
            return false;
        }
        switch (type) {
            case Registration.FieldTypes.NAME: {
                const regExp = new RegExp(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/);
                const isValid = regExp.test(data);
                if (!isValid) {
                    this.notes.push('letters and digits, with hyphens, underscores and spaces as internal separators');
                }
                return isValid;
            }
            case Registration.FieldTypes.PASSWORD: {
                const regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);
                const isValid = regExp.test(data);
                if (!isValid) {
                    this.notes.push('Minimum eight characters, at least one uppercase letter, one lowercase letter and one number');
                }
                return regExp.test(data);
            }
        }
    }

    public render(): JSX.Element {
        console.log(this.notes);
        return (
            <div>
                <div className='form'>
                    <h1>{Strings[SiteComponents.Names.REGISTRATION]}</h1>
                    <Input
                        ref={nameInput => this.nameInput = nameInput}
                        placeholder={Strings[Registration.Fields.NAME]}
                        maxLength={15}
                        name={Registration.Fields.NAME.toLowerCase()}
                        isValid={this.validateField(this.state.name, Registration.FieldTypes.NAME)}
                        getValue={this.changeValue} />
                    <Input
                        ref={passwordInput => this.passwordInput = passwordInput}
                        placeholder={Strings[Registration.Fields.PASSWORD]}
                        maxLength={15}
                        name={Registration.Fields.PASSWORD.toLowerCase()}
                        isValid={this.validateField(this.state.password, Registration.FieldTypes.PASSWORD)}
                        getValue={this.changeValue} />
                    <Button text={Strings[Registration.Fields.REGISTER]} handleClick={() => this.postData()} />
                </div>
                <div className='notes'>
                    {
                        this.notes.map((note, index) => <p key={`note-${index}`}>{note}</p>)
                    }
                </div>
            </div >
        );
    }
}

export default connect()(withRouter(RegistrationView));
