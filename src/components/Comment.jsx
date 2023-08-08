import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }){
    const [likeCount, setLikeCount] = useState(0)

    function handleLikeCount(){
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return(
        <div className="flex mt-6 gap-4">
            <Avatar noBorder={true} src={'https://avatars.githubusercontent.com/u/105087841?v=4'} />      
            <div className="flex-1">
                <div className="bg-[#29292e] rounded-lg p-4">
                    <header className="flex items-start justify-between">
                        <div className="flex flex-col justify-between">
                            <strong className="text-sm">Gabriel Manika</strong>
                            <time className="text-xs text-[#29292e]" title="22 de junho de 2023 às 10:02h" dateTime="2022-22-06 10:02:03">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} className="bg-transparent border-0 cursor-pointer leading-[0] hover:text-[red] duration-300" title="Deletar comentário"> 
                            <Trash size={24} />
                        </button>
                    </header>
                    <p className="mt-4 text-[#8d8d99]">
                        {content}
                    </p>
                </div>
                <footer className="mt-4">
                    <button 
                     onClick={handleLikeCount}   
                     className="flex bg-transparent text-[#8d8d99] cursor-pointer items-center border-0 hover:text-[#00B37E]">
                        <ThumbsUp className="mr-2" /> 
                        Aplaudir <span className="before:py-0 before:px-1 before:content-['\2022']">{likeCount}</span>
                    </button>
                </footer>
            </div>    
        </div>
    )
}