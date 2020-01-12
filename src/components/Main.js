import React from 'react';
import { firestore } from "../config/firebase";

export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cont: 0,
            id: "",
            no: {
                position: "absolute",
                left: "20%"
            },
            si: {
                position: "absolute",
                right: "20%"
            },
            size: ""
        }
        this.getData = this.getData.bind(this)
    }

    getPromise(){
        const data = firestore.collection('test').get();
        return data;
    }

    async getData(){
        const promise = await Promise.resolve(this.getPromise());
        return promise
    }

    componentDidMount(){
        this.getData().then(value=>value.docs.map(data=>this.setState({id: data.id})));
        this.tamVentana();
    }

    tamVentana() {
    let tam = [0, 0];
    if (typeof window.innerWidth !== 'undefined'){
        tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement !== 'undefined'
        && typeof document.documentElement.clientWidth !==
        'undefined' && document.documentElement.clientWidth !== 0){
        tam = [
            document.documentElement.clientWidth,
            document.documentElement.clientHeight
        ];
    } else {
        tam = [
            document.getElementsByTagName('body')[0].clientWidth,
            document.getElementsByTagName('body')[0].clientHeight
        ];
    }
    return this.setState({size: tam});
    }

    numRandomHorizontal(){
        let numero = Math.floor(Math.random()*this.state.size[0]);
        return numero;
    }

    numRandomVertical(){
        let numero = Math.floor(Math.random()*this.state.size[1]);
        return numero;
    }

    buttonCustom(){
        let id = this.state.id;
        let top = this.numRandomVertical(), left = this.numRandomHorizontal(), bottom = this.numRandomVertical(), right = this.numRandomHorizontal();
        this.setState({
            no: {
                position: 'absolute',
                top: `${top}px`,
                left: `${left}px`,
                right: `${right}px`,
                bottom: `${bottom}px`
            }
        })
        firestore.collection('test').doc('app').update({
            cont: this.state.cont
        })
        this.setState({cont: this.state.cont + 1})
    }

    render(){
        return(
            <div>
                <h1>¿Quieres ser mi novia?</h1>
                <div style={this.state.no} className="button-no">
                    <button onClick={()=>console.log(":'v")} onMouseOver={()=>this.buttonCustom()} style={{width:"100px", height:"50px"}}>No</button>
                </div>
                <div style={this.state.si} className="button-si">
                    <button onClick={()=>alert('<3 Sabia que ibas a decir si mi amor <3')} style={{width:"100px", height:"50px"}}>Si</button>
                </div>
            </div>
        )
    }
}