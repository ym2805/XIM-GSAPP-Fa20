# Walkability Network Analysis
  

![description](../images/Plan_View_1-2.jpg)

### Tool Description

Analysis techniques at the urban scale that focus on access to urban amenities through networks and mobility, using shortest path and origin / destination routing.  

### How to Use

Step-by-step Instructions: 
1. Define location network
2. Define desired attractor points 
3. Define origin location curves (Building Footprints)
4. Define target location points (Transportation Hubs)
5. Define your max travel distance time/distance 
6. Define the distance for subdividing the networks into small segments. Essentially, this will be the resolution of the analysis.
7. Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.

![description](../images/Script_GH.png)

### Troubleshooting

1. Make sure to load the street centerlines properly, as they are crucial  to test walkability run and visualization.
2. The shortest walk component creates substantial geometry output, so be mindful of file size.
3. The same applies for the analysis of origins points. Be mindful of the file size. 
4. You can get some overlap of the lines' visualization, so you need to move the lines physically with a move component to avoid that overlap. 
5. If the line weight for the visualization is low,  some paths might not be adjusted depending on distance and time you are analyzing. 

Walkshed Visualization:
![description](../images/Plan_View_1-1.jpg)

Origin / Destination Visualization:
![description](../images/Plan_View_1-3.jpg)

### Modeling Standards

Please follow the following Rhino standards to ensure the proper functionality of the tool: 
1. Install the following plug-ins: Decoding Spaces, Human
2. This file can be useful if your project is in NYC: NYC Street Centerlines. However you can use any lines for your networks, be it parametrically generated or manually drawn. 
3. Massing must be a single, simplified, closed polysurface.
4. Your model must be set to either Meters or Feet (not mm or in).
5. Your model must be free of overlapping, coplanar, or intersecting geometry.
6. Any surrounding context has to be a single, joined mesh.

### Sources, Calculations & Metrics

1. Travel distance within a group of buildings and urban amenities
2. Visualize footprints based on how many amenities they can reach 
3. Amenities accessible within a certain walking time
4. Average number of amenities that can be accessed per building
5. Percentage of the buildings that have access to at least x amenities

### Sources, Calculations & Metrics

We used this tool in our project to test each proposed street type. The resulting metrics for each type served as a basis of comparison for each model. Subsequently, we were able to score the types based on their performance in this analysis. 

![description](../images/AnalysisResults01.png)

![description](../images/AnalysisResults02.png)

![description](../images/AnalysisResults03.png)
