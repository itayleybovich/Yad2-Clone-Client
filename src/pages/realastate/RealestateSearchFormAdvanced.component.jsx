import { nanoid } from "nanoid";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { realestateSearchFormAction } from "../../actions/realestateSearchForm.actions";
import CustomCheckbox from "../../components/custom/CustomCheckbox.component";
import { realestateSearchFormActionTypes } from "../../types/realestateSearchFormAction.types";

const features = ["חניה","מעלית","מיזוג","מרפסת",'ממ"ד',"סורגים","מחסן","גישה לנכים","משופצת","מרוהטת","בבלעדיות"];
const floors = ["מרתף/פרטר","0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17"];
const RealestateSearchFormAdvanced = ({formState,dispatchForm}) => {
    
    const [startDate, setStartDate] = useState(new Date());
    const getMinFloor = () => {
        const max = parseInt(formState.values.maxFloor);
        const floors = ["-1","מרתף/פרטר","0"];
        for(let i=1;i<=max && i<18;i+=1) {
            floors.push(""+i);
        }
        return floors;
    }
    const getMaxFloor = () => {
        let min = parseInt(formState.values.minFloor);
        if(formState.values.minFloor==="מרתף/פרטר" || formState.values.minFloor==="-1") min = 0;
        const floors = ["18"];
        for(let i=min;i<18;i++) {
            floors.push(""+i);
        }
        return floors;
    }

    return (
        <div className="realestate__search-form__advanced">
            <section className="realestate__search-form__advanced__input-section">
                <h2 className="realestate__search-form__advanced__input-section__title">מאפנייני דירה</h2>
                <div className="realestate__search-form__advanced__input-section__features">
                    {features.map((feature,i)=>{
                        return (
                            <>
                            {i!==0 && i%5===0 && <div className="realestate__search-form__advanced__input-section__features__break"></div>}
                            <span className="realestate__search-form__advanced__input-section__feature">
                                <CustomCheckbox isChecked={formState.values.features.includes(feature)}
                                clickCallback={(e)=>{dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_FEATURES_STATE,feature))}}/>
                                {feature}
                            </span>
                            </>
                        )
                    })}
                </div>
            </section>
            <section className="realestate__search-form__advanced__input-section">
                <div className="realestate__search-form__advanced__input-section__floor">
                    <h3 className="realestate__search-form__advanced__input-section__title">קומה</h3>
                    <select className="realestate__search-form__advanced__input-section__floor__select"
                    value={formState.values.minFloor}
                    onChange={(e)=>dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MIN_FLOORS,e.target.value))}>
                        {getMinFloor().map(floor=>{
                            return (
                                <>
                                    {floor === "-1" ?
                                    <option value="-1" key={nanoid()} 
                                    className="realestate__search-form__advanced__input-section__select__option">
                                    הכל</option> 
                                    :
                                    <option value={floor} key={nanoid()}
                                    className="realestate__search-form__advanced__input-section__select__option">
                                    {floor}</option>
                                    }
                                </>
                            )
                        })}
                    </select>
                    <select className="realestate__search-form__advanced__input-section__floor__select"
                    value={formState.values.maxFloor}
                    onChange={(e)=>dispatchForm(realestateSearchFormAction(realestateSearchFormActionTypes.CHANGE_MAX_FLOORS,e.target.value))}>
                        {getMaxFloor().map(floor=>{
                            return (
                                <>
                                {floor==="18" ?
                                <option value="18" key={nanoid()}
                                className="realestate__search-form__advanced__input-section__floor__option">
                                הכל</option>
                                :
                                <option value={floor} key={nanoid()} 
                                className="realestate__search-form__advanced__input-section__floor__option">
                                {floor}</option>
                                }
                                </>
                            )
                        })}
                    </select>
                </div>
                <div className="realestate__search-form__advanced__input-section__area">
                    <h3 className="realestate__search-form__advanced__input-section__title">גודל דירה (במ"ר)</h3>
                    <input type="number" placeholder="מ-" 
                    className="realestate__search-form__advanced__input-section__area__title__input"/>
                    <input type="number" placeholder="עד-" 
                    className="realestate__search-form__advanced__input-section__area__title__input"/>
                </div>
                <div className="realestate__search-form__advanced__input-section__date">
                    <h3 className="realestate__search-form__advanced__input-section__title">גודל דירה (במ"ר)</h3>
                    
                    <DatePicker
                    value={startDate}
                    onChange={(date) => setStartDate(date)}
                    />
                </div>
            </section>
        </div>
    )
}

export default RealestateSearchFormAdvanced;