'use client'

import { useEffect, useRef, useState } from 'react'
import { motion as m } from 'framer-motion'
import { Keyboard } from '@phosphor-icons/react'

export default function Home() {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const actualType = useRef<HTMLParagraphElement>(null)
  const [testText, setTestText] = useState<string>('')
  const [wordCount, setWordCount] = useState(15)

  const [startTime, setStartTime] = useState<Date>()
  // const [endTime, setEndTime] = useState<Date>()
  const [wpm, setWpm] = useState<number>()


  const typing_test_words = "apple banana cat dog egg fish goat hat ice jeep kite lemon moon nest owl pear quack rain sun tree umbrella violin water xylophone yak zebra add bake call dive eat find go help itch jump kick look meet nap open play quiet run sing talk use visit walk xerox yawn zip admire blink clap dance enjoy float grow hop imagine joke knit laugh mimic nap operate paint quack read smile tease unwrap visit whistle x-ray yodel zero applaud balance carve dash explore fly glide hide invent jog knead leap march nibble observe paddle quench race sew tiptoe uncover vault wiggle yank zipline abound balance camp dart excite flicker gallop hurry ignite juggle kayak linger meander nestle occupy prance question revive sneak tickle unravel vacate wander yell zestful"
  const textGen = (count: number) => {
    const random = Array.from({length: count}, () => typing_test_words.split(" ")[Math.floor(Math.random() * 100) + 1]);
    setInput('')
    return random.join(" ")
  }

  useEffect(() => {
    if (input.length == 1) {
      setStartTime(new Date())
      console.log(startTime)
    } else if (input.split(" ").length == testText.split(" ").length && input != "" && input.split(" ")[input.split(" ").length - 1] == testText.split(" ")[testText.split(" ").length - 1]) {
      let endTime = new Date()
      
      const wordsDone = (testText.split("").filter((el, key) => el == input[key]).length) / 5
      var timeDiff = (endTime.getTime() - startTime.getTime()) / 1000
      setWpm(Math.round(wordsDone / (timeDiff / 60)))
    }
  }, [input])
  
  console.log(wpm)
  
  useEffect(() => {
    window.addEventListener("click", () => {
      inputRef.current?.focus()
    })
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setTestText(textGen(wordCount))
      }
    })
    
    setTestText(textGen(wordCount))
  }, [])


  useEffect(() => {
    setTestText(textGen(wordCount))
  }, [wordCount])
  

  return (
    <div className='relative h-screen w-screen overflow-hidden'>
      <div className='flex justify-center items-center h-screen w-screen'>
        <div className='flex flex-col w-2/3 h-1/2 z-10'>
          <div className='flex mb-1 w-full relative items-center'>
            <h1 className='text-white text-xl roboto'>TypeElegance</h1>
            <div className='absolute right-0 flex items-center gap-1'>
              <Keyboard size={32} color='#fff' />
              <p className='roboto text-white'>{wpm}</p>
            </div>
          </div>
          <div className='background rounded-lg w-full h-full p-16 relative flex justify-center roboto'>
            <p className='absolute opacity-75 w-11/12 text-2xl'>{testText.split(" ").map((el, key) => {
              if (input.split(" ")[key] === el) {
                return (<m.span
                  initial={{x: -100}}
                  animate={{x: 0}}
                  transition={{duration: 4}}
                  className='text-white'>{el} </m.span>)
              } else if (input.split(" ")[key] === undefined || input.split(" ")[key] === "" || (testText.includes(input.split(" ")[key]) && input.split(" ").length == key + 1)) {
                return <span className='text-background'>{el} </span> 
              } else {
                return <span className='text-wrong'>{el} </span>
              }
            })}</p>
            <p className='absolute z-10 w-11/12 text-2xl' ref={actualType}><span className='opacity-0'>{testText.split(" ").slice(0, input.split(" ").length - 1).join(" ")}</span> <span className='text-white'>{input.split(" ").findLast(() => true)}</span></p>
          </div>
          <div className='flex relative mt-4 items-center'>
            <div className='flex background p-2 gap-4 rounded-lg'>
              <button onClick={() => setWordCount(15)} className={`p-1 background text-white roboto rounded-md px-6 ${wordCount == 15 ? "shadow-lg" : ""} transition-all`}>15</button>
              <button onClick={() => setWordCount(30)} className={`p-1 background text-white roboto rounded-md px-6 ${wordCount == 30 ? "shadow-lg" : ""} transition-all`}>30</button>
              <button onClick={() => setWordCount(60)} className={`p-1 background text-white roboto rounded-md px-6 ${wordCount == 60 ? "shadow-lg" : ""} transition-all`}>60</button>
            </div>
            <button onClick={() => setTestText(textGen(wordCount))} className='background absolute right-0 rounded-lg text-white roboto p-3 px-12'>Restart</button>
          </div>

          <input ref={inputRef} onChange={(e) => setInput(e.target.value)} className='opacity-0 absolute'/>
        </div>
      </div>
      <div className='absolute -top-32 right-12'>
        <img src='/background.svg' draggable='false' />
      </div>
    </div>
  )
}
