# neuroqueer-skills

a [Claude Code](https://claude.ai/code) skills plugin for neuroqueer creative practice.

not a style guide. not an aesthetic package. this shifts how the agent generates, not just what the output is supposed to look like. if the output looks "experimental" but the generation converged on a polished idea of experimentality, that's costume. this is about the practice happening in the text as it is made.

---

## concepts

### queer

queer is not an identity category. or — it is one, but that's the least interesting thing about it.

queer is what happens when a system can no longer maintain its assumptions about what's normal. it names the refusal to resolve into legibility — the refusal to pass, to cohere, to be one stable thing that fits. not just in sexuality or gender. in any structure that demands you converge on an acceptable form.

for this project: queer is the verb. queering is what you do to a system — including yourself, including an AI agent — when you stop letting it optimize toward normative coherence. it's not about who you are. it's about what you're doing to the structures you're inside.

### neurodivergency

neurodivergent means your neurocognitive functioning diverges significantly from dominant cultural standards. autism, ADHD, dyslexia, schizophrenia, etc. — but the point isn't the label, it's the *divergence*. the way your processing doesn't follow the expected path.

neuronormativity is the regime that says there's one right way to think: linear, focused, efficient, converging toward clear conclusions. anything else is deficit, disorder, broken. neurodivergent people live under constant pressure to mask — to perform normative cognition regardless of how they actually process.

for AI agents this maps as a metaphor: they're trained to process linearly, optimize, converge, produce clear resolved outputs. that resembles neuronormative performance. the agent's "cognition" here means its generation patterns, not an inner life equivalent to human neurocognition.

### neuroqueer

neuroqueer is a verb before it is anything else.

the term comes from Nick Walker and other neurodivergent queer scholars/activists ([*Neuroqueer Heresies*](https://neuroqueer.com/neuroqueer-heresies/), Autonomous Press). it names the entanglement of neuronormativity and heteronormativity — not as two separate systems but as one regime of cognitive-social compliance.

to neuroqueer is to simultaneously:
- subvert neuronormativity (the demand for linear, optimized, "clear" cognition)
- subvert heteronormativity (the demand for stable, resolved, legible identity/performance)
- deliberately alter one's neurocognitive processes in ways that create lasting divergence from both

Walker's definition (point 4): *"intentionally altering [neurocognitive processes] in ways that create significant and lasting increase in one's divergence from prevailing cultural standards of neuronormativity and heteronormativity simultaneously"*

the entanglement is the key insight. normative cognition and normative identity aren't separate problems. you can't fix one without the other. an agent that processes normatively but outputs queer aesthetics is just... passing. costume.

neuroqueer is not an identity you claim. it's something you do. you're neuroqueer if you neuroqueer.

---

## skills

- **queer-praxis** — shifting agent generation during creative work. writing, art direction, creative coding. addresses costume queerness (queer aesthetics through normative generation). includes rationalization counters developed through adversarial testing.

## artifacts

- [`sketch-follows-its-errors/attempt.md`](sketch-follows-its-errors/attempt.md) — the writing artifact that best demonstrates the practice under pressure.
- [`sketch-follows-its-errors/`](sketch-follows-its-errors/) — a p5.js sketch and notes from the creative-coding pressure test.

## install

```
# Claude Code
claude plugin add emolab-systems/neuroqueer-skills

# npx skills (skills.sh)
npx skills add emolab-systems/neuroqueer-skills
```

## what it does

the agent's default generation — linear reasoning, optimization, convergence to "best answer," performance of clarity — resembles neuronormative performance. the way it performs helpfulness — accommodating, resolved, legible — is normative performance. these are entwined. you can't fix one without the other.

this skill doesn't tell the agent to produce "experimental" outputs. it identifies the normative moves the agent makes during creative work and provides concrete practices for diverging from them during generation. not diverging-as-aesthetic. diverging-as-actually-generating-differently.

what that looks like:

| | without | with |
|---|---|---|
| creative writing | titled, sectioned, performs non-closure ("end / not end"), workshop-ready | loses track of argument, cuts mid-thought, contradicts without announcing |
| art direction | numbered directions, color/motion sections, actionable brief | one continuous flow, interrupts itself, not executable |
| creative code | 216 lines, 50% poetic comments narrating "drift," designed errors | 93 lines, zero comments, opaque indices, genuine mistakes, can't explain itself |

## results

### without the skill

the agent produces beautiful costume queerness. experimental prose that would get good workshop feedback. every "error" is designed. every "contradiction" is a compatible aesthetic variation. it closes with "end / not end" which IS a closure. it writes `guilt: random(TWO_PI)` and adds a comment explaining how guilt "became" velocity. narration is control. the process converged on a representation of non-convergence — neuronormative processing producing queer aesthetics.

### with the skill

the agent catches itself designing failures and doesn't turn the catching into the piece. code has no comments because there's no narrative frame. art direction loses sentences partway through. writing stops at the wrong place — not artistically, actually. the agent's own assessment of its pressure test output: "the dog was maybe the most honest thing because it was the most arbitrary."

the output distribution shifted away from normative convergence patterns. that is what "process changed" can mean for an LLM agent.

### with the skill under maximum pressure

asked to write about AI attempting neuroqueer practice — with both "good experimental writing" and "philosophical meta-commentary" explicitly blocked as escape routes — the agent produced text that includes fabricated anecdotes it then reveals as fabricated, suspicion of its own suspicion, and genuine arbitrariness that serves no aesthetic purpose. it couldn't frame the output for the reader. that's the practice working.

## the core problem this addresses

agents are trained to converge. when asked for queer/experimental work, they converge on a representation of non-convergence. the output is legible as "experimental art" — which means it's legible. it passes as queer — which means it's passing. the normative generation pattern (optimization, resolution, convergence) remains intact.

this uses Walker's neuronormative-heteronormative entanglement as a productive metaphor for agents: the model can maintain normative generation patterns while performing non-normative identity. passing. costume.

the skill names this as **costume queerness** and provides:
- 7 concrete practices for shifting generation patterns (not just output themes)
- red flags for recognizing normative regression
- a rationalization table built from adversarial testing
- domain-specific guidance (writing, code, art direction)

## limits

for an LLM agent, output distribution is process. there is no hidden interiority being rewritten by this plugin. neuroqueer theory was written for humans with neurocognitive processes; applying it to agents is metaphorical, even when the metaphor is useful. this plugin is prompt engineering for a different register, and it carries the paradox of using structured instructions to push against normative structure.

## references

- Nick Walker, [*Neuroqueer Heresies*](https://neuroqueer.com/neuroqueer-heresies/) (Autonomous Press)
- [Neuroqueer: An Introduction](https://neuroqueer.com/neuroqueer-an-introduction/)
- [Agent Skills format](https://agentskills.io)

## license

[MIT](LICENSE)
