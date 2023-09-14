# Limitations

Considering starting a project with Disci?

Before you begin, we strongly recommend reading this entire document, as it comprehensively outlines the major limitations associated with this method. Once you have a clear understanding of these limitations, you can make an informed decision about whether Disci is the right module for your project.

## How it is different with the regular websocket gateway


HTTP-only apps get their Interaction events from Discord through HTTP requests.

But here's the catch: your app ONLY get Interaction events, like when someone interacts with a button sent by the app, or when some one runs a slash command.
Other events, like when someone sends a message (`MessageCreate`), or reacts to a message it will not be received by your app.

This setup has a downside: you can't have real-time updates. So, if you're thinking about having a snazzy cache-based system like in discord.js, well, it won't work because you're missing those other events we just talked about.

But, here's the silver lining: *HTTP-only apps are super scalable. Why? Because they don't need to deal with things like **sharding**, which is a concept for dividing the workload when you have a massive bot.*

## Platform limitations

### Sever-less limitations (ex: cloudflare)

In most major serverless environments, the serverless process is suspended or terminated after you respond to the request you received

When you use the `reply` or a similar method in **Disci**, it essentially means you are responding to the request, which in turn terminates the process. This has implications for features like deferring because responding to the request (interaction) results in the process being terminated, and as a result, any code you have after the defer statement will **never** run.


:::tip
This is not a limitation for environments where the process still runs even when you respond to the request.
:::

As mentioned earlier, Discord expects your application to acknowledge the receiving of an interaction within three seconds. Failure to do so results in Discord considering the interaction as failed, and the token becomes invalid. In environments where the process terminates upon responding, and you are unable to `deferReply` (to gain additional **15 minutes**), it's crucial to ensure that you respond to the initial interaction within the 3-second window.
