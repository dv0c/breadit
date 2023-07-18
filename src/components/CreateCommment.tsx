import { FC } from 'react'
import { Label } from './ui/Label'

interface CreateCommmentProps {
  
}

const CreateCommment: FC<CreateCommmentProps> = ({}) => {
  return <div className='grid w-full gap-1.5'>
    <Label htmlFor='comment'>Your comment</Label>
    <div>
        
    </div>
  </div>
}

export default CreateCommment