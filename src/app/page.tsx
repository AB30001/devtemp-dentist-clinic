export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="shell site-header__inner">
          <a href="#top" className="logo">
            Nordic Smile Clinic
          </a>
          <nav className="nav" aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="btn btn-primary" href="#contact">
            Book appointment
          </a>
        </div>
      </header>

      <main id="top">
        <section className="shell hero">
          <div>
            <h1 className="brand">Nordic Smile Clinic</h1>
            <p className="lead">
              Gentle, modern dentistry with same-week appointments — so your
              next visit feels calm, clear, and easy to book.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#contact">
                Book appointment
              </a>
              <a className="btn btn-ghost" href="#services">
                View services
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-hidden="true" />
        </section>

        <section className="shell trust" aria-label="Highlights">
          <div>
            <strong>12+ years</strong>
            <span>caring for Bergen families</span>
          </div>
          <div>
            <strong>Same week</strong>
            <span>appointment availability</span>
          </div>
          <div>
            <strong>Most insurers</strong>
            <span>accepted &amp; explained upfront</span>
          </div>
        </section>

        <section id="services" className="shell section">
          <h2>Services</h2>
          <p className="sub">Practical care without the jargon.</p>
          <div className="grid-3">
            {[
              ["Cleanings", "Preventive visits with gentle hygiene and clear aftercare."],
              ["Whitening", "In-clinic brightening plans tailored to sensitive teeth."],
              ["Implants", "Durable tooth replacement with careful planning."],
              ["Emergency care", "Fast triage when pain or a chip can’t wait."],
              ["Kids visits", "Friendly first appointments that lower the stress."],
              ["Check-ups", "Full exams with digital X-rays when needed."],
            ].map(([title, body]) => (
              <article key={title} className="card">
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="shell section split">
          <div>
            <h2>Meet Dr. Ingrid Haugen</h2>
            <p className="sub">
              Trained in Oslo, practicing in Bergen. Focused on calm chairside
              communication and conservative treatment first.
            </p>
            <p className="sub">
              Credentials: DDS, Norwegian Dental Association member.
            </p>
          </div>
          <div className="card">
            <h3>Clinic hours</h3>
            <p>Mon–Thu 08:00–16:00</p>
            <p>Fri 08:00–14:00</p>
            <p>Strandgaten 42, Bergen</p>
          </div>
        </section>

        <section id="reviews" className="shell section">
          <h2>Patient notes</h2>
          <p className="sub">What people say after their visit.</p>
          <blockquote className="quote">
            “Explained every step. Booking took two minutes.” — Mari, Åsane
          </blockquote>
          <blockquote className="quote">
            “Kids were fine the whole time. Huge relief.” — Tomas, Bergen
          </blockquote>
          <blockquote className="quote">
            “Whitening looked natural, not fake.” — Lea, Nesttun
          </blockquote>
        </section>

        <section id="contact" className="shell">
          <div className="cta-band">
            <h2>Ready for a calmer next visit?</h2>
            <p>Tell us what you need — we’ll confirm a time within one business day.</p>
            <form
              style={{
                display: "grid",
                gap: "0.75rem",
                maxWidth: "28rem",
                marginTop: "1.25rem",
              }}
              action="#"
              method="get"
            >
              <input
                required
                name="name"
                placeholder="Name"
                style={inputStyle}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email"
                style={inputStyle}
              />
              <input
                type="date"
                name="preferredDate"
                style={inputStyle}
              />
              <button className="btn btn-primary" type="submit">
                Request appointment
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="shell footer">
        <p>Nordic Smile Clinic · Strandgaten 42, Bergen · +47 55 00 00 00</p>
        <p>Privacy-friendly demo template for devtemp.no</p>
      </footer>
    </>
  );
}

const inputStyle = {
  minHeight: "2.75rem",
  borderRadius: "8px",
  border: "1px solid #9bb8bf",
  padding: "0.65rem 0.8rem",
  font: "inherit",
} as const;
