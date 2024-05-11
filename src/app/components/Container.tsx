import React from 'react'

type ContainerProps = {
  children?: React.ReactNode,
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={`max-w-[60vw] mx-auto  pt- px-4 ${className}`}>{children}</div >
}
