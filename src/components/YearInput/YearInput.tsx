import * as React from 'react';

import { Icon } from '../../components';
import { IYearInputProps, IYearInputState, Icons } from '../../models';
import { Strings } from '../../constants';

class YearInput extends React.Component<IYearInputProps, IYearInputState> {
    constructor(props: IYearInputProps) {
        super(props);
        this.state = {
            currentYear: this.props.defaultValue.split('').map(Number)
        };
    }
    public componentDidUpdate(prevprops: IYearInputProps, prevState: IYearInputState): void {
        const { currentYear } = this.state;
        if (prevState.currentYear.join('') !== currentYear.join('')) {
            this.props.getValue(this.props.name, currentYear.join(''));
        }
    }

    private increaseValue = (digitIndex: number) => {
        const { currentYear } = this.state;
        this.setState({
            currentYear: currentYear.map((digit, index) => {
                if (index === digitIndex) {
                    if (digit + 1 > 9) {
                        return 0;
                    }
                    return digit + 1;
                }
                return digit;
            })
        });
    }

    private reduceValue = (digitIndex: number) => {
        const { currentYear } = this.state;
        this.setState({
            currentYear: currentYear.map((digit, index) => {
                if (index === digitIndex) {
                    if (digit - 1 < 0) {
                        return 9;
                    }
                    return digit - 1;
                }
                return digit;
            })
        });
    }

    public render(): JSX.Element {
        const { currentYear } = this.state;
        return (
            <div className='yearInput'>
                <span className='yearInput__title'>{Strings[this.props.name]}:</span>
                {
                    currentYear.map((digit, index) => <div className='yearInput__unit' key={`${digit}-${index}`} >
                        <span className='yearInput__unit__angleUp'
                            onClick={() => this.increaseValue(index)} >
                            <Icon name={Icons.Names.CARET_DOWN} />
                        </span>
                        <span className='yearInput__unit__digit'>
                            {digit}
                        </span>
                        <span className='yearInput__unit__angleDown'
                            onClick={() => this.reduceValue(index)} >
                            <Icon name={Icons.Names.CARET_UP} />
                        </span>
                    </div>)
                }
            </div>
        );
    }
}

export default YearInput;
