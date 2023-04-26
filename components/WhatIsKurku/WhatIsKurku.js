export default function Videos() {
    return (<div className="container">
            <section >
                <h2>What is Kurku?</h2>
                <div className="p-container">
                    <p>Introducing Kurku, the revolutionary MIDI controller software that lets you take control of your external MIDI devices using just your body movements. Unlike other body controllers on the market, Kurku requires no additional sensors or hardware beyond your laptop, browser, and integrated webcam. Say goodbye to expensive wearables and hardware - Kurku is accessible and affordable for everyone. Try it for free today!</p>
                </div>
                
            </section>
            <style jsx>{`
                .container {
                    width: 100%;
                }
                section {
                    display: flex;
                    flex-direction: column;
                    background-color: black;
                    color: #f5f5f5;
                    min-height: 560px;
                    align-items: center
                }
                .p-container {
                    padding-top: 40px;
                    width: 50%;
                }
                h2 {
                    color:#f5f5f5;
                    font-size: max(3rem, 1vw);
                    text-align: center;
                    margin-left: 2rem;
                }
                p {
                    font-size: max(1.8rem, 1vw);
                    margin: 0;
                    padding-bottom: 10px;
                }
                @media(max-width:650px){
                    h2 {
                        font-size: max(2rem, 1vw);
                        letter-spacing: 1rem;
                    }
                    .p-container {
                        width: 100%;
                        padding: 0 20px;
                    }

                    p {
                        font-size: max(1.4rem, 1vw);
                    }
                }
            `}</style>               
        </div>
    )
  }

  