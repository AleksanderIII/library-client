import * as React from 'react';

import { IIconProps, Icons } from '../../models';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faTrashAlt, faFolderOpen, faFilePdf, faHome, faSignInAlt, faSave, faEdit, faCog, faChevronCircleDown, faChevronCircleUp, faAngleUp, faAngleDown, faWindowClose } from '@fortawesome/free-solid-svg-icons';

library.add(faFileExcel);
library.add(faTrashAlt);
library.add(faFolderOpen);
library.add(faFilePdf);
library.add(faHome);
library.add(faSignInAlt);
library.add(faSave);
library.add(faEdit);
library.add(faCog);
library.add(faChevronCircleDown);
library.add(faChevronCircleUp);
library.add(faAngleUp);
library.add(faAngleDown);
library.add(faWindowClose);
class Icon extends React.Component<IIconProps> {
    public render(): JSX.Element {
        switch (this.props.name) {
            case Icons.Names.EXCEL: return <FontAwesomeIcon className='icon file-excel' icon='file-excel' />;
            case Icons.Names.PDF: return <FontAwesomeIcon className='icon file-pdf' icon='file-pdf' />;
            case Icons.Names.TRASH: return <FontAwesomeIcon className='icon trash-alt' icon='trash-alt' />;
            case Icons.Names.OPEN: return <FontAwesomeIcon className='icon folder-open' icon='folder-open' />;
            case Icons.Names.HOME: return <FontAwesomeIcon className='icon home' icon='home' />;
            case Icons.Names.SIGN_IN: return <FontAwesomeIcon className='icon sign-in-alt' icon='sign-in-alt' />;
            case Icons.Names.SAVE: return <FontAwesomeIcon className='icon save' icon='save' />;
            case Icons.Names.EDIT: return <FontAwesomeIcon className='icon edit' icon='edit' />;
            case Icons.Names.SETTINGS: return <FontAwesomeIcon className='icon settings' icon='cog' />;
            case Icons.Names.ARROW_UP: return <FontAwesomeIcon className='icon arrowRight' icon='chevron-circle-up' />;
            case Icons.Names.ARROW_DOWN: return <FontAwesomeIcon className='icon arrowLeft' icon='chevron-circle-down' />;
            case Icons.Names.ANGLE_UP: return <FontAwesomeIcon className='icon angleUp' icon='angle-up' />;
            case Icons.Names.ANGLE_DOWN: return <FontAwesomeIcon className='icon angleDown' icon='angle-down' />;
            case Icons.Names.WINDOW_CLOSE: return <FontAwesomeIcon className='icon windowClose' icon='window-close' />;
            default: return <span>is not defined</span>;
        }

    }
}
export default Icon;
