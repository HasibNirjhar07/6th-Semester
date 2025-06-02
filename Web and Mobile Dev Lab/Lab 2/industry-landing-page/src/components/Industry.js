
export default function Industry() {

    const industryData = [
        {
            name: "Healthcare",
            description: "Innovative solutions for healthcare providers and patients."
        },
        {
            name: "Finance",
            description: "Secure and efficient financial services for businesses and individuals."
        },
        {
            name: "Education",
            description: "Transforming learning experiences with technology."
        },
        {
            name: "Retail",
            description: "Enhancing customer engagement and sales through digital platforms."
        },
        {
            name: "Manufacturing",
            description: "Streamlining production processes with automation and IoT."
        }
        ,
        {
            name: "Transportation",
            description: "Optimizing logistics and supply chain management."
        }
       
    ];

    return (
        <div className="industries">
            <h1>Industries</h1>
            <div className="industry-grid">
                {industryData.map((industry, index) => (
                    <div className="industry-card" key={index}>
                        <h3>{industry.name}</h3>
                        <p>{industry.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}