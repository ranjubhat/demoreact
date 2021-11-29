import React from 'react';
import {useContext} from 'react';
import {UserContext} from '../components/ContextParent'
function ContextChild(props) {
    const contextValue=useContext(UserContext);
    return (
        <div>
            {contextValue}
        </div>
    );
}

export default ContextChild;