import { useState } from 'react';
import AppContext from './AppContext'


const ContextStates=(props)=>{


    const capitalise=(word)=>{
        if(word.length===1)return word.toUpperCase();
        return word.charAt(0).toUpperCase()+word.substr(1,word.length-1);
    }



    return(
        <AppContext.Provider value={{capitalise}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextStates;