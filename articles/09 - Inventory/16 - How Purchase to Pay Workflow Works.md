# How Purchase to Pay Workflow Works

|           |           |           |
| --------- | --------- | --------- |
| \+10 cans | Unchanged | \+10 cans |

**System Notes**

  - Parts are now available for allocation to job orders.

  - No accounting entries are recorded yet, as the financial liability is recognized upon invoicing.

3\. **Create a Supplier Invoice**

The supplier submits an invoice for the delivered parts. A journal entry is created to record the liability and inventory asset.

**Sample Supplier Invoice**

<table>
<thead>
<tr class="header">
<th><strong>Field</strong></th>
<th><strong>Input Data</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Invoice Number</td>
<td>INV-2025-002</td>
</tr>
<tr class="even">
<td>PO Reference</td>
<td>PO-2025-002</td>
</tr>
<tr class="odd">
<td>Supplier</td>
<td>Auto Parts Co.</td>
</tr>
<tr class="even">
<td>Invoice Date</td>
<td>July 29, 2025</td>
</tr>
<tr class="odd">
<td>Due Date</td>
<td>August 12, 2025</td>
</tr>
<tr class="even">
<td>Items</td>
<td><p>Oil Filter (SKU: OF-001)</p>
<p>*Quantity: 20 units</p>
<p>*Unit Price: 5.00</p>
<p>*Total: 100.00</p></td>
</tr>
<tr class="odd">
<td></td>
<td><p>Engine Oil 4L (SKU: EO-4L)</p>
<p>*Quantity: 10 cans</p>
<p>*Unit Price: 30.00</p>
<p>*Total: 300.00</p></td>
</tr>
<tr class="even">
<td>Total Amount</td>
<td>400.00</td>
</tr>
<tr class="odd">
<td>Status</td>
<td>Unpaid</td>
</tr>
</tbody>
</table>

**Journal Entry**

| **Date**      | **Description**                         | **Debit**               | **Credit**                         |
| ------------- | --------------------------------------- | ----------------------- | ---------------------------------- |
| July 29, 2025 | Record supplier invoice for PO-2025-002 | Inventory (Asset) - 400 | Accounts Payable (Liability) - 400 |

**System Notes**

  - The inventory asset is recognized, reflecting the received parts.

  - No impact on Allocated or Available quantities, as these are updated during job order allocation or consumption.

4\. **Create Payment for the Invoice**

The payment is made to the supplier, clearing the liability. A journal entry is created to record the payment.

**Sample Payment**

| **Field**      | **Input Data**  |
| -------------- | --------------- |
| Payment Number | PAY-2025-002    |
| Invoice Number | INV-2025-002    |
| Supplier       | Auto Parts Co.  |
| Payment Date   | August 10, 2025 |
| Payment Method | Bank Transfer   |
| Amount         | 400.00          |
| Status         | Paid            |

**Journal Entry**

| **Date**        | **Description**                           | **Debit**                          | **Credit**              |
| --------------- | ----------------------------------------- | ---------------------------------- | ----------------------- |
| August 10, 2025 | Payment for supplier invoice INV-2025-002 | Accounts Payable (Liability) - 400 | Cash/Bank (Asset) - 400 |

**System Notes**

  - The liability is cleared, and no further inventory updates are required.

  - The payment completes the financial transaction with the supplier.

5\. **Integration with Auto Repair Workflow**

The purchased parts (e.g., Oil Filter, Engine Oil 4L) are now available for allocation to job orders, as described in the “Estimate to Payment Workflow” document. For example:

  - **Job Order Creation**: Parts are allocated, reducing Available quantities (e.g., Oil Filter: Available 34 → 33, Allocated 1 → 2).

  - **Vehicle Release**: Allocated parts are consumed, reducing On-Hand and Allocated quantities (e.g., Oil Filter: On-Hand 35 → 34, Allocated 2 → 1).

  - **Customer Invoicing**: Revenue and cost of goods sold (COGS) are recognized, as shown in the provided document (e.g., COGS 900, Inventory reduction 900).

6\. **Summary**

The Purchase to Pay workflow for an auto repair shop involves:

1.  **Purchase Order**: Initiates the procurement process, updating On Purchase quantities. Purchase Receipt: Updates On-Hand and Available quantities upon receipt of parts.

2.  **Supplier Invoice**: Recognizes the inventory asset and supplier liability via a journal entry.

3.  **Payment**: Clears the liability with a journal entry, completing the financial transaction.

This workflow ensures accurate inventory tracking (On-Hand, Allocated, Available) and financial accounting, seamlessly integrating with the Autometrik’s job order and customer invoicing processes.
