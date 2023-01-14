import "./desktop.css";

const Desktop = () => {
	return (
		<div className="desktop">
			<div className="sidebar">
				<div className="sidebar-top">
					<header>
						<div className="header-logo"></div>
					</header>
					<nav>
						<div className="navlinks">
							<div className="navlinks-overview"></div>
							<div className="navlinks-products"></div>
							<div className="navlinks-sales"></div>
							<div className="navlinks-reporting"></div>
							<div className="navlinks-transaction"></div>
						</div>
					</nav>
				</div>
				<div className="sidebar-bottom"></div>
			</div>
			<div className="dashboard"></div>
		</div>
	);
};

export default Desktop;
