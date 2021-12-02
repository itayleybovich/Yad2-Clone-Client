import React from "react";

// Component Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublishPrivateRealestatePartFour = ({state,setState,selected}) => {
    return (
        <div className="private-realestate__selection realestate__address">
            <div className="private-realestate__selection__title">
                <div className={"private-realestate__selection__title__number"+(selected?" selected":"")}>
                {state.completed?<FontAwesomeIcon icon={["fas","check"]}/>:"4"}</div>
                <div className="private-realestate__selection__title__text">תשלומים, תאריכים ועוד</div>
            </div>
            {state.completed &&
            <div className="private-realestate__selection__edit-button">
                <FontAwesomeIcon icon={["fas","pencil-alt"]}/>
                <div className="private-realestate__selection__edit-button__text">עריכה</div>
            </div>}
        </div>
    )
}

export default PublishPrivateRealestatePartFour;