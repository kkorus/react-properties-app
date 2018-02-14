import * as React from 'react'
import Address from './Address';

class PropertiesListItem extends React.Component {
    render() {
        const { property } = this.props;
        console.log(property);
        return (
            <tr>
                <td>{property.owner}</td>
                <td><Address address={property.address} /></td>
                <td>{property.income}</td>
            </tr>
        );
    }
}

export default PropertiesListItem;
