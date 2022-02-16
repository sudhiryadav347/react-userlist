import React from "react";
import reactDom from "react-dom";

const FooterBlockContent = (props) => {
	return (
		<figure className="mt-5 text-center">
			<blockquote class="blockquote">
				<p>A well-known quote, contained in a blockquote element.</p>
			</blockquote>
			<figcaption class="blockquote-footer">
				Someone famous in <cite title="Source Title">Source Title</cite>
			</figcaption>
		</figure>
	);
};

const Footerblock = () => {
	return (
		<React.Fragment>
			{reactDom.createPortal(
				<FooterBlockContent />,
				document.getElementById("footer-block")
			)}
		</React.Fragment>
	);
};

export default Footerblock;
