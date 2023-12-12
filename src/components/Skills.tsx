import { useEffect, useRef } from 'react';
import VisibleWrapper from './hocs/VisibleWrapper';
import '../styles/components/Skills.css'

const skillBars = [
    {
        name: "frontend",
        progress: "80"
    },
    {
        name: "backend",
        progress: "60"
    },
    {
        name: "db",
        progress: "50"
    },
    {
        name: "other",
        progress: "20"
    },
    {
        name: "cake",
        progress: "95"
    },
]

interface SkillBarsProps {
    isActive: boolean;
}

const SkillBars: React.FC<SkillBarsProps> = ({isActive}) => {
    const refs = useRef<(HTMLDivElement | null)[]>([]);
  
    useEffect(() => {
        if (isActive) {
            skillBars.forEach((skill, i) => {
                const bar = refs.current[i];
                if (bar) {
                    bar.style.width = '0%';
                    void bar.offsetWidth;
                    bar.style.width = `${skill.progress}%`;
                }
            });
        }
    }, [isActive]);
  
    return (
        <div id='skills' className='skills'>
            <div className='skills-container'>
                {skillBars.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <div className='progress-container'>
                            <div ref={el => refs.current[index] = el} className='progress-bar' style={{ width: '0%' }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <VisibleWrapper animation="animate">
            {(isActive) => <SkillBars isActive={isActive} />}
        </VisibleWrapper>
    )
}

export default Skills;