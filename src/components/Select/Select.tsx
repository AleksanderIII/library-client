import * as React from 'react';

import { ISelectProps, ISelectState, Icons, Editor } from '../../models';
import { AppConfig } from '../../configs';
import { Icon } from '../../components';
import { Strings } from '../../constants';

class Select extends React.Component<ISelectProps, ISelectState> {
    constructor(props: ISelectProps) {
        super(props);
        this.state = {
            opened: false,
            selected: this.props.defaultValue
        };
    }

    private calculateColumnsQuantity = (options: string[], singleColumnSelectSize: number, columnSizeInMultiColumn: number): number => {
        if (options) {
            const optionsQuantity = options.length;
            return optionsQuantity < singleColumnSelectSize ? 1 :
                Math.floor(optionsQuantity / columnSizeInMultiColumn) + 1;
        } else {
            return 0;
        }
    }

    private getValueForDisplaying = (options: string[], selected: string, defaultValue: string) => {
        const isSelectedFromOptions = !!(options.find(option => option === selected));
        return isSelectedFromOptions ? selected : defaultValue;
    }

    private clickHandler = (orderNumber: number) => {
        const selectedOption: string = this.props.options[orderNumber];
        this.setState({ selected: selectedOption });

        if (this.props.getValue) {
            this.props.getValue(this.props.propName, selectedOption);
        }

        if (this.props.selectValue) {
            this.props.selectValue(selectedOption);
        }
    }

    private openDropown = () => {
        this.setState({ opened: !this.state.opened });
    }

    private closeDropown = () => {
        this.setState({ opened: false });
    }

    private selectLocalizeValue = (name: string, value: string): string => {
        switch (name) {
            case Editor.Selectors.Names.COUNTRY: return Strings.COUNTRIES[value];
            case Editor.Selectors.Names.VALUE: return Strings.MONEY[value];
            default: return Strings[value];
        }
    }

    public render(): JSX.Element {
        const { selected, opened } = this.state;
        const { name, options, centralAlign, defaultValue } = this.props;
        const { columnWidth, singleColumnSelectSize, elementsPerColumn } = AppConfig.components.select;

        const columnsQuantity = this.calculateColumnsQuantity(options, singleColumnSelectSize, elementsPerColumn);
        const columnsWidth = columnsQuantity * columnWidth;

        const displayedValue = this.getValueForDisplaying(options, selected, defaultValue);
        return (
            <div className='select' onClick={this.openDropown} onMouseLeave={this.closeDropown} >
                <p>
                    <b>{Strings[name]}:</b>
                    <i>
                        {
                            this.selectLocalizeValue(name, displayedValue)
                        }
                    </i>
                    <span className='select__arrow'>
                        {
                            opened ? <Icon name={Icons.Names.ANGLE_UP} /> :
                                <Icon name={Icons.Names.ANGLE_DOWN} />
                        }
                    </span>
                </p>
                <div className={opened ? 'select__content display' : 'select__content'} >
                    {
                        opened &&
                        <ul
                            className={centralAlign ? 'select__content__dropdown dropdown-central-align' : 'select__content__dropdown'}
                            style={{ columnCount: columnsQuantity, width: `${columnsWidth}px` }} >
                            {
                                options.map((option, optionNumber) => (
                                    <li
                                        key={optionNumber}
                                        className={displayedValue === option ? 'selected' : ''}
                                        onClick={() => this.clickHandler(optionNumber)}>
                                        {
                                            this.selectLocalizeValue(name, option)
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    }
                </div>
            </div>
        );
    }

}
export default Select;
