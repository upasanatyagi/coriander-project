import React from "react";
export default function Faq() {
    return (
        <div className="faq">
            <details className="dtl">
                <summary className="sum">
                    Do you make cakes for special diets?
                </summary>
                Unfortunately all of our cakes presently contain wheat, eggs and
                dairy. Whilst all do not contain nuts we do use nuts in our
                kitchen. I am currently working on a vegan menu…please ask!
            </details>
            <details className="dtl">
                <summary className="sum">
                    Can i have my cake decorated with fresh flowers?
                </summary>
                Dependent on seasonal availability and I would be delighted to
                arrange these on your cake for you.
            </details>
            <details className="dtl">
                <summary className="sum">
                    Do you have a delivery service?
                </summary>
                Currently i dont have ,all cakes need to be picked.
            </details>
        </div>
    );
}
