import {SubmitHandler, useForm} from "react-hook-form"

interface Inputs {
  example: string
  exampleRequired: string
}

function Basic() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  console.log(watch("example"))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")}/>
        <input {...register("exampleRequired", {required: true})}/>
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit"/>
      </form>
    </>
  )
}

export default Basic
