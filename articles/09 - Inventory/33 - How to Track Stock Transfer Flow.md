# How to Track Stock Transfer Flow

The Stock Transfer process uses statuses to track a transfer from the creation of a request through approval, processing, shipment, and receipt.

1\. **Open**

**Open** is the initial status of a Stock Transfer. At this stage, the transfer can be reviewed and prepared before submitting it as a request.

**Typical next action**: Submit the Stock Transfer as a **New Request**.

2\. **New Request**

**New Request** means that a Stock Transfer request has been submitted to the source branch for processing. The source branch can review the requested items and determine whether the request should proceed. From this stage, the request may be:

  - **Approved**

  - **Denied**

3\. **Approved**

**Approved** means that the Stock Transfer request has been authorized and can proceed. Only users with the appropriate **Stock Transfer Approval** permission can approve a request. Once approved, the transfer proceeds to processing and fulfillment.

4\. **In Process**

**In Process** indicates that the Stock Transfer is currently being prepared or fulfilled by the source branch. At this stage, the source branch may prepare the requested inventory for shipment. Depending on the branch involved, the transfer may also be cancelled or denied when applicable.

5\. **Shipped**

**Shipped** means that the requested items have been dispatched by the source branch and are on their way to the requesting branch. The requesting branch can monitor the transfer while waiting for the items to arrive.

**Typical next action**: The requesting branch confirms the item when they arrive.

6\. **Received**

**Received** indicates that the requesting branch has received the transferred items. This normally represents the completion of the physical stock transfer. Once received, the transferred inventory can be used or sold by the destination branch according to normal inventory procedures.

7\. **Denied**

**Denied** means that the Stock Transfer request has been rejected. A denied request will not proceed to shipment. This status is generally used when the source branch cannot or does not want to fulfill the requested transfer.

8\. **Cancelled**

**Cancelled** means that the Stock Transfer has been cancelled and will no longer proceed. Cancellation may be available at certain stages of the transfer process depending on the current status and branch involved.

**Stock Transfer Process**

The typical Stock Transfer process is:

**Open \> New Request \> Approved \> In Process \> Shipped \> Received**

There are also exception paths:

  - **New Request \> Denied**

  - **In Process \> Denied**

  - **In Process \> Cancelled**

  - **New Request \> Cancelled**

**Branch Responsibilities**

| Status          | Typical Responsibility |
| --------------- | ---------------------- |
| **Open**        | Requesting branch      |
| **New Request** | Requesting branch      |
| **Approved**    | Authorized user        |
| **In Process**  | Source branch          |
| **Shipped**     | Source branch          |
| **Received**    | Requesting branch      |
| **Denied**      | Source authorized user |
| **Cancelled**   | Authorized user        |

**Important**

The statuses available to a user depend on the **current status of the Stock Transfer**, the **user's permissions**, and whether the user belongs to the **requesting branch** or the **source branch**. This ensures that each branch can perform only the actions relevant to its role in the transfer process.
