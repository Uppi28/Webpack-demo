import React, {Component} from 'react';

import PizzaImage from '../components/PizzaImage/PizzaImage';

class Pizza extends Component {
    render () {
        return (
            <div>
                <h1>The Pizza</h1>
                <Pizzaimage />
            </div>
        );
    }
}

export default Pizza