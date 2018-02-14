import * as React from 'react'
import PropertiesList from './PropertiesList';

class App extends React.Component {
    render() {
        return (
            <div>
                <div class="navbar navbar-inverse navbar-fixed-top">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="container body-content">
                    <div class="jumbotron">
                        <h3>Properties</h3>
                    </div>
                    <PropertiesList />
                </div>
            </div>
        );
    }
}

export default App;


