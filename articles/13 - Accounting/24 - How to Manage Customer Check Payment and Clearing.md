# How to Manage Customer Check Payment and Clearing

Managing customer payments often involves handling **Post-Dated Checks (PDCs)**—checks written for a future date that cannot be deposited immediately. The **Check Received** and **Clearing** feature is designed to bridge this gap between receiving a physical check and actually having the cash available in your bank.

By separating the **Receipt** of a check from its **Clearing**, the system allows you to record PDCs the moment they arrive, keeping your accounts receivable (AR) organized without prematurely inflating your bank balance. This two-step workflow ensures your financial reports remain accurate: your AR team can settle invoices immediately, while your finance team can track "Uncleared" funds until they are officially cleared by the bank.

1.  **Create Estimate**

Before receiving a check, the payment method must be configured to handle the "Clearing" workflow.

  - **Require Clearing**: Set to **Yes**. This triggers the two-step accounting process.

  - **Account**: Linked to **Uncleared Customer Checks** (Asset). This acts as a "holding" account for checks on hand or PDCs.

  - **Clearing Account**: Linked to **Cash in Bank** (Asset). This is the final destination for the funds once cleared.

2\. **Receiving a New Payment**

When a customer pays via check, you record the transaction in the **New Payment** screen.

  - **Payment Method**: Select **Check**.

  - **Check Date**: For **Post-Dated Checks**, enter the future date written on the check. This helps track when the check is eligible for deposit.

  - **Payment Reference**: Enter the physical Check Number (e.g., 10003002).

  - **Application**: Apply the amount (e.g., 7,700.00) to the outstanding Invoice.

**The First Journal Entry (Receipt)**

Once you click **Create & Complete**, the system acknowledges the customer has paid, but keeps the funds in a “pending” state.

| **Account**                   | **Debit** | **Credit** |
| ----------------------------- | --------- | ---------- |
| **Uncleared Customer Checks** | 7,700.00  |            |
| **Accounts Receivable**       |           | 7,700.00   |

**Result:** The customer's debt is reduced, but your bank balance remains unchanged while the check is "in the drawer."

3\. **The Check Clearing Process**

All checks go into the **Check Received** dashboard with a status of **For Clearing**. This dashboard is essential for monitoring PDCs that are now due for deposit.

**Steps to Clear a Check**

1.  Navigate to **Accounting** \> **Check Received**.

2.  Select the **Check No.** (monitor the **Check Date** to ensure it is no longer post-dated).

3.  Click the orange **Clear Check** button.

4.  In the pop-up, enter the **Clearing** **Date** (the date the funds actually hit your bank account).

5.  Confirm by clicking **Clear Check**. The status will change to **Cleared**.

4\. **Understanding the Clearing Journal Entry**

Marking a check as "Cleared" triggers the final accounting movement. The system automatically moves the balance out of the temporary account and into your actual bank account.

**The Second Journal Entry (Clearing)**

| **Account**                   | **Debit** | **Credit** |
| ----------------------------- | --------- | ---------- |
| **Cash in Bank - BPI**        | 7,700.00  |            |
| **Uncleared Customer Checks** |           | 7,700.00   |

**Why this matters:** This ensures your **Bank Reconciliation** is seamless. Your "Cash in Bank" ledger will match your bank statement perfectly because the entry only hits that account on the actual date of clearing, not the date the check was received.

**Status Summary Table**

| **Status**       | **Meaning**                                                  | **Impact on Bank Balance** |
| ---------------- | ------------------------------------------------------------ | -------------------------- |
| **For Clearing** | Check (or PDC) is on hand but not yet processed by the bank. | No Impact                  |
| **Cleared**      | Funds have been successfully deposited and verified.         | Balance Increases          |
| **Cancelled**    | The check was voided or returned (bounced).                  | No Impact                  |
