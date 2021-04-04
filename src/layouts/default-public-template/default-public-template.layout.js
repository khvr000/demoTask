// @flow
import React, { Component, Fragment } from 'react';

import './default-public-template.scss';

type Props = {
    children: any,
}

// eslint-disable-next-line react/prefer-stateless-function
class DefaultPublicTemplate extends Component<Props> {
    render() {
        const { children } = this.props;
        return (
            <Fragment>
                <div className="dat-default-public-template">
                    <div className="dat-default-public-template-content-wrapper">{children}</div>
                </div>
            </Fragment>
        );
    }
}

export default DefaultPublicTemplate;
