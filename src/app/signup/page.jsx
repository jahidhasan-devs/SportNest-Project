"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
const router = useRouter();

const onSubmit =async(e)=>{
    e.preventDefault();
    const formData=new FormData(e.currentTarget)
    const user=Object.fromEntries(formData.entries())
   

    const { data, error } = await authClient.signUp.email({
        email:user.email,
        password:user.password, 
        name:user.name, 
        image:user.image       
    });
    // console.log({data, error});

    if(data){
      redirect('/')
    }
    if(error){
      alert("Not pasible create to account")
    }
}

//for google login
const handleGoogle = async () => {
await authClient.signUp.social({
    provider: "google",
  });
};


  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-4 py-8">
      <Card className="w-full max-w-md rounded-3xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Your Account
          </h1>
          <p className="text-gray-500 mt-2">
            Join <span className="font-semibold text-blue-600">SportNest</span>{" "}
            and booking your favorite sports .
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">
          <TextField isRequired name="name" type="text">
            <Label>Full Name</Label>
            <Input
              placeholder="John Doe"
              classNames={{
                inputWrapper: "rounded-xl",
              }}
            />
            <FieldError />
          </TextField>

          <TextField name="image" type="url">
            <Label>Profile Image URL</Label>
            <Input
              placeholder="https://example.com/image.jpg"
              classNames={{
                inputWrapper: "rounded-xl",
              }}
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email Address</Label>
            <Input
              placeholder="[email protected]"
              classNames={{
                inputWrapper: "rounded-xl",
              }}
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              classNames={{
                inputWrapper: "rounded-xl",
              }}
            />
            <Description>
              Minimum 8 characters, 1 uppercase letter & 1 number.
            </Description>
            <FieldError />
          </TextField>

          <Button
            type="submit"
            color="primary"
            className="w-full h-10 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
          >
            Create Account
          </Button>
        </Form>

        {/* Divider */}
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>

          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign In */}
        <Button
          onClick={handleGoogle}
          variant="bordered"
          className="group w-full h-10 rounded-xl border border-gray-300 bg-white text-gray-700 font-medium shadow-sm hover:shadow-lg hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
        >
          <FcGoogle className="text-2xl transition-transform duration-300 group-hover:scale-110" />
          <span className="ml-3">Continue with Google</span>
        </Button>

        <p className="text-center text-xs text-gray-400 mt-1">
          Fast, secure and trusted authentication with Google
        </p>

        {/* Login */}
        <div className=" text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition"
            >
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
