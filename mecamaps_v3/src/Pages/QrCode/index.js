/*import React, { useState, useEffect } from 'react';
import { Div, Title, MainMenu, Floor, Map, Floor_img, Button} from './styles';
import { Link } from 'react-router-dom';*/

/*import QrReader from 'react-qr-reader';*/

/*import { useHereC1 } from "../../Context/options";

export default props => {
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

        <p>{result}</p>
    </div>
    )
}
}*/

import React, { useState, useEffect, Component } from 'react';
import QrReader from 'react-qr-scanner';
import ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export default props => {

    const [data, setData] = useState('Not Found');
    const history = useHistory();

    const handleError = (err) => {
        console.error(err)
    }

    useEffect(()=>{
        if(data==='Not Found') {
            return;
        }
        history.push(data);
    }, [data])

    const previewStyle = {
        height: 700,
        width: 1000,
        display: 'flex',
        justifyContent: 'center'
    }

    const camStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '-50px'
    }

    const textStyle = {
        fontSize: '30px',
        textAlign: 'center',
        marginTop: '100px'

    }

    return(
        <React.Fragment>
            <div style = {camStyle} >
                <QrReader
                    delay={100}
                    style={previewStyle}
                    onScan={(result) => {
                        if (result) {
                            console.log(result);
                            setData(result.text);
                        }
                        else setData("Not Found");
                    }}
                    onError={handleError}
                />
            </div>
            <p style = {textStyle}>
                {data}
            </p>
        </React.Fragment>
    )
}
/*


class QrContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            result: 'Hold QR Code Steady and Clear to Scan',
        }
        this.handleScan = this.handleScan.bind(this)
    }

    handleScan(data){
        console.log(data);
        if (data) {
            this.setState({
                result: data.text
            })
        }
    }

    handleError(err){
        console.error(err)
    }

    render(){
        const previewStyle = {
            height: 700,
            width: 1000,
            display: 'flex',
            justifyContent: 'center'
        }

        const camStyle = {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-50px'
        }

        const textStyle = {
            fontSize: '30px',
            textAlign: 'center',
            marginTop: '100px'

        }

        return(
            <React.Fragment>
                <div style = {camStyle} >
                    <QrReader
                        delay={100}
                        style={previewStyle}
                        onError={this.handleError}
                        onScan={this.handleScan}
                    />
                </div>
                <p style = {textStyle}>
                    {this.state.result}
                </p>
            </React.Fragment>
        )
    }
}

export default QrContainer;*/

