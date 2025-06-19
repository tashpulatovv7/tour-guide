import { useState } from 'react';
import { FaBriefcase, FaBus, FaMapMarkerAlt, FaTaxi, FaTree } from 'react-icons/fa';

import alaskaImage from '../assets/alaska.png';

import './PopularCities.css';

const cities = ['New York', 'California', 'Alaska', 'Sidney', 'Dubai', 'London', 'Tokyo', 'Delhi'];

const tags = [
	{ icon: <FaBus />, label: 'Public Transportations', color: '#DCC6FF' },
	{ icon: <FaTree />, label: 'Nature & Adventure', color: '#D6F5E3' },
	{ icon: <FaBriefcase />, label: 'Business Tours', color: '#FFD6D6' },
];

const tags2 = [
	{ icon: <FaTaxi />, label: 'Private Transportations', color: '#FFF4D6' },
	{ icon: <FaMapMarkerAlt />, label: 'Local Visit', color: '#D6E6FF' },
];

const PopularCities = () => {
	const [selectedCity, setSelectedCity] = useState('Alaska');

	return (
		<div className='popular-cities'>
			<h2 className='title'>Explore Popular Cities</h2>
			<p className='subtitle'>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
				Velit officia consequat duis enim velit mollit
			</p>
			<div className='city-buttons'>
				{cities.map(city => (
					<button
						key={city}
						className={`city-btn ${selectedCity === city ? 'active' : ''}`}
						onClick={() => setSelectedCity(city)}
					>
						{city}
					</button>
				))}
			</div>
			<img src={alaskaImage} alt={selectedCity} className='city-image' />
			<div className='city-info'>
				<div className='info-text'>
					<h3>{selectedCity}</h3>
					<p>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do
						amet sint. Velit officia consequat duis enim velit mollit.
						Exercitation veniam consequat sunt nostrud amet.
					</p>
				</div>

				<div className='tags'>
					{tags.map(tag => (
						<div
							className='tag'
							style={{ backgroundColor: tag.color }}
							key={tag.label}
						>
							{tag.icon}
							<span>{tag.label}</span>
						</div>
					))}
				</div>

				<div className='tags'>
					{tags2.map(tag => (
						<div
							className='tag'
							style={{ backgroundColor: tag.color }}
							key={tag.label}
						>
							{tag.icon}
							<span>{tag.label}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PopularCities;
