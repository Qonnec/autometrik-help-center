# How to Access Receiving Items from Purchase Order

This guide outlines the process for receiving items against a Purchase Order (PO). There are two primary methods for recording a receipt: **Receive All** and **Receive Manually**-----General Receiving Steps.

Before proceeding with either method, ensure the following information is recorded:

  - **Delivery Receipt Number:** Enter the number from the supplier's delivery receipt.

  - **Date:** Enter the date of the receipt/delivery.

  - **Invoice Status:** If the supplier's invoice is available, mark the option to **Create Invoice as YES**. Supplier invoices are the main source document for Accounts Payable.

\[***NOTE*:** Proper system permissions must be set by the administrator to perform receiving actions.\]

1.  **Option 1**: Receive All

Use this option when the delivered items exactly match the quantities and prices on the original Purchase Order.

**Criteria for Use**:

  - There are **no changes** to the original quantities ordered.

  - There are **no changes** to the prices of the items.

  - The entire order (or a complete scheduled shipment) has been delivered.

**Process**:

1.  Select the **Receive All** option in the receiving module.

2.  Input the **Delivery Receipt Number** and **Date**.

3.  Check the **Create Invoice as YES** box if the invoice is present.

4.  Confirm the transaction to record the receipt.

2\. **Option 2:** Receive Manually

Use this option when there are discrepancies or special handling requirements for the items received.

**Criteria for Use**:

  - **Partial Delivery**: Not all quantities ordered were delivered (a partial receipt.)

  - **Quantity Change**: The quantity delivered is different from the quantity ordered.

  - **Price Change**: The unit price has changed from the original PO amount.

  - **Serialized Items**: The item being received is serialized.

**Process**:

1.  Select the **Receive Manually** option.

2.  For each line item received, review and update the following:
    
      - **Quantity Received**: Enter the exact quantity delivered.
    
      - **Price**: Adjust the unit price if it differs from the PO.

3.  Input the **Delivery Receipt Number** and **Date**.

4.  If the item is **serialized**, you must enter the **serial numbers** for each quantity received.

5.  Check the **Create Invoice** as **YES** box if the invoice is present.

6.  Confirm the transaction to record the receipt and update inventory/stock levels.
