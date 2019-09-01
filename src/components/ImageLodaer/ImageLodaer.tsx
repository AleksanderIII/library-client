import * as React from 'react';

import { Button, Icon } from '../../components';
import { Strings } from '../../constants';
import { IImageLoaderProps, Icons, IImageLoaderState } from '../../models';
import { AppConfig } from '../../configs';

class ImageLoader extends React.Component<IImageLoaderProps, IImageLoaderState> {
    private widget: any;
    public constructor(props: any) {
        super(props);
        this.widget = window.cloudinary.createUploadWidget(AppConfig.components.imageLodaer.clodinary, (error: any, result: any) => { this.checkUploadResult(result); });
        this.state = {
            isImageLoaded: false
        };
    }

    private showWidget = () => {
        this.widget.open();
    }

    private checkUploadResult = (resultEvent: any) => {
        if (resultEvent.event === 'success') {
            this.setState({ isImageLoaded: true });
            this.props.getValue(this.props.name, AppConfig.components.imageLodaer.folderUrl + resultEvent.info.public_id);
        }
    }

    public render(): JSX.Element {
        return <div className='imageLoader' >
            <Button handleClick={() => this.showWidget()} text={Strings[this.props.comment]} />
            {
                this.state.isImageLoaded ?
                    <span className='imageLoader__complete' ><Icon name={Icons.Names.CHECK} /></span>
                    : null
            }
        </div>;
    }
}

export default ImageLoader;
