import Trader from "./Trader";

export default function Traders(props) {

    return (  
        <div className="traders">
            <div className="trader-grid">
                <Trader
                    traderName={props.traderName}
                    traderDescription={props.traderDescription}
                />
            </div>
        </div>
    );
 
}
