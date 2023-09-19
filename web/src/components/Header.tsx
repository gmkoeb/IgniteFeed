export function Header(){
    return(
        <header className="bg-[#202024] py-5 flex items-center w-100vw pl-24">
            <div className="flex items-center gap-5 mx-auto">
                <img className="h-12 w-12" src="/images/ignite_logo.svg" alt="Logo do Ignite" />
                <strong className="text-4xl">Ignite Feed</strong>
            </div>
            <div className="text-white">
                <a className="px-4 py-4 text-center bg-[#00875f] rounded-lg hover:opacity-80 hover:duration-300" href="/accountCreation">Criar Conta</a>
                <a className="px-4 py-4 hover:text-[#00875f] hover:duration-300 mx-5" href="/login">Entrar</a>
            </div>
        </header>
    )
}