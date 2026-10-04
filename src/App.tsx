import type { ReactNode } from "react";

type IconName =
  | "alert"
  | "arrow"
  | "building"
  | "camera"
  | "cases"
  | "check"
  | "cloud"
  | "doctor"
  | "file"
  | "globe"
  | "heart"
  | "home"
  | "lock"
  | "map"
  | "menu"
  | "mic"
  | "people"
  | "question"
  | "shield"
  | "siren"
  | "stethoscope";

const paths: Record<IconName, ReactNode> = {
  alert: <><path d="M12 3 2.7 19a1.4 1.4 0 0 0 1.2 2h16.2a1.4 1.4 0 0 0 1.2-2L12 3Z"/><path d="M12 9v4m0 4h.01"/></>,
  arrow: <><path d="M5 12h14m-5-5 5 5-5 5"/></>,
  building: <><path d="M4 21V5l8-3 8 3v16M8 8h.01M12 8h.01M16 8h.01M8 12h.01M12 12h.01M16 12h.01M9 21v-5h6v5"/></>,
  camera: <><path d="M4 7h3l1.5-2h7L17 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z"/><circle cx="12" cy="13" r="3"/></>,
  cases: <><rect x="3" y="6" width="18" height="14" rx="3"/><path d="M8 6V4h8v2m-4 4v6m-3-3h6"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  cloud: <><path d="M17.5 19H6a4 4 0 0 1-.5-8A6.5 6.5 0 0 1 18 9.5a4.8 4.8 0 0 1-.5 9.5Z"/><path d="M12 11v4m0 0-2-2m2 2 2-2"/></>,
  doctor: <><path d="M8 3v4a4 4 0 0 0 8 0V3M6 3h4m4 0h4M12 11v2a6 6 0 0 0 6 6h1"/><circle cx="20" cy="19" r="2"/></>,
  file: <><path d="M6 2h8l4 4v16H6Z"/><path d="M14 2v5h5M9 12h6m-6 4h4"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
  heart: <path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/>,
  home: <><path d="m3 11 9-8 9 8v10H3Z"/><path d="M9 21v-7h6v7"/></>,
  lock: <><rect x="4" y="10" width="16" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/></>,
  map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z"/><path d="M9 3v15m6-12v15"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  mic: <><rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 11a7 7 0 0 0 14 0m-7 7v4m-4 0h8"/></>,
  people: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0m0-5a5 5 0 0 1 6 5"/></>,
  question: <><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 1 1 3.6 1.9c-1 .7-1.4 1.2-1.4 2.6m0 3.5h.01"/></>,
  shield: <><path d="M12 2 4 5v6c0 5 3.3 8.7 8 11 4.7-2.3 8-6 8-11V5Z"/><path d="m8.5 12 2.3 2.3 4.7-5"/></>,
  siren: <><path d="M6 17h12l-1-8a5 5 0 0 0-10 0Zm-2 4h16M12 2V0M3 7 1 6m20 1 2-1"/></>,
  stethoscope: <><path d="M5 3v6a5 5 0 0 0 10 0V3M3 3h4m6 0h4M10 14v1a5 5 0 0 0 10 0v-1"/><circle cx="20" cy="11" r="2"/></>,
};

function Icon({ name, size = "md" }: { name: IconName; size?: "sm" | "md" | "lg" }) {
  return <svg className={`icon icon-${size}`} viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="MeshCare, home">
      <span className="logo-mark"><Icon name="heart" size="sm" /></span>
      <span>Mesh<span>Care</span></span>
    </a>
  );
}

