

function Mobile(props) {

    let userName = props.userName;


    return (
        <div className='w-[15vw] h-[60vh] max-md:w-[80vw] max-md:h-[80vw] rounded-[15px] border-[8px] border-slate-900 ' >
            <div className='h-[100%] bg-cover rounded-[5px] bg-[url("https://i.pinimg.com/564x/8e/45/ca/8e45caeaae8ad3698d0f1768e8e3b6eb.jpg")]'>
                {/* show text div */}
                <div className='flex flex-col-reverse gap-y-[1rem]  h-[90%] w-full px-[5px] overflow-y-auto overflow-x-hidden  '>
                    {props.alltextV.map((e, i) => (
                        <div className="flex flex-col" style={{ "alignSelf": e.user == userName ? `start` : `end` }} key={i}>
                            <div className="text-[0.8rem] text-white font-bold px-[5px] mb-[2px]" style={{ "alignSelf": e.user == userName ? `start` : `end` }}>{e.user}</div>
                            <div
                                className="text-center  rounded-[20px] px-[5px] py-[2px] max-w-[12vw] max-md:max-w-[70vw]  text-white"
                                style={{
                                    background: e.user == userName
                                        ? `linear-gradient(90deg, rgba(2,147,23,1) 1%, rgba(9,120,121,1) 51%)`
                                        : `linear-gradient(90deg, rgba(2,0,36,1) 60%, rgba(58,9,121,1) 100%)`,
                                    minHeight: "50px",
                                    maxHeight: "fit-content",
                                    whiteSpace: "pre-wrap"
                                    
                                }}
                            >{e.text}</div>
                            <div className="text-slate-200 font-semibold text-[10px]">{e.time}</div>
                        </div>
                    ))}

                </div>
                {/* send text div */}
                <div className='h-[10%] w-full px-[10px] py-[5px] flex justify-between bg-cyan-950 rounded-b-[5px]'>
                    <input className=" w-[70%] rounded-[5px] p-[5px]" type='text' placeholder='type your message' value={props.text} onChange={(e) => { props.setTextFun(e.target.value) }} ></input>
                    <button className="rounded-[5px] px-[5px] text-white" style={{ background: 'linear-gradient(90deg, rgba(2,147,70,1) 1%, rgba(9,83,121,1) 100%)' }} onClick={props.sendMessageFun} >send</button>
                </div>
            </div>
        </div>
    )
}

export default Mobile
