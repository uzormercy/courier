import * as yup from 'yup';
import { useForm } from "react-hook-form"
import { useRouter } from "next/router";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginApi } from "@/libs/apis";
import Head from 'next/head';
import { setCookies } from '@/libs/authentication';

const Index = () => {
    const schema =  yup.object().shape({
        email: yup.string().email().required('The Email field is mandatory'),
        password: yup.string().required('The Password field is mandatory')
    })
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(schema)})
    const router = useRouter();
    const onSubmit = async (data) => {
        const { email, password } = data
        const user = await loginApi(email, password);
        if(user.status === 200){
            setCookies(user.entity.id);
            router.push('/adminaccess/dashboard');
        }
    }
    return <div className='login-section'>
        <Head>
            <title>Xdevlogistics - Login</title>
        </Head>
        <div className="container mx-auto">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card py-3">
                        <div className="card-body">
                            <h4 className='section-title'>Login</h4>
                            <form action="">
                                <div className="form-group mb-3">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" required className="form-control" {...register('email')} />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input id="password" type="password" required className="form-control" {...register('password')} />
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type='button' className="btn bg-orange text-white" onClick={handleSubmit(onSubmit)}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style>{`
        body{
            background: whitesmoke !important;
        }
        `}</style>
    </div>
}


export default Index