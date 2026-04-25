---
marp: true
size: 4:3
paginate: true
title: Virtual Conveyor System
---

## ASE485 Capstone Project
### Virtual Conveyor System
- By: Cleyton Shelton
  
---

## Project Metrics
-  Burndown rate: 4/4 (100%)
- 12/12 Requirements
---
## Problem Domain
Industrial conveyor systems are expensive to prototype, difficult to test safely, and disruptive to production when used for early-stage control validation.

---

Core problem details:

- **High cost of physical testing**: Building and modifying physical conveyor setups requires significant time, hardware, and labor.
- **Operational risk**: Early logic mistakes can cause jams, unsafe conditions, and equipment wear.
- **Limited safe training opportunities**: New operators need realistic practice without impacting real production.
- **Integration complexity**: PLC logic, operator controls, sensors, and monitoring tools must stay synchronized across platforms.
---
Success in this domain means proving conveyor behavior, operator workflows, and fault handling in a safe, repeatable, low-cost environment.

---
## Solution Domain
The solution is a fully virtual, integrated automation stack that mirrors a real conveyor control system.

---
Solution approach:

- **Studio 5000** provides the source-of-truth PLC ladder logic for conveyor control behavior.
- **Emulate3D** reproduces conveyor movement and sensor responses in a synchronized 3D model.
- **FactoryTalk View** provides virtual operator stations for start/stop and interaction workflows.
- **Ignition HMI** presents live status, alarms, and diagnostics for monitoring and troubleshooting.
---
Expected outcomes:

- Validate control logic before physical implementation.
- Detect and fix communication/synchronization issues earlier.
- Demonstrate end-to-end operation (control, emulation, monitoring).
- Support safer operator training with realistic runtime feedback.
---
## What Went Wrong

- Never used ignition before
- Learning curve when it comes to creating curves that will fit the conveyors

---

## What Went Well

- Merge code was easy to implement
- Tagging the objects in the HMI
- HMI routines

---

## Week-by-Week Progress Summary

- Week 10: Begin work on HMI and setting up Ignition Automation
- Week 11: Switched over to do PLC code for the HMI color 
- Week 12: Figured the binding out and added parameters to each template and binded that to the fill color for the conveyor to change color
- Week 13: Finished the HMI layout and began tagging each conveyor
---
- Week 14: Finished the tagging and checked the full system integration, Added ESTOP "buttons" to the HMI
- Week 15: Completed merging


