import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import AddressLine from '../../../src/client/components/AddressLine';

configure({ adapter: new Adapter() });

describe('AddressLine', () => {
    it('should empty div when there is no text ', () => {
        const mountedAddressLine = shallow(
            <AddressLine />
        );

        expect(mountedAddressLine.contains(<div></div>)).toEqual(true);
    });

    it('should empty div with span when text is provided', () => {
        const mountedAddressLine = shallow(
            <AddressLine text='test' />
        );

        expect(mountedAddressLine.contains(<div><span>test</span></div>)).toEqual(true);
    })
});

