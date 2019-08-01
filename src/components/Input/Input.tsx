import * as React from 'react';

import { IInputProps, IInputState } from '../../models';

class Input extends React.Component<IInputProps, IInputState> {
  constructor(props: IInputProps) {
    super(props);
    this.state = {
      value: ''
    };
  }

  private changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
    this.props.getValue(this.props.name, event.currentTarget.value);
  }

  public render(): JSX.Element {
    return (
      <div className='input'>
        <input
          placeholder={this.props.placeholder}
          maxLength={this.props.maxLength}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}
export default Input;
