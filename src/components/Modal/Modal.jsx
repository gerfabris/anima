import { FaRegWindowClose } from 'react-icons/fa'
import './ModalServices.css'

export const Modal = ( { closeModal, service }) => {

    const handleClose = (e) => {
        if (e.target.id === 'wrapper') closeModal()
    }
    
    return(
        <div
            id="wrapper"
            onClick={ handleClose}
            className='overlay'
        >
            <div id={service.id} className='container__modal'>
                <div className='modal__title'>
                    <h3> {service.title} </h3>
                </div>
                <button     
                    onClick={ closeModal}
                    className='modal__button'
                >
                    <FaRegWindowClose/>
                </button>
                <div>
                    
                    <p>{service.description}</p>
                    <img
                        src={service.image}
                        alt={service.title}
                        className="service-image"
                    />
                </div>
            </div>
        </div>
    )
}