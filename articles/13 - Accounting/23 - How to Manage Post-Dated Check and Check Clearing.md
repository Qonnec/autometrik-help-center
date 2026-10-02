# How to Manage Post-Dated Check and Check Clearing

This guide outlines the steps for creating a new supplier payment method using a post-dated check and the subsequent process of clearing that check in the system.

Use the following procedure to **set up a Payment Method for Checks.**

1.  Navigate to the "Supplier Payment Method Details" screen.

2.  **Name:** Enter a descriptive name for the payment method (e.g., "BDO Check").

3.  **Check Payment:** Ensure this is set to **Yes**. This enables check-specific fields.

4.  **Account:** Select the bank account from which the checks will be issued (e.g., "Outstanding Checks Issued - BDO").

5.  **Require Clearing:** Set this to **Yes**. This is crucial for post-dated checks, as it holds the transaction in a "For Clearing" status until the check is manually cleared.

6.  **Clearing Account:** Select the bank account where the funds will be moved to upon clearing (e.g., "Cash in Bank - BDO").

7.  **Track Reference No:** Set to **Yes** to enable system-generated check numbers.

8.  **Auto Increment:** Set to **Yes** to automatically assign the next sequential check number.

9.  **Last Reference No:** Enter the last check number used for this account. The system will use this to determine the next number in the sequence.

10. **Save:** Click "Save Payment Method" to complete the setup.

\[***NOTE***: Before you can issue a check payment, you must have a payment method configured in the system.\]

Once the payment method is set up, you can record a new supplier payment.

Use the following procedure to **create a new Supplier Payment with a Post-Dated Check.**

1.  Navigate to the "New Supplier Payment" screen.

2.  **Reference No:** This will be system-generated.

3.  **Date:** This is the date the payment is being recorded in the system.

4.  **Supplier:** Select the supplier you are paying (e.g., "ABC General Merchandise").

5.  **Payment Method:** Select the check payment method you set up (e.g., "BDO Check").

6.  **Payment Reference:** The system will automatically generate the next check number based on your setup (e.g., "10122").

7.  **Check Date:** This is the post-dated check's maturity date. **Crucially, this is the date the check can be deposited or cleared by the bank.** (e.g., "30 Sep 2025").

8.  **Amount to Pay:** Enter the total amount of the payment (e.g., "6,000.00").

9.  **Supplier Invoices:** Select the invoice(s) being paid by checking the box next to them. The "Payment" field will be automatically populated with the amount.

When the post-dated check's date arrives and you have confirmed it has been cleared by the bank, you must update its status in the system.

Use the following procedure to **clear the check**

1.  Navigate to the "Check Issued" list.

2.  Find the check you want to clear. You can use the search bar or sort the list by "Check Date" to find the post-dated check (e.g., Check No. "10118").

3.  Click on the row or the "View" icon to open the "Check Details" screen.

4.  The screen will show the check's information, including its current "Status" of "For Clearing."

5.  **Clear Check:** Click the "Clear Check" button at the top of the screen.

6.  **Date Cleared:** A calendar will appear. Enter the exact date the check was cleared by the bank.

7.  The system will update the check's status to "Cleared." The funds will now be moved from the "Outstanding Checks" account to your "Cash in Bank" account in the general ledger.

This completes the process of recording, tracking, and clearing a post-dated check payment.
