

export default function Partners() {


const partners = [
    {
        id: 1,
        imageUrl: "/images/partner-arcade.png"
    },
    {
        id: 2,
        imageUrl: "/images/partner-Volker-Stevin.png"
    },
    {
        id: 3,
        imageUrl: "/images/partner-Edtech.png"
    },
    {
        id: 4,
        imageUrl: "/images/partner-fast-brothers.png"
    },
    {
        id: 5,
        imageUrl: "/images/partner-Kphone.png"
    },
    {
        id: 6,
        imageUrl: "/images/partner-TVC.png"
    }
]


    return (
        <div className="partners">
            <div className="partner-grid">
                {partners.map((partner) => (
                    <div key={partner.id} className="partner-item">
                        <img src={partner.imageUrl} alt={`Partner ${partner.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}
