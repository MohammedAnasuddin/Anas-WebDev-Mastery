const FeedCard = (props)=>{
  const {user, nextCard} = props;

  const handleClick = (status )=>{
  // UPdate Connection using the provided Status

  nextCard();
  }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-l">
          <figure><img src="https://placehold.co/200x100" alt="Album"/></figure>
          <div className="card-body">
            <h2 className="card-title">{user?.firstName}({user?.gender})</h2>
            <p>{user?.about}                    </p>
            <div className="card-actions justify-end">
              <button onClick={handleClick}className="btn btn-primary bg-slate-800 border-none hover:bg-slate-700 rounded-4">Connect</button>
              <button  onClick={handleClick}className="btn btn-secondary bg-red-600 border-none hover:bg-red-500 rounded-4">Ignore</button>
            </div>
          </div>
        </div>
    )
}
export default FeedCard;