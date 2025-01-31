
import './App.css'
import { Button } from './component/ui/Button'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {

  return (
    <>
      <Button startIcon={<ShareIcon size={'md'} />} variant='secondary' size={'sm'} text="Share" />
      <Button startIcon={<PlusIcon size={'md'} />} variant='primary' size={'sm'} text="Add Content" />
    </>
  )
}

export default App
