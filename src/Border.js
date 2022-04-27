import React  from "react";
export default function Border(props) {


    return(

            <div className="WithBorder">
                <div>
                    {props.header}
                </div>
                <div>
                    {props.children}
                </div>

            </div>


    )

}