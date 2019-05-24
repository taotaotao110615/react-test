import React from 'react';
import './App.css';
import './mockdata';
import axios from 'axios';
import Ahead from './head/Ahead';
import Footer from "./foot/footer";
import Subject from './subject/subject'
import Nvig from './router/Nvig'
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            news:[]
        }
    }
    componentDidMount() {
        axios.get('/data',{dataType:'json'}).then(res=>{
            console.log(res.data.name)
            this.setState({
                news:res.data.name
            })
        })
    }
    render() {
        return (
            <div className="App">
                <Ahead></Ahead>
                <div className="cont-box">
                    <BrowserRouter>
                        <Switch >
                            <Route path='/home' component={Subject} />
                            <Route path='/nvig' component={Nvig} />
                            <Redirect to='/home' />
                        </Switch>
                    </BrowserRouter>
                </div>
                <Footer></Footer>
            </div>
        );
    }


}

export default App;
