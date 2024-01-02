"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hover } from "@/lib/hover";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';

type UserAuthForm = {
	email: string
	password: string
}

// membuat validasi menggunakan yup
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
}).required();

// jadi ketika error, dia baca schema nya. di dalam schema ada kondisi2 nya
function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<UserAuthForm>({
    resolver: yupResolver(schema),
  });

  // untuk check data ketika submit
  // data yg diambil dari userauthform
  const onSubmit = (data: UserAuthForm) => {
    console.log("🚀 ~ file: sign-in-form.tsx:30 ~ onSubmit ~ data:", data)
  }

  return (
    // pertama validasi handlesubmit dlu, abis itu baru ke onSubmit
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[100%] gap-4 items-center">
      <div className="w-[100%] text-3xl font-semibold tracking-widest mb-2 text-center">
        Masuk akun anda
      </div>
      
      <div className="w-[100%] relative">
        <Input
          className="w-[100%] p-4 rounded-sm"
          type="text"
          placeholder="Email"
					{...register("email")}
					error = {errors.email?.message}
        />
      </div>
      <div className="w-[100%] relative">
        <Input
          className="w-[100%] p-4 rounded-sm"
          type={showPassword ? "text" : "password"}
          placeholder="Kata Sandi"
          suffix="Eye"
          onPressSuffix={() => setShowPassword(!showPassword)}
					{...register("password")}
					error = {errors.password?.message}
        />
      </div>

      <Button
        className={cn("w-[320px] bg-leaf mt-6", hover.shadow)}
        type="submit"
      >
        Masuk
      </Button>
    </form>
  );
}

export default SignInForm;
