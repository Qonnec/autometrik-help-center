# What Does Pending Released Mean

In the Job Order workflow, item quantities are tracked using three key values: (1) **On-Hand** – the total number of items physically in stock, (2) **Allocated** – items reserved for ongoing Job Orders, and (3) **Available** – items that can still be used (On-Hand – Allocated). Job Orders move through the following statuses: **Open \> In-Progress \> Completed \> Released**. The Released status is critical because it **finalizes the inventory update**.

WHAT DOES **PENDING RELEASED** MEAN**?**

**Pending Released** refers to **Job Orders** that have been **completed but not yet updated to Released status**. This means that:

  - Items are still showing as **Allocated** (reserved), instead of being deducted from On-Hand.

  - Available stock appears lower than the real usable quantity.

  - Inventory numbers are **not yet finalized**.

**Initial Stock example:**

| **On-Hand** | **Allocated** | **Available** |
| ----------- | ------------- | ------------- |
| 5           | 0             | 5             |

1.  **Open a Job Order (2 pcs)**

| **On-Hand** | **Allocated** | **Available** |
| ----------- | ------------- | ------------- |
| 5           | 2             | 3             |

 

1.  **Mark Job Order as Completed (but not yet Released)**

| **On-Hand** | **Allocated** | **Available** |
| ----------- | ------------- | ------------- |
| 5           | 2             | 3             |

\[***NOTE*:** Still **Pending Released**.\]

1.  **Mark Job Order as Released**

| **On-Hand** | **Allocated** | **Available** |
| ----------- | ------------- | ------------- |
| 3           | 0             | 3             |

\[***NOTE*:** Now the stock accurately reflects the items used.\]

WHY IS **RELEASING** IMPORTANT**?**

If Job Orders stay **Pending Released**, your inventory reports may be misleading. This means that:

  - **On-Hand stock** will look higher that it really is.

  - **Allocated stock** will stay inflated.

  - **Available stock** may not be reliable.

\[***NOTE*:** By ensuring all completed Job Orders are Released, your inventory stays accurate and up-to-date.\]

**Key Takeaways**

  - **Pending Released** = Completed Job Orders not yet finalized in inventory.

  - Always **Release Job Orders** after completion to update stock levels.

  - Accurate releasing prevents stock discrepancies and ensures correct reporting.
