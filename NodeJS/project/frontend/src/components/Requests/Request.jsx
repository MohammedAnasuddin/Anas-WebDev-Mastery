import RequestCard from './RequestCard.jsx'

const Requests = ()=>{


    return (
        <div className="skeleton  base-400 border border-blue-400 flex justify-center items-start w-full min-h-96">
            
            <ul className="list m-4 bg-base-100 rounded-box shadow-md w-6/12 h-1/6 ">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">You are Connected to</li>

  <RequestCard need="request"/>
  
 


  
</ul>
            
        </div>




    )
}

export default Requests;