import { useState, useEffect } from 'react';
import './App.css';

const DOCUMENT = "/opencall.pdf";

const App = () => {
    const [height, setHeight] = useState(700);

    const resize = () => {
        const windowHeight = window.innerHeight;
        setHeight(windowHeight);
    }

    useEffect(() => {
        window.addEventListener('load', resize);
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('load', resize);
            window.removeEventListener('resize', resize);
        }
    }, []);

    return (
        <div className="App">
            <iframe
                title="PDF"
                src={`/pdfjs-2.5.207-es5-dist/web/viewer.html?file=${DOCUMENT}`}
                width="100%"
                height={height}
            ></iframe>
        </div>
    )
}

export default App;