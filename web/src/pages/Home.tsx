import { Header } from "../components/Header"
import { Post, PostProps } from "../components/Post"
import { Sidebar } from "../components/Sidebar"
import '../global.css'

const posts: PostProps[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/105087841?v=4', 
      name: 'Gabriel Manika',
      role: 'Físico'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare ' },
      { type: 'link', content: '#nlw' },
      { type: 'link', content: '#novoprojeto' },
      { type: 'link', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/40374187?v=4', 
      name: 'Debora Oliveira',
      role: 'Programadora'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻, Acesse e deixe seu feedback:' },
      { type: 'link', content: 'devonlane.design ' },
      { type: 'link', content: '#uiux' },
      { type: 'link', content: '#userexperience' },
    ],
    publishedAt: new Date('2022-04-03 20:00:00'),
  },
]


function Home() {
 
  return (
    <div>
      <Header />
      <div className="max-w-[70rem] mx-auto my-8 py-0 px-4 gap-8 items-start grid grid-cols-[200px_minmax(256px,_1fr)] max-md:grid-cols-[minmax(256px,_1fr)]">
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default Home
