# Understanding Stock Quantities and Movements

Managing inventory effectively requires a clear understanding of how different transactions affect your stock levels. This guide breaks down the four key quantity types and how everyday business actions impact them.

1.  **Defining the Quantities**

To manage your products, you need to look beyond just the physical count. Our system tracks four distinct statuses:

  - **On-Hand:** The **actual physical quantity** currently sitting in your warehouse or store.

  - **Allocated:** The **reserved quantity**. These items are still physically present but are "promised" to open Job Orders or Sales Orders.

  - **Available:** The stock you are free to sell.

  - *Calculation:* **Available = On-Hand - Allocated**

  - **On-Purchased:** The quantity currently on order from your suppliers that has **not yet been received**.

2\. **What Changes My Stock Levels?**

**Stock Decreases (Outward Movement)**

Your stock levels drop when items are physically removed or promised to a customer.

| Action                                      | Impact                                                        |
| ------------------------------------------- | ------------------------------------------------------------- |
| **Opening a Job Order / Sales Order**       | Increases **Allocated**; Decreases **Available**              |
| **Completing a Sale / Releasing Job Order** | Decreases **On**-**Hand**; Decreases **Allocated**            |
| **Negative Stock Adjustment**               | Decreases **Oh-Hand** and **Available**                       |
| **Stock Transfer Out**                      | Decreases **On-Hand** and **Available** at the sending branch |
| **Purchase Return / Receipt Cancellation**  | Decreases **On-Hand** and **Available**                       |

**Stock Increases (Inward Movement)**

Stock levels rise when new items arrive or when previous reservations are canceled.

| Action                                           | Impact                                                          |
| ------------------------------------------------ | --------------------------------------------------------------- |
| **Receiving a Purchase Order**                   | Increases **On-Hand**; Decreases **On-Purchased**               |
| **Positive Stock Adjustment**                    | Increases **On-Hand** and **Available**                         |
| **Stock Transfer In**                            | Increases **On-Hand** and **Available** at the receiving branch |
| **Cancelling Sales Order / Reverting Job Order** | Decreases **Allocated**; Increases **Available**                |

3\. **Practical Examples**

**Scenario A: The Reserved Sale**

You have **10** Spark Plugs **On-Hand**. A customer calls and opens a Sales Order for **3** Spark Plugs.

  - **On-Hand**: 10 (They are still on your shelf).

  - **Allocated**: 3 (Reserved for the customer).

  - **Available**: 7 (You can only sell 7 to someone else).

Once the sale is "*Completed*":

  - **On-Hand**: 7

  - **Allocated**: 0

  - **Available**: 7

**Scenario B: The Incoming Supply**

You have **0** Brake Pads, but you have a Purchase Order for **20** units pending from your supplier.

  - **On-Hand**: 0

  - **On-Purchased**: 20

  - **Available**: 0

Once you "*Receive*" the Purchase Order:

  - **On-Hand**: 20

  - **On-Purchased**: 0

  - **Available**: 20

4\. **Tracking and Reporting**

To maintain full visibility of your inventory, use these two key tools:

1.  **Product Transaction History**: View the "audit trail" for a specific item. Every time a stock level changes, it is logged here, showing you exactly which Job Order or Purchase Receipt caused the movement.

2.  **Stock Movement Report**: Use this for a "big picture" view. You can filter by a specific date or date range to see all items that moved, helping you reconcile your physical counts with system data.

**Pro Tip**: If your **Available** stock looks lower than what you see on the shelf, check your **Allocated** quantity—you likely have open Job Orders that haven't been released yet\!
