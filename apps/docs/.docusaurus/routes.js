import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '94b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'cdf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '680'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '367'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '66c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '5b9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '520'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e42'),
    routes: [
      {
        path: '/docs/api/',
        component: ComponentCreator('/docs/api/', 'aee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/classes/BitField',
        component: ComponentCreator('/docs/api/classes/BitField', 'faa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/classes/InteractionHandler',
        component: ComponentCreator('/docs/api/classes/InteractionHandler', 'f08'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/classes/PermissionsBitField',
        component: ComponentCreator('/docs/api/classes/PermissionsBitField', '2d9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/classes/UserFlagsBitField',
        component: ComponentCreator('/docs/api/classes/UserFlagsBitField', '377'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/interfaces/IClientEvents',
        component: ComponentCreator('/docs/api/interfaces/IClientEvents', '658'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/interfaces/IHandlerOptions',
        component: ComponentCreator('/docs/api/interfaces/IHandlerOptions', '759'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/interfaces/IRequest',
        component: ComponentCreator('/docs/api/interfaces/IRequest', '572'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/interfaces/IResponse',
        component: ComponentCreator('/docs/api/interfaces/IResponse', '333'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/api/modules',
        component: ComponentCreator('/docs/api/modules', '98a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '8ea'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
