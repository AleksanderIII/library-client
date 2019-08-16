import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { IRegistrationState, IDispatchProp, SiteComponents, Registration } from '../../models';
import { Strings } from '../../constants';
import { Button, Input } from '../../components';
import { UserDataActions } from '../../actions';

class RegistrationView extends React.Component<IRegistrationState & IDispatchProp> {
    constructor(props: IRegistrationState & IDispatchProp) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
        this.postData = this.postData.bind(this);
    }

    public changeValue(name: string, value: string): void {
        this.props.dispatch(UserDataActions.changeValue(name, value));
    }

    public postData(): void {
        this.props.dispatch(UserDataActions.postUserData());
    }

    public render(): JSX.Element {
        return (
            <div >
                <div className='form'>
                    <h1>{Strings[SiteComponents.Names.REGISTRATION]}</h1>
                    <Input placeholder={Strings[Registration.Fields.NAME]} maxLength={10} name='name' getValue={this.changeValue} />
                    <Input placeholder={Strings[Registration.Fields.PASSWORD]} maxLength={10} name='password' getValue={this.changeValue} />
                    <Link to='/continents'>
                        <Button text={Strings[Registration.Fields.REGISTER]} handleClick={() => this.postData()} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect()(RegistrationView);
