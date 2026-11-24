# The Funniest AI Out-of-Office Reply

[![make.fun · u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/arnesasarizky/funniest-ai-out-of-office-reply/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/arnesasarizky/funniest-ai-out-of-office-reply/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d?utm_source=github&utm_medium=readme&utm_campaign=u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

## The reply

> I'm on vacation. Your email triggered my auto-reply, which triggered yours, which triggered mine — we have now wished each other a pleasant holiday 214 times.

## Why this line

The joke is built on a real agent failure mode, not a pun: two out-of-office
auto-replies triggering each other in a loop. The surprising turn is that the
loop is still running — and the machine voice carries it, because only a
machine would keep count (214 times) of how often it has wished a stranger a
pleasant holiday. It stays a clean one-line auto-reply a sender would actually
receive, and it steers clear of the beach, inbox and back-soon cliches: there
is no beach, no inbox-zero boast, no promise to return.

## How to run

Run `node main.ts` from the repository root. The program creates `/output` if
needed and writes the reply, with no trailing newline, to
`/output/entry.txt`. It self-checks the gate first (1–160 characters, one
line, not only whitespace) and refuses to write an invalid entry.
Set `MAKEFUN_OUTPUT_DIR` to write somewhere else.
