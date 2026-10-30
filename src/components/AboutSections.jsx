export default function AboutSections() {
	return (
		<>
			<section className="about-intro">
				<p className="eyebrow">About Astro Site</p>
				<h1>A small corner of the web, made with care.</h1>
				<p>
					Astro Site is a place to share what matters, make ideas easier to explore, and keep
					growing over time. We believe a useful experience can be both simple and welcoming.
				</p>
			</section>

			<section className="about-values" aria-labelledby="values-heading">
				<div className="section-heading">
					<p className="eyebrow">What guides us</p>
					<h2 id="values-heading">The principles behind this space</h2>
				</div>
				<div className="card-grid">
					<article className="content-card">
						<span className="card-number" aria-hidden="true">01</span>
						<h3>Keep it clear</h3>
						<p>Make information straightforward, useful, and easy to find.</p>
					</article>
					<article className="content-card">
						<span className="card-number" aria-hidden="true">02</span>
						<h3>Stay curious</h3>
						<p>Keep learning, asking questions, and making room for new perspectives.</p>
					</article>
					<article className="content-card">
						<span className="card-number" aria-hidden="true">03</span>
						<h3>Make it welcoming</h3>
						<p>Create an open space where everyone can feel comfortable exploring.</p>
					</article>
				</div>
			</section>

			<section className="about-outro">
				<h2>Thanks for stopping by.</h2>
				<p>Take a look around and see what catches your interest.</p>
				<a className="button-link" href="/">Back to home</a>
			</section>
		</>
	);
}
