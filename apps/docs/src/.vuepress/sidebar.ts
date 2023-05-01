import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/api": 'structure',
    "/guide": [
        "",
        {
            text: 'Introduction',
            prefix: 'intro',
            collapsible: true,
            children: [
                "",
                "setup"
            ]
        },
        {
            text: 'Serverless Bots',
            prefix: 'serverless',
            collapsible: true,
            children: [
                "",
            ]
        },
        {
            text: 'Traditional Bots',
            prefix: 'traditional',
            collapsible: true,
            children: [
                "",
            ]
        }
    ],
});
  