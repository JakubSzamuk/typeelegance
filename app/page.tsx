'use client'

import { useEffect, useRef, useState } from 'react'
import { motion as m } from 'framer-motion'

export default function Home() {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const actualType = useRef<HTMLParagraphElement>(null)
  const [testText, setTestText] = useState('')


  useEffect(() => {
    window.addEventListener("click", () => {
      inputRef.current?.focus()
    })
    const typing_test_words = "apple banana cat dog egg fish goat hat ice jeep kite lemon moon nest owl pear quack rain sun tree umbrella violin water xylophone yak zebra add bake call dive eat find go help itch jump kick look meet nap open play quiet run sing talk use visit walk xerox yawn zip admire blink clap dance enjoy float grow hop imagine joke knit laugh mimic nap operate paint quack read smile tease unwrap visit whistle x-ray yodel zero applaud balance carve dash explore fly glide hide invent jog knead leap march nibble observe paddle quench race sew tiptoe uncover vault wiggle yank zipline abound balance camp dart excite flicker gallop hurry ignite juggle kayak linger meander nestle occupy prance question revive sneak tickle unravel vacate wander yell zestful"
    const textGen = () => {
      const random = Array.from({length: 40}, () => typing_test_words.split(" ")[Math.floor(Math.random() * 100) + 1]);
      return random.join(" ")
    }

    setTestText(textGen())
  }, [])
  

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='flex flex-col w-1/2 h-1/2'>
        <h1 className='text-white text-7xl w-full text-center mb-4'>TypeElegance</h1>
        <div className='bg-secondary w-full h-full p-16 relative flex justify-center'>
          <p className='absolute opacity-75 w-4/5'>{testText.split(" ").map((el, key) => {
            if (input.split(" ")[key] === el) {
              return (<m.span
                initial={{x: -100}}
                animate={{x: 0}}
                transition={{duration: 4}}
                className='text-right'>{el} </m.span>)
            } else if (input.split(" ")[key] === undefined || input.split(" ")[key] === "" || (testText.includes(input.split(" ")[key]) && input.split(" ").length == key + 1)) {
              return <span className='text-background'>{el} </span> 
            } else {
              return <span className='text-wrong'>{el} </span>
            }
          })}</p>
          <p className='absolute z-10 w-4/5' ref={actualType}><span className='opacity-0'>{testText.split(" ").slice(0, input.split(" ").length - 1).join(" ")}</span> <span className='text-gray-400 bg-secondary'>{input.split(" ").findLast(() => true)}</span></p>
        </div>



        <input ref={inputRef} onChange={(e) => setInput(e.target.value)} className='opacity-0 absolute'/>
      </div>
    </div>
  )
}
