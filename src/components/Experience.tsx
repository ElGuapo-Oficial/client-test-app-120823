import VisibleWrapper from '../hocs/VisibleWrapper';
import FlippingCard from './FlippingCard';
import '../styles/components/Experience.css';
import { ExperienceItemProps } from '../types/All';
import { ExperienceData } from '../lib/ExperienceInfo';

const ExperienceItem: React.FC<ExperienceItemProps> = ({item, isActive}) => {
    return (
        <div className={`experience-item animation-${item.id % 2 === 0 ? "left" : "right" }-${isActive ? 'active' : ''}`}>
            <FlippingCard info={item} />
        </div>
    )
}

const Experience: React.FC = () => {
    return (
        <div id='experience' className="experience">
            { ExperienceData.map(item => 
                <VisibleWrapper key={item.id} animation="slide-in">
                    {(isActive) => <ExperienceItem item={item} isActive={isActive} />}
                </VisibleWrapper>
            )}
        </div>
    )
}

export default Experience;