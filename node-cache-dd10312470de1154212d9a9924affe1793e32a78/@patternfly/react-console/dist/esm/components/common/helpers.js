import React from 'react';
export const child = (children, index) => {
    const childrenArray = React.Children.toArray(children);
    return (childrenArray && childrenArray.length > index && childrenArray[index]) || null;
};
//# sourceMappingURL=helpers.js.map