import "./desktop.css";

const Desktop = () => {
	return (
		<div className="desktop">
			<div className="desktop-wrapper">
				<div className="sidebar">
					<div className="sidebar-top">
						<header>
							<div className="header-logo"></div>
						</header>
						<nav>
							<div className="navlinks">
								<div className="navlinks-overview">
									<div className="overview-icon"></div>
									<p> Overview </p>
								</div>
								<div className="navlinks-products">
									<div className="products-icon"></div>
									<p> Products </p>
								</div>
								<div className="navlinks-sales">
									<div className="sales-icon"></div>
									<p> Sales </p>
								</div>
								<div className="navlinks-reporting">
									<div className="reporting-icon"></div>
									<p> Reporting </p>
								</div>
								<div className="navlinks-transaction">
									<div className="transaction-icon"></div>
									<p> Transaction </p>
								</div>
							</div>
						</nav>
					</div>
					<div className="sidebar-bottom">
						<div className="sidebar-bottom-wrapper">
							<div className="sidebar-bottom-nav">
								<div className="navlinks-support">
									<div className="support-icon"></div>
									<p> Support </p>
								</div>
								<div className="navlinks-settings">
									<div className="settings-icon"></div>
									<p> Settings </p>
								</div>
							</div>
							<div className="divider">
								<hr />
							</div>
							<div className="sidebar-bottom-info">
								<div className="info-image"></div>
								<div className="info-text">
									<div className="first-text"> Wales Kings </div>
									<div className="second-text"> Wales@domain.com </div>
								</div>
								<div className="exit-icon"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="dashboard">
				<div className="dashboard-wrapper">
					<div className="header-section">
						<div className="name-info">
							<h1> Welcome, Wales </h1>
							<p> Monitor and track your customers and orders. </p>
						</div>
						<button className="add-btn"> + Add new product </button>
					</div>
					<div className="graph-section">
						<div className="total-sales">
							<div className="total-sales-header">
								<p> Total sales </p>
								<div className="option-icon"></div>
							</div>
							<div className="total-sales-graph-container">
								<div className="total-number">
									<h1> 20 </h1>
									<span> 10% vs last month </span>
								</div>
								<div className="total-graph"></div>
							</div>
						</div>
						<div className="pending-sales">
							<div className="total-sales-header">
								<p> Total sales </p>
								<div className="option-icon"></div>
							</div>
							<div className="total-sales-graph-container">
								<div className="total-number">
									<h1> 20 </h1>
									<span className="pending-span"> 10% vs last month </span>
								</div>
								<div className="pending-graph"></div>
							</div>
						</div>
						<div className="completed-sales">
							<div className="total-sales-header">
								<p> Total sales </p>
								<div className="option-icon"></div>
							</div>
							<div className="total-sales-graph-container">
								<div className="total-number">
									<h1> 20 </h1>
									<span> 10% vs last month </span>
								</div>
								<div className="total-graph"></div>
							</div>
						</div>
					</div>
					<div className="content-section">
						<div className="filter-bar">
							<div className="more-filters">
								<div className="more-filters-1">
									<p> More filters </p>
								</div>
								<div className="more-filters-1">
									<p> More filters </p>
								</div>
							</div>
							<div className="search">
								<div className="input">
									<p> Enter your email </p>
								</div>
								<button> Submit </button>
							</div>
						</div>
						<div className="table"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Desktop;
