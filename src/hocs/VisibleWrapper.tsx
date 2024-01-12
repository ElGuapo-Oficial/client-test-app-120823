import React, { useEffect, useRef, useState} from 'react';

interface VisibleWrapperProps {
    children: (isActive: boolean) => React.ReactNode;
    animation?: string;
}

const VisibleWrapper: React.FC<VisibleWrapperProps> = ({ children, animation }) => {
    const [isActive, setIsActive] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
        const currentRef = ref.current; // Save the current ref value

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsActive(true);
                }
            });
        }, { rootMargin: "0px 0px -12% 0px" }) // 10% offset from the bottom);
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [animation]);
  
    return (
      <div ref={ref} data-animation={animation || null}>
          { children(isActive) }
      </div>
    );
  };

export default VisibleWrapper;