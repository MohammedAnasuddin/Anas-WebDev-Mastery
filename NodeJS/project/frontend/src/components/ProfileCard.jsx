const ProfileCard= (props)=>{
   const {photoURL, firstName, lastName, about , age, gender } = props.details
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className='h-64'>
          <img
          className="w-full h-full object-contain aspect-square"
            src= {photoURL}
            
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {firstName}
            <div className="badge badge-secondary">{gender}</div>
          </h2>
          <p>{about}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
</div>
    )
}
export default ProfileCard;