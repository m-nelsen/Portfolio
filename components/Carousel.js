import React from "react"

class Carousel extends React.Component{
    constructor(props){
        super(props);

        this.state={
            childrenCount: null,
            currentImageIndex: 1
        }

        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    componentDidMount(){
        this.setState({childrenCount: this.props.children.length});
        this.interval = setInterval(this.nextSlide, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    prevSlide(){
        const lastIndex = this.state.childrenCount - 1;
        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
           this.setState({
                currentImageIndex: index
           })
       }
    
    nextSlide(){
        const lastIndex = this.state.childrenCount - 1;
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;
          this.setState({
              currentImageIndex: index
          });
       }

    render(){
        return(
            <div className={this.props.style}>
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {className: (this.state.currentImageIndex == child.key) ? this.props.activeImg : this.props.inactiveImg})
                    })}
            </div>
        )
    }
}

export default Carousel;