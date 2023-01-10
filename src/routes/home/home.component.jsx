import './home.scss';
import Directory from '../../components/directory/directory.component';
import hat from '../../assets/img/hats.png'
import jackets from '../../assets/img/jackets.png'
import men from '../../assets/img/men.png'
import sneakers from '../../assets/img/sneakers.png'
import womens from '../../assets/img/womens.png'

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'HATS',
      imageUrl: hat,
    },
    {
      id: 2,
      title: 'JACKETS',
      imageUrl: jackets,
    },
    {
      id: 3,
      title: 'SNEAKERS',
      imageUrl: sneakers,
    },
    {
      id: 4,
      title: 'WOMENS',
      imageUrl: womens,
    },
    {
      id: 5,
      title: 'MENS',
      imageUrl: men,
    },
  ];
  return (
    <div className="App">
      <Directory categories={categories}></Directory>
    </div>
  );
}

export default Home;
