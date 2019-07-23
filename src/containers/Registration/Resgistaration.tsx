import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { IRegistrationState, IDispatchProp } from '../../models';
import { Button, Input } from '../../components';
import { UserDataActions } from '../../actions';

class Registration extends React.Component<IRegistrationState & IDispatchProp> {
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
                    <h1>Вход</h1>
                    <Input placeholder='Имя' maxLength={10} name='name' getValue={this.changeValue} />
                    <Input placeholder='Пароль' maxLength={10} name='password' getValue={this.changeValue} />
                    <Link to='/continents'>
                        <Button text='Зарегистрироваться' handleClick={() => this.postData()} />
                    </Link>
                </div>
            </div>
        );
    }
}

export default connect()(Registration);
