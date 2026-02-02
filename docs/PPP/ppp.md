---
marp: true
theme: default
paginate: true
---

# Cleyton Shelton Virtual Conveyor System Capstone

---

## Problem Domain

Modern factories rely on conveyor systems to move products efficiently, but **real-world testing and training is costly and risky**.  

There is a need for a **fully virtual conveyor system** that allows users to:  
- Control conveyors safely via virtual control stations  
- Monitor system status in real time through an HMI  
- Simulate complex conveyor interactions without physical equipment  
- Test, optimize, and train operators before deploying in a real factory  

---

## Features & Requirements

### Key Features (5 Total)

### 1. Conveyor Emulation
- Model the conveyor system in Emulate3D  
- Simulate motor behavior, sensors, and material flow  
- Synchronize emulation with PLC ladder logic  

---

### 2. Real-Time HMI Dashboard
- Display conveyor states using Ignition  
- Show motor status, sensor readings, and alarms  
- Provide a visual overview of the system  

---

### 3. Conveyor Sequencing
- Implement multiple conveyor lines and junctions  
- Automate routing of products between conveyors  
- Test sequencing logic in Emulate3D simulation  
---

### 4. System Integration
- Synchronize PLC ladder logic, Emulate3D simulation, FactoryTalk controls, and Ignition HMI  
- Ensure real-time updates across all platforms  
- Test reliability under different scenarios  

### 5. Documentation & Reporting
- Maintain full project documentation  
- Include PLC logic diagrams, HMI screenshots, and simulation results  
- Prepare presentation/demo materials for final review  

---

# Development Roadmap

## Product Development Roadmap

### Sprint 1 Deliverables
1. **Emulate3D Conveyor Model**
- Build initial 3D conveyor model  
- Connect motors, sensors, and PLC I/O  
- Run first simulations to test basic logic  

---

### Sprint 2 Deliverables


2. **Real-Time HMI Dashboard**
- Design Ignition dashboard for conveyor overview  
- Connect to PLC or Emulate3D tags  
- Display motor and sensor status  

---

3. **Full System Integration**
- Ensure PLC, Emulate3D, FactoryTalk, and Ignition are fully synchronized  
- Test end-to-end conveyor operations  
- Debug communication issues and timing discrepancies  


4. **Testing, Documentation & Final Polishing**
- Perform complete system testing  
- Fix bugs and optimize performance  
- Prepare documentation, diagrams, and presentation/demo materials  

---

## Questions?
