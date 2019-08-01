import * as React from 'react';
import { Link } from 'react-router-dom';

import { IMapState } from '../../models';

import { worldMap, continents, Strings } from '../../constants';

class Map extends React.Component<{}, IMapState> {
    constructor(props: IMapState) {
        super(props);
        this.state = {
            isShownTooltip: false,
            currentText: '',
            coordinate: {
                x: 0,
                y: 0,
            }
        };
    }

    public componentDidMount(): void {
        window.addEventListener('mousemove', this.controlCoordinates);
        window.addEventListener('mouseover', this.textCapture);
    }

    public componentWillUnmount(): void {
        window.removeEventListener('mouseover', this.textCapture);
    }

    private toggleTooltip = () => {
        this.setState({ isShownTooltip: !this.state.isShownTooltip });
    }

    private controlCoordinates = (e: MouseEvent) => {
        this.setState({
            ...this.state, coordinate: {
                x: e.clientX,
                y: e.clientY
            }
        });
    }

    private textCapture = (e: MouseEvent) => {
        const element = e.target as HTMLElement;
        if (element && element.tagName === 'path') {
            const parentNode = element.parentNode as HTMLElement;
            const currentText = continents[parentNode.id] as string;
            if (parentNode && currentText !== this.state.currentText) {
                this.setState({ ...this.state, currentText });
            }
        } else {
            this.setState({ ...this.state, currentText: '' });
        }
    }

    public render(): JSX.Element {
        const { isShownTooltip, currentText } = this.state;
        const coordinateX = `${this.state.coordinate.x}px`;
        const coordinateY = `${this.state.coordinate.y - 60}px`;
        const continentsList = Object.keys(continents);
        return (
            <React.Fragment>
                {
                    isShownTooltip && currentText !== '' ?
                        < div className='mapTooltip' style={{ marginTop: coordinateY, marginLeft: coordinateX }}>
                            {Strings[currentText]}
                        </div> : null
                }
                <div className='map'>
                    <svg x='0px' y='0px' viewBox='0 0 400 220'>
                        {
                            continentsList.map((continent, index) =>
                                <Link key={`${continent}-map-link-${index}`}
                                    onMouseOver={() => this.toggleTooltip()}
                                    onMouseOut={() => this.toggleTooltip()}
                                    to={`/continents/${continents[continent]}`} >
                                    {worldMap[continent]}
                                </Link>)
                        }
                    </svg>
                </div>
                <div className='mapLegend'>
                    <span>{Strings['SELECT_CONTINENT']}</span>
                    <Link to={`/continents/ALL`}>{Strings['ALL']}</Link>
                </div>
            </React.Fragment >
        );
    }
}

export default Map;
