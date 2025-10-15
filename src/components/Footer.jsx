import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-gray-100 p-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* 左侧：联系信息 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p>Phone: +86 131-9481-8402</p>
          <p>Email: bliu95922@gmail.com</p>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <Link to="#">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>

        {/* 中间：快速链接 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <div className="flex flex-row items-center space-x-6">
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <Link to="/about" className="text-blue-600 hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="text-blue-600 hover:underline">
              Contact
            </Link>
          </div>
        </div>

        {/* 右侧：订阅表单 */}
        <div>
          <h3 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h3>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
