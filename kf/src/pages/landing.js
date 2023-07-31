import React from "react";

import BasicCarousel from '../componants/carousel';
import NewCards from '../componants/newCards';
import SaleCards from '../componants/saleCards';

function Landing() {

    return (
        <div>
            <BasicCarousel />
            {/* New Cards */}
            <NewCards />
            
            {/* Sale Cards */}
            <SaleCards />
        </div>
    )
}

export default Landing;