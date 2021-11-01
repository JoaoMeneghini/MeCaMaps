/*import React, { useState, useEffect } from 'react';
import QrReader from 'react-qr-reader';

import { useHereC1 } from "../../Context/options";

export default function QReader() {
    let [result, setResult] = useState('');
    let delay = 500;

    let { hereC1, setHereC1 } = useHereC1();

    handleScan(() => {
        if(result){
            setResult(result);
            setHereC1(result);
            }
    })

    const previewStyle = {
    height: 240,
    width: 320,
    }

    return(
    <div>
        <QrReader
        delay={delay}
        style={previewStyle}
        onScan={handleScan}
        />
        <p>{result}</p>
    </div>
    )
}
}*/
