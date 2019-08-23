import * as React from 'react';
import { connect } from 'react-redux';

import { Icon } from '../../components';
import { Icons, IDispatchProp, IAppState, IPopupState } from '../../models';
import { PopupActions } from '../../actions';

class Popup extends React.Component<IDispatchProp & IPopupState> {

    public render(): JSX.Element {
        const { header, content, footer } = this.props.container;
        const { isShown } = this.props;
        return (
            <div className={`popup ${isShown ? '' : 'hidden'}`}>
                <div className='popup__header'>
                    <h2>
                        <b className='spaces'>{header}</b>
                        <span className='popup__header__closeBtn spaces'
                            onClick={() => this.props.dispatch(PopupActions.hide())}>
                            <Icon name={Icons.Names.WINDOW_CLOSE} />
                        </span>
                    </h2>
                </div>
                <div className='popup__content spaces' >
                    {content}
                </div>
                {
                    footer && footer !== '' ? <div className='popup__footer spaces'>
                        <span>{footer}</span>
                    </div> : null
                }
            </div>
        );
    }

}

const mapStateToProps = (state: IAppState): IPopupState => {
    return {
        isShown: state.popup.isShown,
        container: state.popup.container
    };
};

export default connect(mapStateToProps)(Popup);
