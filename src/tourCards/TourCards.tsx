import React from 'react';
import { FaCarSide, FaClock, FaUsers } from 'react-icons/fa';

import magic from '../assets/magic.png';
import vintage from '../assets/vintage.png';
import westminster from '../assets/westminster.png';

import './tourCards.css';

interface TourCardProps {
	image: string;
	title: string;
	duration: string;
	reviews: number;
	price: string;
	rating: number;
}

const TourCard: React.FC<TourCardProps> = ({ image, title, duration, reviews, price, rating }) => {
	return (
		<div className='container'>
			<div className='tour-card'>
				<img src={image} alt={title} className='tour-image' />
				<div className='tour-content'>
					<h3>{title}</h3>
					<ul className='features'>
						<li>
							<FaClock /> Duration: {duration}
						</li>
						<li>
							<FaCarSide /> Transport Facility
						</li>
						<li>
							<FaUsers /> Family Plan
						</li>
					</ul>
					<div className='tour-footer'>
						<div className='reviews'>
							<span className='stars'>
								{'★'.repeat(Math.floor(rating))}
								{'☆'.repeat(5 - Math.floor(rating))}
							</span>
							<span className='count'>{reviews} reviews</span>
						</div>
						<div className='price'>
							<strong>{price}</strong>
							<span> per person</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const TourCards: React.FC = () => {
	const tours: TourCardProps[] = [
		{
			image: westminster,
			title: 'Alaska: Westminster to Greenwich River Thames',
			duration: '2 hours',
			reviews: 584,
			price: '$35.00',
			rating: 4,
		},
		{
			image: vintage,
			title: 'Alaska: Vintage Double Decker Bus Tour & Thames',
			duration: '2 hours',
			reviews: 584,
			price: '$35.00',
			rating: 5,
		},
		{
			image: magic,
			title: 'Alaska: Magic of London Tour with Afternoon Tea at',
			duration: '2 hours',
			reviews: 584,
			price: '$35.00',
			rating: 4,
		},
		{
			image: magic,
			title: 'Alaska: Magic of London Tour with Afternoon Tea at',
			duration: '2 hours',
			reviews: 584,
			price: '$35.00',
			rating: 4,
		},
	];

	return (
		<div className='tour-grid'>
			{tours.map((tour, index) => (
				<TourCard key={index} {...tour} />
			))}
		</div>
	);
};

export default TourCards;
