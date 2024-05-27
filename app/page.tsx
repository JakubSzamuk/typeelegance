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


  const typing_test_words = "I a the you and to in it is of for that he she we they but not with on at by this or from as an like have are was be your my his her our their do does can will all if just so when how where why what which who more much some any no yes good bad new old big small great best better best high low other few many little much own same next last first right wrong early late easy hard fast slow big small full empty hot cold high low far near thick thin deep shallow dark light clean dirty strong weak safe dangerous rich poor happy sad wide narrow loud quiet hard soft smooth rough simple complex near far open close begin end start stop keep change pass fail win lose buy sell break fix enter exit cut paste copy forget remember agree disagree add subtract multiply divide remember forget speak listen read write create destroy build break wear remove show hide call answer ask tell see look watch find lose miss meet avoid seek follow lead talk say speak write read hear listen play run walk sit stand eat drink sleep wake live die visit stay arrive leave return go come enter exit take give send receive help hurt fight peace win lose join separate wait hurry delay rise fall stay leave support oppose approve disapprove love hate feel think believe wish hope dream know doubt fear remember forget imagine pretend consider forget understand confuse need want like dislike accept refuse belong own should must could would may might can will shall do does did done doing go going gone come coming came see seeing saw seen say saying said make making made take taking took taken get getting got gotten give giving gave given find finding found know knowing knew known think thinking thought tell telling told ask asking asked want wanting wanted try trying tried use using used work working worked call calling called need needing needed feel feeling felt become becoming became become leave leaving left put putting put bring bringing brought show showing shown begin beginning began begin seem seeming seemed seem leave leaving left keep keeping kept hear hearing heard let letting let mean meaning meant meet meeting met pay paying paid run running ran run sit sitting sat stand standing stood win winning won lose losing lost write writing wrote written"
  const textGen = (count: number) => {
    const random = Array.from({length: count}, () => typing_test_words.split(" ")[Math.floor(Math.random() * 100) + 1]);
    setInput('')
    console.log(input)
    return random.join(" ")
  }

  useEffect(() => {
    if (input.length == 1) {
      setStartTime(new Date())
      console.log(startTime)
    } else if (input.split(" ").length == testText.split(" ").length && input != "" && input.split(" ")[input.split(" ").length - 1] == testText.split(" ")[testText.split(" ").length - 1]) {
      let endTime = new Date()
      
      const wordsDone = (testText.split("").filter((el, key) => el == input[key]).length) / 5
      console.log(wordsDone)
      var timeDiff = (endTime.getTime() - startTime!.getTime()) / 1000
      setWpm(Math.round(wordsDone / (timeDiff / 60)))
    }
  }, [input])



  const set_focus = () => {
      inputRef.current?.focus()
  }
  const reset_text = (e: any) => {
    if (e.key === "Escape") {
      setTestText(textGen(wordCount))
      setInput("")
    }
  }

  
  
  useEffect(() => {
    window.addEventListener("click", set_focus)  
    window.addEventListener("keydown", reset_text)

    setTestText(textGen(wordCount))

    return () => {
      window.removeEventListener("keydown", reset_text);
      window.removeEventListener("click", set_focus);
    }
  }, [wordCount])

  useEffect(() => {
    setInput("")
  }, [testText])


  useEffect(() => {
    setTestText(textGen(wordCount))
    setInput("")
  }, [wordCount])
  

  return (
    <div className='relative h-screen w-screen overflow-x-hidden py-8 md:py-0'>
      <div className='flex justify-center items-center h-screen w-screen'>
        <div className={`flex flex-col w-11/12 ${wordCount == 15 ? "h-2/3" : wordCount == 30 ? "h-5/6" : "h-full"} md:w-2/3 md:h-1/2 z-10`}>
          <div className='flex mb-1 w-full relative items-center flex-col md:flex-row'>
            <h1 className='text-white text-xl roboto'>TypeElegance</h1>
            <div className='md:absolute right-0 flex items-center gap-1'>
              <Keyboard size={32} color='#fff' />
              <p className='roboto text-white'>{wpm}</p>
            </div>
          </div>
          <div className='background rounded-lg w-full h-full p-4 md:p-16 relative flex justify-center roboto'>
            <p className='opacity-75 absolute w-11/12 text-2xl'>{testText.split(" ").map((el, key) => {
              if (input.split(" ")[key] === el) {
                return (<m.span
                  initial={{x: -100}}
                  key={key}
                  animate={{x: 0}}
                  transition={{duration: 4}}
                  className='text-white'>{el} </m.span>)
              } else if (input.split(" ")[key] === undefined || input.split(" ")[key] === "" || (testText.includes(input.split(" ")[key]) && input.split(" ").length == key + 1)) {
                return <span className='text-background' key={key}>{el} </span> 
              } else {
                return <span className='text-wrong' key={key}>{el} </span>
              }
            })}</p>
            <p className='absolute z-10 w-11/12 text-2xl' ref={actualType}><span className='opacity-0'>{testText.split(" ").slice(0, input.split(" ").length - 1).join(" ")}</span> <span className='text-white'>{input.split(" ").findLast(() => true)}</span></p>
          </div>
          <div className='flex relative mt-4 items-center gap-4 md:gap-0'>
            <div className='flex background p-2 gap-4 rounded-lg flex-col md:flex-row'>
              <button onClick={() => setWordCount(15)} className={`p-1 background text-white roboto rounded-md px-16 md:px-6 ${wordCount == 15 ? "shadow-lg" : ""} transition-all`}>15</button>
              <button onClick={() => setWordCount(30)} className={`p-1 background text-white roboto rounded-md px-16 md:px-6 ${wordCount == 30 ? "shadow-lg" : ""} transition-all`}>30</button>
              <button onClick={() => setWordCount(60)} className={`p-1 background text-white roboto rounded-md px-16 md:px-6 ${wordCount == 60 ? "shadow-lg" : ""} transition-all`}>60</button>
            </div>
            <button onClick={() => {setTestText(textGen(wordCount)); setInput("")}} className='background md:absolute right-0 rounded-lg text-white roboto p-3 w-full md:w-min h-full md:px-12'>Restart</button>
          </div>

          <input ref={inputRef} value={input} onChange={(e) => setInput(e.target.value)} className='opacity-0 absolute'/>
        </div>
      </div>
      <div className='absolute -top-16 md:-top-32 right-12'>
        <img src='/background.svg' draggable='false' />
      </div>
    </div>
  )
}
