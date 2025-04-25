import HomeTabs from './TopTabs'
import { Button } from '@/src/components/Button'

export default function Home() {
  return (
    <div className="w-full items-center justify-center flex flex-col">
      <HomeTabs />
      <div className="w-full flex flex-col items-center mt-5">
        <Input placeholder={'Account No'} />
        <Input placeholder="Amount" />
        <Button>Send</Button>
      </div>
    </div>
  )
}

function Input(props: { placeholder: string }) {
  return (
    <div className="w-full mb-10">
      <input
        className={`bg-card 
        outline-none border-none p-3 w-full text-[20px]
        text-center rounded-md font-semibold
        
        `}
        placeholder={props.placeholder}
        type={'number'}
        pattern={'[0-9]*'}
        inputMode={'decimal'}
        min={0}
      />
    </div>
  )
}
