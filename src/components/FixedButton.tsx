import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function FixedButton({children}: Props) {
  return (
    <div className='fixed bottom-8 left-8 bg-[#9188A4] py-3 px-4 z-30 rounded-full text-white font-bold cursor-pointer'>{children}</div>
  )
}