import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import one from "./one.jpg";
import './information.css';


class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            opped:false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    dotoggle(){
       this.props.asd()
    }
    render() {
        return (
            <div style={{display:this.props.ip}}>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        <div>
                            <img src={one} alt="" width="30%" height="30%" />
                            <span className="spaap">个人信息</span>
                        </div>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>打篮球精选</DropdownItem>
                        <DropdownItem disabled>RAP特技</DropdownItem>
                        <DropdownItem>唱歌斗舞</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem >
                            <div onClick={()=>this.dotoggle()}>退出</div>
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        );
    }
}

export default Example
