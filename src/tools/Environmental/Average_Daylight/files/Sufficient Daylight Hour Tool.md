# Sufficient Daylight Hour Tool
<!--add your title on the first line above-->

<!--add your summary image here, try to make it explanatory of what the tool does, not just what the output looks like. For example, exposure a part of the analysis geometry. An animated GIF can also be used to explain how the tool is working-->

![description](../tools/Environmental/Average_Daylight/files/Sufficent Daylight Hour Tool 01.jpg)

<!-- ![description of image](XIM-GSAPP-Fa20/src/tools/Environmental/Average_Daylight/files/Sufficent Daylight Hour Tool 01.jpg) -->

### Description

<!--add your description below-->

This tool analyzes average daylight hours of exterior horizontal spaces that can be used as garden hours. Then it dispatches the surfaces with sufficient amount of daylight to a vegetable type.

### How To Use

<b>Step by Step Instructions:</b>

1. Right click on "Geo: Lots" -> Select Multiple and select lot areas for towers.
2. Toggle between 'Tower Type' and 'FAR' to get desired shape and size.
2. Link to epw file
2. Right click on "Context" -> Select Multiple and select building obstructions.
3. Adjust 'Analysis Resolution', 'Start Time', 'End time', 'Day', and 'Month' accordingly to your analysis.
5. Adjust 'Min Hour Threshold'.
6. Review visual and metric outputs. Does it look correct? Does something look wrong? Common issues below.


<b> Troubleshooting </b>

Make sure to properly load the context as it is crucial for to test the daylight hours correctly

Make sure all the inputs have been loaded correctly.

<!--add a list your downloadable links below with "link " appended to the beginning. You should have sample rhino + grasshopper files and a legend-->

(../files/Analysis Tool Example.3dm)
link Analysis Tool Example.gh
link grasshopper_tree.jpg
link Analysis Tool Example.ai
(../files/Analysis Tool Example.3dm)

![description](../tools/Environmental/Average_Daylight/files/Sufficent Daylight Hour Tool 02.jpg)

<!-- ![description of image](XIM-GSAPP-Fa20/src/tools/Environmental/Average_Daylight/files/Sufficent Daylight Hour Tool 02.jpg) -->

### Modeling Standards
<!--Revise for specific modeling requirements for you analysis to run properly. If useful, add an image of properly vs improperly model geometry-->
<b>Please follow the following Rhino standards to ensure the proper functionality of the tool: </b>


<input type="checkbox"> <b>My test curve is a single CLOSED polyline.</b>

  <li>Try "SelClosedCrv" to make sure it is closed.</li>

<input type="checkbox"> <b>My model is oriented to True North.</b>

  <li>Re-orient if it was rotated off of North at the start of the project.</li>

<input type="checkbox"> <b>Any groups or blocks in building context have been ungrouped.</b>

  <li>Try "SelBlockInstance" and "SelGroup" to make sure.</li>

<input type="checkbox"> <b>My model is set to either Meters or Feet (not mm or in).</b> <br>

<input type="checkbox"> <b>My model is free of overlapping, coplanar, or intersecting geometry.</b><br>

<input type="checkbox"> <b>Any obstructions around the space have been modeled (trees, topography, buildings).</b><br>

<input type="checkbox"> <b>Any curved surfaces in the model have been simplified to individual flat planes.</b><br>


### Sources, Calculations + Metrics
<!--add text and/or images for any sources for you metrics, calculations & equations, assumptions and specific metric output-->
This tool extracts exterior horizontal spaces and turns them into garden areas. It calculates the amount of sunlight each of those surfaces receive, and then dispatches the surfaces that receive sufficient daylight to a specific vegetable type. The vegetable types are already predetermined but it can be changed.

### Limitations & Context
<!--add text and/or images that expose potential for bias by stating limitations (ie what does this tool not do,) and the context in which it was created.-->

The limitation of the tool is that it does not take into consideration the climate necessary for vegetable growth. It only calculates if the areas receive sufficient daylight.

### Examples
<!--add images and text to describe a use case below-->
Here is how we used this tool on a project!

![description](../tools/Environmental/Average_Daylight/files/Sufficent Daylight Hour Tool 03.jpg)

<!-- ![description of image](XIM-GSAPP-Fa20/src/tools/Environmental/Average_Daylight/files/Sufficent Daylight Hour Tool 03.jpg) -->
