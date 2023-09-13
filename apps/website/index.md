---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Disci.js"
  text: "Supercharged by http"
  tagline: Handle discord interactions via webhooks
  actions:
    - theme: brand
      text: Guide
      link: /markdown-examples
    - theme: alt
      text: API Docs
      link: /api-examples

features:
  - title: Builtin rest client
    details: Disci contains a minimal REST implementation built-in, which supports JSON and file uploading. However, it doesn't include built-in rate limit management.
  - title: Platform & Framework agnostic
    details: Disci can be used anywhere that supports javascript, like cloudflare workers, or nodejs servers
  - title: Minimum size
    details: Disci is heavily opinionated and only contain some base essential methods, everything else can be managed by you using the rest instance
---

