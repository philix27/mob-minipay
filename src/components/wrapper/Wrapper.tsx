import { ReactNode } from 'react'
// import { useInitUserToken } from 'src/Root/context'

import BottomNav from './BottomNav'

export default function Wrapper({
  hideBottomNav,
  ...props
}: {
  children: ReactNode
  hideBottomNav?: boolean
}) {
  // useInitUserToken()

  return (
    <div className="w-screen bg-background h-screen p-0 m-0">
      {/* <TopNav showBack={props.hideBottomNav} /> */}
      <div className="flex w-full bg-background">
        {/* mt-[50px] md:mt-[70px] mb-[70px] md:mb-0 md:ml-[100px]  */}
        <div
          className={`
        mt-[5px] md:mt-[70px] mb-[90px] md:mb-0 
        w-full h-full
        px-4 py-0 md:py-2
        flex items-center justify-center
        bg-background`}
        >
          <div className="md:max-w-[840px] w-full">{props.children}</div>
        </div>
      </div>
      {hideBottomNav || <BottomNav />}
    </div>
  )
}
