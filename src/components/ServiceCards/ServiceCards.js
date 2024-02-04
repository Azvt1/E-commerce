import "./ServiceCards.css";
import calendar from '../../assets/img/akar-icons_calendar.svg';
import shopbag from '../../assets/img/akar-icons_shopping-bag.svg';
import gift from '../../assets/img/akar-icons_gift.svg';
import cycle from '../../assets/img/akar-icons_arrow-cycle.svg';

const ServiceCards = () => {

    const CardsData = [
        {
            "category": "Book an appointment",
            "img_url": calendar,
            "text": "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
        },
        {
            "category": "Pick up in store",
            "img_url": shopbag,
            "text": "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
        },
        {
            "category": "Special packaging",
            "img_url": gift,
            "text": "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
        },
        {
            "category": "Free global returns",
            "img_url": cycle,
            "text": "At imperdiet dui accumsan sit amet nulla risus est ultricies quis."
        }
    ];

    return (
        <div className="cards-container">
            {CardsData.map((card, index) => (
                <div key={index} className="card">
                    <img src={card.img_url} alt={card.category} />
                    <div className="card_content">
                        <h3>{card.category}</h3>
                        <p>{card.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceCards;
