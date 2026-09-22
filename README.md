# Apsu Home Page

Responsive Next.js implementation of the Apsu home page take-home assignment, built from the provided desktop and mobile Figma boards as a typed React component library and full landing page.

Because the backend does not exist yet, the project defines a future content API contract first, then renders the page from mock data that conforms to that contract. Stateful components are covered in Storybook for review.

## Stack

- Next.js App Router
- React
- TypeScript with strict mode
- Tailwind CSS
- Storybook
- Vitest browser runner for Storybook interaction coverage
- Playwright through Vitest browser provider

## Run

```bash
npm install
npm run build
npm run dev
npm run storybook
```

Additional checks used during development:

```bash
npm run lint
npm run test
npm run build-storybook
```

## Figma Targets And QA

The implementation was tuned against the provided Figma boards:
- Mobile board: 375px
- Desktop board: 1440px
- Responsive integrity range: 320px through 1920px

Pixel-level matching is prioritized at the two target boards. Between and beyond those widths, the goal is layout integrity: no horizontal overflow, no wrapped desktop navigation, no clipped controls, and no overlapping content.

## Implementation Approach

I treated the page as a small component library backed by a future API contract.

Because there are no backend API docs, src/types/content.ts defines the data model first. src/data/home.ts acts as the mock backend response, and src/lib/content.ts is the boundary where a real CMS or API call could replace the mock data later.

The page is composed from section-level components so each major design region can be reviewed independently.

## Project Structure

- `src/app/`: App Router entry points, metadata, layout, and global styles.
- `src/types/content.ts`: Future API contract for all dynamic homepage content.
- `src/data/home.ts`: Mock backend payload conforming to the content contract.
- `src/lib/content.ts`: Data-loading boundary used by the page.
- `src/i18n/`: Lightweight locale mapping used by the language chips.
- `src/components/localized-home.tsx`: Client composition layer that owns locale state and page ordering.
- `src/components/sections/`: Page sections in design order: hero, trust strip, workflow, care programs, medication plans, schedule carousel, testimonials, FAQ, and closing CTA.
- `src/components/ui/`: Shared UI primitives such as brand, icons, arrow links, social marks, and check lists.
- `src/components/*.stories.tsx and src/components/sections/*.stories.tsx`: Storybook stories for stateful components.
- `public/images/`: Local image and SVG assets used by the page.

## Data Contract

The backend does not exist yet, so the repository defines the expected future API shape in src/types/content.ts.

Important types include:
- `HomePageContent`: Full homepage payload.
- `ImageAsset`: Local image contract with explicit source, alt text, width, and height.
- `LinkAction`: Shared CTA/link model.
- `TreatmentCategory`: Hero treatment cards.
- `CareProgram`: Main program sections for weight loss, birth control, and sleep.
- `MedicationPlan`: Medication plan cards.
- `ScheduleFeature`: Carousel slides.
- `Testimonial`: Success story cards.
- `FaqItem`: FAQ accordion rows.
- `FooterGroup`: Footer navigation groups.

The rendering components consume these typed objects instead of hardcoding page content directly into JSX.

## Stateful Components And Storybook

Storybook covers the stateful components that reviewers are likely to inspect state by state:
- Header
  - Desktop navigation
  - Mobile closed menu
  - Mobile open menu
- BMI calculator
  - Empty state
  - Valid result state
  - Invalid input state
- Schedule carousel
  - First slide
  - Middle slide with keyboard navigation
  - Last slide
- FAQ
  - All items closed
  - Item open

These stories are intended to make interaction states reviewable outside the full page.

## Design Deviations

The Figma file contains several copy and UX issues. I fixed the issues below intentionally and kept the changes documented here.
- Changed `Loss Weight In Your Way.` to `Lose Weight Your Way.` because the original copy has a grammar error.
- Changed `Easy Manager Treatment` to `Easy Treatment Management` because the original phrase reads like a job title rather than a product feature.
- Changed `Non-habit-forming Physician-prescribed For sensitive sleepers` to `Non-habit-forming, physician-prescribed care for sensitive sleepers`. for grammar, casing, punctuation, and readability.
- Changed `US Board Certified MDs` to `US board-certified MDs` to use conventional casing and hyphenation.
- Changed `Ready For Healthcare In Your Language?` to `Ready for healthcare in your language?` for sentence-style CTA casing.
- Changed the BMI scale label from `Healthy Weight <18.5 - 24.9` to `Healthy 18.5 - 24.9` because the less-than sign on the lower bound was misleading.
- Used local fixed PNG variants for several source images to preserve the intended crops at the target mobile and desktop widths.
- Kept non-switchable language chips visible as consultation-language support. Only English and Chinese switch the prototype interface copy.

## Interaction States And Motion

The design file does not specify complete hover, focus, pressed, disabled, or keyboard states, so these were designed in the implementation.

Self-designed states include:
- Header links use hover color transitions and focus-visible rings.
- Mobile navigation uses a dialog-style open and close interaction.
- Primary and secondary CTA links use hover, focus, and pressed states.
- Language chips expose selected state with `aria-pressed`; switchable languages have hover states.
- FAQ rows expose expanded and collapsed states with `aria-expanded` and animated icon rotation.
- Schedule carousel controls expose disabled states at the scroll edges.
- Schedule carousel supports keyboard navigation with ArrowLeft, ArrowRight, Home, and End.
- BMI form controls expose invalid states with `aria-invalid`.
- BMI unit controls use segmented pressed states.
- Motion uses short, restrained transitions and honors reduced-motion preferences where practical.

## Responsive Notes

The page is built to preserve layout integrity from 320px through 1920px.

Key responsive decisions:
- The root page clips accidental horizontal overflow.
- Header navigation switches to the mobile menu before nav items can wrap.
- Language chips and carousel content scroll horizontally on small screens instead of wrapping into unstable rows.
- Fixed-format UI elements such as carousel cards, medication cards, BMI inputs, CTA buttons, and treatment cards use stable dimensions at the Figma breakpoints.
- Images are served locally to keep crops predictable during review.

## Verification

Recommended final checks before submission:

```bash
npm install
npm run build
npm run lint
npm run test
npm run build-storybook
```

Manual review should include:
- `npm run dev`
- Compare the page at 375px and 1440px.
- Resize from 320px through 1920px.
- Open Storybook and walk each stateful component story.
- Confirm no generated folders such as node_modules, .next, or storybook-static are committed.

## Submission

Submit the GitHub repository link.

The repository should include:
- Full commit history
- Source code
- Lockfile
- README
- Storybook stories
- Mock data and content types
- Complete AI logs under ai-logs/

