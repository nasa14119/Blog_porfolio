---
layout: ../../../components/template_blog_page.astro
heroImage: "https://picsum.photos/500/250?random=2"
title: "JavaScript Frameworks - Heading into 2023"
hashtags: ["lorem", "Ipsum", "Dolor", "sit  ", "Amet "]
date: "29 / Dic / 2022"
autor: "Name of Author"
---

The wonderful thing about glimpsing into the future is that the path is never completely clear. We can look at trends, and look at innovations and try to chart a course. Better still we can be part of those innovations to guide the direction. But nothing is certain.

2022 had a ton of big releases that push web development forward. We saw the 1.0 releases of both Astro and Sveltekit. SolidStart, and Qwik entered Beta. React 18 was released adding streaming support that found its way into Next and Remix, as well as powering React Server Components and the Next 13 app directory. And I'd be remiss to skip the impact TypeScript has had on how we design framework solutions. From tRPC and Tanstack Router to the opinionated Next.js meta-framework create-t3-app

## How We Got Here

"Focus on the Server", they said. "Solve the tradeoffs of Single Page Apps", they said. This isn't new, but what often isn't understood is how it isn't a panacea.

Server Side rendering allowed us to render pages sooner by fetching data sooner (and usually closer to our data source), but it wasn't without compromise. It slowed down our response times and didn't help with the ever-growing size of JavaScript bundle sizes. It often actually increased our bundle sizes as now we need the code not only to client render but to hydrate the page.
