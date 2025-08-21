# Forms in React

Traditional Forms takes lots of boiler plate.

## Using React-Hook-Form

Run `npm install react-hook-form`

Then import the `useFrom()` hook

```js
import { useForm } from "react-hook-form"

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
```

## Submitting the response

`useForm()` provides a `handleSubmit()` function which will be used to call our custom function on submission of the form.

```js
const onSubmit = (data)=> console.log(data);

<form onSubmit={handleSubmit(onSubmit)}>
```

## Registering Inputs

Add `{...register("path_to_field")}` in the attributes of the `<Input/>` to register the input.

> *Why path as an argument in register*
> This is how submitted values will look like when using `register()`:

> Input Name    Submit Result
> register("firstName")  ->    { firstName: value }        
> register("name.firstName")  ->    { name: { firstName: value } }    
> register("name.firstName.0")  ->     { name: { firstName: [ value ] } }

### Validation using `register()`

The second argument of `register()` is an object with all the validations as properties.
`register("path", {validation_1: value_1})`
Supported validations: 

List of validation rules supported:

- required
- min  -> number
- max -> number
- minLength
- maxLength
- pattern
- validate

## Handling Errors in Forms

we could implement respective input error handling.

```jsx
<input {...register("path_to_field", { required: true })}>
{
errors.path_to_field && <span>Violation in validation</span>
}
```

### Validation specific Error Handling:

To get represent whihc validation got violated we need to replace Validation value with an below object

```jsx
register("path", {
// Collection of Validations
validation_1 : { value: "expected_value", message: "message on violation of this validation"}

})
```

then use `{errors.path_to_field.message}` to get the corresponding error message.

```jsx
<input {...register("path_to_field", { required: true })}>
{
errors.path_to_field && <span>{errors.path_to_field.message}</span>
//Note it's errorS (plural) not error (singular)
}
```

## Disabling Multiple Submissions

We need to add the attribute `disabled={isSubmitting}` to the  `<Input/>` with `type="submit"`  
It wil disable submissions after the first submit 
`isSubmitting` is imported from the `formState` in the `useForm()` hook.

```jsx
const {
    formState: { errors, isSubmitting },
  } = useForm();

<input disabled={isSubmitting} type="submit" name="Submit" />

{isSubmitting && <div>Submitting...</div>} // Rendered after submitting.
```

## Handling Submission Errors

We need to throw the error if any conditions are not met using `setError("key",{message:"Error_message"})`

here `key` is an ref to the form 
Displaying the Error :

```jsx
    const {setError} = useForm();

    function submit(){
        if(condition == false){
        setError("key",{message:"Error_message"})
        }
    }

    return (
        <form>


        <input type="submit">
        {
        errors.key && <span>{errors.key.message}</span>
        //No " " needed for key here.
        }
        </form>

    )
```