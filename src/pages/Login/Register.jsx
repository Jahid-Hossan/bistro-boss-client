import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()

    const [disabled, setDisabled] = useState()


    useEffect(() => {
        loadCaptchaEnginge(2);
    }, [])


    const handleCaptcha = (e) => {
        const captcha = e.target.value;
        console.log(captcha)

        if (validateCaptcha(captcha) == true) {
            setDisabled(false)
        } else {
            // setDisabled(true)
        }

    }

    const onSubmit = (data) => {
        console.log(data)
    };

    // console.log(watch("example"))

    return (
        <>
            <div className="flex flex-col justify-center pt-10 pb-14 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
                    {/* Logo */}
                    <div className="mx-auto h-9 mt-14 text-heading">
                        <h1 className="text-center text-3xl font-semibold text-heading">
                            Bistro Boss
                        </h1>
                    </div>

                    <p className="mt-6 text-center text-sm text-text">
                        Already have an account?{" "}
                        <Link
                            to={'/login'}
                            className="font-semibold text-primary hover:text-primary-accent"
                        >
                            Log In
                        </Link>
                    </p>
                </div>

                <div className=" sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-layer-2 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-heading"
                                >
                                    Email
                                </label>
                                <input
                                    {...register("email")}
                                    name="email"
                                    type="email"
                                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-semibold text-heading"
                                >
                                    Password
                                </label>
                                <input
                                    {...register("password")}
                                    name="password"
                                    type="password"
                                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                                />
                            </div>

                            <div className="flex justify-end">
                                <a
                                    href="#"
                                    className="text-sm font-semibold text-primary hover:text-primary-accent"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <div className="">
                                <LoadCanvasTemplate></LoadCanvasTemplate>
                                <input

                                    onBlur={handleCaptcha}
                                    name="captcha"
                                    type="text"
                                    className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
                                />
                            </div>

                            <input
                                disabled={disabled}
                                type="submit"
                                className="btn btn-primary"
                                value='Sign Up'
                            />


                        </form>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Register;