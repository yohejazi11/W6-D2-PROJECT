import { useState } from 'react'
import Mobile from './assets/component/Mobile'
import './App.css'


function App() {

  {/* start mobile one var section */ }
  const [userOneName, setName1] = useState("")
  const [userTwoName, setName2] = useState("")


  const [isViseble1, setViseble1] = useState(true)
  const [isViseble2, setViseble2] = useState(true)

  function pushName1() {
    if (userOneName == userTwoName) {
      window.alert("name should not be same")
    } else {
      setName1(userOneName)

      setViseble1(false)
    }
  }

  function pushName2() {
    if (userOneName == userTwoName) {
      window.alert("name should not be same")
    } else {
      setName2(userTwoName)
      setViseble2(false)
    }
  }

  const [text1, setText1] = useState([])
  const [messages1, setMessages1] = useState("")


  {/* end mobile one var section */ }


  {/* start mobile two var section */ }

  const [text2, setText2] = useState([])
  const [messages2, setMessages2] = useState("")


  {/* end mobile two var section */ }

  {/* start all var section */ }

  const [alltext, setAllText] = useState([])

  {/* end all var section */ }
  let time = new Date();
  function sendMessage1() {
    setMessages1([text1, ...messages1])
    if (text1.length > 0) {
      setAllText([{ user: userOneName, time: time.toLocaleTimeString(), text: text1 }, ...alltext])
      setText1("")
    }
  }

  function sendMessage2() {
    setMessages2([text2, ...messages2])
    if (text2.length > 0) {
      setAllText([{ user: userTwoName, time: time.toLocaleTimeString(), text: text2 }, ...alltext])
      setText2("")
    }
  }



  return (
    <div className='flex w-full h-screen justify-evenly bg-[url("https://i.pinimg.com/564x/3d/0f/f9/3d0ff9cf6ea752477bd102e4f262a2d3.jpg")]'>
      <div className='flex w-[55%] h-screen items-center justify-evenly relative'>
        <div className='relative'>
          <div className='w-[15vw] h-[60vh] rounded-[15px] border-[8px] border-slate-900 z-50 absolute bg-slate-800 flex flex-col justify-center items-center gap-y-[1rem]' style={{ "display": isViseble1 ? `flex` : `none` }}>
            <h1 className='text-[2rem] font-bold text-white'>ChatEase</h1>
            <input className=" w-[90%] rounded-[5px] p-[5px]" type='text' placeholder='Enter your name' value={userOneName} onChange={(e) => { setName1(e.target.value) }}></input>
            <button className="w-[90%] rounded-[5px] px-[5px] text-white" style={{ background: 'linear-gradient(90deg, rgba(2,147,70,1) 1%, rgba(9,83,121,1) 100%)' }} onClick={pushName1}>enter</button>
          </div>
          {/* mobile one start div */}
          <div >
            <Mobile
              userName={userOneName}
              alltextV={alltext}
              text={text1}
              setTextFun={setText1}
              sendMessageFun={sendMessage1}
            ></Mobile>
          </div>
        </div>

        {/* mobile one end div */}



        {/* mobile two start div */}
        <div className='relative'>
          <div className='w-[15vw] h-[60vh] rounded-[15px] border-[8px] border-slate-900 z-50 absolute bg-slate-800 flex flex-col justify-center items-center	gap-y-[1rem]' style={{ "display": isViseble2 ? `flex` : `none` }}>
            <h1 className='text-[2rem] font-bold text-white'>ChatEase</h1>
            <input className=" w-[90%] rounded-[5px] p-[5px]" placeholder='Enter your name' type='text' value={userTwoName} onChange={(e) => { setName2(e.target.value) }}></input>
            <button className="w-[90%] rounded-[5px] px-[5px] text-white" style={{ background: 'linear-gradient(90deg, rgba(2,147,70,1) 1%, rgba(9,83,121,1) 100%)' }} onClick={pushName2}>enter</button>
          </div>
          <Mobile
            userName={userTwoName}
            alltextV={alltext}
            text={text2}
            setTextFun={setText2}
            sendMessageFun={sendMessage2}
          ></Mobile>
          {/* mobile two end div */}
        </div>

      </div>

      <div className='w-[40%] text-white text-[25px] flex flex-col justify-center text-center'>
        <h1 className='text-[3rem] font-bold'>ChatEase</h1>
        <p>Try ChatEase for quick and easy user-to-user chats! Stay connected, share ideas, and enjoy seamless communication in a secure environment. Join now and experience effortless conversations!</p>
      </div>
    </div>
  )
}

export default App
