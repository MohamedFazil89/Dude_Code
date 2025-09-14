import "./dude.css"


export default function Dude() {
    return (
        <div className="Dude-Container">
            <p className='Dude-Title'><span>Dude Code</span> Do ?</p>
            <section className="dude-body">
                <span className="Video-title">
                    <p>CLI API Automation Testing</p>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/H9KO_E6jXW0?si=izDI60Ckc0QDgY9a&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </span>
                <span className="Dude-Content">
                    <p>With <span>Dude Code</span>, you can run and test APIs directly from the command line through a clean,
                        visual interface. Forget juggling cURL commands
                        or switching between tools — just execute, debug, and view responses instantly in one place.</p>
                        <button>Try Now!</button>
                </span>
            </section>



        </div>
    )
}