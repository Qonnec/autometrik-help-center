# How to Manage Supplier Check Payment and Clearing

Just as with customer receipts, managing payments to vendors requires a precise workflow to ensure your bank balance remains accurate. The **Check Issued** and **Clearing** feature is designed to handle both immediate payments and **Post-Dated Checks (PDCs)** issued to suppliers.

By utilizing a two-step process—marking a check as **Issued** and then later as **Cleared**—the system ensures your **Accounts Payable (AP)** is settled the moment you hand over the check, while your "Cash in Bank" ledger only reflects the deduction once the supplier has actually encashed it.

1.  **Setting Up the Supplier Payment Method**

Before issuing checks, the payment method must be configured to handle the clearing workflow

  - **Require Clearing**: Set to **Yes**. This enables the temporary "Outstanding" status.

  - **Account**: Linked to **Outstanding Checks Issued** (Liability/Asset Contra). This holds the value until it is cleared from your bank.

  - **Clearing Account**: Linked to your actual **Cash in Bank**.

  - **Auto Increment**: Typically set to **Yes** to automatically track your next physical check number.

2\. **Issuing a New Supplier Payment**

When paying a vendor, record the details in the **New Supplier Payment** screen.

  - **Supplier**: Select the vendor (e.g., ABC General Merchandise).

  - **Payment Method**: Select your check account (e.g., BDO Check).

  - **Check** **Date**: Enter the date written on the check. If it is a **PDC**, enter the future date.

  - **Payment Reference**: The system will generate or allow you to enter the Check Number.

  - **Application**: Select the specific **Supplier Invoices** this check is intended to pay.

**The First Journal Entry (Issuance)**

Clicking **Create & Complete** records the payment in your books, reducing what you owe to the supplier.

| **Account**                         | **Debit** | **Credit** |
| ----------------------------------- | --------- | ---------- |
| **Accounts Payable-Trade**          | 52,000.00 |            |
| **Outstanding Checks Issued – BDO** |           | 52,000.00  |

**Result:** Your liability to the supplier is settled, but your bank balance is not yet deducted because the check hasn’t been cashed.

3\. **The Check Clearing Process**

Once the supplier encashes the check and it appears on your bank statement, you must clear it in the system.

**Steps to Clear an Issued Check:**

1.  Navigate to the check management module and open the **Check Details** for the specific check.

2.  The status will initially be **For Clearing**.

3.  Click the orange **Clear Check** button.

4.  In the **Check Clearing** pop-up, enter the **Clearing Date** (the date it was deducted from your bank).

5.  Click **Clear Check**.

4\. **Understanding the Clearing Journal Entry**

Once cleared, the system moves the funds from your "Outstanding" account to your actual bank account.

**The Second Journal Entry (Clearing)**

| **Account**                         | **Debit** | **Credit** |
| ----------------------------------- | --------- | ---------- |
| **Outstanding Checks Issued – BDO** | 52,000.00 |            |
| **Cash in Bank – BDO**              |           | 52,000.00  |

**Why this matters:** This workflow provides a real-time list of "Checks in Transit". It prevents you from thinking you have more money than you actually do, especially if you have issued several large PDCs that haven't hit the bank yet.

**Status Summary Table**

| **Status**       | **Meaning**                                            | **Impact on Bank Balance** |
| ---------------- | ------------------------------------------------------ | -------------------------- |
| **For Clearing** | Check is issued to the supplier but not yet encashed.  | No Impact                  |
| **Cleared**      | The check has been processed and deducted by the bank. | Balance Decreases          |
| **Cancelled**    | The check was voided, stopped, or lost.                | No Impact                  |
