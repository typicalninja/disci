import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Serverless support',
    Svg: '💽',
    description: (
      <>
       Run your discord bot on serverless platforms like cloudflare workers
      </>
    ),
  },
  {
    title: 'Server support',
    Svg: '💽',
    description: (
      <>
      DisciJS also works on regular servers too
      </>
    ),
  },
  {
    title: 'Written in typescript',
    Svg: '💽',
    description: (
      <>
      DisciJS is completely written using typescript, allowing you to enjoy the full power of typescript
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.card)}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={clsx(styles.features)}>
     <div className='container'>
      <div className={clsx('row')}>
        {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
          ))}
      </div>
     </div>
    </section>
  );
}
