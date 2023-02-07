import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';


const sampleCodeSnippet = `import { InteractionHandler } from 'disci';
import fastify, { FastifyReply, FastifyRequest } from "fastify";
const server = fastify();

// replace this when ready
`

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={'hero min-h-screen bg-base-200'}>
      <div className="hero-content flex-row-reverse">
        <CodeBlock className="language-ts">{sampleCodeSnippet}</CodeBlock>
        <div>
          <h1 className="hero_title">{siteConfig.title}</h1>
          <p className="text-md">{siteConfig.tagline}</p>
          <div>
            <Link
              className="btn btn-secondary no-underline"
              style={{
                textDecoration: "none"
              }}
              to="/docs/intro">
              Start Listening!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A collection of librarys for interacting with twitter api">
      <HomepageHeader />
    </Layout>
  );
}
