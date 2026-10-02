# How to Manage Manual and Recurring Entries

| **Name**          | **Description**                                                                                                                                                                                                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Manual Entries    | These are one-time journal entries created and posted individually by a user to record specific financial transactions, such as a cash payment or an expense adjustment. They require manual input of details like date, account, amount, and description, offering flexibility for unique or irregular transactions. |
| Recurring Entries | These are automated journal entries set up to repeat at regular intervals (e.g., monthly, quarterly) with predefined amounts and accounts, such as rent or loan payments. Once configured, they generate entries automatically, reducing repetitive manual work while ensuring consistency.                           |

**Manual Entry Example**

**User Action:** record a one-time cash purchase of office supplies for 200 on August 9, 2025.

**Journal Entry**

<table>
<thead>
<tr class="header">
<th><strong>Date</strong></th>
<th><strong>Description</strong></th>
<th><strong>Debit</strong></th>
<th><strong>Credit</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>August 9, 2025</td>
<td><p>Office Supplies</p>
<p>(Expenses)</p></td>
<td>200.00</td>
<td></td>
</tr>
<tr class="even">
<td>August 9, 2025</td>
<td><p>Cash</p>
<p>(Reduction in Cash)</p></td>
<td></td>
<td>200.00</td>
</tr>
</tbody>
</table>

**System Notes**

  - This entry reflects a one-time expense and reduces the cash account accordingly.

**Recurring Entry Setup Example**

**User Action:** set up a monthly rent payment of 1,500 to be posted on the 1<sup>st</sup> of each month, starting September 1, 2025, for 12 months.

**Recurring Entry Setup**

| **Field**      | **Input Data** |
| -------------- | -------------- |
| Account        | Rent Expense   |
| Debit          | 1,500.00       |
| Credit Account | Cash           |
| Credit Amount  | 1,500.00       |
| Frequency      | Monthly        |
| Start Date     | 09/01/2025     |
| End Date       | 08/01/2026     |
| Status         | Active         |

**System Notes**

  - This entry automates the rent payment each month, reducing manual input and ensuring consistency.
