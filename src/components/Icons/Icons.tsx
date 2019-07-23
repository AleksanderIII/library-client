import * as React from 'react';

import { IIconsProps } from '../../models';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faTrashAlt, faFolderOpen, faFilePdf, faHome, faSignInAlt, faSave, faEdit, faCog, faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

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

class Icons extends React.Component<IIconsProps> {
    public render(): JSX.Element {
        switch (this.props.name) {
            case 'excelIcon': return <FontAwesomeIcon className='icon file-excel' icon='file-excel' />;
            case 'pdfIcon': return <FontAwesomeIcon className='icon file-pdf' icon='file-pdf' />;
            case 'trashIcon': return <FontAwesomeIcon className='icon trash-alt' icon='trash-alt' />;
            case 'openIcon': return <FontAwesomeIcon className='icon folder-open' icon='folder-open' />;
            case 'homeIcon': return <FontAwesomeIcon className='icon home' icon='home' />;
            case 'signIcon': return <FontAwesomeIcon className='icon sign-in-alt' icon='sign-in-alt' />;
            case 'save': return <FontAwesomeIcon className='icon save' icon='save' />;
            case 'edit': return <FontAwesomeIcon className='icon edit' icon='edit' />;
            case 'settings': return <FontAwesomeIcon className='icon settings' icon='cog' />;
            case 'arrowDown': return <FontAwesomeIcon className='icon arrowLeft' icon='chevron-circle-down' />;
            case 'arrowUp': return <FontAwesomeIcon className='icon arrowRight' icon='chevron-circle-up' />;
            default: return <span>is not defined</span>;
        }

    }
}
export default Icons;
