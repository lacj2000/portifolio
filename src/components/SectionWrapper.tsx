import React from 'react';

interface Props {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const SectionWrapper: React.FC<Props> = ({ id, children, className = '' }) => {
    return (
        <section id={id} className={`
            min-w-[100vw] 
            h-screen 
            
            overflow-x-hidden
            overflow-y-auto
            
            snap-start

            pl-24
            pt-10

            ${className}`}>
            <div className='max-w-6xl mx-auto px-6 pb-20'>
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;