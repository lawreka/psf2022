const DOCUMENT = "/opencall.pdf";

const App = () => {
    return (
        <div className="App">
            <iframe
                title="PDF"
                src={`/pdfjs-2.5.207-es5-dist/web/viewer.html?file=${DOCUMENT}`}
                width="100%"
                height="700px"
            ></iframe>
        </div>
    )
}

export default App;