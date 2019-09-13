import * as React from 'react';
import { connect } from 'react-redux';

import { IRegistrationState, IDispatchProp, SiteComponents, Registration } from '../../models';
import { Strings } from '../../constants';
import { Button, Input } from '../../components';
import { UserDataActions } from '../../actions';

class RegistrationView extends React.Component<IRegistrationState & IDispatchProp> {
    private nameInput: Input;
    private passwordInput: Input;
    public changeValue = (name: string, value: string) => {
        this.props.dispatch(UserDataActions.changeValue(name, value));
    }

    public postData = () => {
        this.props.dispatch(UserDataActions.postUserData());
        this.resetValues();
    }

    public resetValues = () => {
        if (this.nameInput && this.passwordInput) {
            this.nameInput.resetValue();
            this.passwordInput.resetValue();
        }
    }

    public render(): JSX.Element {
        return (
            <div >
                <div className='form'>
                    <h1>{Strings[SiteComponents.Names.REGISTRATION]}</h1>
                    <Input
                        ref={nameInput => this.nameInput = nameInput}
                        placeholder={Strings[Registration.Fields.NAME]}
                        maxLength={15}
                        name={Registration.Fields.NAME.toLowerCase()}
                        getValue={this.changeValue} />
                    <Input
                        ref={passwordInput => this.passwordInput = passwordInput}
                        placeholder={Strings[Registration.Fields.PASSWORD]}
                        maxLength={15}
                        name={Registration.Fields.PASSWORD.toLowerCase()}
                        getValue={this.changeValue} />
                    <Button text={Strings[Registration.Fields.REGISTER]} handleClick={() => this.postData()} />
                </div>
            </div>
        );
    }
}

export default connect()(RegistrationView);
