import React from 'react';

import FreeSection from '../sections/FreeSection.jsx';
import OpenSourceSection from '../sections/OpenSourceSection.jsx';
import ToolSearchSection from '../sections/ToolSearchSection.jsx';


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {

        let { } = this.state;

        return (
            <div className="page">
                <ToolSearchSection />
                <OpenSourceSection />
                <FreeSection />
            </div>
        )
    }
}


export default HomePage;
