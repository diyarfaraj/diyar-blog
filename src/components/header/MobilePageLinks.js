import React from 'react';
import { Link } from 'gatsby';

const MobilePages = () => {
	return (
		<div className="mobile-pages-main">
			<div className="text-center">
				<p className="d-inline p-4">
					<Link to="/">
						<span className="text-dark nav-items">Home</span>
					</Link>
				</p>
				<p className="d-inline p-4">
					<Link to="/about">
						<span className="text-dark nav-items nav-item-middle">About</span>
					</Link>
				</p>
				<p className="d-inline p-4">
					<Link to="/archive">
						<span className="text-dark nav-items">Archive</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default MobilePages;
