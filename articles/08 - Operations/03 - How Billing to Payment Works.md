# How Billing to Payment Works

| **Name** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Billing  | Accessed under the Operations menu on the left-hand side, the **Invoices feature allows users to create bills for completed job orders**. Users input customer details and add costs for services or parts based on the work done. The system generates an invoice, which is then sent to the customer for review and approval to proceed with payment.                                                           |
| Payment  | Once the invoice is approved, it transitions to the Payments option under the Operations menu. This process involves **recording the payment amount and method (e.g., cash, card) from the customer.** The dashboard updates the payment status and adjusts financial records, including expenses and any outstanding amounts under Accounts Receivable, ensuring the process is complete and tracked accurately. |

1.  **Creating an Invoice:**

<!-- end list -->

  - Access the Invoice Section: Navigate to the Operations menu and select the "Invoices" section from the left sidebar.

  - Create a New Invoice: Click the "New" button located at the top right of the Invoices page.

  - Enter Invoice Details:

<!-- end list -->

1.  **Invoice No**: Leave as "System Generated" or enter a custom number.

2.  **Date**: Set to the current date.

3.  **Due Date**: Specify the due date.

4.  **Status**: Select "Draft" initially.

5.  **Customer**: Type and select the customer name.

6.  **Customer PO**: Enter the customer purchase order number, if applicable.

7.  **Service Advisor**: Type and select the advisor name.

<!-- end list -->

  - Add Services**:**

<!-- end list -->

1.  Under the "Services" section, type and select the service name.

2.  Enter the Rate, Hours, and adjust Discount if needed.

3.  Click "+ Add Service" to include the service**.**

<!-- end list -->

  - Add Products (Optional**):**

<!-- end list -->

1.  Under the "Products" section, type and select the product name or part number.

2.  Enter the Price, Quantity, and adjust Discount if needed.

3.  Click "+ Add Product" to include the product**.**

<!-- end list -->

  - Summary and Notes: Add any remarks or notes in the "Summary" section.

  - Save the Invoice: Click "Save as Draft" to save progress or "Create & Open" to finalize and open the invoice.

  - Confirm and Update: After saving, update the invoice status to "Open" to make it payable.

2\. **Creating a New Payment After Customer Payment:**

  - Access the Payment Section: Navigate to the "Payments" section from the left sidebar.

  - Create a New Payment: Click the "New" button at the top right of the Payments page.

  - Enter Payment Details:

<!-- end list -->

1.  **Reference No**: Leave as "System Generated" or enter a custom number.

2.  **Payment Date**: Set to the current date.

3.  **Status**: Select "New" initially.

4.  **Customer**: Type and select the customer name matching the invoice.

5.  **Payment Method**: Choose the appropriate payment method.

6.  **Payment Reference**: Enter a reference number, if applicable.

<!-- end list -->

  - Enter Payment Amount:

<!-- end list -->

1.  Input the Payment Amount based on the invoice amount.

2.  Update the Applied Payment to match the Payment Amount.

<!-- end list -->

  - Link the Invoice:

<!-- end list -->

1.  Under the "Invoices" section, select the relevant invoice by checking the box.

2.  Verify details such as Invoice Date, Due Date, Reference No, Amount, Paid, Deposit, Balance, and Payment fields. The Balance should update to 0.00 upon payment.

<!-- end list -->

  - Add Remarks: Include any additional notes in the "Remarks" section.

  - Save the Payment: Click "Save" to record the payment and mark the invoice as paid.

3\. **Automatic Journal Entry:**

  - **Process**: The AutoMetrik system automatically generates journal entries at each step.

  - Upon Invoice Creation:

<!-- end list -->

1.  Debit Accounts Receivable by the invoice amount.

2.  Credit Revenue for the service amount, and credit product sales to the respective inventory or sales account.

<!-- end list -->

  - Upon Payment Recording:

<!-- end list -->

1.  Credit Accounts Receivable by the payment amount.

2.  Debit Cash or the respective payment method account.

<!-- end list -->

  - **Verification**: Journal entries are automatically logged in the "Accounting" section under the respective dates, ensuring accurate financial tracking without manual input.

In summary, **creating an invoice establishes a detailed billing record, which can then be processed through payment recording to finalize transactions and update financial accounts**, with **automatic journal entries** ensuring seamless and accurate tracking.
