import React from 'react';
import Hoc from '../hoc/Hoc';

const layout = (props) => (
    <Hoc>
        <div>Link 1, Link 2</div>
        <main>
            {props.children}
        </main>
    </Hoc>
);

export default layout;