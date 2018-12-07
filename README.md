# Linear Perception Of Scale:
Maps are an invaluable tool for exploration and navigation. At its core, a map provides a representation of a physical space that has been transformed so that it can fit in your hand. The usefulness of a map lies in the ability of a viewer to understand this scaling transformation that relates the map to a physical space. Most maps rely on some reference scale to help the viewer effectively understand how the distance between two points on the map corresponds to the distance between those points corresponding physical locations.

In light of these considerations, the usefulness of a map is, immediately effected by the perception of the relative distance between two points on the map with respect to the reference scale. This leads to the basic question of who should the linear scale reference be rendered for a given map.

Weber's law states that the absolute error is proportional to the magnitude of the stimuli. Additionally, the visual system is very perceptive to small relative distances for similarly sized objects. Thus we might expect that the optimal reference scale size should be on the order of magnitude of the average distance of interest.

Traditionally paper maps have a fixed scale with respect to the world, and thus a single scale most be selected prior to any use, and it is entirely up to the cartographer to decide what scale would be the most useful. For digital maps however the user has the ability to manually adjust the scale by zooming in and out. Thus the optimal scale for a digital map is likely different than the optimal scale for a printed map.

Currently all leading digital mapping applications follow the style of printed maps. This ignores the ability of the user to customize the map to suit their specific purpose.

The purpose of this study is to begin an investigation into the relationship between the style in which scale is shown, and how accurately people can relate this to the distance between two points. This is a preliminary work.

Currently, this repository consists of a basic experiment to study the perception of distance between two points relative to a simply reference line. This can be run in a browser through 'linear_perception_experiment.html'. After the specified number of trials have been presented, the program will produce a data log of the responses in a file named 'LinearPerceptionTrialData.txt'. This can be analyzed using the code found in 'linear_scale_experiment_analysis.py'.
