# GA4 Setup Guide

This portfolio now emits the following GA4 events through the shared analytics layer in [`lib/analytics/ga.ts`](/Users/mohammedsalah/Desktop/portofolio/portofolio/lib/analytics/ga.ts):

- `click_whatsapp`
- `click_email`
- `click_contact_button`
- `download_cv`
- `form_start`
- `form_submit`
- `project_view`
- `scroll_depth`

## Recommended key events

Mark these GA4 events as key events:

- `click_whatsapp`
- `click_email`
- `download_cv`
- `form_submit`
- `project_view`

Leave these as non-key engagement events:

- `click_contact_button`
- `form_start`
- `scroll_depth`

## Event locations

- Hero: WhatsApp, project CTA, CV download, contact page CTA, email chip
- Navbar: WhatsApp, contact navigation
- Sticky mobile CTA: WhatsApp, contact page CTA
- Contact section: WhatsApp, email, CV download, form start, form submit
- Project routes: `project_view`
- All routes: `page_view` and `scroll_depth`

## Suggested GA4 dashboard

Create a custom overview with:

- Active users
- Sessions
- Engagement rate
- Average session duration
- Key events
- `click_whatsapp`
- `click_email`
- `download_cv`
- `form_submit`
- Key events by `Session source / medium`
- Key events by `Device category`
- Landing pages by engagement rate
- `project_view` by `project_slug`

## Suggested explorations

- Funnel: homepage CTA -> contact page -> form_start -> form_submit
- Segment comparison: mobile vs desktop key-event rate
- Source comparison: organic social vs direct vs organic search
