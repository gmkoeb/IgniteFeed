import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className="rounded-lg bg-[#202024] overflow-hidden">
            <img 
                className="w-full h-16 object-cover"
                src="https://images.unsplash.com/photo-1683369538156-171ceedee871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Foto de Perfil" 
            />

            <div className="flex flex-col items-center">
                <Avatar sidebar={true} src={'https://avatars.githubusercontent.com/u/105087841?v=4'} />
                <strong>Gabriel Manika</strong>
                <span className="text-sm text-[#8d8d99]">Físico</span>
            </div>

            <footer className="border-t-2 border-solid border-[#323238] mt-6 py-6 px-8">
                <a className="bg-transparent text-[#00875f] border-[#00875f] border-2 border-solid rounded-lg h-12 py-0 px-6 font-bold flex items-center justify-center no-underline gap-3 transition hover:bg-[#00875f] hover:text-white duration-300" href=""> <PencilSimpleLine size={16}/> Editar seu perfil</a>
            </footer>
        </aside>
    )
}