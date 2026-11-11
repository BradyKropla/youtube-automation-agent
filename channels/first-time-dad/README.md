# First-time dad channel preset

A ready-to-load setup for a faceless channel for expecting and new fathers. It covers pregnancy prep, the hospital bag and birth day, gear, family money and dad productivity. It's built from the channel blueprint dated 2026-11-11.

`channel.json` configures two things in the agent:

- **Channel profile:** name, voice, visual style, call to action and blocked phrases. The blocked phrases fail the quality check if they appear in a title, description or script.
- **Autonomous operator strategy:** objective, audience, five content pillars, cadence, KPI and the guardrails every script must follow.

## Setup

1. Finish the main [Quick start](../../README.md#quick-start): `npm install`, `npm run walkthrough`, then `npm start`.
2. In a second terminal, load the preset:

   ```bash
   npm run channel:apply -- channels/first-time-dad/channel.json
   ```

   Add `--dry-run` to validate the file without contacting the server. If you set `API_KEY` in `.env`, the script sends it for you.
3. Open the dashboard, go to **Autonomous operator**, review the strategy and choose **Activate & run now**. The strategy loads as a draft, so nothing runs until you activate it.
4. Each finished video waits in **Pipeline**. Check facts in the Evidence desk, confirm media rights, edit the title if needed, then approve and schedule it.

Before you load it, change `channelName` in `channel.json` if you pick a different name, and set `timezone` and `outcomeCurrency` to match where you live.

## SEO keyword clusters

Each video should target one main keyword. Put it in the first half of the title, in the first sentence of the description, and say it aloud in the first 30 seconds. Check every keyword in YouTube search autocomplete before filming, because demand here is my judgement, not measured search volume.

| Cluster | Main keywords | Supporting keywords |
| --- | --- | --- |
| Hospital and birth | hospital bag for dad, what to pack in hospital bag, dad's role during labor | labor and delivery tips for dads, what to bring to the hospital, first night home with newborn |
| Pregnancy prep | how to prepare for baby as a dad, first time dad tips, pregnancy tips for husbands | third trimester checklist, things to do before baby arrives, nesting checklist |
| Gear | baby registry must haves, baby gear worth it, baby gear to skip | best baby monitor, stroller vs travel system, car seat installation |
| Family money (Canada) | EI parental leave explained, RESP explained, CESG grant | standard vs extended parental leave, cost of a baby in Canada, life insurance for new parents |
| Family money (US) | cost of having a baby, 529 plan explained, paternity leave | life insurance for new dads, budget for a baby, will and guardianship |
| Productivity | new dad routine, newborn night shift schedule, family organization system | Notion family dashboard, meal prep for new parents, shared family calendar |

**Tags:** 8 to 15 per video, combining the main keyword, two or three variants, and the cluster terms. The SEO agent generates these; trim anything irrelevant before approving.

**Descriptions:** the first two lines carry the main keyword and the promise. Add chapters, sources with the date you checked them, an affiliate disclosure, and links to the next video in the series.

## Title formulas

Keep titles under 60 characters with the keyword up front. No clickbait the video doesn't deliver.

| Formula | Example |
| --- | --- |
| Keyword + honest angle | Hospital Bag for Dads: What I'd Actually Pack |
| What I [did] vs what I'd skip | Baby Gear I Bought vs What I'd Skip |
| The real number | What a Baby Really Costs in Year One |
| Explained simply | EI Parental Leave Explained in 8 Minutes |
| Mistake avoidance | 7 Things First-Time Dads Forget Before Birth |
| Timeline | Third Trimester Checklist for Dads, Week by Week |
| The system | The Night Shift Schedule That Saved Our Sleep |

Give the agent's growth experiments two title variants and two thumbnail variants per video once you have steady impressions.

## Hook formulas (first 15 seconds)

The hook restates the search question, shows the payoff, and gives a reason to stay. The script agent is told to follow this pattern.

1. **Stakes and promise:** "You've got maybe a few weeks before the bag needs to be by the door. Here's exactly what goes in it, what doesn't, and the three things almost every dad forgets."
2. **Surprising number:** "Canada's parental leave can pay you 55% of your earnings, or 33% stretched over a longer leave. Pick wrong and you leave money on the table. Here's how to choose."
3. **Confession:** "I spent too much on baby gear. Here's what actually got used, and what's still in the box."
4. **Direct question:** "What does a dad actually do on birth day? Not the movie version. The real job list, hour by hour."
5. **Free money:** "There's a government grant that adds up to $500 a year to your kid's education savings, and a lot of parents never claim all of it."

## First 12 videos, ready to run

Paste the topic into **Create video** in the dashboard, or let the autonomous operator choose from the pillars. Facts flagged below need a source attached in the Evidence desk before approval.

| # | Topic to enter | Main keyword | Hook | Format |
| --- | --- | --- | --- | --- |
| 1 | Hospital bag for dads: must-haves, nice-to-haves, and what to skip | hospital bag for dad | Stakes and promise | list |
| 2 | Third trimester checklist for dads, week by week | third trimester checklist | Direct question | tutorial |
| 3 | What a dad actually does on birth day, from first contraction to going home | dad's role during labor | Direct question | story |
| 4 | EI parental leave explained: standard vs extended, with a worked example | EI parental leave explained | Surprising number | explainer |
| 5 | The free RESP grant (CESG) most new parents don't fully claim | CESG grant | Free money | explainer |
| 6 | What a baby really costs in year one, line by line | cost of having a baby | Surprising number | list |
| 7 | Baby registry must-haves vs gear to skip | baby registry must haves | Confession | review |
| 8 | The first 72 hours home with a newborn: a dad's checklist | first night home with newborn | Stakes and promise | list |
| 9 | How we split newborn night shifts so both parents sleep | newborn night shift schedule | Direct question | tutorial |
| 10 | Life insurance for new dads: how much and what type, explained | life insurance for new dads | Surprising number | explainer |
| 11 | Getting the house ready before the baby arrives | things to do before baby arrives | Stakes and promise | list |
| 12 | 7 things first-time dads wish they knew in month one | first time dad tips | Confession | list |

Figures to verify on official pages before approving: EI parental benefit rates and weekly maximums (canada.ca), CESG rates and limits (CRA), and any baby cost benchmark (Statistics Canada or USDA, with the year). Car seat and infant sleep content must cite Transport Canada, Health Canada, the CDC or the AAP.

## Cadence

The strategy sets two long videos a week. Use the Shorts Repurposing Studio to cut three Shorts from each approved video. Bank videos 1 to 6 before the due date, because production time shrinks after the birth. If you need to, drop to one a week during the newborn weeks by changing `cadencePerWeek` to 1 and running the apply command again.

## What "passive" realistically means

- **Upload is automatic, approval is not.** The agent researches, writes, voices, renders, writes SEO metadata and schedules uploads. Each video still needs about 10 to 20 minutes of your review. This is deliberate: YouTube demonetizes mass-produced, templated or read-aloud content, and money or safety mistakes on a parenting channel can hurt viewers and the channel.
- **Add your own experience.** The videos that earn are the ones with your real receipts, decisions and numbers. Add a line or two to each script in review, or record your own voiceover, since your own voice is the safest option for monetization.
- **Use YouTube's altered-content setting** when a video includes realistic AI-generated people or scenes.
- **Income order:** affiliate links from video 1, then a free checklist or budget template to collect emails, then ad revenue after Partner Program eligibility, then sponsors. Expect year one to build the audience more than the income.

## Guardrails built into the preset

- No faces, no baby's name, no home, hospital or location shown.
- Money and legal content is labelled general information, uses official figures with the year, and never promises returns.
- Medical and safety topics cite official health and transport sources and tell viewers to check with their doctor.
- Affiliate links are disclosed in the video and description.
