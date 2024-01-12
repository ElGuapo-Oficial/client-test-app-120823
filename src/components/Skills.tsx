import { useEffect, useRef, useState } from 'react';
import VisibleWrapper from '../hocs/VisibleWrapper';
import '../styles/components/Skills.css'

const skillBars = [
    {
        name: "Frontend",
        progress: 87
    },
    {
        name: "Backend",
        progress: 66
    },
    {
        name: "DB",
        progress: 55
    },
    {
        name: "DevOps",
        progress: 56
    },
    {
        name: "Tacos",
        progress: 95
    },
]

interface SkillBarsProps {
    isActive: boolean;
}

const SkillBars: React.FC<SkillBarsProps> = ({isActive}) => {
    const [currentPercentage , setCurrentPercentage] = useState<number[]>(new Array(5).fill(0));
    const barRefs = useRef<(HTMLDivElement | null)[]>([]);
    const percentageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        let interval:  NodeJS.Timer;
        if (isActive) {
            interval = setInterval(() => {
                setCurrentPercentage(current => {
                    const localPercentage = [...current].map((item, index) => {
                        if (item < skillBars[index].progress) {
                            return item + 1;
                        }
                        return item;
                    });
            
                    if (localPercentage[localPercentage.length - 1] >= skillBars[localPercentage.length - 1].progress) {
                        clearInterval(interval);
                    }
                    return localPercentage;
                });
            }, 11);
        }
      
        return () => clearInterval(interval);
    }, [isActive]);
  
    useEffect(() => {
        if (isActive) {
            skillBars.forEach((skill, i) => {
                const bar = barRefs.current[i];
                const percentage = percentageRefs.current[i];
                if (bar && percentage) {
                    void bar.offsetWidth;
                    bar.style.width = `${skill.progress}%`;
                    percentage.style.width = `${skill.progress - 14}%`;
                }
            });
        }
    }, [isActive]);
  
    return (
        <div id='skills' className='skills'>
            <div className='skills-container'>
                {skillBars.map((item, index) => (
                    <div key={index}>
                        <div className='progress-bar-tags'>
                            <div className='name'>{item.name}</div><div ref={el => percentageRefs.current[index] = el} className='percentage' style={{width: 0}}>{`${currentPercentage[index]}%`}</div>
                        </div>
                        <div className='progress-bar-container'>
                            <div ref={el => barRefs.current[index] = el} className='progress-bar' style={{width: 0}}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <VisibleWrapper>
            {(isActive) => <SkillBars isActive={isActive} />}
        </VisibleWrapper>
    )
}

export default Skills;