import React from 'react'
import { cn } from '../../utils/Utils';

const LayoutWrapper = ({children, className=""}) => {
  return (
    <div className={cn(className )}>
        <div className='container lg:mt-24 md:mt-24 sm:mt-24 mt-16 max-w-350  mx-auto px-4 sm:px-6 lg:px-16 md:px-16 '>
            {children}
        </div>
    </div>
  )
}

export default LayoutWrapper;