function PillLink({ href, children, secondary = false, external = false }: { href: string; children: ReactNode; secondary?: boolean; external?: boolean }) {
  return (
    <a className={`pill-button ${secondary ? "button-secondary" : ""}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}<Icon name="arrow" size="sm" />
    </a>
  );
}

function Header() {
  return (
    <>
      <header className="top-nav">
        <Logo />
        <nav aria-label="Main navigation">
          <a href="#inicio">Home</a><a href="#servicios">Services</a><a href="#demo">Demo</a><a href="#equipo">Team</a>
        </nav>
        <div className="nav-actions">
          <a className="language" href="#idioma" aria-label="Change language"><Icon name="globe" size="sm" /> EN</a>
          <a className="demo-button" href="#demo">Try demo</a>
        </div>
      </header>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <a href="#inicio"><Icon name="home" size="sm" /><span>Home</span></a>
        <a href="#servicios"><Icon name="cases" size="sm" /><span>Services</span></a>
        <a href="#demo"><Icon name="mic" size="sm" /><span>Demo</span></a>
        <a href="#equipo"><Icon name="people" size="sm" /><span>Team</span></a>
      </nav>
    </>
  );
}

function HeroArt() {
  return (
    <div className="hero-art" aria-label="From voice recording to faster care">
      <div className="hero-blob blob-one">
        <div className="illustrated-doctor">
          <span className="head" /><span className="hair" /><span className="body" />
          <span className="coat-line" /><span className="steth"><Icon name="stethoscope" size="lg" /></span>
        </div>
      </div>
      <div className="hero-blob blob-two"><Icon name="mic" size="lg" /><span className="wave wave-a" /><span className="wave wave-b" /><span className="wave wave-c" /></div>
      <div className="hero-blob blob-three">
        <div className="mini-radar"><span/><span/><span/><i/><i/></div>
      </div>
      <div className="floating-label label-register"><span><Icon name="mic" size="sm" /></span>Record</div>
      <div className="floating-label label-prioritize"><span className="urgent"><Icon name="alert" size="sm" /></span>Prioritize</div>
      <div className="floating-label label-care"><span className="healthy"><Icon name="heart" size="sm" /></span>Care</div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-frame" aria-label="MeshCare Doctor preview">
      <div className="phone-speaker" />
      <div className="phone-screen">
        <div className="mock-top"><span>Hello, Dr. Ana</span><i>A</i></div>
        <div className="mock-greeting">Which case are<br/>we recording today?</div>
        <div className="record-orb"><Icon name="mic" size="lg" /></div>
        <div className="mock-helper">Tap to begin</div>
        <div className="case-row"><span><Icon name="cases" size="sm" /></span><div><b>Today's cases</b><small>12 records</small></div><strong>12</strong></div>
      </div>
    </div>
  );
}

function ClinicMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`desktop-frame ${compact ? "desktop-compact" : ""}`} aria-label="MeshCare Clinic dashboard preview">
      <div className="browser-bar"><i/><i/><i/><span>meshcare.clinic</span></div>
      <div className="clinic-ui">
        <aside><div className="tiny-logo"><Icon name="heart" size="sm" /></div><Icon name="home" size="sm" /><Icon name="map" size="sm" /><Icon name="doctor" size="sm" /></aside>
        <div className="clinic-main">
          <div className="clinic-title"><span>Care map</span><i>Live</i></div>
          <div className="radar">
            <div className="ring ring-one"/><div className="ring ring-two"/><div className="ring ring-three"/>
            <span className="clinic-center"><Icon name="building" size="sm" /></span>
            <i className="patient p1"/><i className="patient p2"/><i className="patient p3"/><i className="patient p4"/>
            <b className="emergency e1">!</b><b className="emergency e2">!</b>
          </div>
        </div>
        <div className="clinic-panel"><b>Emergencies</b><div><i/>Case #204</div><div><i/>Case #198</div><small>View all cases</small></div>
      </div>
    </div>
  );
}

const serviceFeatures = {
  doctor: [{ icon: "mic", label: "Voice" }, { icon: "camera", label: "Note photo" }, { icon: "cases", label: "Cases" }],
  clinic: [{ icon: "map", label: "Map" }, { icon: "alert", label: "Alerts" }, { icon: "doctor", label: "Doctors" }],
} as const;

function ServiceCard({ type }: { type: "doctor" | "clinic" }) {
  const isDoctor = type === "doctor";
  return (
    <article className={`service-card service-${type}`}>
      <div className="service-copy">
        <div className="service-icon"><Icon name={isDoctor ? "stethoscope" : "building"} size="lg" /></div>
        <p className="eyebrow">{isDoctor ? "FOR THOSE WHO CARE" : "FOR THOSE WHO COORDINATE"}</p>
        <h3>MeshCare <span>{isDoctor ? "Doctor" : "Clinic"}</span></h3>
        <p className="service-line">{isDoctor ? "Speak, save, and keep caring." : "See where urgent cases are."}</p>
        <div className="feature-list">
          {serviceFeatures[type].map((item) => <div key={item.label}><span><Icon name={item.icon} /></span><b>{item.label}</b></div>)}
        </div>
        <PillLink href={isDoctor ? "https://meshcare-doctor.netlify.app/" : "#demo-clinica"} external={isDoctor}>
          {isDoctor ? "Open doctor app" : "Open clinic dashboard"}
        </PillLink>
      </div>
      <div className="service-visual">{isDoctor ? <><PhoneMockup/><div className="doctor-desktop"><ClinicMockup compact /></div></> : <ClinicMockup />}</div>
    </article>
  );
}

const steps: { icon: IconName; title: string; copy: string }[] = [
  { icon: "mic", title: "Speak", copy: "Dictate for 60 seconds" },
  { icon: "file", title: "Review", copy: "Confirm the suggested fields" },
  { icon: "cloud", title: "Save", copy: "Works offline, syncs later" },
  { icon: "siren", title: "Respond", copy: "The clinic assigns a doctor" },
];

function Workflow() {
  return (
    <div className="workflow">
      <div className="workflow-line"><span/></div>
      {steps.map((step, index) => (
        <div className="step" key={step.title}>
          <div className="step-icon"><Icon name={step.icon} size="lg" /><b>0{index + 1}</b></div>
          <h3>{step.title}</h3><p>{step.copy}</p>
          {index === 1 && <span className="ai-chip">AI suggested</span>}
        </div>
      ))}
    </div>
  );
}

const team = [
  { name: "Kiara Hermann", surname: "San Lucas", role: "Product", tone: "a" },
  { name: "Fátima Montserrat", surname: "Herrera González", role: "AI", tone: "b" },
  { name: "Diana Laura", surname: "De La Torre Trueba", role: "Design", tone: "c" },
  { name: "Ileana", surname: "Tapia Castillo", role: "Development", tone: "d" },
];

function Avatar({ tone }: { tone: string }) {
  return <div className={`avatar avatar-${tone}`}><span className="avatar-head"/><span className="avatar-hair"/><span className="avatar-body"/></div>;
}

function TeamIllustration() {
  return (
    <div className="team-blob" aria-label="MICE Team illustration">
      <div className="team-people">
        {["a","b","c","d"].map((tone) => <Avatar key={tone} tone={tone}/>)}
      </div>
      <div className="team-badge"><Icon name="heart" size="sm" /><span>4 minds<br/><b>1 purpose</b></span></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <div className="kicker"><span/> Healthcare that reaches farther</div>
            <h1>Every case counts.<br/><span>Every doctor matters.</span></h1>
            <p>Record cases in 90 seconds, even without internet.</p>
            <div className="hero-actions"><PillLink href="#medico">I'm a doctor</PillLink><PillLink href="#clinica" secondary>I'm a clinic</PillLink></div>
            <div className="trust-note"><span><Icon name="check" size="sm" /></span> Built alongside those who care</div>
          </div>
          <HeroArt />
        </section>

        <section className="section services-section" id="servicios">
          <div className="section-heading">
            <p className="eyebrow">TWO SERVICES, ONE NETWORK</p>
            <h2>Care flows.<br/><span>Information does too.</span></h2>
          </div>
          <div className="services-grid"><div id="medico"><ServiceCard type="doctor"/></div><div id="clinica"><ServiceCard type="clinic"/></div></div>
        </section>

        <section className="how-section" id="demo">
          <div className="section section-heading centered">
            <p className="eyebrow">THAT SIMPLE</p>
            <h2>From voice to care<br/><span>in four steps.</span></h2>
          </div>
          <div className="section"><Workflow /></div>
          <div className="live-demo section" id="demo-clinica">
            <div className="demo-heading">
              <div><p className="eyebrow"><i/> LIVE DEMO</p><h2>A network that responds.</h2></div>
              <div className="synthetic-note"><Icon name="shield" size="sm" /> Sample data (synthetic).<br/>No real patients.</div>
            </div>
            <div className="demo-stage">
              <div className="demo-phone"><PhoneMockup /></div>
              <div className="sync-path"><span/><span/><span/><Icon name="cloud" size="lg" /></div>
              <div className="demo-desktop"><ClinicMockup /></div>
            </div>
            <div className="demo-actions"><PillLink href="https://meshcare-doctor.netlify.app/" external>Try doctor app</PillLink><PillLink href="#demo-clinica" secondary>Try clinic dashboard</PillLink></div>
          </div>
        </section>

        <section className="safety section">
          <div className="section-heading centered"><p className="eyebrow">TECHNOLOGY WITH JUDGMENT</p><h2>Safe by design.<br/><span>Human by decision.</span></h2></div>
          <div className="safety-grid">
            <article><span><Icon name="shield" size="lg" /></span><h3>The final decision<br/>belongs to the doctor</h3></article>
            <article><span><Icon name="question" size="lg" /></span><h3>If AI is unsure,<br/>it asks a person</h3></article>
            <article><span><Icon name="lock" size="lg" /></span><h3>Anonymous data,<br/>used with permission</h3></article>
          </div>
        </section>

        <section className="numbers" id="idioma">
          <div className="section numbers-grid">
            <div><strong>100%</strong><span>Works without internet</span></div>
            <div><strong>≤ ? MB</strong><span>Runs on a basic smartphone</span><small>Model under validation</small></div>
            <div><strong>EN</strong><span>In your language: English</span></div>
          </div>
        </section>

        <section className="team section" id="equipo">
          <div className="team-intro">
            <TeamIllustration />
            <div><p className="eyebrow">THE PEOPLE MAKING IT POSSIBLE</p><h2>Team <span>MICE</span></h2><p>Four perspectives, one mission: using technology to help deliver better care.</p></div>
          </div>
          <div className="team-grid">
            {team.map((person) => <article className="person-card" key={person.name}><Avatar tone={person.tone}/><div><h3>{person.name}<br/>{person.surname}</h3><span>{person.role}</span></div></article>)}
          </div>
          <p className="hackathon-line">Hackathon Small AI for Development <span/> Banco Mundial × Hack-Nation <span/> 2026</p>
        </section>

        <section className="closing">
          <div className="closing-shape shape-left"/><div className="closing-shape shape-right"/>
          <div className="closing-icon"><Icon name="heart" size="lg" /></div>
          <blockquote>“The fundamental principle of medicine<br/>is to serve humanity.”</blockquote>
          <p>The technology is small. Its impact can be enormous.</p>
          <div className="closing-actions"><PillLink href="https://meshcare-doctor.netlify.app/" external>Try doctor app</PillLink><PillLink href="#demo-clinica" secondary>Try clinic dashboard</PillLink></div>
        </section>
      </main>
      <footer>
        <Logo />
        <div><a href="#idioma"><Icon name="globe" size="sm"/> English</a><a href="https://meshcare-doctor.netlify.app/" target="_blank" rel="noreferrer">Doctor app</a><a href="#demo-clinica">Clinic dashboard</a></div>
        <p>© 2026 Team MICE</p>
      </footer>
    </div>
  );
}
