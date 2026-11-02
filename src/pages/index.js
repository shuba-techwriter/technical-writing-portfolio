
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

const navy = '#17365d';

const sections = [
  {
    number: '01',
    title: 'What am I looking for?',
    subtitle: 'My career aspirations',
    description:
      'I am looking for opportunities as a Senior or Lead Technical Writer where I can apply my extensive experience in technical communication, documentation strategy, and cross-functional collaboration to create meaningful user experiences.',
    skills: [
      'Senior / Lead Technical Writing',
      'Documentation Strategy and Leadership',
      'Enterprise and Developer Documentation',
      'Content Quality and Process Improvement',
    ],
  },
  {
    number: '02',
    title: 'What can I do?',
    subtitle: 'My expertise and capabilities',
    description:
      'I develop clear, accurate, structured, and user-focused documentation that simplifies complex technical information and helps customers and developers use software effectively.',
    skills: [
      'User Guides and Online Help',
      'API and Developer Documentation',
      'Installation and Troubleshooting Guides',
      'Release Notes and Product Documentation',
      'Docs-as-Code and Git Workflows',
      'Documentation Standards and Style Guides',
    ],
  },
  {
    number: '03',
    title: 'Who am I?',
    subtitle: 'My professional journey',
    description:
      'I am a Senior Technical Writer with 18+ years of experience in technical communication. I enjoy transforming complex product information into accessible documentation and collaborating with technical teams to improve the user experience.',
    skills: [
      '18+ Years of Technical Writing Experience',
      'User-Centered Content Development',
      'Collaboration with Engineering and Product Teams',
      'Documentation Reviews and Quality Improvement',
      'Knowledge Sharing and Continuous Learning',
    ],
  },
];

export default function Home() {
  const resumeUrl = useBaseUrl('/files/latest-resume.pdf');

  return (
    <Layout
      title="Technical Writing Portfolio"
      description="Senior Technical Writer with 18+ years of experience in technical documentation, content strategy, Docs-as-Code, and API documentation."
    >
      <main className="homepage">

        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">

            <h1 className="hero-name">
              Shuba Nandini
            </h1>

            <p className="hero-subtitle">
              Senior Technical Writer | 18+ Years of Experience
            </p>

            <h2 className="hero-tagline">
              Simplifying Technology. Empowering Users.
            </h2>

            <p className="hero-description">
              I create clear, accurate, and user-focused technical
              documentation that connects technology with people.
              My expertise spans technical documentation, content
              strategy, Docs-as-Code, and API documentation.
            </p>

            <div className="hero-buttons">
              <a
                href={resumeUrl}
                download="Senior_Technical_Writer_Resume.pdf"
                className="button button--secondary button--lg resume-button"
              >
                ↓ Download My Resume
              </a>

              <Link
                to="/docs/intro"
                className="button button--outline button--lg work-button"
              >
                Explore My Work →
              </Link>
            </div>

          </div>
        </section>

        {/* PROFESSIONAL PROFILE */}
        <section className="profile-section">
          <div className="profile-heading">
            <p className="section-eyebrow">
              PROFESSIONAL PROFILE
            </p>

            <h2>Experience. Expertise. Aspirations.</h2>

            <p>
              Learn more about my professional goals, capabilities,
              and technical writing journey.
            </p>
          </div>

          <div className="profile-grid">
            {sections.map((section) => (
              <article className="profile-card" key={section.number}>
                <div className="profile-number">
                  {section.number}
                </div>

                <h3>{section.title}</h3>

                <p className="profile-subtitle">
                  {section.subtitle}
                </p>

                <p className="profile-description">
                  {section.description}
                </p>

                <ul>
                  {section.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* DOCUMENTATION PORTFOLIO */}
        <section className="documentation-section">
          <div className="documentation-content">
            <h2>Explore My Documentation Portfolio</h2>

            <p>
              Explore my work across user guides, installation
              and troubleshooting documentation, API references,
              release notes, Docs-as-Code, content strategy,
              and documentation leadership.
            </p>

            <Link
              to="/docs/intro"
              className="button button--primary button--lg documentation-button"
            >
              View My Documentation →
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}
