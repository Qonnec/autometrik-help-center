# How to Use Inventory Forecasting

**Inventory Forecasting** tells you which products to reorder before they run out, and how many. It looks at how much of each product your location sold recently, projects that demand forward, and suggests a quantity that keeps you above your safety stock for the period you choose. Products you can add straight to the **Purchase Cart** to create a Purchase Order or a Stock Transfer Request.

The list is always sorted by **Stock Cover**, the products that will run out soonest at the top, so the first rows are the ones to act on today.

## Before you start

  - **Permission**: You need the **View Inventory Forecasting** permission. Roles that can already open Stock Quantities receive it automatically. Exporting to CSV also needs the **Export Inventory Stocks** permission.

  - **Tracked products only**: The forecast covers products with inventory tracking turned on for your current location. Switch location to see another branch's forecast.

  - **Set Safety Stock**: Safety Stock is not calculated. It comes from each product's inventory details for the location (shown as *Safety lvl* in Stock Quantities). Products with no safety stock are treated as 0.

## Opening Inventory Forecasting

1.  **Navigate to Inventory Forecasting**: Open the "Inventory" section from the sidebar and select "Inventory Forecasting" (just above Inventory Summary).

2.  **Review the default view**: The page opens showing products that **need reorder** (Critical and Reorder soon), using **3 months** of sales history, a **1 month** forecast period and a **14-day** lead time.

## Setting the filters

Use the filter panel at the top of the page, then click **Search**. Click the **X** button beside Search to reset everything to the defaults.

| **Filter**            | **What it does**                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Product Group**     | Shows only products in the selected product group.                                                                                                |
| **Category**          | Shows only products in the selected category.                                                                                                     |
| **Manufacturer**      | Shows only products from the selected manufacturer.                                                                                               |
| **Supplier**          | Shows only products linked to the selected supplier. Useful when you are preparing one order per supplier.                                        |
| **Status**            | **Needs reorder** (default) shows Critical and Reorder soon. You can also show only **Critical**, only **Reorder soon**, or **All products**.        |
| **Sales History**     | How many past days of sales are used to measure demand, for example 1 week, 1 month or 3 months.                                                    |
| **Forecast Period**   | How many days the reorder should cover, for example 2 weeks or 1 month.                                                                            |
| **Lead Time (days)**  | How long a delivery usually takes to arrive. Products that will run out within this many days are marked **Critical**. Default is 14, maximum 365. |

The **Search** box at the top of the page finds products by name, part number, reference number, description or manufacturer. Use `%` as a wildcard (for example `oil%filter`).

\[***TIP:*** A longer Sales History smooths out unusual weeks. A shorter one reacts faster to products that are suddenly selling more. For seasonal items, such as tires before the rainy season, try a shorter Sales History.\]

## Understanding the columns

Hover over the **ⓘ** icon next to a column title to see its explanation. Hover over a **Forecast Demand** number to see how it was calculated for that product.

| **Column**          | **Meaning**                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Product**         | Product name, with the manufacturer below it. Click the name to open the product.                                                                              |
| **Part No**         | The product's part number.                                                                                                                                    |
| **Status**          | **Critical** (red), **Reorder soon** (orange) or **OK** (green). See the status rules below.                                                                  |
| **Available**       | Quantity on hand at this location, less the quantity already allocated to open transactions.                                                                   |
| **Forecast Demand** | Quantity expected to be sold during the Forecast Period.                                                                                                       |
| **Incoming**        | Quantity already ordered but not yet received (the Purchased quantity in Stock Quantities). It is deducted so the same stock is not ordered twice.           |
| **Safety Stock**    | The minimum quantity you always want on the shelf.                                                                                                            |
| **Suggested Qty**   | Quantity to reorder. Shows 0 when nothing needs ordering.                                                                                                     |
| **Unit Cost**       | Purchase cost of one stock unit.                                                                                                                              |
| **Amount**          | Estimated cost of the reorder, based on the quantity that will go to the cart.                                                                                 |
| **Stock Cover**     | How many days the Available quantity will last at the current rate of sales. The bar fills up to the Forecast Period. **No demand** means no sales in the Sales History period. |

## How the numbers are calculated

**Sales (demand)** is the net quantity that left the location through **job orders, invoices, quick sales and sales orders, less sales returns**, during the Sales History period. Stock transfers and stock adjustments are not counted as sales.

  - **Average daily sales** = net quantity sold ÷ days in the Sales History period

  - **Forecast Demand** = average daily sales × days in the Forecast Period, rounded up

  - **Suggested Qty** = Forecast Demand + Safety Stock − Available − Incoming (never below 0)

  - **Stock Cover (days)** = Available ÷ average daily sales, rounded down. A product that is out of stock (or over-allocated) and needs ordering shows **0 days**.

