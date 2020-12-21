### Podium Towers with Bridges

![description](https://github.com/ym2805/XIM-GSAPP-Fa20/raw/main/src/images/Podium_Tower_Bridge_1.jpg) 

### Type Description

This collection of structures introduces the way in which the add-on bridging system can be built and modified. Green spaces are created to connect buildings as bridges. 
The Grasshopper procedural models help build and modify bridges according to the distance between buildings and the bridge height. All follow user inputs and pre-set procedural rules.

### Required inputs 

Dynamic: FAR/ Density, Attractor Point, Number of Bridges

Static: Floor Height, Building to Building Distance, Bridge Height, Bridge Width

### Type Rules 

Bridges are created on the 30th, 60th and 75th floor, based on building bridging distance between 480-500, 380-400 and 600-630 correspondingly.

![description](../images/gh_procedural_type_ex3.jpg)

### Use Type If: 

1. Why? Short description of why you would use this type, likely related to performance, goals or program type. Could be structure as a series of bullet points preceded by, "Use this type if you want to . . ."

### Not Recommended to Use Type If:

1. Why not? Similar to above but covering instances when this type is not appropriate. While it might work on odd lot geometry it might not produce the result you would want.
1. This tool does X it does not do Z and Y.

Add image here to further illustrate your point

![description](../images/gh_procedural_type_combo.jpg)

### What to Know & Limitations 

1. Ex, Courtyard offset in cluster. Vertical Courtyard has trimmed surfaces. 
1. Either technical (for example, if it doesn't handle certain geometry,) or based on the how it was constructed. For the type used in the example, the scale 1d at the end to match the target area means that the vertical courtyard may not maintain the minimum size for the courtyard. The courtyard depth is currently suitable for single loaded corridor residential or side loaded office.
1. Add any common problems that could go wrong

### Required Plugins 

1. Please make sure to list any plugins that may be needed
