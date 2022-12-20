import './directory-item.scss';
import { Link } from 'react-router-dom';

const DirectoryItem = ({item}) => {
  const {title, imageUrl} = item;
  const link = '/shop/' + title.toLowerCase();
  return (
      <Link to = {link} className='directory-item-container'>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}} />
        <div className='directory-item-body-container'>
          <h2>{title}</h2>
          <p>SHOP NOW</p>
        </div>
      </Link>
  )
}

export default DirectoryItem;
