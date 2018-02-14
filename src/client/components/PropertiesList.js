import * as React from 'react'
import { Table } from 'react-bootstrap'
import PropertiesListItem from './PropertiesListItem';
import { getProperties } from '../services/propertiesSerivce';

class PropertiesList extends React.Component {
    constructor() {
        super();
        this.state = {
            properties: []
        };
    }

    async componentDidMount() {
        try {
            let properties = await getProperties();
            this.setState({ properties });
        } catch (err) {
            this.setState({ properties: [] });
        }
    }

    render() {
        let key = 0;

        return (
            <div>
                <Table responsive hover>
                    <thead>
                        <tr>
                            <th className='col-md-4'>Owner</th>
                            <th className='col-md-5'>Address</th>
                            <th className='col-md-3'>Income Generated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.properties.map((property) => {
                            return <PropertiesListItem property={property} key={key++} />
                        })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default PropertiesList;
