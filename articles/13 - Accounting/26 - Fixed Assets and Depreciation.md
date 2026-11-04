# Fixed Assets and Depreciation

## Overview

The Fixed Assets module keeps a register of your shop's long-term equipment (lifts, compressors, tire changers, vehicles, computers) and works out how much of each asset's cost to expense every period. Depreciation is computed **straight line**, and you record it by running depreciation up to a date.

The module records the schedule only. It does **not** post journal entries: you post the purchase and the periodic depreciation entry yourself in Accounting → Journal Entries.

**Where to find it:** Accounting menu → **Fixed Assets** and **Asset Types**. Assets and asset types belong to the location (branch) you are logged into, so each branch keeps its own register.

**The workflow at a glance:**

1. Set up **Asset Types** once (useful life, frequency, GL accounts).
2. Register each **Fixed Asset** under a type.
3. **Run Depreciation** at month-end (or at each period end).
4. **Post the journal entry** for the amount recognised.

**Permissions** (assigned per role):

| Permission | Allows |
| --- | --- |
| View Fixed Assets | Open the asset list, asset details and depreciation schedule |
| Create Fixed Assets | Register new assets |
| Update Fixed Assets | Edit assets, **Run Depreciation** and **Reverse Depreciation** |
| Delete Fixed Assets | Delete an asset |
| View / Create / Update / Delete Asset Types | Manage asset types |
| Create Chart of Accounts | Create a GL account on the spot from the Asset Type form |

## Key terms

| Term | Meaning in Autometrik |
| --- | --- |
| Purchase Cost | What the shop paid for the asset. Must be greater than zero. |
| End of Life Value | Salvage (residual) value expected at the end of the useful life. Can be zero; must be less than the cost. |
| Depreciable Amount | Purchase Cost − End of Life Value. The total that will be expensed over the asset's life. |
| Useful Life (Years) | How many years the asset is depreciated over. Set on the Asset Type. |
| Depreciation Frequency | How many periods per year depreciation is recognised: Annually, Semi-Annually, Every 4 Months, Quarterly, Every 2 Months or Monthly. |
| Total Periods | Useful Life × periods per year (for example 5 years monthly = 60 periods). |
| Accumulated Depreciation | Total depreciation recognised so far. |
| Net Book Value | Purchase Cost − Accumulated Depreciation. |
| Depreciated Up To | End date of the last recognised period. |
| Recognised / Projected | Schedule rows already recorded by a depreciation run vs. future rows shown for reference. |
| Fully Depreciated | Accumulated depreciation has reached the depreciable amount; the book value now equals the End of Life Value. |

## Step 1: Set up Asset Types

An Asset Type sets the depreciation rules and GL accounts for every asset under it, so set these up before registering assets. Typical types for a shop: Shop Equipment, Service Vehicles, Furniture and Fixtures, Computer Equipment.

1. Go to **Accounting → Asset Types** and click **New**.
2. Fill in the fields below, then click **Save**.

| Field | What to enter |
| --- | --- |
| Name | A unique name for this location, e.g. *Shop Equipment*. |
| Useful Life (Years) | 1 to 100. |
| Depreciation Frequency | How often depreciation is recognised. **Monthly** is recommended so it lines up with your month-end close. The form shows the total number of periods. |
| Description | Optional notes. |
| Asset Account | The asset GL account that carries the cost, e.g. *Shop Equipment*. |
| Accumulated Depreciation Account | The contra-asset account, e.g. *Accumulated Depreciation – Shop Equipment*. Must differ from the Asset Account. |
| Depreciation Expense Account | The expense account, e.g. *Depreciation Expense*. Must differ from the Asset Account. |
| Depreciation Rate (%) | **Reference only.** It does not affect the computation; the schedule always comes from the useful life. |

If an account does not exist yet, users with the Create Chart of Accounts permission can create it directly from the account field.

You can also create an asset type on the spot from the **Type of Asset** field while registering an asset.

**Good to know:** an asset type that is used by any asset cannot be deleted. Changing the useful life or frequency of a type changes the schedule of every asset under it, so avoid editing a type once its assets have been depreciated.

## Step 2: Register a Fixed Asset

Register each item of equipment as its own asset so it gets its own schedule.

1. Go to **Accounting → Fixed Assets** and click **New**.
2. Fill in the fields below, then click **Save Asset**.

