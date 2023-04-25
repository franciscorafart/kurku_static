import { useState } from "react"

export default function Videos({posts}) {

    const [expanded, setExpanded] = useEffect('');

    return (<div>
            <section className={styles.videos}>
                <h2 className={styles.videos__h2}>Blog</h2>

                {posts.map(post =>
                    <article className=''
                    key={post.id}
                    style={{ padding: 20, borderBottom: '1px solid #ccc' }}
                    onClick={() => expanded === post.id? setExpanded('') : setExpanded(post.id)}
                    >
                        <h3 className=''>
                        {post.title}
                        </h3>
                        <h4 className="">{post.subtitle}</h4>
                        {expanded === post.id && <div>
                            {post.content.map(({header, parragraph}) => <>
                                {header &&  <h5>{header}</h5>}
                                <p>{parragraph}</p>
                            </>
                            )}
                            </div>}
                    </article>
                )
                }
            </section>
            <style jsx>
            </style>               
        </div>
    )
  }

  