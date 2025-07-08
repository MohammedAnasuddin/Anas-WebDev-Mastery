import { useRouteError } from "react-router"

const Route_Error = ()=>{
    const error_obj = useRouteError();
    console.log(error_obj);
    
return(
<div>
<h1>OOPS SOMETHING WENT WRONG</h1>

<h2>{error_obj.status}</h2>
<h2>{error_obj.statusText}</h2>
</div>

)


}

export default Route_Error