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
      <main style={{backgroundColor: '#f5f8fc'}}>

        {/* HERO SECTION */}
        <section
          style={{
            background: 'linear-gradient(135deg, #102a4c, #17365d)',
            color: '#ffffff',
            textAlign: 'center',
            padding: '85px 20px 75px',
          }}
        >
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <p
              style={{
                color: '#c7d9ef',
                fontSize: '13px',
                fontWeight: 'bold',
                letterSpacing: '2px',
              }}
            >
              SENIOR TECHNICAL WRITER | 18+ YEARS OF EXPERIENCE
            </p>

            <h1
              style={{
                color: '#ffffff',
                fontSize: 'clamp(34px, 5vw, 52px)',
                marginTop: '20px',
                marginBottom: '15px',
              }}
            >
              Technical Writing Portfolio
            </h1>

            <h2
              style={{
                color: '#dce9fa',
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: '500',
              }}
            >
              Simplifying Technology. Empowering Users.
            </h2>

            <p
              style={{
                fontSize: '17px',
                lineHeight: '1.9',
                color: '#e0eaf7',
                marginTop: '24px',
              }}
            >
              I create clear, accurate, and user-focused technical
              documentation that connects technology with people.
              My expertise spans technical documentation, content
              strategy, Docs-as-Code, and API documentation.
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: '15px',
                marginTop: '35px',
              }}
            >
              <a
                href={resumeUrl}
                download="Senior_Technical_Writer_Resume.pdf"
                className="button button--secondary button--lg"
                style={{
                  backgroundColor: '#ffffff',
                  color: navy,
                  borderColor: '#ffffff',
                  fontWeight: 'bold',
                }}
              >
                ↓ Download My Resume
              </a>

              <Link
                to="/docs/intro"
                className="button button--outline button--lg"
                style={{
                  borderColor: '#ffffff',
                  color: '#ffffff',
                  fontWeight: 'bold',
                }}
              >
                Explore My Work →
              </Link>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL PROFILE */}
        <section
          style={{
            maxWidth: '1150px',
            margin: '0 auto',
            padding: '70px 20px',
          }}
        >
          <div style={{textAlign: 'center', marginBottom: '45px'}}>
            <p
              style={{
                color: '#386ca3',
                fontWeight: 'bold',
                letterSpacing: '2px',
                fontSize: '13px',
              }}
            >
              PROFESSIONAL PROFILE
            </p>

            <h2 style={{color: navy, fontSize: '34px'}}>
              Experience. Expertise. Aspirations.
            </h2>

            <p style={{color: '#596b80', fontSize: '16px'}}>
              Learn more about my professional goals, capabilities,
              and technical writing journey.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
              gap: '24px',
              alignItems: 'stretch',
            }}
          >
            {sections.map((section) => (
              <article
                key={section.number}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #dce5f0',
                  borderRadius: '12px',
                  padding: '30px',
                  boxShadow: '0 8px 25px rgba(23,54,93,0.06)',
                }}
              >
                <div
                  style={{
                    color: '#4878ae',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    marginBottom: '22px',
                  }}
                >
                  {section.number}
                </div>

                <h3
                  style={{
                    color: navy,
                    fontSize: '23px',
                    marginBottom: '8px',
                  }}
                >
                  {section.title}
                </h3>

                <p
                  style={{
                    color: '#386ca3',
                    fontWeight: 'bold',
                    fontSize: '14px',
                  }}
                >
                  {section.subtitle}
                </p>

                <p
                  style={{
                    color: '#52647a',
                    fontSize: '14px',
                    lineHeight: '1.8',
                    marginTop: '20px',
                  }}
                >
                  {section.description}
                </p>

                <ul
                  style={{
                    paddingLeft: '20px',
                    marginTop: '20px',
                    color: '#344c68',
                    fontSize: '14px',
                    lineHeight: '1.9',
                  }}
                >
                  {section.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* DOCUMENTATION PORTFOLIO */}
        <section
          style={{
            backgroundColor: '#e8f0f9',
            padding: '65px 20px',
            textAlign: 'center',
          }}
        >
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <h2 style={{color: navy, fontSize: '32px'}}>
              Explore My Documentation Portfolio
            </h2>

            <p
              style={{
                color: '#50647b',
                lineHeight: '1.9',
                fontSize: '16px',
                margin: '20px 0 30px',
              }}
            >
              Explore my work across user guides, installation
              and troubleshooting documentation, API references,
              release notes, Docs-as-Code, content strategy,
              and documentation leadership.
            </p>

            <Link
              to="/docs/intro"
              className="button button--primary button--lg"
              style={{
                backgroundColor: navy,
                borderColor: navy,
                color: '#ffffff',
              }}
            >
              View My Documentation →
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}