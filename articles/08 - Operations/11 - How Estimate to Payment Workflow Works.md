# How Estimate to Payment Workflow Works

This outlines the complete workflow for the Autometrik, detailing the process from creating an estimate to final payment and vehicle release. It includes accurate inventory handling with allocated, available, and on-hand quantities, ensuring precise stock management. The workflow also incorporates service reminder functionality, including a sample SMS notification for customers. Additionally, it highlights the accounting impact of each step to reflect the financial transactions involved. This guide serves as a reference for implementing or understanding the operational, inventory, and financial logic of an auto repair shop system.

**Inventory Behavior Overview**

| **Action**         | **Allocated Qty** | **Available Qty** | **On-Hand Qty** |
| ------------------ | ----------------- | ----------------- | --------------- |
| Job Order Created  | Increase          | Decrease          | No Change       |
| Job Order Released | Decrease          | No Change         | Decrease        |

**Sample Workflow with Inventory Effects**

1.  **Create Estimate**

**User Action:** creates an estimate for a customer.

<table>
<thead>
<tr class="header">
<th><strong>Field</strong></th>
<th><strong>Input Data</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Customer Name</td>
<td>John Dela Cruz</td>
</tr>
<tr class="even">
<td>Contact Number</td>
<td>09171234567</td>
</tr>
<tr class="odd">
<td>Vehicle Plate No.</td>
<td>ABC-1234</td>
</tr>
<tr class="even">
<td>Vehicle Make</td>
<td>Toyota</td>
</tr>
<tr class="odd">
<td>Vehicle Model</td>
<td>Vios 1.3E</td>
</tr>
<tr class="even">
<td>Year</td>
<td>2019</td>
</tr>
<tr class="odd">
<td>Services</td>
<td><p>Change Oil (500)</p>
<p>Brake Cleaning (300)</p></td>
</tr>
<tr class="even">
<td>Parts</td>
<td><p>Oil Filter (250; qty: 1)</p>
<p>Engine Oil 4L (1,200, qty: 1)</p></td>
</tr>
</tbody>
</table>

**System Response:**

  - Estimate \#EST-000121 created.

  - Total: 2,250 (Labor: 800, Parts: 1,450)

  - Option to **Print, Email**, or **Convert to Job Order**

**Stock Impact**: No change yet.

**Accounting Impact**: No accounting entries are recorded at this stage, as the estimate is not yet a confirmed transaction.

2\. **Convert to Job Order & Assign Mechanic**

**User Action**: convert estimate to Job Order.

| **Field**     | **Input Data**   |
| ------------- | ---------------- |
| Job Order \#  | JO-000187        |
| Mechanic      | Mark Santos      |
| Schedule Date | 2025-07-21       |
| Remarks       | Customer Waiting |

**Parts Required**:

• Oil Filter (1 pc)

• Engine Oil 4L (1 can)

**Inventory Status After Job Order Creation**:

| **Item**      | **On-Hand** | **Allocated** | **Available** |
| ------------- | ----------- | ------------- | ------------- |
| Oil Filter    | 15          | 1             | 14            |
| Engine Oil 4L | 8           | 1             | 7             |

**System Notes**:

• Parts are now **allocated** to this Job Order.

• **Available stock** reduced.

• **On-hand** remains unchanged.

**Accounting Impact**: No accounting entries are recorded, as no financial transaction has occurred yet. Inventory allocation is tracked internally but does not affect financial accounts.

3\. **Complete Job Order**

**User Action:** mechanic marks the job as done**.**

| **Field**        | **Input Data**      |
| ---------------- | ------------------- |
| Completion Time  | 3:40 PM, 2025-07-21 |
| Mechanic Remarks | All tasks completed |

**Stock Impact**: No change yet. Allocated remains.

**Accounting Impact**: No accounting entries are recorded, as the job completion does not yet involve revenue recognition or inventory consumption.

4\. **Generate Invoice**

**User Action:** front desk generates invoice.

| **Field**  | **Input Data**                         |
| ---------- | -------------------------------------- |
| Invoice \# | INV-000233                             |
| Customer   | John Dela Cruz                         |
| Parts      | Oil Filter (250), Engine Oil (1,200)   |
| Labor      | Change Oil (500), Brake Cleaning (300) |
| VAT (12%)  | 270                                    |
| Total      | 2,520                                  |

**Journal Entry Automatically Created:**

| **Account**         | **Debit** | **Credit** |
| ------------------- | --------- | ---------- |
| Accounts Receivable | 2,520     |            |
| Output VAT          |           | 270        |
| Service Income      |           | 800        |
| Parts Sale          |           | 1,450      |
| Costs of Goods Sold | 900       |            |
| Inventory           |           | 900        |

  - 900 COGS is based on internal cost for parts used.

