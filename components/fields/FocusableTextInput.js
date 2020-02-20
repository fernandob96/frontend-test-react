import React, { Fragment, useState, useEffect } from "react"
import TextInput from '../../components/fields/TextInput'

function FocusableInput(candidate) {
    
    //Change focusable data
    function changeFocusable() {
        
        setFocusable(focusable = !focusable)
    }

    //Initial data
    let [focusable, setFocusable] = useState(false)


    return(
        <Fragment>
            <div>
                <div className="text-center">
                    <h1 className="my-5 main-title text-secondary">Focusable Input</h1>

                        <TextInput 
                            focused={focusable}
                        />

                        <div className="text-center my-5">
                            <button type="button" class="btn btn-primary"  onClick={changeFocusable}>Change focusable state</button>
                            <p className="my-3 subtitle-1 font-weight-bold text-secondary">Focusable state: { '' + focusable } </p>
                        </div>

                </div>
            </div>     
        </Fragment>
    )
}

export default FocusableInput