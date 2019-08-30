import * as React from 'react';

class ImageLoader extends React.Component {
    private widget: any;
    public constructor(props: any) {
        super(props);
        this.widget = window.cloudinary.createUploadWidget({
            cloudName: 'dwg7mxlg4',
            uploadPreset: 'o8pfwvbd'
        }, (error: any, result: any) => { this.checkUploadResult(result); });
    }
    private showWidget = (widget: any) => {
        this.widget.open();
    }

    private checkUploadResult = (resultEvent: any) => {
        if (resultEvent.event === 'success') {
            console.log(resultEvent);
        }
    }

    public render(): JSX.Element {
        return (
            < div >
                <button onClick={this.showWidget} >Upload Image</button>
            </div >
        );
    }
}

export default ImageLoader;
