import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (<div style={{textAlign:'center',marginTop: '150px'}}>
    made by <a href='http://github.com/adnjoo'>adnjoo&nbsp;
    <FontAwesomeIcon icon={['fab','github']}/>
    </a>
  </div>)
}

export default Footer;