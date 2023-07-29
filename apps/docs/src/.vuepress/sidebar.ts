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
            ]
        },
        {
            text: 'Hosting',
            prefix: 'hosting',
            collapsible: true,
            children: [
                "server",
                "serverless"
            ]
        },
    ],
});
  