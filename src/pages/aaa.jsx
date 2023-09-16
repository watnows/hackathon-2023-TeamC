import Link from "next/link";


export default function Home() {
    // kanta-confliブランチを作りました

    const handleClick = () => {
        window.alert("hello world")
    }

    function handleClick2() {
        window.alert("hello world")
    }


  return (
    // <div style={{color: "red"}}>
    //   hello world aaaa
    //     <button onClick={handleClick}>btn</button>
    //     <button onClick={()=>{handleClick2()}}>btn</button>
    // </div>
  <div style={{width: '100%', height: '100%', background: 'white'}}>
    <div style={{width: '100%', paddingTop: 30, paddingBottom: 30, backgroundColor: 'lightgreen'}}>
      <div style={{color: '#fff', fontSize: 25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', textAlign: 'center', margin: 'auto'}}>就活メールつくるくん</div>
    </div>
    <div style={{left: 407, top: 244, position: 'absolute'}}></div>
    <div style={{width: 1127, height: 585, left: 168, top: 186, position: 'absolute', background: '#D9D9D9'}} />
    <div style={{width: 1015, height: 473, left: 221, top: 242, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>件名：【参加辞退のご連絡◯月◯日◯◯時から開催の会社説明会（◯◯大学 ◯◯ ◯◯）<br/><br/>株式会社◯◯◯人事部 ◯◯ ◯◯様（採用ご担当者様）お世話になっております。◯◯大学 ◯◯学部 3年生 ◯◯◯◯と申します。<br/><br/>先日参加申し込みをさせていただきました◯月◯日◯◯時から開催の会社説明会なのですが、急用が入ってしまい参加出来なくなってしまったため、取り急ぎメールにてご連絡いたします。<br/><br/>せっかくご案内いただいたにもかかわらず、参加することができず大変申し訳ございません。お忙しいところお手数おかけいたしますが、何卒よろしくお願いいたします。<br/><br/><br/>=================<br/>◯◯◯◯（◯◯◯ ◯◯◯）<br/>◯◯大学 ◯◯学部 3年生<br/>電話番号：×××-××××-××××<br/>メール ：×××××××××@gmail.com<br/>=================</div>
    <div style={{width: 273, height: 99, left: 270, top: 843, position: 'absolute'}}>
      <div style={{width: 273, height: 99, left: 0, top: 0, position: 'absolute', background: '#C5E99B', borderRadius: 30}} />
      <div style={{width: 149, height: 52, left: 62, top: 24, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word'}}>編集</div>
    </div>
    <div style={{width: 273, height: 99, left: 910, top: 843, position: 'absolute'}}>
      <div style={{width: 273, height: 99, left: 0, top: 0, position: 'absolute', background: '#C5E99B', borderRadius: 30}} />
      <div style={{width: 149, height: 52, left: 62, top: 24, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', letterSpacing: 2.40, wordWrap: 'break-word'}}>送信</div>
    </div>
  </div>
  )
}
