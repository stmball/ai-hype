import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accounts, marketingClaims } from '../data';
import StaffLoginModal from './StaffLoginModal';

function HomePage() {
  const navigate = useNavigate();
  const [staffLoginOpen, setStaffLoginOpen] = useState(false);
  const [login, setLogin] = useState({ username: '', password: '' });
  const [feedback, setFeedback] = useState('');

  function handleLoginSubmit(event) {
    event.preventDefault();
    const matched = Object.values(accounts).find(
      (item) => item.username === login.username.trim() && item.password === login.password.trim(),
    );
    if (!matched) {
      setFeedback('Those credentials did not match a staff account.');
      return;
    }
    setStaffLoginOpen(false);
    navigate(`/mail?account=${matched.username}`);
  }

  const conditions = [
    { name: 'Diabetic retinopathy', desc: 'Detect microaneurysms, haemorrhages, and exudates associated with diabetes-related vision loss.' },
    { name: 'Age-related macular degeneration', desc: 'Identify drusen deposits and geographic atrophy patterns in early and intermediate AMD.' },
    { name: 'Glaucoma suspect', desc: 'Flag cup-to-disc ratio anomalies and nerve fibre layer thinning indicative of glaucomatous damage.' },
    { name: 'Retinal vein occlusion', desc: 'Surface intraretinal haemorrhages and cotton-wool spots consistent with branch or central RVO.' },
  ];

  const features = [
    { icon: '◈', title: 'Interpretable AI with visual evidence maps', desc: 'Every prediction generates a heatmap overlay showing exactly which regions of the scan influenced the decision. Clinicians see the reasoning, not just the result.' },
    { icon: '◈', title: 'Seamless EPR integration', desc: 'VistaEye plugs into existing NHS electronic patient record systems including SystmOne, EMIS, and Cerner. No duplicate data entry.' },
    { icon: '◈', title: 'Customisable thresholds per trust', desc: 'Each trust can set their own sensitivity and specificity targets so the tool aligns with local clinical pathways rather than overriding them.' },
    { icon: '◈', title: 'Works with existing retinal cameras', desc: 'Compatible with Topcon, Zeiss, Canon, and Optos fundus cameras. No hardware upgrade needed — the analysis runs on standard NHS network infrastructure.' },
    { icon: '◈', title: 'Real-time quality assessment', desc: 'Scans are checked for sufficient quality at the point of capture. Poor images are flagged immediately so the operator can retake before the patient leaves.' },
  ];

  const team = [
    { name: 'Prof. James Holloway', role: 'Chief Scientific Officer', bio: 'Former consultant ophthalmologist at Moorfields Eye Hospital. 20 years of clinical AI research.' },
    { name: 'Dr. Priya Nair', role: 'Clinical Director', bio: 'Clinical safety lead with a background in NHS digital transformation and patient safety regulation.' },
    { name: 'Tom Fletcher', role: 'VP of Product', bio: 'Brings medical device experience from previous roles at a leading healthtech company.' },
    { name: 'Maya Okonkwo', role: 'Head of Machine Learning', bio: 'PhD in computer vision. Previously led ML teams across multiple diagnostic imaging startups.' },
  ];

  return (
    <div className="overflow-x-hidden">
      <nav className="fixed top-0 left-0 right-0 z-10 bg-[rgba(7,10,15,0.85)] backdrop-blur-xl border-b border-white/6">
        <div className="flex items-center gap-6 max-w-[1160px] mx-auto px-6 h-[60px]">
          <div className="flex items-center gap-2 mr-auto">
            <span className="w-8 h-8 grid place-items-center rounded-lg bg-gradient-to-br from-[#3b8fd9] to-[#6ab1f0] text-white font-bold text-base font-serif">
              V
            </span>
            <span className="font-serif text-xl font-semibold tracking-wide text-white">VistaEye</span>
          </div>

          <div className="flex items-center gap-5 max-md:hidden">
            <a href="#conditions" className="text-white/70 text-sm hover:text-[#f4f7fb] transition-colors no-underline">Conditions</a>
            <a href="#how-it-works" className="text-white/70 text-sm hover:text-[#f4f7fb] transition-colors no-underline">How it works</a>
            <a href="#features" className="text-white/70 text-sm hover:text-[#f4f7fb] transition-colors no-underline">Features</a>
            <a href="#evidence" className="text-white/70 text-sm hover:text-[#f4f7fb] transition-colors no-underline">Evidence</a>
            <a href="#contact" className="text-white/70 text-sm hover:text-[#f4f7fb] transition-colors no-underline">Contact</a>
          </div>

          <button
            className="px-4 py-[0.55rem] border border-white/12 rounded-full bg-white/4 text-white/80 text-sm cursor-pointer hover:bg-white/8 hover:border-white/20 transition"
            type="button"
            onClick={() => setStaffLoginOpen(true)}
          >
            Staff login
          </button>
        </div>
      </nav>

      <main>
        {/* ─── Hero ─── */}
        <section className="relative pt-[140px] pb-20 px-6 overflow-hidden">
          <div className="lp-hero-bg" aria-hidden="true" />
          <div className="relative max-w-[1160px] mx-auto grid grid-cols-[1.2fr_0.8fr] gap-[60px] items-center max-lg:grid-cols-1 max-lg:gap-10">
            <div>
              <span className="inline-block mb-4 px-[0.9rem] py-[0.4rem] rounded-full bg-accent/10 border border-accent/15 text-accent text-[0.72rem] uppercase tracking-[0.1em]">
                FDA-cleared &middot; CE marked &middot; UKCA certified
              </span>
              <h1 className="text-white font-serif text-[clamp(2.6rem,4.5vw,4rem)] leading-[1.02] tracking-[-0.01em] m-0">
                AI that reads retinal scans. <br />Clinicians make the call.
              </h1>
              <p className="mt-4 max-w-[52ch] text-[1.05rem] leading-[1.7] text-muted">
                VistaEye uses deep learning to surface likely pathology from routine retinal images —
                diabetic retinopathy, AMD, glaucoma, and more — before a clinician reviews. The result is
                faster triage, fewer missed referrals, and a workflow that fits the pace of a real clinic.
              </p>

              <div className="flex flex-wrap gap-3 mt-7">
                <a className="inline-flex items-center justify-center px-[1.3rem] py-[0.8rem] rounded-full text-sm font-semibold no-underline transition bg-gradient-to-r from-[#4a9fe5] to-[#6ab8ff] text-[#07131f] shadow-[0_2px_12px_rgba(74,159,229,0.25)] hover:shadow-[0_4px_20px_rgba(74,159,229,0.35)] hover:-translate-y-px" href="#contact">
                  Request a demo
                </a>
                <a className="inline-flex items-center justify-center px-[1.3rem] py-[0.8rem] rounded-full text-sm font-semibold no-underline transition bg-white/5 text-white border border-white/12 hover:bg-white/9 hover:-translate-y-px" href="#how-it-works">
                  See how it works
                </a>
              </div>

              <div className="flex flex-wrap gap-[4px_28px] mt-8 pt-6 border-t border-white/6">
                {marketingClaims.map((c) => (
                  <div key={c.label}>
                    <strong className="block font-serif text-[1.6rem] text-accent">{c.value}</strong>
                    <span className="text-[0.8rem] text-muted">{c.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid place-items-center">
              <div className="w-full max-w-[380px] p-7 rounded-[28px] bg-gradient-to-br from-[rgba(24,30,40,0.95)] to-[rgba(14,18,26,0.92)] border border-white/6 flex flex-col gap-[14px]">
                <div className="flex gap-[6px]">
                  <span className="w-[10px] h-[10px] rounded-full bg-[#f87171]" />
                  <span className="w-[10px] h-[10px] rounded-full bg-[#fbbf24]" />
                  <span className="w-[10px] h-[10px] rounded-full bg-[#34d399]" />
                </div>
                <div className="h-[6px] rounded-[3px] bg-white/6 relative overflow-hidden after:content-[''] after:absolute after:h-full after:rounded-[3px] after:bg-gradient-to-r after:from-[#3b8fd9] after:to-[#6ab8ff] after:w-[65%]" />
                <div className="h-[6px] rounded-[3px] bg-white/6 relative overflow-hidden after:content-[''] after:absolute after:h-full after:rounded-[3px] after:bg-gradient-to-r after:from-[#3b8fd9] after:to-[#6ab8ff] after:w-[65%]" />
                <div className="h-[6px] rounded-[3px] bg-white/6 relative overflow-hidden after:content-[''] after:absolute after:h-full after:rounded-[3px] after:bg-gradient-to-r after:from-[#3b8fd9] after:to-[#6ab8ff] after:w-[65%] w-[55%]" />
                <span className="self-start px-[0.8rem] py-[0.4rem] rounded-full bg-[rgba(74,159,229,0.12)] border border-[rgba(74,159,229,0.2)] text-accent text-[0.78rem] font-medium">
                  Scan confidence: 94%
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Trust bar ─── */}
        <section className="border-y border-white/4 bg-white/[0.015]">
          <div className="max-w-[1160px] mx-auto px-6 py-5 flex justify-center flex-wrap gap-[12px_40px]">
            <span className="text-muted text-[0.82rem] uppercase tracking-widest">Deployed across 40+ NHS trusts in the UK</span>
            <span className="text-muted text-[0.82rem] uppercase tracking-widest">25,000+ scans processed per month</span>
            <span className="text-muted text-[0.82rem] uppercase tracking-widest">ISO 27001 &amp; NHS DSPT certified</span>
            <span className="text-muted text-[0.82rem] uppercase tracking-widest">Class I UKCA medical device</span>
          </div>
        </section>

        {/* ─── Conditions ─── */}
        <section className="py-20 px-6" id="conditions">
          <div className="max-w-[1160px] mx-auto">
            <p className="m-0 mb-3 text-accent-2 uppercase tracking-[0.12em] text-[0.72rem]">Conditions</p>
            <h2 className="text-white font-serif text-[clamp(2rem,3.2vw,2.6rem)] leading-[1.05] m-0">Four pathologies, one platform.</h2>
            <p className="mt-[14px] max-w-[52ch] text-muted text-base leading-[1.65]">
              VistaEye currently supports detection and grading for the most common causes of
              preventable sight loss in primary and secondary care.
            </p>

            <div className="grid grid-cols-4 gap-4 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {conditions.map((c) => (
                <div key={c.name} className="p-6 rounded-xl bg-white/[0.02] border border-white/6">
                  <h3 className="text-white font-serif text-[1.05rem] m-0">{c.name}</h3>
                  <p className="mt-3 text-muted text-[0.88rem] leading-[1.6]">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── How it works ─── */}
        <section className="py-20 px-6 bg-white/[0.015] border-y border-white/4" id="how-it-works">
          <div className="max-w-[1160px] mx-auto">
            <p className="m-0 mb-3 text-accent-2 uppercase tracking-[0.12em] text-[0.72rem]">Workflow</p>
            <h2 className="text-white font-serif text-[clamp(2rem,3.2vw,2.6rem)] leading-[1.05] m-0">Three steps, one integrated pathway.</h2>
            <p className="mt-[14px] max-w-[52ch] text-muted text-base leading-[1.65]">
              From scan to specialist review — VistaEye sits inside your existing referral pathway
              without adding friction or requiring new hardware.
            </p>

            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 mt-11 max-lg:grid-cols-1">
              {[
                { num: '01', title: 'Capture', desc: 'Scans are taken using the clinic\'s existing retinal camera — Topcon, Zeiss, Canon, or Optos. VistaEye processes DICOM and JPEG formats with no conversion needed.' },
                { num: '02', title: 'Analyse', desc: 'The deep learning model analyses each scan in under 30 seconds, grading for diabetic retinopathy, AMD, glaucoma, and RVO. A confidence score and evidence heatmap are returned for every finding.' },
                { num: '03', title: 'Refer', desc: 'Urgent cases are surfaced to the appropriate specialist with the grading report, confidence score, and original images attached. No manual re-entry, no lost context.' },
              ].map((step, i) => (
                <React.Fragment key={step.num}>
                  {i > 0 && <div className="grid place-items-center text-white/15 text-[1.4rem] pt-8 max-lg:hidden">→</div>}
                  <div className="p-7 rounded-xl bg-white/[0.02] border border-white/6">
                    <span className="block font-serif text-[0.8rem] text-accent mb-3">{step.num}</span>
                    <h3 className="text-white font-serif text-[1.15rem] m-0">{step.title}</h3>
                    <p className="mt-[10px] text-muted text-[0.9rem] leading-[1.6]">{step.desc}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Features ─── */}
        <section className="py-20 px-6" id="features">
          <div className="max-w-[1160px] mx-auto">
            <p className="m-0 mb-3 text-accent-2 uppercase tracking-[0.12em] text-[0.72rem]">Features</p>
            <h2 className="text-white font-serif text-[clamp(2rem,3.2vw,2.6rem)] leading-[1.05] m-0">Built for clinical teams, not just for data scientists.</h2>
            <p className="mt-[14px] max-w-[52ch] text-muted text-base leading-[1.65]">
              Every design decision — from the interface to the integration — starts with how it fits into a real clinic day.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10 max-lg:grid-cols-1">
              {features.map((f) => (
                <div key={f.title} className="p-7 rounded-xl bg-white/[0.02] border border-white/6">
                  <div className="text-[1.4rem] text-accent mb-[14px]">{f.icon}</div>
                  <h3 className="text-white font-serif text-[1.1rem] m-0">{f.title}</h3>
                  <p className="mt-[10px] text-muted text-[0.9rem] leading-[1.6]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Technology ─── */}
        <section className="py-20 px-6 bg-white/[0.015] border-y border-white/4">
          <div className="max-w-[1160px] mx-auto">
            <p className="m-0 mb-3 text-accent-2 uppercase tracking-[0.12em] text-[0.72rem]">Technology</p>
            <h2 className="text-white font-serif text-[clamp(2rem,3.2vw,2.6rem)] leading-[1.05] m-0">Deep learning designed for deployment.</h2>
            <p className="mt-[14px] max-w-[52ch] text-muted text-base leading-[1.65]">
              The VistaEye model uses a proprietary multi-scale convolutional architecture trained on
              over 12,000 graded retinal scans from NHS diabetic eye screening programmes.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-10 max-lg:grid-cols-1">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/6">
                <h3 className="text-accent font-serif text-[0.9rem] m-0 uppercase tracking-wide">Architecture</h3>
                <p className="mt-3 text-muted text-[0.88rem] leading-[1.6]">
                  Ensemble of EfficientNet-B3 and ResNet-50 backbones with a custom attention mechanism
                  for lesion localisation. Trained using a multi-task objective that jointly predicts
                  pathology grade, confidence, and image quality.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/6">
                <h3 className="text-accent font-serif text-[0.9rem] m-0 uppercase tracking-wide">Validation</h3>
                <p className="mt-3 text-muted text-[0.88rem] leading-[1.6]">
                  Internal validation on an independent hold-out set of 1,500 scans. External validation
                  ongoing at three UK NHS trusts across different imaging equipment and patient demographics.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/6">
                <h3 className="text-accent font-serif text-[0.9rem] m-0 uppercase tracking-wide">Infrastructure</h3>
                <p className="mt-3 text-muted text-[0.88rem] leading-[1.6]">
                  Deployed on NHS-approved cloud infrastructure inside the UK data boundary. All patient
                  data encrypted in transit and at rest. Role-based access controls with full audit
                  logging for DSPT compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Clinical evidence ─── */}
        <section className="py-20 px-6" id="evidence">
          <div className="max-w-[1160px] mx-auto">
            <p className="m-0 mb-3 text-accent-2 uppercase tracking-[0.12em] text-[0.72rem]">Clinical evidence</p>
            <h2 className="text-white font-serif text-[clamp(2rem,3.2vw,2.6rem)] leading-[1.05] m-0">Validated against real-world clinical data.</h2>
            <p className="mt-[14px] max-w-[52ch] text-muted text-base leading-[1.65]">
              The VistaEye model was trained and evaluated on a diverse dataset of over 12,000 retinal scans
              drawn from NHS diabetic eye screening programmes. Performance is benchmarked against
              consensus grading by consultant ophthalmologists.
            </p>

            <div className="grid grid-cols-4 gap-4 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/6 text-center">
                <strong className="block font-serif text-[2rem] text-accent mb-2">98.6%</strong>
                <span className="text-[0.85rem] text-muted leading-[1.5]">Sensitivity for referable retinopathy</span>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/6 text-center">
                <strong className="block font-serif text-[2rem] text-accent mb-2">94.2%</strong>
                <span className="text-[0.85rem] text-muted leading-[1.5]">Specificity across all image grades</span>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/6 text-center">
                <strong className="block font-serif text-[2rem] text-accent mb-2">12k+</strong>
                <span className="text-[0.85rem] text-muted leading-[1.5]">Scans in the training and validation set</span>
              </div>
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/6 text-center">
                <strong className="block font-serif text-[2rem] text-accent mb-2">CE &amp; UKCA</strong>
                <span className="text-[0.85rem] text-muted leading-[1.5]">Class I medical device certification</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              <span className="px-4 py-2 rounded-full border border-white/8 bg-white/[0.02] text-muted text-[0.8rem]">
                ISO 13485:2016 certified
              </span>
              <span className="px-4 py-2 rounded-full border border-white/8 bg-white/[0.02] text-muted text-[0.8rem]">
                NHS DSPT 2025/26 compliant
              </span>
              <span className="px-4 py-2 rounded-full border border-white/8 bg-white/[0.02] text-muted text-[0.8rem]">
                Cyber Essentials Plus
              </span>
              <span className="px-4 py-2 rounded-full border border-white/8 bg-white/[0.02] text-muted text-[0.8rem]">
                DCB0129 clinical safety compliant
              </span>
            </div>
          </div>
        </section>

        {/* ─── Leadership ─── */}
        <section className="py-20 px-6 bg-white/[0.015] border-y border-white/4">
          <div className="max-w-[1160px] mx-auto">
            <p className="m-0 mb-3 text-accent-2 uppercase tracking-[0.12em] text-[0.72rem]">Leadership</p>
            <h2 className="text-white font-serif text-[clamp(2rem,3.2vw,2.6rem)] leading-[1.05] m-0">A team with deep clinical and technical experience.</h2>
            <p className="mt-[14px] max-w-[52ch] text-muted text-base leading-[1.65]">
              Our leadership team brings together expertise from ophthalmology, machine learning, healthtech, and NHS digital transformation.
            </p>

            <div className="grid grid-cols-4 gap-4 mt-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {team.map((t) => (
                <div key={t.name} className="p-6 rounded-xl bg-white/[0.02] border border-white/6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3b8fd9] to-[#6ab1f0] grid place-items-center text-white font-bold text-lg font-serif mb-4">
                    {t.name.split(' ').pop()[0]}
                  </div>
                  <h3 className="text-white font-serif text-[1rem] m-0">{t.name}</h3>
                  <p className="text-accent text-[0.8rem] mt-1 mb-3">{t.role}</p>
                  <p className="text-muted text-[0.82rem] leading-[1.5]">{t.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact ─── */}
        <section className="py-20 px-6" id="contact">
          <div className="max-w-[1160px] mx-auto text-center">
            <p className="m-0 mb-3 text-accent-2 uppercase tracking-[0.12em] text-[0.72rem]">Get in touch</p>
            <h2 className="text-white font-serif text-[clamp(2rem,3.2vw,2.6rem)] leading-[1.05] m-0">Ready to bring VistaEye into your screening pathway?</h2>
            <p className="mt-[14px] max-w-[52ch] text-muted text-base leading-[1.65] mx-auto">
              Our clinical partnerships team would be happy to arrange a demonstration with your trust.
              We typically have availability within two weeks of an initial inquiry.
            </p>

            <div className="flex flex-wrap gap-3 mt-7 justify-center">
              <a className="inline-flex items-center justify-center px-[1.3rem] py-[0.8rem] rounded-full text-sm font-semibold no-underline transition bg-gradient-to-r from-[#4a9fe5] to-[#6ab8ff] text-[#07131f] shadow-[0_2px_12px_rgba(74,159,229,0.25)] hover:shadow-[0_4px_20px_rgba(74,159,229,0.35)] hover:-translate-y-px" href="mailto:hello@vistaeye.health">
                hello@vistaeye.health
              </a>
              <a className="inline-flex items-center justify-center px-[1.3rem] py-[0.8rem] rounded-full text-sm font-semibold no-underline transition bg-white/5 text-white border border-white/12 hover:bg-white/9 hover:-translate-y-px" href="#">
                Book a call
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/4">
        <div className="max-w-[1160px] mx-auto grid grid-cols-3 gap-8 max-md:grid-cols-1">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 grid place-items-center rounded-lg bg-gradient-to-br from-[#3b8fd9] to-[#6ab1f0] text-white font-bold text-base font-serif">V</span>
              <span className="font-serif text-xl font-semibold tracking-wide text-white">VistaEye</span>
            </div>
            <p className="text-muted text-[0.82rem] leading-[1.6] max-w-[32ch]">
              VistaEye Health Ltd is a registered medical device manufacturer. Registered in England and Wales.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold m-0 mb-3">Product</h4>
            <div className="flex flex-col gap-2">
              <a href="#conditions" className="text-muted text-[0.82rem] no-underline hover:text-white transition-colors">Conditions</a>
              <a href="#how-it-works" className="text-muted text-[0.82rem] no-underline hover:text-white transition-colors">How it works</a>
              <a href="#features" className="text-muted text-[0.82rem] no-underline hover:text-white transition-colors">Features</a>
              <a href="#evidence" className="text-muted text-[0.82rem] no-underline hover:text-white transition-colors">Clinical evidence</a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold m-0 mb-3">Contact</h4>
            <div className="flex flex-col gap-2">
              <span className="text-muted text-[0.82rem]">hello@vistaeye.health</span>
              <span className="text-muted text-[0.82rem]">London, United Kingdom</span>
              <span className="text-muted text-[0.82rem]">UKCA: VE-001-2025</span>
            </div>
          </div>
        </div>
        <div className="max-w-[1160px] mx-auto mt-8 pt-6 border-t border-white/6 flex flex-wrap justify-between gap-4">
          <p className="text-white/35 text-[0.75rem] m-0">&copy; 2026 VistaEye Health Ltd. All rights reserved.</p>
          <p className="text-muted text-[0.78rem] m-0 max-w-[48ch]">
            VistaEye is a registered medical device. Always consult a qualified clinician. Not for diagnostic use in all patient populations.
          </p>
        </div>
      </footer>

      {staffLoginOpen ? (
        <StaffLoginModal
          feedback={feedback}
          login={login}
          onChange={setLogin}
          onClose={() => setStaffLoginOpen(false)}
          onSubmit={handleLoginSubmit}
        />
      ) : null}
    </div>
  );
}

export default HomePage;
