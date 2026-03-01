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
-  Burndown rate: 2/5 (40%)
- 5/12 Requirements

---

## Features and Requirements Implemented and in Progress

---

## What Went Wrong

- On one of the conveyors the start and end points were giving me a ton of issues. There is a function to flip them but it wasn't working on that one conveyor. 
- IO browser setting up the right tags to the right visuals
- Still not sure how to tag the diverter
- Can only use Emulate3D after 6pm or on weekends

---

## What Went Well

- Making the overall system was easier than I thought
- I didn't need as many scripts as I thought I would
- The connection from PLC -> Emulate3D was flawless and worked first try which never happens

---

## Analysis & Improvement Plan

- Need to spend more time on weekends getting things together
- Learn more about the scripts and how to write a script for the diverter

---

## Week-by-Week Progress Summary

- Week 4: N/A
- Week 5: Setting up Emulate3D on my work laptop, had a few licensing issues
- Week 6: Started to get the hang of the software, figuring out how to get the conveyors set up and set the scripts up
- Week 7: Made the initial system and got all the connections set up
- Week 8: Got all the conveyors properly tagged and checked if they worked with Austin's PLC code

---

# Sprint 2 Plan

---

## Individual Progress - Cley Shelton

### Sprint 2 Schedule (Weeks 10-14)

---

### Week 10: Ignition Setup & Planning

Define Sprint 2 goals and expected outcomes for HMI, integration, and testing.

Set up and configure Ignition for this project environment:
- Connect to PLC/Emulate3D data source
- Create initial tag structure for conveyors, motors, and sensors
- Build base project layout for HMI screens

Confirm software communication path and document setup status.

---

### Week 11: HMI Layout, Tagging, and Automation Views

Build primary HMI conveyor overview screen:
- Conveyor status display
- Motor/sensor status indicators
- Basic alarm/health indicators

Complete conveyor layout tagging and verify tag mapping consistency.

Prepare initial automation view logic in Ignition for real-time updates.

---

### Week 12: Full System Integration Validation

Run integrated workflow with:
- Emulate3D conveyor simulation
- PLC ladder logic execution
- Ignition dashboard real-time updates
- FactoryTalk control input validation

Test interaction behavior:
- Start/stop commands
- Sensor activation responses
- Fault/alarm reflection on HMI

Log defects and prioritize fixes.

---

### Week 13: Checksheet Testing & Reliability Pass

Execute full system checksheets across normal and fault scenarios.

Validate:
- Command-to-response timing
- Tag/state accuracy between platforms
- Alarm behavior and recovery flow

Apply reliability improvements and re-test failed checks.

---

### Week 14: Documentation, Website Update & Sprint Wrap-Up

Update project website and documentation with Sprint 2 outcomes:
- New HMI screenshots and feature updates
- Integration results summary
- Testing/checksheet outcomes

Finalize Sprint 2 deliverables and prepare handoff/demo notes.