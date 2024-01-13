import { useState, useEffect } from 'react';
import VisibleWrapper from '../hocs/VisibleWrapper';
import FlippingCard from './FlippingCard';
import '../styles/components/Experience.css';

export type ExperienceDataProps = {
    id: number;
    company: string;
    years: string;
    stack: string[];
  };

type ExperienceItemProps = {
    item: ExperienceDataProps;
    isActive: boolean;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({item, isActive}) => {
    return (
        <div className={`experience-item animation-${item.id % 2 === 0 ? "left" : "right" }-${isActive ? 'active' : ''}`}>
            <FlippingCard info={item} />
        </div>
    )
}

const Experience: React.FC = () => {
    const [experience, setExperience] = useState<ExperienceDataProps[]>([])

    useEffect(() => {
        const getExperienceData = async() => {
            try {
                const experienceDataResponse = await fetch('https://myprofile-server-ochre.vercel.app/info');
                if (!experienceDataResponse.ok) {
                    throw new Error('Error on API Call');
                }
                const experienceData = await experienceDataResponse.json();
                setExperience(experienceData);
            } catch (error) {
                console.log("The following error happend: ", error);
            }
        }

        getExperienceData();
    }, [])


    return (
        <div id='experience' className="experience">
            { experience.map(item => 
                <VisibleWrapper key={item.id} animation="slide-in">
                    {(isActive) => <ExperienceItem item={item} isActive={isActive} />}
                </VisibleWrapper>
            )}
        </div>
    )
}

export default Experience;