# Limitations

Interested in creating a project with disci?

Before Starting make sure to read this entire document as it lists most major limitations
in this method. After that you can decide if you still want to use this module.

## How it is different with the regular websocket gateway


HTTP-only bots are sent Interaction events through HTTP requests sent from Discord.
Unlike gateway bots they do **NOT** receive any other type of event (ex: `MessageCreate`)

This makes realtime updates impossible, and having a cache base system (like discord.js)
is not feasible due to not receiving the said events.

However this also mean HTTP-only are much more scalable than gateway bots since they
do not have any concepts such as **sharding**.

## Platform limitations

### Sever-less limitations (ex: cloudflare)

In most major serverless environments, the serverless process is suspended or terminated after you respond to the request you received

When you use the `reply` or a similar method in **Disci**, it essentially means you are responding to the request, which in turn terminates the process. This has implications for features like deferring because responding to the request (interaction) results in the process being terminated, and as a result, any code you have after the defer statement will **never** run."


:::tip
This is not a limitation for server environments where the process still runs even when you respond to the request
:::