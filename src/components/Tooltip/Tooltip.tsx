import * as React from 'react';
import * as  ReactTooltip from 'react-tooltip';

import { ITooltip } from '../../models';

export const Tooltip = (props: ITooltip) => {
    return (
        <div>
            <p data-tip='hello world'>{props.children}</p>
            <ReactTooltip />
        </div>
    );
};

export default Tooltip;
