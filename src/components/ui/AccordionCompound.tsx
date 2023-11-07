import React, { useState, useContext, createContext, ReactNode } from 'react';
type AccordionContextType = {
    expandedIndex: number | null;
    handleToggle: (index: number) => void;
};
type AccordionProviderProps = {
    children: ReactNode;
};
type AccordionProps = {
    children: ReactNode;
};
type AccordionItemProps = {
    children: Iterable<ReactNode>;
    expanded?: boolean;
    index?: number;
};
const AccordionContext = createContext<AccordionContextType | null>(null);

const AccordionProvider = ({ children }: AccordionProviderProps) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        if (index === expandedIndex) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <AccordionContext.Provider value={{ expandedIndex, handleToggle }}>
            {children}
        </AccordionContext.Provider>
    );


};



const Accordion = ({ children }: AccordionProps) => {
    const context = useContext(AccordionContext);
    const { expandedIndex } = context || { handleToggle: () => { }, expandedIndex: null };

    return (
        <>
            {React.Children.map(children, (child, index) => {
                const expanded = index === expandedIndex;
                return React.cloneElement(child as React.ReactElement, { expanded, index });
            })}
        </>
    );
};
const AccordionSummry = (props: any) => {
    const context = useContext(AccordionContext);
    const { handleToggle } = context || { handleToggle: () => { }, expandedIndex: null };
    const isContentVisible: boolean = context?.expandedIndex === props.index;
    return <div onClick={() => handleToggle(props.index)}>
        <div className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 rounded-t-xl cursor-pointer" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1"
        >
            <div className="w-[90%] font-medium md:text-base mx-lg:text-sm text-gray-950 mx-lg:text-sm">{props.children}</div>
            <svg
                className={`transform transition duration-200 ease-in-out ${isContentVisible ? 'rotate-180' : ''
                    }`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="grey"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <polyline points="6 9 12 15 18 9" />
            </svg>
        </div>
    </div>

}
const AccordionItem = ({ children, expanded, index}: AccordionItemProps) => {
    const childArray = React.Children.toArray(children);
    if (childArray.length !== 2) {
        throw new Error('AccordionItem must have exactly two children,AccordianSummary and AccordionDetails');
      }
    const clonedElement = React.cloneElement(childArray[0] as React.ReactElement, { index: index });

    return (
        <div className="border-b border-dashed last:border-none">
            {clonedElement}
            {expanded && (
                <div
                    className={`p-4 bg-gray-50 rounded-b-lg transition duration-[2000] ease-in-out ${expanded ? 'max-height-700' : 'max-height-0'}`}
                >
                    <p className="text-gray-700">{childArray[1] as React.ReactElement}</p>
                </div>
            )}
        </div>
    );
};

export { Accordion, AccordionItem, AccordionSummry, AccordionProvider };
