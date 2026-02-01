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

### Key Features (9 Total)

### 1. PLC-Based Conveyor Control
- Develop ladder logic using Studio 5000  
- Control motors, sensors, and safety interlocks  
- Ensure logical sequencing of conveyor operations  

### 2. Conveyor Emulation
- Model the conveyor system in Emulate3D  
- Simulate motor behavior, sensors, and material flow  
- Synchronize emulation with PLC ladder logic  

---

### 3. Virtual Control Stations
- Build interfaces in FactoryTalk View  
- Enable start/stop, speed control, and monitoring of conveyors  
- Update conveyor status in real time  

### 4. Real-Time HMI Dashboard
- Display conveyor states using Ignition  
- Show motor status, sensor readings, and alarms  
- Provide a visual overview of the system  

---

### 5. Conveyor Sequencing
- Implement multiple conveyor lines and junctions  
- Automate routing of products between conveyors  
- Test sequencing logic in Emulate3D simulation  

### 6. Emergency Stop & Safety Logic
- Add E-stop and safety interlocks  
- Ensure any faults immediately stop conveyors  
- Integrate alarms and notifications into HMI  

---
### 7. User Interaction
- Allow users to control conveyors via FactoryTalk View  
- Enable switching between control stations without disrupting operation  
- Provide clear feedback for operator actions  

---

### 8. System Integration
- Synchronize PLC ladder logic, Emulate3D simulation, FactoryTalk controls, and Ignition HMI  
- Ensure real-time updates across all platforms  
- Test reliability under different scenarios  

### 9. Documentation & Reporting
- Maintain full project documentation  
- Include PLC logic diagrams, HMI screenshots, and simulation results  
- Prepare presentation/demo materials for final review  

---

# Development Roadmap

## Product Development Roadmap

### Sprint 1 Deliverables
1. **PLC Ladder Logic**
- Implement basic conveyor control (start/stop, motor control, sensors)  
- Define I/O addresses for integration with Emulate3D and HMI  

2. **Emulate3D Conveyor Model**
- Build initial 3D conveyor model  
- Connect motors, sensors, and PLC I/O  
- Run first simulations to test basic logic  

---

3. **Virtual Control Stations**
- Create FactoryTalk View interface  
- Implement start/stop buttons and status indicators  
- Test connectivity to PLC  

4. **Real-Time HMI Dashboard**
- Design Ignition dashboard for conveyor overview  
- Connect to PLC or Emulate3D tags  
- Display motor and sensor status  

---

### Sprint 2 Deliverables
5. **Conveyor Sequencing**
- Implement multi-line conveyor routing  
- Test automated product flow in simulation  


6. **Emergency Stop & Safety Logic**
- Add E-stop buttons and interlocks  
- Integrate alarms in HMI  
- Ensure safety scenarios halt conveyors properly  

---

7. **User Interaction Enhancements**
- Allow switching between control stations  
- Provide clear operator feedback  
- Test multi-user scenarios in FactoryTalk  

---

8. **Full System Integration**
- Ensure PLC, Emulate3D, FactoryTalk, and Ignition are fully synchronized  
- Test end-to-end conveyor operations  
- Debug communication issues and timing discrepancies  


9. **Testing, Documentation & Final Polishing**
- Perform complete system testing  
- Fix bugs and optimize performance  
- Prepare documentation, diagrams, and presentation/demo materials  

---

## Questions?