**Stock Impact**: Still no change.

**Accounting Impact**: Revenue is recognized for services (800) and parts (1,450), with VAT liability recorded (270). The cost of parts used (900) is recognized as an expense (Cost of Goods Sold), reducing the Inventory account.

5\. **Record Payment**

**User Action:** customer pays full invoice amount in cash.

| **Field**    | **Input Data** |
| ------------ | -------------- |
| Payment Mode | Cash           |
| Amount Paid  | 2,520          |
| OR Number    | OR-005410      |

**System Response**:

  - Invoice marked as Paid

  - OR issued and optionally printed/emailed

**Stock Impact**: Still allocated.

**Accounting Impact**: The payment clears the Accounts Receivable balance.

| **Account**         | **Debit** | **Credit** |
| ------------------- | --------- | ---------- |
| Cash                | 2,520     |            |
| Accounts Receivable |           | 2,520      |

6\. **Release Vehicle (Close Job Order)**

**Service Reminder Handling**:

  - If any service in the Job Order (e.g., Change Oil) has a defined **Next Service Date** (e.g., +3 months), the system automatically creates a **Service Reminder** upon release.

  - Reminders will only be created if **Service Reminders are enabled** in system settings.

  - Example: Change Oil done on 2025-07-21 → Reminder set for 2025-10-21.

**System Notes**: Reminder includes:

  - Customer name and contact

  - Vehicle details (make, model, plate no.)

  - Service type and target date

  - Notification channel (SMS, Email)

**Sample SMS Message**:

*Hi John Dela Cruz, your Toyota Vios (ABC-1234) is due for a Change Oiservice on 2025-10-21. Please book your appointment at ABC Auto RepaiCall 0917-123-4567. Thank you\!*

| **Field**    | **Input Data**      |
| ------------ | ------------------- |
| Released By  | Jane Flores         |
| Release Time | 4:15 PM, 2025-07-21 |
| Remarks      | Released to Owner   |

**Inventory Status After Release**:

| **Item**      | **On-Hand** | **Allocated** | **Available** |
| ------------- | ----------- | ------------- | ------------- |
| Oil Filter    | 14          | 0             | 14            |
| Engine Oil 4L | 7           | 0             | 7             |

**System Notes**:

  - Allocated stock is now consumed.

  - On-hand is reduced.

  - Available remains accurate.

**Accounting Impact**: No additional accounting entries are recorded, as the financial impact (inventory reduction) was already accounted for during the invoice generation step.

**Inventory Change Summary for Job Order \#JO-000187**

| **Stage**        | **Oil Filter**                  | **Engine Oil 4L**             |
| ---------------- | ------------------------------- | ----------------------------- |
| Before Job Order | 15 (0 allocated / 15 available) | 8 (0 allocated / 8 available) |
| After Job Order  | 15 (1 allocated / 14 available) | 8 (1 allocated / 7 available) |
| After Release    | 14 (0 allocated / 14 available) | 7 (0 allocated / 7 available) |

**Accounting Impact Summary**

The workflow generates the following accounting impacts:

1\. **Estimate Creation (Step 1):** No financial impact, as estimates are non-binding and do not affect accounts.

2\. **Job Order Creation (Step 2):** No financial impact, though inventory allocation is tracked internally.

3\. **Job Order Completion (Step 3):** No financial impact, as revenue and costs are not yet recognized.

4\. **Invoice Generation (Step 4):** Recognizes revenue (Service Income: 800, Parts Sales: 1,450), VAT liability (270), and cost of parts (COGS: 900, Inventory reduction: 900). Increases Accounts Receivable (2,520).

5\. **Payment Recording (Step 5):** Clears Accounts Receivable (2,520) and increases Cash (2,520).

6\. **Vehicle Release (Step 6):** No additional financial impact, as inventory accounting was handled during invoicing. Service reminders are scheduled but have no accounting effect.

**Net Financial Effect**:

  - Revenue: 2,250 (800 service + 1,450 parts)

  - Expenses: 900 (COGS for parts)

  - VAT Payable: 270

  - Cash Inflow: 2,520

  - Inventory Reduction: 900 (cost of parts used)

**Final Workflow Checklist**

1.  **Create Estimate** — Add customer, vehicle, labor, and parts.

2.  **Submit to Job Order** — Assign mechanic, reserve parts.

3.  **Stock Update** — Available goes down, allocated goes up.

4.  **Complete Job Order** — Mechanic finishes work.

5.  **Create Invoice** — Auto-pulls parts and labor used + journal entry.

6.  **Pay Invoice** — Mark as Paid and issue OR.

7.  **Release Job Order** — Allocated stock removed, On-hand reduced
