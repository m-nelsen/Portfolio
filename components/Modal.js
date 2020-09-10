import React from 'react';
import Backdrop from "./Backdrop"

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevstate => ({
            isModalOpen: !prevstate.isModalOpen
        }));
    }

    render(){
        return(
            <div>
                <button className={this.props.button} onClick={this.handleClick}>More Info</button>
                {this.state.isModalOpen ? (
                    <div>
                        <Backdrop click={this.handleClick} />
                        <div className={this.props.modal}>
                            <img onClick={this.handleClick} 
                                 src="/img/landing/close-button.svg" 
                                 alt="Close Button" 
                                 className={this.props.closeButtonStyle}  />
                            {this.props.children}
                        </div>
                    </div>
                ) : ("")}
            </div>
        )
    }
}

export default Modal;