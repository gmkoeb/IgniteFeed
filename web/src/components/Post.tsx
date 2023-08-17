import { useState, ChangeEvent, FormEvent } from "react";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

export interface PostProps {
    id?: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface Content{
    type: 'paragraph' | 'link'
    content: string
}

export function Post({ author, publishedAt, content }: PostProps){
    const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale:ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
    })

    const [comments, setComments] = useState([
        'Post muito bacana, hein?!'
    ])
    
    const [newCommentText, setNewCommentText] = useState('')

    function newCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
       setNewCommentText(event.target.value)
    }

    function createNewComment(event: FormEvent){
        event.preventDefault()

        setComments([...comments, newCommentText])
        
        setNewCommentText('')
    }

    function deleteComment(commentToDelete: string){
        setComments(comments.filter(
            (comment) => comment !== commentToDelete)
        )
    }
    
    return(
        <article className="bg-[#202024] rounded-lg p-10 post">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                <Avatar src={author.avatarUrl} />
                    <div className="ml-3">
                        <strong className="block text-[#e1e1e6] leading-7">{author.name}</strong>
                        <span className="block text-sm text-[#8d8d99]">{author.role}</span>
                    </div>
                </div>
                <time className="text-sm text-[#8d8d99]" title={ publishedAtFormatted } dateTime={publishedAt.toISOString()}>{ publishedDateRelativeToNow  }</time>
            </header>
            <div className="leading-7 text-[#c4c4cc] mt-6"> 
                {content.map(line => {
                    if (line.type === 'paragraph'){
                        return <p key={line.content} className="mt-4">{line.content}</p>
                    }else if(line.type === 'link'){
                        return <a key={line.content} className="font-bold text-[#00875f] hover:text-[#00B37E]" href="">{line.content}</a>
                    }
                })}     
            </div>
            <form onSubmit={createNewComment} className="show-hide w-full mt-6 pt-6 border-t-[1px] border-solid border-t-gray-800" action="" method="post">
                <strong className="leading-6 text-[#e1e1e6]">Deixe seu feedback</strong>
                <textarea 
                    value={newCommentText} 
                    onChange={newCommentChange} 
                    name="comment"  
                    className="w-full bg-[#121214] border-0 resize-none h-24 p-4 rounded-lg text-[#e1e1e6] mt-4"
                    placeholder="Deixe um comentário"
                    required
                />
                <footer className="invisible max-h-0">
                    <button 
                        className="py-4 px-6 mt-4 rounded-lg border-0 bg-[#00875f] cursor-pointer text-white font-bold hover:bg-[#00B37E] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#00875f]"
                        type="submit"
                        id="submitButton"
                        disabled={newCommentText.length === 0}
                    >
                        Publicar
                    </button>
                </footer>
            </form>
            <div>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )
}
