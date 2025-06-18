import ReactDOM from 'react-dom/client'

//. props 
//> Props are the information that you pass to a JSX tag.
//> Attributes in which JS Values can be passed.
//> Every Attribute in JSX are passed as prop to the function.
//Note: props are static(child cannot change them) and immutable
//x props value cannot be modified in a component


//. Passing props in a Component
//> Uses { } to use the JS value
//> Syntax: <Component prop_1 = { value_1} prop_2: {value_2} />
//Note: ReactDOM makes a collection of all the props into a single Object because
//Note:  React component functions only accepts a single argument, a props object


//. Reading props in a function
//> Syntax : function Component( {prop_1, prop_2:alias , .... , prop_N} ){ }


const root = ReactDOM.createRoot(document.getElementById("root"))

function Demo_Component(all_props){
console.log(all_props);
// {   details: {…}, profile: {…}  } 
//> The individual properties wrapped into a single object
//> where keys are prop_name used during passed during the element 

const user_details = all_props.details
const user_profile = all_props.profile


console.log("Received used_details: ",user_details)

//- to simplify the process of receiving props we Destructure the received_ Object  at parameters

}

function DeStructured_Component ( {details,  profile:info}  ){
    console.log("Destructured details: ",details," profile as info: ",info)

    return (
        <div>
            <h4>{details.user_id}</h4>
            <h4>{details.user_name}</h4>
        </div>
    )
}

//. Default props :
//> Since props are passed as parameters they can have default value.
//> Syntax: function Component ({prop1, prop_2=default_value })
//Note: Default is only used only if the prop is :
        //> not passed by he element
        //> the value passed is "undefined" -> <Component prop_1={undefined} />


        function Default_prop({ text="I'm default text"}){
            return (
                <h3>{text}</h3>
            )
        }


//. prop known as "children":
//> this prop is provided by react which contains all the children's of the element
//> It'a an array of children 

function Parent({children}){
console.log("Children are: ", children)

return(

    // {children} //x Don't render objects direct;y in the JSX
    <div>
        {children}
    </div>
)
}




let user= {
    user_id: "1233",
    user_name:"Anas"
}

function Container(){
    return (
        <div>
                <Demo_Component details={user} profile={user} />,
                <DeStructured_Component details={user} profile={user} />,
                <Default_prop  text={"Text is hello World"}/>,
                <Default_prop  />,
                <Default_prop  text={undefined}/>  
                <p id="comment"> O/P: Default_text since text prop is undefined </p>

                <Parent>
                    <p>I'm p from Container</p>
                    <p>I'm p also from Container</p>
                    </Parent> 
                <p id="comment"> Parent just returns a div then teh above children cannot be rendered, hence we usee children prop</p>
        </div>
    )
}

root.render(< Container /> )