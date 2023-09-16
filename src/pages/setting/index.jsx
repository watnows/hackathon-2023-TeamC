import Link from "next/link";


export default function Homeee() {
    const handleClick = () => {
        window.alert("hello world")
    }

    function handleClick2() {
        window.alert("hello world")
    }


  return (
    <div style={{color: "red"}}>
      hello world aaaa
        <button onClick={handleClick}>btn</button>
        <button onClick={()=>{handleClick2()}}>btn</button>
    </div>
  )
}
