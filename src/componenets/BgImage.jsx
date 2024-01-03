import Data from '../constant/data.js'

function BgImage() {
  return (<>
    <section className=' Hero z-10'>
<div className='flex justify-start align-end  lg:w-1/2 sm:w-full flex-col  '>
<h2 className='Hero-text1 text-white  font-bold font-sans 2xl:text-xl xl:text-xl sm:text-[12px]'>{Data.instructor.name}</h2>
<h1 className='Hero-text2 text-white  font-bold font-serif 2xl:text-4xl xl:text-2xl sm:text-[24px]'>{Data.course.title}</h1>
</div>
</section>

</>
  )
}

export default BgImage
