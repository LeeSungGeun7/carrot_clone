import {FieldErrors , useForm } from "react-hook-form";
import { calculateSizeAdjustValues } from "../../node_modules/next/dist/server/font-utils";

// better validation 
// better erros set , clear , display 
interface LoginForm {
    username : string;
    password : string;
    email : string;
    errors?: string;
}

export default function Forms() {
    const {
        register ,
        handleSubmit ,
        formState : {errors},
        watch ,
        setError ,
        setValue,
        reset,
        resetField,
    } = useForm<LoginForm>(
        {
            mode: "onChange",
        }
    );

    const onValid = (data:LoginForm) => {
        console.log("im valid bby"); 
        setError("username", {message:"already username"});
        reset();
    }
    const onInvalid = (errors: Error) => {
        console.log(errors);
    };
    console.log(watch("email"));
    return <form onSubmit={handleSubmit(onValid , onInvalid)}>
        <input
        {...register("username" , {
            required: "username is 필요해",
            minLength: {value : 5 , message: "username 최소한의 길이는 5이상이야"}
        })}  
        type="text" 
        placeholder="Username"
        />
        {errors.username && <p>{errors.username.message}</p>}
        <input 
        {...register("email", {
            required: "이메일이 필요해",
            validate: {
                notGmail: (value:string) => !value.includes("gmail.com") ? "" : "Gmail 같은건 사용할수없다구",

            },
        })}
        type="email" 
        placeholder="Email" 
        className={`${Boolean(errors.email?.message) } ? "border border-red-100 : "border border-red-500`}
         />
           {errors.email && <p>{errors.email.message}</p>}
        <input 
        {...register("password", {
            required: "패스워드가 필요해",
        })}
         type="password"
          placeholder="Password"
       
            />
        <input type="submit" value="create Account" />
        {errors.password && <p>{errors.password.message}</p>}


    </form>
}