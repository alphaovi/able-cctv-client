import { getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import app from '../../../firebase/firebase.config';
import useToken from '../../../hooks/useToken';


const auth = getAuth(app);


const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");
    const [createdUserEmail, setCreatedUserEmail] = useState("");

    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if(token){
        navigate("/")
    }


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user);
        return (
            <div>
                <p>User: {user?.email}</p>
            </div>
        )
    }
    if (error) {
        console.log(error.message)
    };

    if (loading) {
        return <progress className="progress w-56"></progress>
    }


    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError("");
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast("User Created Successfully");
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => {
                console.log(err.message)
                setSignUpError(err.message);
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch("https://cctv-service-server.vercel.app/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // getUserToken(email)
                setCreatedUserEmail(email);
            })
    };

    // jwt token set in local storage from backend

    // const getUserToken = (email) => {
    //     fetch(`https://cctv-service-server.vercel.app/jwt?email=${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.accessToken) {
    //                 localStorage.setItem("accessToken", data.accessToken);
    //                 navigate("/")
    //             }
    //         })
    // }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <p className="text-2xl font-bold text-center">Sign Up</p>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" className="input input-bordered"
                                        {...register("name", {
                                            required: "Enter Your Name"
                                        })} />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="Email" className="input input-bordered"
                                        {...register("email", {
                                            required: "Email Addres is Required"
                                        })} />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="Password" className="input input-bordered"
                                        {...register("password",
                                            { required: "Password is Required", minLength: { value: 6, message: "Password Must Be 6 Characters More" } })}

                                    />

                                    <label className="label">
                                        <Link to="/forgetpass" href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>

                                    {
                                        signUpError && <p className="text-red-600">{signUpError}</p>
                                    }
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>

                                <p>Already Have An Account <Link className="text-primary font-bold" to="/login">Login</Link></p>
                                <div className="divider">OR</div>
                                <div>
                                    <button onClick={() => signInWithGoogle()} className="btn btn-outline w-full">Continue With Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;