import React ,{ Component } from 'react';

class CustomCarousel extends Component {
   
    constructor(props){
        super(props);
        this.state = { show: false }
    }

      
    render() {
      return (
        <main>
          <Modal show={this.props.show} handleClose={this.props.handleClose} >
            <div id="carouselExampleIndicators"  className="carousel slide" data-ride="carousel">
                    <ol  className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0"  className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        {this.props.productImages.length > 2 ? <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> : null}  
                    </ol>
                    <div  className="carousel-inner">                            
                        <div  className="carousel-item active">
                            <img   src={ this.props.productImages[0].href }  alt="First slide"/>
                        </div>
                        <div  className="carousel-item">
                            <img  src={ this.props.productImages[1].href}  alt="Second slide"/>
                        </div>                                           
                        {this.props.productImages.length > 2 
                        ?    
                            <div  className="carousel-item"> 
                                <img  src={ this.props.productImages[2].href}  alt="Third slide"/>
                            </div>
                        : 
                            null
                        }                                         
                        
                    </div>
                    <a  className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span  className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span  className="sr-only">Previous</span>
                    </a>
                    <a  className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <div className="modalClose" onClick={this.props.handleClose}>X</div>
                        <span  className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span  className="sr-only">Next</span>
                    </a>
            </div>
          </Modal>
        </main>
      )
    }
  }
  
  const Modal = ({ show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
        </section>
      </div>
    );
  };
  

  export default CustomCarousel;