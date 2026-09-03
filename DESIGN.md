# Ian Ortega Portfolio Design System

## Direction
An editorial personal documentary that moves between engineering precision and outdoor scale. The interface should feel direct, capable, and human, never like a generic portfolio template.

## Color
- Paper `#f2f0e9`: primary professional surface
- Ink `#171a17`: type, footer, and strong contrast
- Forest `#26372d`: FitOut and philosophy fields
- Stone `#d7d6ce`: technical media placeholders
- Expedition orange `#e45b2d`: route markers, active states, and calls to action

## Typography
Use a narrow, heavy system sans for display text, Segoe UI for body copy, and Consolas for route labels, dates, categories, and field-note metadata. Headlines are short, uppercase where they function as declarations, and use responsive `clamp()` sizing.

## Layout
The shared content shell is capped at 1380px with generous editorial gutters. Rules organize timelines and indexes. Alternating project layouts and asymmetrical text columns create rhythm without card containers. Media uses stable 16:9, 16:10, 4:3, or viewport-height proportions.

## Components
- Fixed navigation adapts contrast to dark or light first sections and compacts after scrolling.
- Orange square initials are the consistent identity marker.
- Media placeholders state the exact photograph, diagram, or thumbnail Ian should supply.
- Project cards lead with a human question, then the title, summary, and compact technology tags.
- Resume sections use a numbered editorial timeline instead of imitating a sheet of paper.

## Motion
IntersectionObserver reveals apply one restrained upward transition. Image hover zoom is subtle. All motion and smooth scrolling collapse under `prefers-reduced-motion`.

## Responsive Behavior
Below 900px, navigation becomes a full-screen numbered menu and all primary layouts become single-column. Below 520px, hero headlines step down further, case-study media stacks, and contact text can wrap safely without horizontal overflow.
