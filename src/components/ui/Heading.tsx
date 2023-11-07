import React from 'react';

interface HeadingProps {
    children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
    return <h1 className='text-gray-950 mb-4 leading-normal text-2xl font-semibold text-left' {...props}>{children}</h1>;
};
export default Heading;