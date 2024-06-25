import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className='py-10 flex items-center justify-center'>

      <div className='w-1/3  gap-8 flex flex-col items-center justify-center'>
        {children}
      </div>
    </aside>
  )
}

export default layout
