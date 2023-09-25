import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { api } from "../lib/axios"
import { useNavigate } from "react-router-dom"

export function AccountCreation() {
    const navigate = useNavigate()

    const [typedEmail, setEmail] = useState<string>('')

    const [typedUserName, setUserName] = useState<string>('')

    const [typedPassword, setPassword] = useState<string>('')

    async function formSubmitTest(event: FormEvent<HTMLFormElement>) {
        event?.preventDefault()
        await api.post('/accountCreation', {
            email: typedEmail,
            username: typedUserName,
            password: typedPassword

        }).then(function (response) {
            console.log(response)
            navigate('/login')
        }).catch(function (error) {
            console.log(error)
        })
    }

    function handleInvalidEmail(event: React.ChangeEvent<HTMLInputElement>) {
        event?.target.setCustomValidity('Digite um email válido, user@email.com')
    }

    function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value)
        event.target.setCustomValidity('')
    }

    return (
        <div>
            <Header />
            <form onSubmit={formSubmitTest} className="flex justify-center mx-auto my-[25vh] bg-[#202024] w-[20vw] py-20 rounded-lg" action="/accountCreation" method="post">
                <div className="flex flex-col">
                    <div className="flex justify-center gap-2">
                        <img className="h-12 w-12" src="/images/ignite_logo.svg" alt="Logo do Ignite" />
                        <h1 className="text-2xl my-5">Crie sua conta!</h1>
                    </div>
                    <div className="text-black flex flex-col mx-auto">
                        <input
                            onInvalid={handleInvalidEmail}
                            required
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                            onChange={handleEmailChange}
                            className="w-[15vw] py-4 border-b-2 rounded-t-lg px-2 focus-within:scale-[100.5%]"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <input required onChange={event => setUserName(event.target.value)} className="w-[15vw] py-4 border-b-2 px-2 focus-within:scale-[100.5%]" type="username" name="username" placeholder="Usuário" />
                        <input required onChange={event => setPassword(event.target.value)} className="w-[15vw] py-4  rounded-b-lg px-2 focus-within:scale-[100.5%]" type="password" name="password" placeholder="Senha" />
                        <button className="text-white bg-[#00875f] mt-5 py-2 rounded-lg hover:opacity-90" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}