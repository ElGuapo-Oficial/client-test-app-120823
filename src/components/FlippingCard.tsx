import { useState } from 'react';
import { ExperienceDataProps } from '../types/All';
import '../styles/components/FlippingCard.css';

const FlippingCard: React.FC<{info: ExperienceDataProps}> = ({ info }) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
 
    return (
        <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="card">
                <div className="front image" style={{backgroundImage: `url(${info.image})`}}>
                    <p>{ info.company }</p>
                </div>
                <div className="back">Back</div>
            </div>
        </div>
    );
}

export default FlippingCard;