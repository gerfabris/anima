import './ItemSocialMedia.css'

export const ItemSocialMedia = ({id, href, alt, svg}) => {
    return(
        <a key={id} href={href} alt={alt} className="socialMedia-a">
            <div className='itemSocialMedia__container-svg'>
                {svg}
            </div>
        </a>
    )
}
