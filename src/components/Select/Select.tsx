import * as React from 'react';

import { ISelectProps, ISelectState } from '../../models';
import { } from '../../constants';

class Select extends React.Component<ISelectProps, ISelectState> {
    constructor(props: ISelectProps) {
        super(props);
        this.state = {
            clicked: false,
            selected: this.props.defaultValue
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.toggleDropown = this.toggleDropown.bind(this);
    }

    public render(): JSX.Element {
        const { name, options, centralAlign, defaultValue } = this.props;
        const columnLength = 12;
        const oneColumnWidth = 160;
        const wordLength = 12;
        const optionsLengthDivider = 9;
        const columnsCount: number = options
            ? options.length < columnLength
                ? 1
                : Math.floor(options.length / optionsLengthDivider) + 1
            : 0;
        const columnWidth: number = columnsCount * oneColumnWidth;
        const isNewDefault =
            options && options
                .map(elem => elem === this.state.selected)
                .filter(elem => elem === true).length === 0 ||
            defaultValue !== this.state.selected;
        const displayedValue = isNewDefault ? defaultValue : this.state.selected;
        return (
            <div className='select' onClick={this.toggleDropown}>
                <p>
                    <b>{`${name}: `}</b>
                    {displayedValue && displayedValue.length > wordLength
                        ? `${displayedValue.substr(0, wordLength)}..`
                        : displayedValue}
                    {this.state.clicked ? '\u25B2' : '\u25BC'}
                </p>
                <div
                    className={
                        this.state.clicked ? 'select__content display' : 'select__content'
                    }
                >
                    {this.state.clicked && (
                        <ul
                            className={
                                centralAlign
                                    ? 'select__content__dropdown dropdown-central-align'
                                    : 'select__content__dropdown'
                            }
                            style={{ columnCount: columnsCount, width: `${columnWidth}px` }}
                        >
                            {options &&
                                options.map((elem, orderNum) => (
                                    <li
                                        key={orderNum}
                                        className={displayedValue === elem ? 'selected' : ''}
                                        onClick={this.clickHandler}
                                    >
                                        {elem}
                                    </li>
                                ))}
                        </ul>
                    )}
                </div>
            </div>
        );
    }

    private clickHandler(event: React.MouseEvent): void {
        const selectedOption: string = event.currentTarget.textContent || '';
        this.setState({ selected: selectedOption });

        if (this.props.getValue) {
            this.props.getValue(this.props.propName, selectedOption);
        }
        if (this.props.selectValue) {
            this.props.selectValue(selectedOption);
        }
    }

    private toggleDropown(): void {
        this.setState({ clicked: !this.state.clicked });
    }
}
export default Select;
