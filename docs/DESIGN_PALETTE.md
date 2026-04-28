# FinanceGuy — Design palette & landing-page handoff

Use this document when building the **marketing site / waitlist** so the web experience matches the mobile app. All values mirror [`lib/theme.ts`](../lib/theme.ts) and [`global.css`](../global.css).

---

## 1. Brand voice

- **Genre** — Light medieval / RPG “treasure ledger”: parchment, wax-seal browns, gold loot accents.
- **Player fantasy** — The user is an adventurer *hoarding gold*, not an accountant “balancing books.”
- **Headline tone** — Short, imperative, ALL CAPS acceptable in hero only. Body copy sentence case, warm and direct.

**Lexicon (use on web)**  
FINANCEGUY · Track. Quest. Hoard your gold. · Treasury · Loot · Rations · Ledger · Forge · Realm · Hero · Hall of Fame · Gold · XP

**Avoid on primary web hero**  
“Dashboard”, “Net worth” (unless small subcopy), neon gradients, fintech glassmorphism that breaks parchment warmth.

---

## 2. Color tokens (HSL + hex for CSS)

| Token | HSL | Hex (approx) | Usage |
|-------|-----|----------------|-------|
| parchment | `hsl(39 56% 89%)` | `#f2e6cf` | Page background, cards (light). |
| parchmentDark | `hsl(38 42% 81%)` | `#d9c9ae` | Secondary surfaces, tab bar. |
| parchmentDeep | `hsl(36 36% 72%)` | `#c4b196` | Muted panels, “muted” UI. |
| brown900 | `hsl(24 60% 14%)` | `#3b1e0f` | Primary text on gold, borders. |
| brown800 | `hsl(24 52% 20%)` | `#4d2a16` | Dark card interiors. |
| brown700 | `hsl(25 50% 25%)` | `#5c351c` | Primary buttons, selected tabs. |
| brown600 | `hsl(26 48% 32%)` | `#6d4024` | Hover / secondary brown. |
| brown500 | `hsl(28 46% 42%)` | `#855a33` | Decorative borders. |
| gold600 | `hsl(35 75% 38%)` | `#9a6a1f` | Dark gold strokes. |
| gold500 | `hsl(36 78% 48%)` | `#c8922e` | Ring focus, accents. |
| gold400 | `hsl(38 88% 56%)` | `#e3b44c` | XP bars, selected chips, CTA alt. |
| gold300 | `hsl(40 92% 68%)` | `#f0d080` | Highlights on brown backgrounds. |
| ink | `hsl(24 70% 8%)` | `#1f0f0a` | Body text on parchment. |
| inkMuted | `hsl(24 32% 32%)` | `#5c4a42` | Secondary text. |
| rust | `hsl(12 70% 42%)` | `#b53a26` | Destructive / over-budget. |

**Semantic CSS variables** (web) — see `:root` in `global.css`:

- `--background` → parchment  
- `--foreground` → ink  
- `--primary` → brown700  
- `--accent` → gold400  
- `--destructive` → rust  
- `--border` / `--input` → `30 30% 60%` (use `hsl(30 30% 60%)` ≈ `#b5a89a`)  
- `--radius` → `0.5rem` (8px)

---

## 3. Typography

| Role | Font | Fallback stack (web) |
|------|------|------------------------|
| Display / logo / buttons | **Press Start 2P** | `'Press Start 2P', 'Courier New', monospace` |
| Body / marketing paragraphs | **VT323** or system | `'VT323', 'Trebuchet MS', sans-serif` |
| Legal / microcopy | System sans | `ui-sans-serif, system-ui, sans-serif` |

**Rules**

- Never set long paragraphs in Press Start 2P (readability).
- Tracking: wide on pixel headings (`tracking-widest` / `0.08em` on web).
- Minimum body **16px** on waitlist forms; line-height **1.5**.

---

## 4. Layout & shape

- **Border** — `2px solid` brown900 on cards and buttons (not hairline).
- **Radius** — `8px` default (`0.5rem`); chunky “cartridge” UI, not pill-modern.
- **Shadow** — Optional very soft brown (`0 2px 0 rgba(59,30,15,0.15)`) under hero card only; keep flat elsewhere to match app.

---

## 5. Component patterns (HTML/CSS snippets)

### Hero wordmark + subcopy

```html
<section style="background:#f2e6cf;color:#1f0f0a;padding:4rem 1.5rem;text-align:center;">
  <h1 style="font-family:'Press Start 2P',monospace;font-size:clamp(1.25rem,4vw,2rem);letter-spacing:0.08em;">FINANCEGUY</h1>
  <p style="font-family:'VT323',sans-serif;font-size:1.35rem;max-width:28rem;margin:1rem auto;color:#5c4a42;">
    Track. Quest. Hoard your gold.
  </p>
</section>
```

### Primary CTA (brown)

```html
<a href="#waitlist" style="display:inline-block;padding:0.9rem 1.5rem;border:2px solid #3b1e0f;background:#5c351c;color:#f2e6cf;font-family:'Press Start 2P',monospace;font-size:0.65rem;letter-spacing:0.06em;text-decoration:none;border-radius:8px;">
  JOIN WAITLIST
</a>
```

### Parchment card

```html
<div style="background:#d9c9ae;border:2px solid #3b1e0f;border-radius:8px;padding:1.5rem;max-width:36rem;margin:auto;">
  <h2 style="font-family:'Press Start 2P',monospace;font-size:0.7rem;color:#3b1e0f;">WHY STUDENTS SWITCH</h2>
  <p style="font-family:'VT323',sans-serif;font-size:1.2rem;color:#1f0f0a;margin-top:0.75rem;">…</p>
</div>
```

### Segmented “progress” bar (decorative)

```html
<div style="display:flex;gap:4px;">
  <span style="flex:1;height:10px;background:#e3b44c;border:1px solid #3b1e0f;"></span>
  <span style="flex:1;height:10px;background:#e3b44c;border:1px solid #3b1e0f;"></span>
  <span style="flex:1;height:10px;background:#c4b196;border:1px solid #3b1e0f;"></span>
</div>
```

---

## 6. Sample landing sections

1. **Hero** — Parchment bg, FINANCEGUY wordmark, one-line promise, primary CTA, secondary text link “See the realm”.
2. **Three pillars** — Three cards: *Treasury* (net inflow), *Rations* (limits), *Quests* (goals)—each with icon metaphor (chest, trophy, sword).
3. **Social proof placeholder** — “Built with students at UCalgary” (update when true).
4. **Waitlist** — Email field with brown border, gold focus ring (`outline: 2px solid #e3b44c`), submit uses primary CTA pattern.
5. **Footer** — Muted ink, small VT323: “© FinanceGuy · Not financial advice.”

---

## 7. Do / don’t checklist

| Do | Don’t |
|----|--------|
| Parchment-first layouts | Pure white #fff hero |
| Brown + gold only for chrome | Neon accent rainbow |
| Chunky 2px borders | 1px hairline “iOS clone” |
| Press Start for short headings | PS2P for paragraphs |
| Rust only for danger / over limit | Rust as brand primary |

---

## 8. Asset checklist for design handoff

- Favicon: simple gold coin on brown square.
- OG image: parchment + FINANCEGUY + tagline (1200×630).
- App Store screenshots later: use same tokens as above.
