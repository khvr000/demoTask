/**
 * COPYRIGHT NOTICE Deepen AI, Inc. 2017-2020
 * This software maybe subject to pending patent applications
 */


import React from 'react';
import { shallow } from 'enzyme';

import DefaultPublicTemplateLayout from '../default-public-template.layout';

describe('<DefaultPublicTemplateLayout />', () => {
    let shallowWrapper;
    const mockProps = {};
    beforeEach(() => {
        shallowWrapper = shallow(<DefaultPublicTemplateLayout {...mockProps}>Test</DefaultPublicTemplateLayout>, {
            disableLifecycleMethods: false,
        });
    });

    afterEach(() => {
        shallowWrapper.unmount();
    });

    test('renders', () => {
        expect(shallowWrapper.exists()).toBe(true);
    });

    test('should render children', () => {
        shallowWrapper.setProps({
            children: 'Test Children',
        });

        expect(shallowWrapper.find('.dat-default-public-template-content-wrapper').text()).toBe('Test Children');
    });
});
