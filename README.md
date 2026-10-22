<div align="center">
  <img src="images/logo.png" alt="Autometrik logo" width="420">
</div>

# Autometrik Help Center

**Documentation for the Autometrik auto repair shop management system.**

Autometrik helps Philippine auto repair shops, tire shops, and service centers manage work from customer booking through job completion and payment. It connects customer and vehicle records, estimates, job orders, inventory and purchasing, billing, and reporting in one system. Learn more on the [Autometrik Facebook page](https://www.facebook.com/autometrik.ph/).

This repository publishes the Autometrik Help Center. It contains product guides, business process explanations, onboarding instructions, training scenarios, and troubleshooting articles. The Autometrik application itself is maintained separately.

## Browse the documentation

The website groups articles by topic and provides search. Start with [Introduction](articles/01%20-%20Introduction/), [Getting Started](articles/03%20-%20Getting%20Started/), or the [full article index](articles/README.md).

## Add or update an article

1. Open the relevant numbered topic folder in `articles/`. Create a numbered `.md` file, such as `articles/03 - Getting Started/04 - Resetting a Password.md`.
2. Start the file with a level-one heading (`# Resetting a Password`). The heading becomes the article title on the website.
3. Put article images in `articles/images/` and link them as `![Description](../images/filename.png)`.
4. Optionally add the article to `articles/README.md` so it appears in the repository's Markdown index. The website's topic lists and search are generated automatically from article files.
5. Open a pull request for review. After it is merged into `main`, GitHub Actions rebuilds and publishes the Help Center.

Numbered folders and filenames set the article order. Existing website links use those positions, so avoid renumbering published articles unless you also plan to update links to them.

## Add a release note

The Release Notes page (`#releases`) reads `release-notes.json` in the repository root. Each item is one change shipped to shops:

```json
{
  "date": "2026-10-13",
  "type": "Enhancement",
  "module": "SMS",
  "change": "SMS campaigns and service reminders use the location's Sender ID."
}
```

- `date` — release date in `YYYY-MM-DD` format.
- `type` — `New Feature`, `Enhancement` or `Bug Fix`. Other values still display, with a neutral badge.
- `module` — the area of Autometrik, such as `Sales`, `Inventory` or `Accounting`. The module filter is built from these values, so reuse existing names.
- `change` — one plain-text sentence describing the change for shop users.

Add new items at the end of the file. The page sorts by date and shows the newest first, grouped by month. The publish workflow checks the file and stops if it is not valid JSON or an item is missing a field.
