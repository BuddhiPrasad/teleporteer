import { Children } from "react"
import { ReactNode } from "react"

const WrapperContainer = ({children}:{children : ReactNode}) => {
  return (
    
        <div className= 'mx-auto w-full max-w-screen-2xl px-[20px] lg:px-[80px]'>
            {children}
        </div>
     
  )
  
}

export default WrapperContainer
