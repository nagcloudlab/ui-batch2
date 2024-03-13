


export function Home() {
    return (
        <>
            <div className="p-4 shadow-4 rounded-3" style={{
                marginTop: "20px",
                backgroundColor: "white"
            }}>
                <h2>Hello Kyndryl!</h2>
                <p>
                    This is a simple hero unit, a simple Hero-style component for calling extra
                    attention to featured content or information.
                </p>

                <hr className="my-4" />

                <p>
                    It uses utility classes for typography and spacing to space content out within the
                    larger container.
                </p>
                <button type="button" className="btn btn-primary">
                    Learn more
                </button>
            </div>
        </>
    );
}