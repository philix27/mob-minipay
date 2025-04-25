import { clsx } from 'clsx'
import { ReactNode, useState } from 'react'
import {  Handle, Overlay, Root } from 'vaul'

const snapPoints = ['148px', '355px', 1]
export default function BottomModal({
  showSheet = false,
  ...props
}: {
  title?: string
  className?: string
  showSheet?: boolean
  onClose: VoidFunction
  children: ReactNode
}) {
  const [snap, setSnap] = useState<number | string | null>(snapPoints[0])
  return (
    <Root
      open={showSheet}
      onOpenChange={props.onClose}
      repositionInputs={true}
      // snapPoints={snapPoints}
      // activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
    >
      <Overlay
      // className="fixed inset-0  bg-[#0000008c]"
      // onClick={() => {
      //   return
      // }}
      // onDoubleClick={props.onClose}
      />
      <div>
        {/* Todo: <Content> */}
        <div
        // className="bg-background flex flex-col rounded-t-[10px] p-2 h-fit fixed bottom-0 left-0 right-0 outline-none"
        >
          <div
            className={clsx('flex flex-col max-w-md mx-auto w-full pt-1 mb-5 px-2', {
              'overflow-y-auto': snap === 1,
              'overflow-hidden': snap !== 1,
            })}
          >
            <Handle className="bg-muted mb-4" />
            {/* <div
            className="w-full flex items-center justify-between px-3"
          >
           
            {props.title && <Title className="text-[12px] font-semibold">{props.title}</Title>}
          </div> */}
            {props.children}
          </div>
        </div>
      </div>
    </Root>
  )
}
