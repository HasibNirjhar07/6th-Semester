
import Industry from "./Industry";

export default function Industries(props) {
    return (  
        <div className="industry">
            <div className="industry-grid">
                <Industry
                    industryName={props.industryName}
                    industryDescription={props.industryDescription}
                />
            </div>
        </div>
    );

    }