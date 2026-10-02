# What is Inventory Tracking and Valuation

In **Autometrik**, inventory values are calculated based on the **purchase cost of an item excluding VAT**. This means that if you buy an item for ₱1,120 with 12% VAT included, the inventory value recorded will be **₱1,000** (₱1,120 ÷ 1.12).

Autometrik supports two costing methods for tracking inventory values: **FIFO (First In, First Out)** and **Weighted Average**.  
You can choose your preferred costing method in:  
**Settings → Locations → Inventory Settings**.

## 1. FIFO (First In, First Out)
**How it works:  
**FIFO assumes that the first items you purchased are the first ones sold.  
When a sale happens, Autometrik will deduct the quantity sold starting from your **oldest stock**, using the original purchase cost for that batch.

**Example:**

  - **Purchases:**
    
      - Jan 1: 10 pcs Brake Pads @ ₱1,000 each (ex VAT)
    
      - Jan 5: 10 pcs Brake Pads @ ₱1,200 each (ex VAT)

  - **Sale:**
    
      - Jan 10: Sell 12 pcs Brake Pads

**Cost Calculation:**

  - First 10 pcs → from Jan 1 batch @ ₱1,000 each → ₱10,000

  - Next 2 pcs → from Jan 5 batch @ ₱1,200 each → ₱2,400

  - **Total cost of goods sold (COGS): ₱12,400**

Your remaining inventory:

  - 8 pcs from Jan 5 batch @ ₱1,200 each

## 2. Weighted Average
**How it works:  
**Weighted Average calculates the **average cost** of all available stock at the time of sale.  
Whenever you purchase more of an item, the average cost is recalculated based on total quantity and total value.

**Example:**

  - **Purchases:**
    
      - Jan 1: 10 pcs Oil Filter @ ₱500 each (ex VAT) → ₱5,000 total
    
      - Jan 5: 10 pcs Oil Filter @ ₱700 each (ex VAT) → ₱7,000 total

  - **Average Cost:**
    
      - Total quantity: 20 pcs
    
      - Total value: ₱12,000
    
      - Weighted average cost: ₱12,000 ÷ 20 pcs = **₱600 each**

  - **Sale:**
    
      - Jan 10: Sell 12 pcs Oil Filter

**Cost Calculation:**

  - 12 pcs @ ₱600 each = **₱7,200 COGS**

Your remaining inventory:

  - 8 pcs @ ₱600 each = ₱4,800 total value
