import React from 'react';
import { Ring } from '@uiball/loaders'

const Loader = () => {
    return (
        <div className='center'>
            <div className="squarer">
                <Ring
                    size={70}
                    lineWeight={7}
                    speed={2}
                    color="white"
                />
                <div className="small-circle"></div>
            </div>
            <div className='loadingcnt'>
                Loading..
            </div>
        </div>
    );
}

export default Loader;
