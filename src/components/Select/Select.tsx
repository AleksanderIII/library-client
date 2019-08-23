import * as React from 'react';

import { ISelectProps, ISelectState, Icons } from '../../models';
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

    private shrinkStringValue = (value: string, maxSize: number): string => {
        return value && value.length > maxSize
            ? `${value.substr(0, maxSize)}..`
            : value;
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

    public render(): JSX.Element {
        const { selected, opened } = this.state;
        const { name, options, centralAlign, defaultValue } = this.props;
        const { columnWidth, singleColumnSelectSize, displayedWordLength, elementsPerColumn } = AppConfig.components.select;

        const columnsQuantity = this.calculateColumnsQuantity(options, singleColumnSelectSize, elementsPerColumn);
        const columnsWidth = columnsQuantity * columnWidth;

        const displayedValue = this.shrinkStringValue(this.getValueForDisplaying(options, selected, defaultValue), displayedWordLength);

        return (
            <div className='select' onClick={this.openDropown} onMouseLeave={this.closeDropown} >
                <p>
                    <b>{Strings[name]}:</b>
                    {Strings[displayedValue]}
                    <span className='select__arrow'>
                        {
                            opened ? <Icon name={Icons.Names.ANGLE_UP} /> :
                                <Icon name={Icons.Names.ANGLE_DOWN} />
                        }
                    </span>
                </p>
                <div className={opened ? 'select__content display' : 'select__content'}
                >
                    {
                        opened && (
                            <ul
                                className={centralAlign ? 'select__content__dropdown dropdown-central-align' : 'select__content__dropdown'}
                                style={{ columnCount: columnsQuantity, width: `${columnsWidth}px` }}
                            >
                                {
                                    options.map((option, optionNumber) => (
                                        <li
                                            key={optionNumber}
                                            className={displayedValue === option ? 'selected' : ''}
                                            onClick={() => this.clickHandler(optionNumber)}
                                        >
                                            {Strings[option]}
                                        </li>
                                    ))}
                            </ul>
                        )}
                </div>
            </div>
        );
    }

}
export default Select;
