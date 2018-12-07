# Linear Perception Of Scale:
Maps are an invaluable tool for exploration and navigation. At its core, a map provides a representation of a physical space that has been transformed so that it can fit in your hand. The usefulness of a map lies in the ability of a viewer to understand how space on the map is related to a physical space. Most maps rely on some reference scale to help the viewer effectively understand how the distance between two points on the map corresponds to the distance between the physical locations that those points represent.

Fundamentally, this is a perceptual issue. The usefulness of a map is, directly related to the perception of the relative distance between two points on the map with respect to the reference scale. This leads to the basic question of how should the linear scale reference be design for a given map.

There are a number of factors that will effect the accuracy of perception of relative distance. Weber's law states that the absolute error is proportional to the magnitude of the stimuli (thus we should expect a smaller scale will lead to larger errors in estimation). Additionally, the visual system is very perceptive to small relative distances for similarly sized objects. Thus we might expect that the optimal reference scale size should be on the order of magnitude of the average distance of interest.

Traditionally paper maps have a fixed scale with respect to the world, and thus a single scale most be selected prior to any use, and it is entirely up to the cartographer to decide what scale would be the most useful. For digital maps however the user has the ability to manually adjust the scale by zooming in and out. Thus the optimal scale for a digital map is likely different than the optimal scale for a printed map.

Currently all leading digital mapping applications follow the style of printed maps. This ignores the ability of the user to customize the map to suit their specific purpose.

This repository contains a preliminary investigation into the ability of people to estimate distances on a map. Currently, this repository consists of a basic experiment to study the perception of distance between two points relative to a simply reference line. This can be run in a browser through 'linear_perception_experiment.html'. After the specified number of trials have been presented, the program will produce a data log of the responses in a file named 'LinearPerceptionTrialData.txt'. This can be analyzed using the code found in 'linear_scale_experiment_analysis.py', or using the iPython notebook that is also included.

A preliminary experiment shows that the estimation of distance is improved using a larger scale reference (as opposed to the small ones that are commonly found in digital mapping applications). 

![alt text](https://github.com/bnlcas/LinearScalePerception/blob/master/Effect_of_ScaleLine_on_distance_estimation_(preliminary).png  "preliminary result")
