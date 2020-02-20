import React, { Fragment, useEffect, useRef } from "react"

function TextInput(props) {
    
    const refInput = useRef()
    
    //Watch changes (props)
    useEffect(() => {

        if(props.focused){
            refInput.current.focus()
        }
    }, [props])

    return(
        <Fragment>
            <div>
                <p>General Input</p>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="General input" aria-describedby="basic-addon1" ref={refInput} />
                </div>
            </div>   
        </Fragment>
    )
}

export default TextInput
