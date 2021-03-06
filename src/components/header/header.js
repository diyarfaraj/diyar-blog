import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import MobileSocialLinks from './MobileSocialLinks';
import MobilePageLinks from './MobilePageLinks';
import SocialLinks from './SocialLinks';
import MobileBio from './MobileBio';
import Darkmode from 'darkmode-js';
import './header.css';

const Header = ({ siteTitle, tagline, author, contacts }) => {
	new Darkmode().showWidget();
	return (
		<header
			className="head-main"
			style={{
				background: `black`
			}}
		>
			<div
				className="head-elements"
				style={{
					margin: `0`,
					padding: `.75rem`
				}}
			>
				<h1 className="head-logo ml-4" style={{ margin: 0 }}>
					<Link
						to="/"
						style={{
							color: `white`,
							textDecoration: `none`
						}}
					>
						{siteTitle}
					</Link>
				</h1>
				<SocialLinks contacts={contacts} />
			</div>
			<MobileSocialLinks contacts={contacts} />

			<MobileBio author={author} />
			<MobilePageLinks />
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: `Diyar Faraj's Blog - Programming and development`
};

export default Header;
