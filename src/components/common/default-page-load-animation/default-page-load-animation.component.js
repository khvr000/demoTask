// @flow
import * as React from 'react';
import { withTheme } from 'styled-components';
import classNames from 'classnames';
import { m as motion, MotionConfig, AnimationFeature } from 'framer-motion';

import './default-page-load-animation.scss';

type Props = {
    theme?: any,
    className?: string,
};

class DefaultPageLoadAnimationComponent extends React.PureComponent<Props> {
    render() {
        const { theme, className } = this.props;
        return (
            <React.Fragment>
                <div
                    className={classNames('dat-default-page-load-animation-component', className)}
                >
                    <MotionConfig features={[AnimationFeature]}>
                        <motion.div
                            className="loading-circle"
                            css={`
                            background-color: ${theme.paper.backgroundColor};
                            box-shadow: ${theme.paper.shadows.bottom.hover.boxShadow};
                        `}
                            animate={{ rotate: 90, scale: [1, 0.8, 0.8, 1] }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                mass: 0.75,
                                stiffness: 100,
                                loop: Infinity,
                                duration: 2,
                            }}
                        />
                    </MotionConfig>
                     <div className="logo" css={`color: ${theme.textColor.default.contrast1}`}>d</div>
                </div>
            </React.Fragment>
        );
    }
}

export default withTheme(DefaultPageLoadAnimationComponent);
