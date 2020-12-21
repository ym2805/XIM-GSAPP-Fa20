# Distance to Green Space - 3D Network

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/XIM%20TOOL%20DIAGRAM-01.png)


### Description

This tool shows how to visualize walking distance to green space in a 3D network, including ground travel distance from building to park 
and vertical travel distance from each floor to the ground. Visualization is shown on building facades with every 3 floors 
corresponding with walkability to both ground parks and bridges.

### How To Use

<b>Step by Step Instructions:</b>

1. Determine destination points (Ground Park Centroids). 
2. Determine origion points. (Building Footprints Centroids for ground travel & Building Floor Centroids for vertical travel)
3. Draw lines to connect ground travel from building to park.
4. Draw perpendicular lines to connect from building to floor.
5. Draw lines from Building Floor Centroids to Bridge Centroids.
6. Determine network. Load NYC Network Centerlines file if needed.
7. Filter out unwanted curves based on walking distance using network.
8. Calculate walking distnace use lines from step3 & step4.
9. Generate building facade by per 3 floors. This will be shown for visualization. (Not curves, but building facade segments.)
10. Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.


<b> Troubleshooting </b>

1. For step4 vertical travel distance lines, trim with building breps if they go through each building.
2. For step6, no need to load NYC Network Centerlines if you have manually drawn street center lines and only calculate within site.
3. The file will get very heavy starting from step6. Be mindful when you select curves for network.
4. For step8, use only ground and vertical travel distance for lighter file. 
5. Horizontal travel distance from building floor to bridge can be omitted in step8 but has to be included in the network analysis (step7).


### Required Plugins 

[WombatGH](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/tools/Network/Distance_to_Green_Space/files/wombatgh131.gha)


### Required Files

[Rhino File](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/tools/Network/Distance_to_Green_Space/files/Distance_to_Green_Space.3dm)

[Grasshopper File](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/tools/Network/Distance_to_Green_Space/files/Distance_to_Green_Space.gh)


![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/XIM%20TOOL%20DIAGRAM-03.png)


### Modeling Standards

1. Make sure each individual building is booleanunioned to one brep.
2. Make sure to have existing parks, new procedural parks and bridges as three individual inputs.
3. Merge existing parks and new procedural parks first for ground travel distance caculation. 
4. Merge all three for network analysis and green area per person metric if desired.
5. Make sure building facade segment are capped to closed breps for visualization. 


### Sources, Calculations + Metrics

1. Walking Distance to Green Spaces in a 3D network.
2. Sqft of green spaces per person in the area.


### Context & Limitation

The visualization of green space in this tool represents the walkability to ground parks and bridges, but not the open spaces in courtyard typology or balconies.
