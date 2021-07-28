import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
  <div style={{textAlign:'center'}} className='mt-64 md:mt-48 mb-8'>
    made by <a href='http://github.com/adnjoo'>adnjoo&nbsp;
    <FontAwesomeIcon icon={['fab','github']}/>
    </a>
  </div>
  )
}

export default Footer;