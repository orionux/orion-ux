import Laptop from '@/components/projectsComponents/Laptop'
import LargeImg from '@/components/projectsComponents/LargeImg'
import NextCase from '@/components/projectsComponents/NextCase'
import Outcome from '@/components/projectsComponents/Outcome'
import SliderSec from '@/components/projectsComponents/sliderSec'
import React from 'react'

const projects = () => {
  return (
    <>
    <SliderSec />
    <Laptop />
    <LargeImg />
    <Outcome />
    <NextCase />
    </>
  )
}

export default projects