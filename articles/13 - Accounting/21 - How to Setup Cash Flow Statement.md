# How to Setup Cash Flow Statement

This guide explains how to configure your Cash Flow Statement by mapping your Chart of Accounts. The system builds this report by looking at specific accounts and totaling their Debits or Credits to determine how cash moved during a specific period.

1.  **The Core Logic: Cash In vs. Cash Out**

In this system, you don't just "link" an account; you tell the system which side of the accounting entry represents a movement of cash. Use this rulebook to decide whether to select Debit or Credit for your accounts:

| Account Category            | To show Cash **IN** (Inflow)      | To show Cash **OUT** (Outflow)      |
| --------------------------- | --------------------------------- | ----------------------------------- |
| **Revenue / Sales**         | Sum **Credits**                   | \-                                  |
| **Expenses** (Wages, Rent)  | \-                                | Sum **Debits**                      |
| **Assets** (Equipment, AR)  | Sum **Credits** (Sale/Collection) | Sum **Debits** (Purchase/Increase)  |
| **Liabilities** (Loans, AP) | Sum **Credits** (Borrowing)       | Sum **Debits** (Repayment)          |
| **Equity** (Owner Capital)  | Sum **Credits** (Investment)      | Sum **Debits** (Drawings/Dividends) |

Export to Sheets

2\. **Configuration Steps**

**Step 1: Categorize the Account**

Locate your Chart of Accounts in the setup menu. For every account that involves cash movement, assign it to one of these three standard sections:

  - **Operating Activities**: Daily business functions. (e.g., Cash from customers, Inventory purchases, Wages, Taxes, and Office expenses).

  - **Investing Activities**: Long-term investments. (e.g., Purchase or sale of property, vehicles, or equipment).

  - **Financing Activities**: How the business is funded. (e.g., Loan repayments, proceeds from new loans, or dividends paid to owners).

**Step 2: Save and Refresh**

After mapping, save your settings. The Cash Flow Statement will now aggregate these totals automatically based on your chosen data range.

3\. **Verifying the Report**

Once set up, your statement will follow this material flow:

1.  **Net Increase in Cash**: This is the sum of all Operating, Investing, and Financing totals.

2.  **Beginning Balance**: This is the cash you started with on the first day of your date range.

3.  **Cash Balance**: This is the “Ending Balance.” **Crucially, this number must match your actual bank account balance for that date.**

4\. **Troubleshooting Common Errors**

  - **The Report is Empty**: Ensure you haven't just selected the account, but also specified "Sum Debit" or "Sum Credit." Without a summation rule, the system defaults to 0.00.

  - **Signs are Flipped**: If an expense (like Rent) is adding to your cash total instead of subtracting, you likely selected "**Sum Credit**." Change it to Sum Debit.

  - **New Accounts**: If you create a new expense or asset account in your general ledger, it will not appear on the Cash Flow Statement until you manually add it to the setup and define its summation rule.
