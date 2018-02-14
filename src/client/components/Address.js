import * as React from 'react'
import AddressLine from './AddressLine';

class Address extends React.Component {
    render() {
        const { address } = this.props;

        return (
            <div>
                <AddressLine text={address.line1} />
                <AddressLine text={address.line2} />
                <AddressLine text={address.line3} />
                <AddressLine text={address.line4} />
                <AddressLine text={address.postcode} />
                <AddressLine text={address.city} />
                <AddressLine text={address.country} />
            </div>
        );
    }
}

export default Address;
