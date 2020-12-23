### Podium Towers with Bridges

Team: Fan Liu, Yuanming Ma, Tian Yao, Wanting Sun

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/Podium_Tower_Bridge_1.png) 

### Type Description

This collection of structures introduces the way in which the add-on bridging system can be built and modified. Green spaces are created to connect buildings as bridges. 
The Grasshopper procedural models help build and modify bridges according to the distance between buildings and the bridge height. All follow user inputs and pre-set procedural rules.

### Required inputs 

Dynamic: FAR/ Density, Attractor Point, Number of Bridges

Static: Floor Height, Building to Building Distance, Bridge Height, Bridge Width

### Type Rules 

Bridges are created on the 30th, 60th and 75th floor, based on building bridging distance between 480-500, 380-400 and 600-630 correspondingly.

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/Podium_Tower_Bridge_2.jpg)

### Use Type If

1. Use this type if you want to create more green/open spaces.
2. Use this type if you are working on high towers in a dense neighborhood.
3. Use this type if you would like to try a different type of green/open space.

### Not Recommended to Use Type If

1. Do not use this type if you have low FAR/density.
2. Do not use this type if your site has mixed-zoning. 

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/Podium_Tower_Bridge_3.png)

### What to Know & Limitations 

1. Bridges may go through buildings. Surfaces within buildings need to be trimmed.
2. The number of bridges and their height need to be controlled as presets in order to avoid a cluster of bridges that do not make sense.
3. Bridge surfaces may run into building corners. Reset inputs or trim them as needed.

### Required Plugins 

No special plugins needed.

### Required Files

[Rhino File](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/types/Podium_Tower_Bridges/files/Podium_Tower_Bridge.3dm)

[Grasshopper File](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/types/Podium_Tower_Bridges/files/Podium_Tower_Bridge.gh)
