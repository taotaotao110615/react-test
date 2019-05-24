import React from 'react';
import './tank.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Example from "./information/information";
import { BrowserRouter, Route,Link } from 'react-router-dom';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            zhyz:'',
            zhmm:'',
            zhenghe:'请输入您的账户名和密码',
            ip:'none'
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
    changevalzh(){
        var inp=document.getElementById('inphz');
        var inpval=inp.value;

        if(inpval==""){
            this.setState({zhyz:'请输入账户名'})
        }else {
            this.setState({zhyz:''})
        }
    }
    changevalmm(){
        var inp=document.getElementById('inpmm');
        var inpval=inp.value;

        if(inpval==""){
            this.setState({zhmm:'请输入密码'})
        }else {
            this.setState({zhmm:''})
        }
    }
    denglu(){
        let inp=document.getElementById('inphz');
        let ing=document.getElementById('inpmm');
        let inpval=inp.value;
        let ingval=ing.value;
        let geren=document.getElementsByClassName('gerenxinxi')[0];
        if(inpval=='admin'&&ingval=='admin'){
            this.setState({
                modal:false,
                ip:'block'
            });
        }else {
            this.setState({
                zhenghe:'账户名或密码不正确，请重新输入'
            });
        }
    }
    s(){
        this.setState({
            ip:'none'
        })
    }
    huiche(e){
        if(e.keyCode===13){
            let inp=document.getElementById('inphz');
            let ing=document.getElementById('inpmm');
            let inpval=inp.value;
            let ingval=ing.value;
            let geren=document.getElementsByClassName('gerenxinxi')[0];
            if(inpval=='admin'&&ingval=='admin'){
                this.setState({
                    modal:false,
                    ip:'block'
                });
            }else {
                this.setState({
                    zhenghe:'账户名或密码不正确，请重新输入'
                });
            }
        }
    }
    render() {
        return (
            <div>
                <div onClick={this.toggle} style={{cursor:'pointer'}}>登陆</div>
                <div className="gerenxinxi">
                    <Example ip={this.state.ip} asd={()=>this.s()}></Example>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.zhenghe}</ModalHeader>
                    <ModalBody>
                        <div className="acount-box">
                            <div className="acount">
                                <div>账户 : </div>
                                <input type="tite" placeholder="请输入账户" id="inphz" onChange={()=>this.changevalzh()} />
                            </div>
                            <div className="yc">
                                {this.state.zhyz}
                            </div>
                            <div className="acount">
                                <div>密码 : </div>
                                <input  onKeyDown={(event)=>this.huiche(event)} type="password" placeholder="请输入密码" id="inpmm" onChange={()=>this.changevalmm()} />
                            </div>
                            <div className="yc">
                                {this.state.zhmm}
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>this.denglu()}>确定</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;
