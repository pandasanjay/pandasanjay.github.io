import React from 'react';

const SidePanel = ({ children, right, grid={}, className }) => {
    const cssClass = ["sidebar","shadow"]
    if(right) cssClass.push("right")
    if(className) cssClass.push(className)
    
    // Convert Bootstrap grid props to Tailwind classes
    let gridClasses = "";
    if (grid.md === 3) gridClasses += " md:w-1/4";
    if (grid.xl === 2) gridClasses += " xl:w-1/6";
    
    return (
        <div className={`${gridClasses} ${cssClass.join(" ")}`}>
            <div className="sidebar-sticky">
                {children}
            </div>
        </div>
    )
}

export default SidePanel;