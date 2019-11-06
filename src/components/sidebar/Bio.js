import React from 'react';
import './sidebar.css';
import { Link } from 'gatsby';

import diyar from '../../images/diyar-faraj.jpg';

const Bio = ({ author, tagline }) => {
	return (
		<div className="bio-main w-75">
			<Link to="/">
				<img src={diyar} style={{ maxWidth: `100px` }} className="profile-img" alt="Diyar Faraj" />
			</Link>
			<h3 className="mt-2 author-bio">{author}</h3>
			<small className="text-muted">{tagline}</small>
		</div>
	);
};

export default Bio;
