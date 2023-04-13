import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';


const sampleCodeSnippet = `import { InteractionHandler } from 'disci';
import fastify, /*....*/ from "fastify";
const server = fastify();
const client = new InteractionHandler(/*Credentials*/);
server.post(/*Path*/, 
  async (req) => 
  await client.handleRequest(req).responseData
)

server.listen({ port: /*Server Port*/})
// replace this when ready
`
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={'min-h-screen'}>
      <div className="flex justify-center h-screen gap-3 items-center flex-row-reverse">
        <CodeBlock className="language-ts">{sampleCodeSnippet}</CodeBlock>
        <div>
          <h1 className="hero_title">{siteConfig.title}</h1>
          <p className="text-md font-semibold">{siteConfig.tagline}</p>
          <div>
            <Link
              className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 hover:text-white"
              style={{
                textDecoration: "none"
              }}
              to="/docs/home/intro">
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
