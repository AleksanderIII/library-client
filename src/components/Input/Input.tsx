import * as React from 'react';

import { IInputProps, IInputState } from '../../models';

class Input extends React.Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      value: this.props.defaultValue || ''
    };
  }

  private changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
    this.props.getValue(this.props.name, event.currentTarget.value);
  }

  public resetValue = () => {
    this.setState({ value: '' });
  }

  public render(): JSX.Element {
    return (
      <div className='input'>
        < input
          className={this.props.isValid ? 'valid' : 'invalid'}
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          value={this.state.value}
          onChange={this.changeHandler}
        />
      </div >
    );
  }
}
export default Input;
