# Virtual Conveyor System Capstone Project

## Overview
This project implements a **Virtual Conveyor System** to simulate and control industrial conveyor operations. It combines **PLC logic, 3D emulation, virtual operator controls, and HMI monitoring** to create a complete training and validation environment before physical deployment.

## Problem Domain
Industrial conveyor systems are expensive to prototype, difficult to test safely, and disruptive to production when used for early-stage control validation.

Core problem details:

- **High cost of physical testing**: Building and modifying physical conveyor setups requires significant time, hardware, and labor.
- **Operational risk**: Early logic mistakes can cause jams, unsafe conditions, and equipment wear.
- **Limited safe training opportunities**: New operators need realistic practice without impacting real production.
- **Integration complexity**: PLC logic, operator controls, sensors, and monitoring tools must stay synchronized across platforms.

Success in this domain means proving conveyor behavior, operator workflows, and fault handling in a safe, repeatable, low-cost environment.

## Solution Domain
The solution is a fully virtual, integrated automation stack that mirrors a real conveyor control system.

Solution approach:

- **Studio 5000** provides the source-of-truth PLC ladder logic for conveyor control behavior.
- **Emulate3D** reproduces conveyor movement and sensor responses in a synchronized 3D model.
- **FactoryTalk View** provides virtual operator stations for start/stop and interaction workflows.
- **Ignition HMI** presents live status, alarms, and diagnostics for monitoring and troubleshooting.

Expected outcomes:

- Validate control logic before physical implementation.
- Detect and fix communication/synchronization issues earlier.
- Demonstrate end-to-end operation (control, emulation, monitoring).
- Support safer operator training with realistic runtime feedback.

The project uses multiple software tools to achieve full system functionality:  

- **Ignition**: HMI platform for real-time monitoring of conveyor system states.  
- **FactoryTalk View**: Virtual control stations to operate and interact with the conveyors.  
- **Emulate3D**: Virtual emulation of the conveyor system that synchronizes with the control stations and updates the HMI.  
- **Studio 5000**: PLC programming environment used to develop ladder logic to control conveyor operations.  

---

## System Architecture

1. **Studio 5000**  
   - Develops the core **ladder logic** for the conveyor system.  
   - Controls conveyor motors, sensors, and safety interlocks.  
   - Provides real-time outputs that can be linked to both FactoryTalk View and Emulate3D.  

2. **Emulate3D**  
   - Provides a **3D simulation** of the conveyor system.  
   - Emulates physical behavior of conveyors and other industrial components.  
   - Synchronizes with Studio 5000 ladder logic to reflect real system behavior.  
   - Updates **Ignition HMI** with real-time conveyor status.  

3. **FactoryTalk View**  
   - Implements **virtual control stations** for operator interaction.  
   - Allows starting, stopping, and controlling conveyors virtually.  
   - Sends operator commands back to Studio 5000 ladder logic for execution.  

4. **Ignition HMI**  
   - Displays **real-time updates** of conveyor states, including motor status, sensor readings, and overall system performance.  
   - Integrates with Emulate3D to provide a visual dashboard of the conveyor system.  
   - Offers alarms and indicators for system anomalies or faults.  

---

## Features

- Real-time conveyor monitoring with HMI dashboards  
- Virtual control of conveyors through FactoryTalk View stations  
- 3D emulation of the conveyor system with Emulate3D  
- PLC-based control logic with Studio 5000  
- Integration between simulation, control stations, and HMI for full system interaction  

---

## Setup Instructions

1. **Studio 5000**
   - Open the project and download the ladder logic to your PLC or simulator.  
   - Ensure all I/O addresses match the emulated system in Emulate3D.  

2. **Emulate3D**
   - Load the conveyor model and connect it to Studio 5000 using the appropriate I/O configuration.  
   - Test system behavior in simulation mode to confirm logic execution.  

3. **FactoryTalk View**
   - Open virtual control stations project.  
   - Configure buttons and indicators to communicate with Studio 5000 logic.  

4. **Ignition HMI**
   - Connect Ignition to the PLC or Emulate3D data tags.  
   - Set up dashboards and indicators to reflect real-time system states.  

5. **Integration**
   - Verify that control station inputs in FactoryTalk View affect the emulated conveyors.  
   - Confirm that changes in Emulate3D and Studio 5000 ladder logic are updated in Ignition.  

---

## Tools and Technologies

| Tool               | Purpose                                                                 |
|-------------------|-------------------------------------------------------------------------|
| Studio 5000       | PLC ladder logic development and execution                               |
| Emulate3D         | Virtual system emulation                                                |
| FactoryTalk View  | Virtual control stations for operator interaction                        |
| Ignition HMI      | Real-time system monitoring and visualization                             |

---

## Notes
- Ensure all software licenses are valid for integration.  
- The system is fully virtual; no physical conveyors are required.  
- Future improvements could include adding multiple conveyor lines, sensors, and automated routing logic.
