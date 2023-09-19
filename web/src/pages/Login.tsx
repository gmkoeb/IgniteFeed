import { Header } from "../components/Header"

export function Login(){
    return(
        <div>
            <Header />
                <form className="flex justify-center mx-auto my-[25vh] bg-[#202024] w-[20vw] py-20 rounded-lg" action="/create account" method="post">
                    <div className="flex flex-col">
                        <div className="flex justify-center gap-2">
                            <img className="h-12 w-12 mb-10" src="/images/ignite_logo.svg" alt="Logo do Ignite" />
                        </div>
                        <div className="text-black flex flex-col mx-auto gap-10">
                            <label className="flex flex-col text-white" htmlFor="username">
                                Usuário:
                                <input className="w-[15vw] py-4 rounded-lg px-2 focus-within:scale-[100.5%] mt-2 text-black" type="username" name="username"/>
                            </label>
                            <label className="flex flex-col text-white" htmlFor="password">
                                Senha:
                                <input className="w-[15vw] py-4 rounded-lg px-2 focus-within:scale-[100.5%] mt-2 text-black"  type="password" name="password"/>
                            </label>
                            <button className="text-white bg-[#00875f] mt-5 py-2 rounded-lg hover:opacity-90" type="submit">Entrar</button>
                            <p className="text-center text-white">Ainda não tem uma conta? <a className="text-[#00875f] hover:opacity-50" href="/accountCreation">Crie aqui!</a></p>
                        </div>
                    </div>
                </form>
            </div>
    )
}