### Status rules

| **Status**       | **When it appears**                                                                                                  | **What to do**                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **Critical**     | Something needs ordering **and** the product is already at or below Safety Stock, or will run out within the Lead Time. | Order now. A delivery may not arrive before you run out. |
| **Reorder soon** | Something needs ordering, but the product will last longer than the Lead Time.                                        | Include it in your next regular order.                   |
| **OK**           | Suggested Qty is 0. Current and incoming stock already cover the Forecast Period and Safety Stock.                   | No action needed.                                        |

### Worked example

A shop checks **Engine Oil 4L** with a Sales History of **3 months (90 days)**, a Forecast Period of **1 month (30 days)** and a Lead Time of **14 days**.

1.  **Sales**: 45 sold in the last 90 days → average daily sales = 45 ÷ 90 = **0.5 per day**

2.  **Forecast Demand**: 0.5 × 30 = **15**

3.  **Stock levels**: Available **6**, Incoming **4**, Safety Stock **5**

4.  **Suggested Qty**: 15 + 5 − 6 − 4 = **10**

5.  **Stock Cover**: 6 ÷ 0.5 = **12 days**

6.  **Status**: 12 days is within the 14-day Lead Time, so the product is **Critical**.

## Adding products to the Purchase Cart

1.  **Review the Suggested Qty**: Start from the top of the list, where the products with the lowest Stock Cover are.

2.  **Add the product**: Click the blue **+** button at the end of the row. The button turns green with a check mark and the cart badge at the top of the page updates.

  - The button is disabled when there is nothing to order.

  - Clicking **+** again for the same product **sets** the cart quantity to the suggestion; it does not add it twice.

3.  **Open the Purchase Cart**: Click the **cart** button at the top of the page. Review each product, adjust the quantity or cost if needed, and remove anything you do not want.

4.  **Create the order**: Click **Create** and choose:

  - **Purchase Order** to buy from a supplier, or

  - **Stock Transfer Request** to request the stock from another branch.

5.  **Clear Cart (if needed)**: Click **Clear Cart** to empty the purchase cart and start again.

\[***NOTE:*** Products bought in a bigger unit than they are sold in (for example, bought per box of 4 but sold per piece) are added to the cart in the **purchase unit**, rounded up. A Suggested Qty of 10 pieces becomes 3 boxes, and the Amount column reflects the 3 boxes.\]

The cart is the same Purchase Cart used in Stock Quantities, so products you added there appear here too. See [How to Access Stock Quantities](#a-9-17) for more about the cart.

## Exporting and printing

  - **Export**: Click the **⋮** button at the top right and select **Export**. The CSV file includes **every** product that matches your current filters (not only the page on screen), in the same order, with extra columns such as Net Quantity Sold, Average Daily Sales and the number of days used.

  - **Print**: Click the **print** button to print the list on screen.

## Changing the Sales History and Forecast Period options

The choices in the Sales History and Forecast Period dropdowns come from the **Forecast Periods** parameter group. Every shop starts with 1 week, 2 weeks, 1 month, 2 months, 3 months, 6 months and 1 year.

1.  **Navigate to Parameters**: Open "Administration" from the sidebar and select "Parameters."

2.  **Find the Forecast Periods group**: Look for the parameters in the **Forecast Periods** group.

3.  **Add a new option**: Create a parameter in the Forecast Periods group. Enter a clear **Name** (for example, *45 days*) and put the number of days in **Numeric Data**.

4.  **Remove an option**: Delete the parameter you no longer want. Deleted options are not re-created.

\[***NOTE:*** Options with no Numeric Data (or 0) do not appear in the dropdowns. The dropdowns list options from the shortest period to the longest.\]

## Tips and troubleshooting

  - **A product I expected is missing**: Check that inventory tracking is turned on for the product at this location, that the Status filter is not hiding it (choose **All products**), and that no Product Group, Category, Manufacturer or Supplier filter is excluding it.

  - **"No demand" but a Suggested Qty is shown**: The product had no sales in the Sales History period, but Available is below its Safety Stock, so the suggestion only tops it up to Safety Stock.

  - **Suggested Qty looks too low**: Stock you already ordered (Incoming) is deducted. Check open Purchase Orders and Stock Transfers for that product.

  - **Suggested Qty looks too high**: A big one-time sale in the Sales History period raises the average. Try a longer Sales History, or review the quantity in the cart before creating the order.

  - **Lots of Critical products**: Your Lead Time may be longer than your supplier actually needs. Set it to your usual delivery time.
