import React from 'react'

export default function Header({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-white h-[10%] flex flex-col justify-center px-6" >
      <h2 className="uppercase  text-[#5d5d6d] font-bold">{children}</h2>
    </div>
  )
}
