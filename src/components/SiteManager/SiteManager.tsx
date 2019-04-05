import * as React from 'react';

//import DataService from '../../services/dataService';
import { Icons } from '../../components';
import { ISiteManagerProps } from '../../models';
//import { exportToExcel } from '../../utils/jsonToExcel';
import './SiteManager.css';

class SiteManager extends React.Component<ISiteManagerProps> {
    constructor(props: ISiteManagerProps) {
        super(props);
        this.exportExcel = this.exportExcel.bind(this);
    }

    private exportExcel(): void {
      /*  DataService.getData().then(data => {
            //parse data to excel format
            exportToExcel(data, `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}-version`);
        },
        );*/
    }

    public render(): JSX.Element {
        return (
            <div className='siteManager'>
                <h2>Экспорт</h2>
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
