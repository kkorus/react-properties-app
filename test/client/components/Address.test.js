import { configure } from 'enzyme';
import { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Address from '../../../src/client/components/Address';
import AddressLine from '../../../src/client/components/AddressLine';

configure({ adapter: new Adapter() });

describe('Address', () => {
    it('should render Address component with 7 address lines', () => {
        const address = {};

        const mountedAddress = mount(
            <Address address={address} />
        );

        expect(mountedAddress.find(AddressLine).length).toBe(7);
    });
});

