import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Icon } from '../../components';
import { Icons, IImageLoaderProps } from '../../models';
import { Strings } from '../../constants';

class ImageLoader extends React.Component<IImageLoaderProps> {
    private input: HTMLInputElement;
    private currentImageContainer: HTMLDivElement;

    private handleChange = () => {
        if (this.input) {
            const fileReader = new FileReader();
            fileReader.addEventListener('load', (event: Event) => {
                if (this.currentImageContainer) {
                    const newImage = <img src={fileReader.result as string} alt='' />;
                    ReactDom.render(newImage, this.currentImageContainer);
                }
            });
         //   fileReader.readAsArrayBuffer(this.input.files[0]);
            fileReader.readAsDataURL(this.input.files[0]);
        }
    }

    public render(): JSX.Element {
        return (
            <div className='imageLoader'>
                <label className='imageLoader__label'>
                    <input type='file' ref={input => this.input = input} onChange={this.handleChange} />
                    <Icon name={Icons.Names.CLOUD_UPLOAD} />
                    <span className='imageLoader__message' >{Strings[this.props.name]}</span>
                </label>
                <div className='imageLoader__smallImg' ref={currentImageContainer => this.currentImageContainer = currentImageContainer} ></div>
            </div>
        );
    }
}

export default ImageLoader;
