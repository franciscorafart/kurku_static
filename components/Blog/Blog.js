import { useState } from "react"

export default function Videos({posts}) {

    const [expanded, setExpanded] = useState('');

    return (<div className="container">
            <section >
                <h2>Blog</h2>
                <div className="article-container">
                    {posts.map(post =>
                        <article
                            key={post.id}
                            onClick={() => expanded === post.id? setExpanded('') : setExpanded(post.id)}
                        >
                            <h3 className=''>
                            {post.title}
                            </h3>
                            <span>by {post.author}</span>
                            <h4 className="">{post.subtitle}</h4>
                            {expanded === post.id && <div>
                                {post.content.map(({header, parragraph}) => <>
                                    {header &&  <h5>{header}</h5>}
                                    <p>{parragraph}</p>
                                </>
                                )}
                                </div>}
                        </article>
                    )}
            </div>
            </section>
            <style jsx>{`
                .container {
                    width: 100%;
                    padding-bottom: 120px;
                }
                section {
                    display: flex;
                    flex-direction: column;
                }
                .article-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 40px;
                }
                article {
                    border: 1px solid gray;
                    border-radius: 16px;
                    padding: 10px;
                    cursor: pointer;
                    width: 60%;
                }
                h2 {
                    font-size: max(3rem, 1vw);
                    text-align: center;
                    margin-left: 2rem;
                }
                h3 {
                    font-size: 2rem;
                    margin: 0;
                }
                span {
                    display: block;
                    padding-bottom: 16px;
                }
                h4, h5 {
                    margin: 0;
                    padding-bottom: 10px;
                }
                p {
                    margin: 0;
                    padding-bottom: 10px;
                }
                @media(max-width:650px){
                    h2 {
                        font-size: max(2rem, 1vw);
                        letter-spacing: 1rem;
                    }
                    h3 {
                        font-size: 1.5rem;
                    }
                }
            `}</style>               
        </div>
    )
  }

  