import * as React from 'react'
import * as _ from 'lodash';

class AddressLine extends React.Component {
    render() {
        const { text } = this.props;
        const isNotEmptyText = text && _.trim(text).length > 0;

        return (
            <div>
                {
                    isNotEmptyText &&
                    <span>{text}</span>
                }
            </div>
        );
    }
}

export default AddressLine
