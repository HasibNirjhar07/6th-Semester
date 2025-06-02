


export default function Trader() {

    const tradingReasons=[

        {
            reason: "Raw Spreads",
            description: "Trade with low spreads and no hidden fees, ensuring you keep more of your profits."
        },

        {
            reason: "No dealing desk",
            description: "Enjoy direct market access with no dealing desk intervention, allowing for faster and more transparent trading."
        },

        {
            reason: "State of the art",
            description: "Experience cutting-edge trading technology that enhances your trading efficiency and performance."
        }

    ]

    return (
        <div className="trader">
            <div className="trader-header">
            <h1>Why Traders Choose Us?</h1>
            <div className="trader-grid">
                {tradingReasons.map((item, index) => (
                    <div className="trader-card" key={index}>
                        <h3>{item.reason}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}