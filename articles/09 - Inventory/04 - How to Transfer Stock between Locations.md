# How to Transfer Stock between Locations

This guide outlines the end-to-end workflow for transferring stock between branches, specifically focusing on the request from Branch A to the Main Office.

Use the following procedure to **manage stock transfers.**

1.  **Initiating the Stock Transfer (Branch A)**

The process begins at the requesting branch, **Branch A**.

  - **Create Request:** Navigate to the Stock Transfer module and select **New Request.**

  - **Select Source:** Set the **Request Stock From** field to **Main Office.**

  - **Add Products:** Choose the items and specify the quantity**.**

  - **Submit:** Click Create **Stock Transfer**. At this stage, the status is **New Request**, and the stock at Branch A is marked as "on-purchased" (pending arrival).

2\. **Fulfillment and Shipping (Main Office)**

Once the request is visible to the **Main Office**:

  - **Preparation**: The Main Office reviews the request. Upon approval, the requested stock is "allocated" (reserved) in their system to ensure it isn't sold elsewhere.

  - **Shipment**: Once the physical goods are packed, the Main Office clicks the **Edit/Status** icon.

  - **Status Update**: Change the status to **Shipped** and click **Save Changes**. This indicates the goods are officially in transit.

3\. **Receiving the Stock (Branch A)**

When the physical items arrive at **Branch A**:

  - **Verification**: Inspect the goods against the digital request (e.g., Reference No: ST0000003).

  - **Status** **Update**: Open the stock transfer details and change the status to **Received**.

  - **Inventory Impact**:
    
    1.  **Main Office**: Stock is officially deducted from their balance.
    
    2.  **Branch A**: Stock is officially added to their local inventory.

4\. **Accounting and Journal Entries**

The system automatically generates reciprocal journal entries to maintain the balance between the two entities.

**Main Office Books**

The Main Office records the movement of value to the branch.

  - **Debit:** Inventory

  - **Credit:** Investment to Branch A

**Branch A Books**

The branch records the receipt of inventory and the liability back to the Main Office.

  - **Debit:** Inventory

  - **Credit:** Main Office Current Account

\[***NOTE*:** The “Investment to Branch A” and “Main Office Current Account” are reciprocal accounts and will be reconciled during the period-end closing process.\]

**Summary Table: Status & Stock Impact**

| **Status**      | **Stock Impact (Main Office)** | **Stock Impact (Branch A)** |
| --------------- | ------------------------------ | --------------------------- |
| **New Request** | No Change                      | On-Purchased                |
| **Shipped**     | Allocated (Reserved)           | In-Transit                  |
| **Received**    | Deducted                       | Added to Inventory          |
