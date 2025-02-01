import { Button } from './component/ui/Button'
import { Card } from './component/ui/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <div className='p-4'>
      <div className='flex justify-end gap-4'>
        <Button startIcon={<ShareIcon size={'sm'} />} variant='secondary' size={'sm'} text="Share Brain" />
        <Button startIcon={<PlusIcon size={'sm'} />} variant='primary' size={'sm'} text="Add Content" />
      </div>
      <div className='flex gap-4'>
        <Card title={'First Video'} link={'https://www.youtube.com/watch?v=ORkpTSwpYFE'} type={'youtube'} />
        <Card title={'First Tweet'} link={'https://x.com/heyshrutimishra/status/1885647857535115457'} type='twitter' />
      </div>
    </div>
  )
}

export default App
