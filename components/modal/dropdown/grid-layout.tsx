import { PropsWithChildren } from "react"

const GridLayout = ({ children} : PropsWithChildren) => {
  return (
    <>
      <div className="sm:flex sm:flex-row">
        {children}
      </div>
      <div className="sm:h-[1.5rem]"/>
    </>
  )
}

export default GridLayout