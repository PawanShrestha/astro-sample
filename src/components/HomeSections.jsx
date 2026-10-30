export default function HomeSections() {
	return (
		<>
			<section className="home-hero">
				<p className="eyebrow">A little space on the web</p>
				<h1>Welcome to Astro Site</h1>
				<p className="hero-copy">
					A simple place to share ideas, explore what we do, and find a little inspiration
					along the way.
				</p>
				<a className="button-link" href="/about">Get to know us</a>
			</section>

			<section className="home-highlights" aria-labelledby="highlights-heading">
				<div className="section-heading">
					<p className="eyebrow">What you'll find here</p>
					<h2 id="highlights-heading">Built around the things that matter</h2>
				</div>
				<div className="card-grid">
					<article className="content-card">
						<span className="card-number" aria-hidden="true">01</span>
						<h3>Thoughtful ideas</h3>
						<p>Explore useful perspectives and ideas, shared with care and curiosity.</p>
					</article>
					<article className="content-card">
						<span className="card-number" aria-hidden="true">02</span>
						<h3>Clear purpose</h3>
						<p>Find out what guides us and how we approach the work we do.</p>
					</article>
					<article className="content-card">
						<span className="card-number" aria-hidden="true">03</span>
						<h3>Room to grow</h3>
						<p>This is a starting point, with plenty of space for new stories and updates.</p>
					</article>
				</div>
			</section>

			<section className="home-about">
				<div>
					<p className="eyebrow">A bit about us</p>
					<h2>Good things start with a clear idea.</h2>
				</div>
				<a className="text-link" href="/about">
					Read our story <span aria-hidden="true">→</span>
				</a>
			</section>
		</>
	);
}
