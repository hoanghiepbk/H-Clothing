import './directory.scss';
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({categories}) => {
  return (
    <div className='directory-container'>
      {categories.map((item) => {
        return(
          <DirectoryItem key={item.id} item={item}></DirectoryItem>
        )
      } )}
    </div>
  )
}

export default Directory;
