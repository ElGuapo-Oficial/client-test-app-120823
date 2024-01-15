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
                <div className="front">
                    <div className='image' style={{backgroundImage: `url(${info.image})`}}></div>
                </div>
                <div className="back">
                    <div className='description'>
                        <a href={info.link?.value} target='_blank'>{info.link?.name}</a>
                        <p>{info.description}</p>
                        <p>Main Stack: [{info.stack}]</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlippingCard;