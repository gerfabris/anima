import { FaRegWindowClose } from 'react-icons/fa'
import './ModalServices.css'

export const ModalPortfolio = ( { closeModal, portfolio }) => {

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') closeModal()
    }
    
    return(
        <div
            id="wrapper"
            onClick={ handleClose}
            className='overlay'
        >
            <div id={portfolio.id} className='container__modal'>
                <div className='modal__title'>
                    <h3> {portfolio.title} </h3>
                </div>
                <button     
                    onClick={ closeModal}
                    className='modal__button'
                >
                    <FaRegWindowClose/>
                </button>
                <div>
                    
                    <p>{portfolio.description}</p>
                    <img
                        src={portfolio.image}
                        alt={portfolio.title}
                        className="service-image"
                    />
                </div>
            </div>
        </div>
    )
}