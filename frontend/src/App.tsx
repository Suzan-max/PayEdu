import { SectionTitle } from "./components/SectionTitle";
import { features, pillars, stats, steps } from "./data/content";

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-mark">E</span>
            <div>
              <strong>EduPay</strong>
              <p>School fee transparency on Stellar</p>
            </div>
          </div>
          <a className="nav-link" href="#architecture">
            How it works
          </a>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy">
            <span className="eyebrow">Transparent school fee payments</span>
            <h1>School fee payments, without the confusion.</h1>
            <p className="hero-text">
              EduPay gives schools and parents one reliable record for every
              student fee. Payments can happen in installments, but balances,
              history, and clearance status stay visible in one place.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#solution">
                Explore product
              </a>
              <a className="secondary-btn" href="#problem">
                Why it matters
              </a>
            </div>

            <ul className="stat-grid" aria-label="Project highlights">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </section>

          <aside className="hero-board">
            <div className="dashboard-shell">
              <div className="dashboard-sidebar">
                <div className="sidebar-pill active">Overview</div>
                <div className="sidebar-pill">Students</div>
                <div className="sidebar-pill">Payments</div>
                <div className="sidebar-pill">Clearance</div>
              </div>

              <div className="dashboard-main">
                <div className="board-shell">
                  <div className="board-header">
                    <div>
                      <span>Student account</span>
                      <h3>Precious A.</h3>
                    </div>
                    <strong>Partially paid</strong>
                  </div>

                  <div className="board-balance">
                    <div>
                      <span>Total fee</span>
                      <strong>N75,000</strong>
                    </div>
                    <div>
                      <span>Paid so far</span>
                      <strong>N45,000</strong>
                    </div>
                    <div>
                      <span>Outstanding</span>
                      <strong>N30,000</strong>
                    </div>
                  </div>

                  <div className="board-progress">
                    <div className="progress-copy">
                      <span>Payment progress</span>
                      <strong>60%</strong>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" />
                    </div>
                  </div>
                </div>

                <div className="payments-card">
                  <div className="payments-card-header">
                    <h4>Recent payments</h4>
                    <span>Synced from Stellar</span>
                  </div>

                  <div className="board-list">
                    <div>
                      <span>Apr 02</span>
                      <p>N20,000 received</p>
                    </div>
                    <div>
                      <span>Mar 19</span>
                      <p>N15,000 received</p>
                    </div>
                    <div>
                      <span>Mar 04</span>
                      <p>N10,000 received</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section className="content-section" id="problem">
          <SectionTitle
            eyebrow="Problem"
            title="School fee tracking is still too manual."
            intro="Many schools rely on notebooks, chat messages, and memory. EduPay gives both sides a single running balance they can trust."
          />

          <div className="problem-layout">
            <article className="story-card">
              <h3>Parents do not always pay all at once</h3>
              <p>
                School fees are often paid in small installments through bank
                transfers, relatives, or cash conversion. The system should
                reflect that reality.
              </p>
            </article>
            <article className="story-card">
              <h3>Schools need a record they can rely on</h3>
              <p>
                Administrators need one ledger that shows payment history,
                outstanding balance, and whether a student is cleared for the
                term.
              </p>
            </article>
            <article className="story-card emphasis-card">
              <h3>The cost of confusion is real</h3>
              <p>
                When records are inconsistent, payment disputes become a family
                problem and a school operations problem at the same time.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section" id="solution">
          <SectionTitle
            eyebrow="Solution"
            title="A product that feels familiar, backed by a transparent ledger."
            intro="EduPay is built for a simple everyday experience: check a balance, confirm a payment, and know whether a student is cleared."
          />

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section flow-section" id="architecture">
          <SectionTitle
            eyebrow="How it works"
            title="A simple payment loop powered by Stellar."
            intro="EduPay is designed around a straightforward user flow so schools can adopt it without learning blockchain mechanics."
          />

          <div className="flow-grid">
            {steps.map((step) => (
              <article className="flow-card" key={step}>
                <span className="flow-number">{steps.indexOf(step) + 1}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section alt-section">
          <SectionTitle
            eyebrow="Who it helps"
            title="Useful for every side of the fee payment process."
            intro="EduPay works best when the system is simple enough for parents, practical enough for schools, and trustworthy enough for everyday use."
          />

          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
