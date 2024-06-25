import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <aside className='h-screen flex items-center justify-center'>
      layout
      {children}
    </aside>
  )
}

export default layout
