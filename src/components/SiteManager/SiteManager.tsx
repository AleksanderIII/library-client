import * as React from 'react';

import ExportService from '../../services/ExportService';
import { Icon } from '../../components';
import { ISiteManagerProps, Icons } from '../../models';
import { Strings } from '../../constants';

class SiteManager extends React.Component<ISiteManagerProps> {
    constructor(props: ISiteManagerProps) {
        super(props);
        this.exportExcel = this.exportExcel.bind(this);
    }

    private exportExcel(): void {
        ExportService.getExcel();
    }

    private exportPDF(): void {
        ExportService.getPDF();
    }

    public render(): JSX.Element {
        return (
            <div className='siteManager'>
                <h2>{Strings['EXPORT']}</h2>
                <p>
                    <span onClick={this.exportExcel}>
                        <Icon name={Icons.Names.EXCEL} />
                    </span>
                    <span  onClick={this.exportPDF}>
                        <Icon name={Icons.Names.PDF} />
                    </span>
                </p>
            </div>
        );
    }
}
export default SiteManager;
