import { useState } from 'react'
import { Button } from '../component/ui/Button'
import { Card } from '../component/ui/Card'
import { CreateContentModal } from '../component/ui/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../component/ui/SideBar'
import { useContent } from '../hooks/useContent'

function Dashboard() {
    const contents = useContent();
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <Sidebar />
            <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
                <CreateContentModal open={openModal} onClose={() => {
                    setOpenModal(false)
                }} />
                <div className='flex justify-end gap-4'>
                    <Button startIcon={<ShareIcon size={'sm'} />} variant='secondary' size={'sm'} text="Share Brain" />
                    <Button onClick={() => { setOpenModal(true) }} startIcon={<PlusIcon size={'sm'} />} variant='primary' size={'sm'} text="Add Content" />
                </div>
                <div className='flex gap-4'>
                    {contents.map(({ type, title, link }) => <Card
                        title={title}
                        link={link}
                        type={type}
                    />)}

                </div>
            </div>
        </div>
    )
}

export default Dashboard
