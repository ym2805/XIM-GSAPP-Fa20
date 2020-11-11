# Network Analysis Tool
<!--add your title on the first line above-->

<!--add your summary image here, try to make it explanatory of what the tool does, not just what the output looks like. For example, exposure a part of the analysis geometry. An animated GIF can also be used to explain how the tool is working-->

![description](https://www.dropbox.com/s/i6bi1ime52xufv6/1.jpg?dl=0)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

#### Description

<!--add your description below-->
This is a tool that allows us to assess the urban grid and find connections between urban spaces and mobility infrastructure. In order to use this tool, you will need a 3DM file with urban networks, which will allow you to measure commuting times and walking distances between target points. You will subsequently, load the Network Analysis

#### How To Use

<b>Step by Step Instructions:</b>
1. Define Network of Location
2. Define Desired Attractor Points
2. Define Origin Location Curve (Building Footprint)
3. Define Target Location Curve (Transportation Hubs)
4. Review Visual and Metric Outputs. Does it look correct? Does something look wrong? Common issues below.

<b> Troubleshooting </b>
Add any common problems that could go wrong

<!--add a list your downloadable links below with "link " appended to the beginning. You should have sample rhino + grasshopper files and a legend-->
https://www.dropbox.com/s/a32bnom7wenjp31/Network_Analysis_Test.3dm?dl=0 Network_Analysis_Test.3dm
https://www.dropbox.com/s/c0f671jend5ouif/Network_Analysis.gh?dl=0 Network_Analysis.gh
link MyTool_legend.png
link MyTool_legend.ai

#### Modeling Standards
<!--Revise for specific modeling requirements for you analysis to run properly. If useful, add an image of properly vs improperly model geometry-->
<h5>Please follow the following Rhino standards to ensure the proper functionality of the tool:</h5>
<br>

<input type="checkbox"> <b>My test massing is a single, simplified, CLOSED polysurface.</b>
  <li>Try "SelClosedSrf" to make sure it is closed.</li>
<input type="checkbox"> <b>My model is oriented to True North.</b>
  <li>Re-orient if it was rotated off of North at the start of the project.</li>
<input type="checkbox"> <b>Any groups or blocks in the model have been ungrouped/exploded.</b>
  <li>Try "SelBlockInstance" and "SelGroup" to make sure.</li>
<input type="checkbox"> <b>My model is set to either Meters or Feet (not mm or in).</b> <br>
<input type="checkbox"> <b>My model is free of overlapping, coplanar, or intersecting geometry.</b><br>
<input type="checkbox"> <b>Any obstructions around the space have been modeled (trees, topography, buildings).</b><br>
<input type="checkbox"> <b>Any curved surfaces in the model have been simplified to individual flat planes.</b><br>
<input type="checkbox"> <b>Any surrounding context has been made into a single, joined mesh.</b>

![description](../images/tool_example_2.jpg)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

#### Sources, Calculations + Metrics
<!--add text and/or images for any sources for you metrics, calculations & equations, assumptions and specific metric output-->
This tool uses this method of calculating X from this source. The metric is derived in this manner. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

#### Limitations & Context
<!--add text and/or images that expose potential for bias by stating limitations (ie what does this tool not do,) and the context in which it was created.-->

This tool does X it does not do Z and Y. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

#### Examples
<!--add images and text to describe a use case below-->
Here is how we used this tool on a project! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

![description](../images/tool_example_2.jpg)

<!-- ![description of image](/XIM-GSAPP-Fa20/images/tool_example_2.jpg) -->

Some more text here perhaps.

<b> More project examples here: </b>
