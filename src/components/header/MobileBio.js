import React from 'react';
import { Link } from 'gatsby';

import './header.css';
import diyar from '../../images/diyar-faraj.jpg';

const MobileBio = (props) => {
	return (
		<div className="mobile-bio-main">
			<Link to="/">
				<img
					src={diyar}
					className="ml-4 mt-2"
					style={{ maxWidth: `75px`, maxHeight: `75px`, borderRadius: `50%`, boxShadow: `1px 1px 3px` }}
					alt="Diyar Faraj developer"
				/>
			</Link>
			<h4 className="mr-4 mt-4">{props.author}</h4>
		</div>
	);
};

export default MobileBio;
