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
            <span className="eyebrow">Transparent school fee payments on Stellar</span>
            <h1>Because no child should be sent home over a payment that was already made.</h1>
            <p className="hero-text">
              EduPay turns every school fee payment into an on-chain Stellar transaction — 
              permanent, timestamped, and visible to both parent and school in real time. 
              No manual reconciliation. No disputes.
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
            title="There is no shared source of truth."
            intro="Parents pay in installments through relatives, mobile transfers, or cash. Schools track this in notebooks. Records get lost. Children get sent home over payments already made."
          />

          <div className="problem-layout">
            <article className="story-card">
              <h3>Parents rarely pay all at once</h3>
              <p>
                A parent scrapes together ₦15,000 through an aunt, then ₦10,000 via mobile transfer. 
                The system that tracks these installments is a bursar's notebook, a WhatsApp thread, or nothing at all.
              </p>
            </article>
            <article className="story-card">
              <h3>Existing solutions don't work</h3>
              <p>
                Banks have records on the parent's side only. School software requires manual entry. 
                WhatsApp confirmations get deleted. Paper receipts get lost.
              </p>
            </article>
            <article className="story-card emphasis-card">
              <h3>The cost of confusion is real</h3>
              <p>
                When records are inconsistent, disputes become a family problem and a school operations problem. 
                Children sit at home for days while adults argue over what was paid.
              </p>
            </article>
          </div>
        </section>

        <section className="content-section" id="solution">
          <SectionTitle
            eyebrow="Solution"
            title="A payment record that both sides see, neither side can alter."
            intro="EduPay uses Stellar to create a transparent ledger replacing the bursar's notebook. Every payment is permanent, timestamped, and visible in real time."
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
            title="Horizon API streams transactions. Balances update automatically."
            intro="Each student's fee wallet is a Stellar account. EduPay listens to the event stream and updates balances — no staff input required."
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
            eyebrow="Why this matters"
            title="The blockchain is the backend. The value is the transparency."
            intro="EduPay doesn't ask anyone to understand blockchain. Parents just see their balance. Schools just see clearance status. The transparency is what matters."
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
