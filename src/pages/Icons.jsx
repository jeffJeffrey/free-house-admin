import './Icons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faHome,
  faBed,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const categories = [
  { name: 'Appartement', icon: faBuilding },
  { name: 'Studio', icon: faHome },
  { name: 'Chambre', icon: faBed },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Categories = ({ onSelectCategory }) => {
  return (
    <div className="categories">
      <Carousel responsive={responsive} infinite={true}>
        {categories.map((category, index) => (
          <div key={index} className="category-item" onClick={() => onSelectCategory(category.name)}>
            <FontAwesomeIcon icon={category.icon} size="3x" className="category-icon" />
            <span>{category.name}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

Categories.propTypes = {
  onSelectCategory: PropTypes.func.isRequired,
};

export default Categories;
