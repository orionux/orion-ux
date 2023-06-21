import ImageGride from '@/components/projectsComponents/ImageGride'
import Laptop from '@/components/projectsComponents/Laptop'
import LargeImg from '@/components/projectsComponents/LargeImg'
import NextCase from '@/components/projectsComponents/NextCase'
import Outcome from '@/components/projectsComponents/Outcome'
import ProductsSlides from '@/components/projectsComponents/ProductsSlides'
import SliderSec from '@/components/projectsComponents/sliderSec'
import React from 'react'

const projects = () => {
  return (
    <>
    <ProductsSlides />
    <SliderSec />
    <Laptop />
    <LargeImg />
    <ImageGride />
    <Outcome />
    
    <NextCase />
    </>
  )
}

export default projects