| Field | What to enter |
| --- | --- |
| Name | Up to 50 characters, e.g. *Two-Post Lift – Bay 2*. Required. |
| Type of Asset | Start typing to pick an Asset Type. Required. |
| Serial No | Manufacturer serial or your tag number (optional, up to 50 characters). |
| Description | Optional notes: supplier, warranty, location in the shop. |
| Purchase Cost | Total cost of the asset. Required, greater than zero. |
| End of Life Value | Expected salvage value. Leave at zero to depreciate the full cost. Must be less than the Purchase Cost. |
| Purchase Date | Defaults to today. |
| Depreciation Start Date | When depreciation begins. Defaults to today; cannot be earlier than the Purchase Date. If left blank, the Purchase Date is used. |

After saving, the **Asset Info** tab also shows the read-only Depreciable Amount, Accumulated Depreciation, Net Book Value and Depreciated Up To, plus a **Fully Depreciated** badge when the asset is done.

**Tip:** set the Depreciation Start Date to the **1st of a month** (for example the 1st of the month after purchase). Periods then run calendar month to calendar month and line up with your monthly close.

**Registering an asset does not post the purchase.** Record the acquisition the way you normally pay for it (supplier invoice, expense or journal entry), debiting the Asset Account set on the asset type.

### Finding assets

The Fixed Assets list shows Name, Type, Serial No, Purchased, Cost, Accum. Dep., Net Book Value and Depreciated To, newest first. Use the search box to find by name, serial number or description. The **Total** row adds up Cost, Accumulated Depreciation and Net Book Value for every asset matching your search, not just the page shown.

## How depreciation is computed

Each period gets an equal share of the depreciable amount, rounded to two decimals:

> **Depreciation per period** = (Purchase Cost − End of Life Value) ÷ (Useful Life in Years × Periods per Year)

The **last period absorbs any rounding difference**, so the book value lands exactly on the End of Life Value. Periods start on the Depreciation Start Date and each covers 12 ÷ periods-per-year months (1 month for Monthly, 3 for Quarterly, 12 for Annually).

### Example 1: Two-post lift, monthly

Purchase Cost ₱250,000; End of Life Value ₱10,000; type *Shop Equipment* = 5 years, Monthly; Depreciation Start Date January 1, 2026.

- Depreciable amount = 250,000 − 10,000 = ₱240,000
- Total periods = 5 × 12 = 60
- Depreciation per month = 240,000 ÷ 60 = **₱4,000.00**

| # | Period From | Period To | Depreciation | Accumulated | Net Book Value |
| --- | --- | --- | --- | --- | --- |
| 1 | 01-01-2026 | 01-31-2026 | 4,000.00 | 4,000.00 | 246,000.00 |
| 2 | 02-01-2026 | 02-28-2026 | 4,000.00 | 8,000.00 | 242,000.00 |
| 3 | 03-01-2026 | 03-31-2026 | 4,000.00 | 12,000.00 | 238,000.00 |
| … | … | … | … | … | … |
| 60 | 12-01-2030 | 12-31-2030 | 4,000.00 | 240,000.00 | 10,000.00 |

### Example 2: Rounding in the last period

A ₱100,000 diagnostic scanner with no salvage value, 3 years, Monthly (36 periods). 100,000 ÷ 36 = 2,777.78 per month. Periods 1 to 35 total ₱97,222.30, so period 36 is **₱2,777.70**, bringing the book value to exactly zero.

### The schedule

Open an asset and click the **Depreciation** tab to see the full schedule: #, Period From, Period To, Depreciation, Accumulated, Net Book Value and Status. Rows already recorded show a green **Recognised** label; future rows are greyed out as **Projected**. The footer shows how many periods are recognised and their total.

If the tab says *No schedule is available*, check that the asset type has a useful life and frequency, and that the Purchase Cost is greater than the End of Life Value.

## Step 3: Run Depreciation

Running depreciation records every period that has **ended on or before** the date you choose. Run it at each month-end (or period-end) before you close the books.

**For all assets at this location:**

1. Go to **Accounting → Fixed Assets**.
2. Click **Run Depreciation**.
3. Enter the **As Of Date**, usually the last day of the month you are closing (it defaults to today).
4. Confirm. Autometrik shows a summary such as *3 period(s) recognised for 2 asset(s), totalling 12,000.00.*

**For a single asset:** open the asset, go to the **Depreciation** tab and click **Run Depreciation** above the schedule. The button is hidden once the asset is fully depreciated.

**How the As Of Date works** (Example 1, monthly from January 1):

| As Of Date | Periods recognised | Why |
| --- | --- | --- |
| 03-31-2026 | 1 to 3 | Period 3 ends on March 31 |
| 03-30-2026 | 1 to 2 | Period 3 has not ended yet |
| 06-30-2026 (no earlier runs) | 1 to 6 | Missed months are caught up in one run |

