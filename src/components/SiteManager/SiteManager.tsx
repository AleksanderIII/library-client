import * as React from 'react';

import ExportService from '../../services/ExportService';
import { Icons } from '../../components';
import { ISiteManagerProps } from '../../models';
import { Strings } from '../../constants';

class SiteManager extends React.Component<ISiteManagerProps> {
    constructor(props: ISiteManagerProps) {
        super(props);
        this.exportExcel = this.exportExcel.bind(this);
    }

    private exportExcel(): void {
        ExportService.getExcel();
    }

    public render(): JSX.Element {
        return (
            <div className='siteManager'>
                <h2>{Strings['EXPORT']}</h2>
                <p>
                    <span onClick={this.exportExcel}>
                        <Icons name='excelIcon' />
                    </span>
                    <span>
                        <Icons name='pdfIcon' />
                    </span>
                </p>
            </div>
        );
    }
}
export default SiteManager;
