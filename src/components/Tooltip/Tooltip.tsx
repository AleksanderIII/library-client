import * as React from 'react';

import { ITooltipProps, ITooltipState } from '../../models';

class Tooltip extends React.Component<ITooltipProps, ITooltipState> {
    constructor(props: ITooltipProps) {
        super(props);
        this.state = {
            isShown: false
        };
    }

    private toggleTooltip = () => {
        this.setState({ isShown: !this.state.isShown });
    }

    public render(): JSX.Element {
        return (
            <div className='tooltip' onMouseEnter={() => this.toggleTooltip()} onMouseLeave={() => this.toggleTooltip()} >
                {
                    this.state.isShown ?
                        <div className='tooltip__content'>
                            {this.props.text}
                        </div> : null
                }
                <div>
                    {this.props.children}
                </div>
            </div >
        );
    }
}

export default Tooltip;
