import { FormEvent, useContext, useState } from "react"
import { Header } from "../components/Header"
import { api } from "../lib/axios"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/authentication"

export function Login() {
    const setAuthToken = useContext(AuthContext).setToken
    const navigate = useNavigate()

    const [typedUserName, setUserName] = useState<string>('')

    const [typedPassword, setPassword] = useState<string>('')

    async function formSubmit(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault()
        await api.post('/login', {
            username: typedUserName,
            password: typedPassword
        }).then(function (response) {
            console.log(response.data.token)
            setAuthToken(response.data.token)
            navigate('/')
        }).catch(function (error) {
            alert(error.response.data.error)
        })
    }

    return (
        <div>
            <Header />
            <form onSubmit={formSubmit} className="flex justify-center mx-auto my-[25vh] bg-[#202024] w-[20vw] py-20 rounded-lg" action="/login" method="post">
                <div className="flex flex-col">
                    <div className="flex justify-center gap-2">
                        <img className="h-12 w-12 mb-10" src="/images/ignite_logo.svg" alt="Logo do Ignite" />
                    </div>
                    <div className="text-black flex flex-col mx-auto gap-10">
                        <label className="flex flex-col text-white" htmlFor="username">
                            Usuário:
                            <input onChange={event => setUserName(event.target.value)} className="w-[15vw] py-4 rounded-lg px-2 focus-within:scale-[100.5%] mt-2 text-black" type="username" name="username" />
                        </label>
                        <label className="flex flex-col text-white" htmlFor="password">
                            Senha:
                            <input onChange={event => setPassword(event.target.value)} className="w-[15vw] py-4 rounded-lg px-2 focus-within:scale-[100.5%] mt-2 text-black" type="password" name="password" />
                        </label>
                        <button className="text-white bg-[#00875f] mt-5 py-2 rounded-lg hover:opacity-90" type="submit">Entrar</button>
                        <p className="text-center text-white">Ainda não tem uma conta? <a className="text-[#00875f] hover:opacity-50" href="/accountCreation">Crie aqui!</a></p>
                    </div>
                </div>
            </form>
        </div>
    )
}