**Good to know:**

- Only complete periods are recognised; there is no partial-period depreciation.
- Running again is safe. Periods already recognised are skipped, and if nothing is due you will see *There is no depreciation due up to the selected date.*
- Each asset is saved on its own, so a problem with one asset does not undo the others.
- Note the total from the summary message, or from the Depreciation tab footers. You need it for the journal entry in Step 4.

## Step 4: Post the depreciation journal entry

After each run, post one journal entry for the amount recognised so the General Ledger matches the asset register.

1. Go to **Accounting → Journal Entries** and create a new entry dated the As Of Date.
2. Use the accounts set on each asset's **Asset Type**:

| Account | Debit | Credit |
| --- | --- | --- |
| Depreciation Expense | Amount recognised |  |
| Accumulated Depreciation |  | Amount recognised |

3. In the memo, reference the period and assets, e.g. *Depreciation for March 2026 – Shop Equipment*.
4. If assets of different types use different accounts, make one line pair per asset type (add up the recognised periods per type from each asset's Depreciation tab).

For Example 1, the March 2026 entry is: Debit Depreciation Expense ₱4,000.00, Credit Accumulated Depreciation – Shop Equipment ₱4,000.00.

**Reconcile monthly:** the Accumulated Depreciation GL balance should equal the **Accum. Dep.** total on the Fixed Assets list, and the asset GL balance should equal the **Cost** total.

## Reversing, editing and deleting

### Reverse Depreciation

Use this to undo a run made in error, e.g. the wrong As Of Date or wrong asset details.

1. Open the asset and go to the **Depreciation** tab.
2. Click **Reverse Depreciation** at the bottom right of the schedule and confirm.
3. **All** recognised periods for that asset are removed, and Accumulated Depreciation and Depreciated Up To reset.
4. **Reverse or adjust the journal entries** you posted for those periods. Autometrik does not do this for you.
5. Correct the asset if needed, then run depreciation again.

### Editing an asset

Name, Serial No and Description can be changed at any time. Once any depreciation has been recognised, these fields are **locked**: Type of Asset, Purchase Cost, End of Life Value, Purchase Date and Depreciation Start Date. To change them, reverse the depreciation first, edit, then run again.

### Deleting

| What | When it can be deleted |
| --- | --- |
| Fixed Asset | Only when no depreciation has been recognised. Reverse the depreciation first. |
| Asset Type | Only when no asset uses it. |

Asset disposals (selling or scrapping an asset) are not handled by the module. Record the disposal with a journal entry, removing the cost and accumulated depreciation and booking any gain or loss.

## Month-end checklist

- [ ] Register any new assets bought this month
- [ ] Run Depreciation as of the last day of the month
- [ ] Note the total recognised
- [ ] Post the depreciation journal entry
- [ ] Reconcile the Cost and Accum. Dep. totals with the GL

## Messages you may see

| Message | What to do |
| --- | --- |
| The end of life value must be less than the purchase cost | Lower the End of Life Value or check the cost. |
| The depreciation start date can not be earlier than the purchase date | Move the start date on or after the Purchase Date. |
| The cost, salvage value and type of asset can not be changed once depreciation has been recognised | Reverse the depreciation, edit, then run again. |
| The depreciation start date can not be changed once depreciation has been recognised | Same as above. |
| This asset can not be deleted because depreciation has already been recognised against it | Reverse the depreciation first. |
| This asset type can not be deleted because it is being used by one or more assets | Move or delete those assets first. |
| An asset type with the same name already exists | Use a different name. |
| The accumulated depreciation / depreciation expense account must be different from the asset account | Pick separate GL accounts. |
| There is no depreciation due up to the selected date | Nothing to record yet; no period has ended by that date. |

## FAQ

**Does running depreciation post to the General Ledger?** No. It records the schedule only; post the journal entry yourself (Step 4).

**I forgot to run depreciation for a few months.** Run it once as of the latest month-end; all missed periods are recognised together. Post one entry for the total, or one per month.

**Can I depreciate by a declining-balance method?** No. The module uses straight line only. The Depreciation Rate on the asset type is for reference.

**Can two branches share an asset?** No. Assets belong to the location they were created in, and a run only covers assets at your current location.

**How do I bring in an asset that was already partly depreciated before Autometrik?** Set the Depreciation Start Date to the original start, then run depreciation as of your go-live date. The catch-up periods are recognised in Autometrik; skip the journal entry for periods already in your opening balances.
