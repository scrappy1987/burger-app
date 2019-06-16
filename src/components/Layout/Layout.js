import React from 'react';
import Aux from '../../containers/hoc/Aux';

const layout = (props) => (
    <Aux>
        <div>Link 1, Link 2</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;