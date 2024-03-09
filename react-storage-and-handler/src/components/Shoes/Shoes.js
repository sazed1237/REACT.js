import React from 'react';
import { division, multiply } from '../../utilities/calculate';

const Shoes = () => {
    const first = 45;
    const second = 41;
    const result = multiply(first, second)
    const divisionresult = division(first, second)
    return (
        <div>
            <h3>This is Shoes Component</h3>
            <p>Multiply: {result}</p>
            <p>Divison: {divisionresult}</p>
        </div>
    );
};

export default Shoes;








































































































