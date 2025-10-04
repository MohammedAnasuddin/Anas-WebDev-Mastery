import CardButtons from "./CardButons.jsx"

const RequestCard = (props)=>{
    const {need, details = {}} = props
    const {_id, firstName = "Unknown"} = details;

    return(
        <div className="mx-1">
     <li className="list-row bg-base-300  m-2">
    <div><img className="size-10 rounded-box" src={`https://avatar.iran.liara.run/public/boy?username=${firstName}`} /></div>
    <div>
      <div>{firstName}</div>
      <div className="text-xs uppercase font-semibold opacity-60">From Avengers</div>
    </div>

    {  need == "feed" ?  <CardButtons/> : <button className="bth btn-primary bg-base-200  rounded-md p-2">Message</button>  }
  </li>
        </div>
    )
}

export default RequestCard;