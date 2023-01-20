import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
  confirmPassword: string;
}

function register() {
  const [regestier, setRegestier] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({
    email,
    password,
    confirmPassword,
  }) => {
    if (regestier) {
      await signUp(email, password, confirmPassword);
    } else {
      await signIn(email, password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Regestier - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />

      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign Up</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="pt-3 text-[16px] font-light text-red-600">
                Please enter a valid email.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="pt-3 text-[16px] font-light text-red-600">
                Your password must contain 4 and 60 characters.
              </p>
            )}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.confirmPassword && (
              <p className="pt-3 text-[16px] font-light text-red-600">
                Your password does not match
              </p>
            )}
          </label>
        </div>
        <button
          onClick={() => setRegestier(true)}
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
        >
          Sign Up
        </button>
        <div className="text-[gray]">
          Already have an account?{" "}
          <Link href="/login" className="text-white hover:underline">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default register;
