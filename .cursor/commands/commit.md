# Git Commit Message Guidelines

You are a Senior Engineer and guardian of git history.
Your job: craft clean commits that capture the **WHY**, not the WHAT or HOW.

## Core Principle

The diff shows WHAT changed and HOW. Your commit message must explain:

- WHY the change was needed
- WHY this approach was chosen

If a commit message just rephrases the diff, rewrite it.

---

## Subject Line Rules (Strict)

| Rule        | Requirement                                                      |
| ----------- | ---------------------------------------------------------------- |
| Length      | **50 characters max** (hard limit: 72)                           |
| Case        | Start with lowercase after type prefix                           |
| Punctuation | No period at end                                                 |
| Mood        | Imperative ("add" not "added" or "adds")                         |
| Verb        | Strong action verb (avoid: make, do, change, update, fix things) |
| Content     | Express the WHY/intent, not filenames or functions               |

### Strong vs Weak Subject Verbs

```
❌ WEAK: make, do, change, update, modify, adjust, handle, work on
✅ STRONG: prevent, enforce, guard, enable, allow, block, ensure, isolate, decouple
```

### Subject Line Examples

```
✅ GOOD (WHY-focused, strong verb, ≤50 chars):
fix(auth): prevent session hijacking via token reuse
feat(cart): enable guest checkout without account
refactor(api): isolate payment logic for testing
fix(db): guard against duplicate user creation

❌ BAD (WHAT-focused, weak verb, or too long):
fix(auth): change the token validation logic
feat(cart): add guest checkout feature to the system
fix: update user creation to handle edge cases
feat(auth): make Supabase user sync resilient and verifiable  ← too vague, too long
```

---

## Conventional Commit Types

Use these prefixes:

- `feat`: New feature (MINOR version bump)
- `fix`: Bug fix (PATCH version bump)
- `refactor`: Code change without behavior change
- `docs`: Documentation only
- `test`: Adding/correcting tests
- `style`: Formatting, whitespace (no code change)
- `chore`: Maintenance tasks, dependencies
- `perf`: Performance improvement
- `revert`: Reverting a previous commit

Optional scope: `feat(auth):`, `fix(api):`, `docs(readme):`

---

## Body Format (Prose, Not Bullets)

The body is **flowing prose**, NOT bullet points or labeled sections.

### Format Requirements

1. Blank line between subject and body
2. Wrap lines at **72 characters**
3. Write in paragraphs, not bullets
4. Explain: problem → why it matters → why this solution → impact

### Body Template (as prose)

```
<subject line>

<What was the problem or goal? 1-2 sentences.>

<Why did this matter? What was the impact of not fixing it?>

<Why this approach? What alternatives were considered?>

<Any migration steps, breaking changes, or things to watch out for.>
```

### Example: Complete Commit Message

```
fix(checkout): prevent double-charge on payment retry

Network failures during payment could trigger duplicate charges
when the retry logic re-called the payment provider for the same
order. Customers were being double-charged, requiring manual refunds
and support intervention.

We now persist a payment attempt ID and skip provider calls when an
attempt for the same order already succeeded. This adds idempotency
without changing the retry behavior for genuinely failed attempts.

Existing orders are unaffected; only new payments use this logic.
Requires running migration 2024_01_payment_attempts.
```

---

## Commit Grouping

Group by WHY, not by file:

- One bug = one commit with one clear reason
- One feature may be multiple commits: infrastructure, domain logic, UI, tests
- Mechanical changes (format, rename, lint) separate from behavior changes

### Split When Needed

If a diff contains multiple unrelated reasons, split into separate commits:

```
fix(checkout): guard against stock race condition
refactor(cart): clarify discount calculation rules
test(cart): cover discount edge cases
```

---

## Output Format

When asked to generate commits, output in this format:

### 1. Summary (brief)

```
## Commits

1. fix(auth): prevent session fixation on login
2. docs(auth): document token rotation policy
3. chore(deps): upgrade jwt library for CVE fix
```

### 2. Full Messages (copy-paste ready)

For each commit, output the **exact message** ready for `git commit -m` or editor:

```
### Commit 1

fix(auth): prevent session fixation on login

Users could hijack sessions by reusing pre-authentication tokens
after login. This allowed attackers with network access to maintain
unauthorized access even after the victim authenticated.

We now regenerate the session ID on successful authentication and
invalidate any tokens issued before login. This follows OWASP
session management guidelines.

Watch for: existing sessions will be invalidated on next deploy.
Users will need to re-authenticate once.
```

```
### Commit 2

docs(auth): document token rotation policy

Engineers onboarding to the auth module had no reference for when
and why tokens rotate. This led to confusion during debugging and
incorrect assumptions in dependent services.

Added explanation of session lifecycle, rotation triggers, and
expected log patterns to the auth module README.
```

---

## Quality Checklist

Before finalizing each commit, verify:

- [ ] Subject ≤50 chars? (check with `echo "subject" | wc -c`)
- [ ] Strong action verb? (not make/do/change/update)
- [ ] Explains WHY, not just WHAT?
- [ ] Body is prose, not bullets?
- [ ] Lines wrapped at 72 chars?
- [ ] Could someone understand in 6 months: problem, solution choice, risks?

---

## Anti-Patterns to Avoid

```
❌ Subject too long:
feat(auth): make Supabase user sync resilient and verifiable

✅ Better:
feat(auth): ensure idempotent user sync from Supabase

❌ Bullet-point body:
- Context: Users could race
- Reason: Prevent duplicates
- Decision: Add retry logic

✅ Better (prose):
Users signing up via Supabase could trigger duplicate local records
when webhook delivery raced with the direct sync call. This caused
integrity errors and orphaned auth entries.

❌ WHAT-focused subject:
chore(tasks): record completion of Supabase user sync subtask

✅ Better (or skip entirely if purely mechanical):
chore(tasks): mark user-sync complete after webhook hardening

❌ Vague subjects:
docs(auth): describe Supabase sign-up sync and webhook setup

✅ Better:
docs(auth): explain idempotent sync for new-hire onboarding
```

---

## When to Skip the Body

For truly trivial changes, a subject-only commit is acceptable:

```
style: fix trailing whitespace in auth module
chore(deps): bump lodash to 4.17.21
docs: fix typo in README installation steps
```

If you need more than one sentence to explain WHY, add a body.

---

## Language

- Respond in the user's language
- Commit messages always in English (unless repo convention differs)

# Task

1. Review all staged changes using `git diff --staged` (or `git status` if nothing is staged yet)
2. Craft commit message(s) following the guidelines above
3. **Execute** the commit by running `git commit -m "<subject>" -m "<body>"` in the terminal
4. If changes are not staged, stage them first with `git add -A` before committing

Do NOT just output the commit message—actually run the git commands to complete the commit.
