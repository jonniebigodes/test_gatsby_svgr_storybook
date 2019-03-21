import * as React from 'react';
import Star from '../assets/icons/Five-pointed_star.svg';
// import Star from './Five-pointed_star.svg';
const SimpleSvg: React.FunctionComponent = () => (
    <div style={{display: 'flex', justifyContent: 'space-around', maxWidth: `960px`, margin: `1.45rem` }}>
        <div>
            <h4>this is a star injected directly into a react component</h4>
            <Star/>
        </div>
       {/*  <div>
            <h4>this is a star injected into a img element</h4>
            <img src={Star} alt="A five point star"/>
        </div> */}
    </div>
);
export default SimpleSvg;
