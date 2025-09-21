import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

const Hero = () => {
  return (
    <div>
     
     <Button className='bg-red-500'>  Add to cart </Button>
     <Input className='w-max p-4' placeholder='Bread'/>
    </div>
  )
}

export default Hero
