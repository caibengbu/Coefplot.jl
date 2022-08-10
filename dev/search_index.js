var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"<img src=\"https://raw.githubusercontent.com/caibengbu/Coefplots.jl/main/assets/logo.svg\" width=\"300\"/>","category":"page"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Coefplots.jl is a Julia package that creates publication quality visualization for regressions. It aims to make available in Julia part of the functionalities of the Stata command coefplot. Coefplots.jl is built on PGFPlotsX.jl, which bridges the backend, LaTeX library PGFPlots, and Julia interface. The figures produced with Coefplots can be previewed in notebooks and IDE's, like julia-vscode and Atom-Juno, with the help of PGFPlotsX.jl.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"import Pkg\nPkg.add(\"Coefplots\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"note: Prerequisite Installation\nSimilar to the requirments for PGFPlotsX installation, Coefplots.jl requires a LaTeX installation with the PGFPlots package installed,\npdf2svg to generate or preview figures in svg. \npdftoppm for png figures. For more information of prerequisite installations, please refer to the installation section of PGFPlotsX.jl's documentation.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Coefplots.to_plot(c::Coefplots.Coefplot)","category":"page"},{"location":"#Coefplots.to_plot-Tuple{Coefplot}","page":"Home","title":"Coefplots.to_plot","text":"to_plot(c::Coefplot)\n\nConvert the Coefplot object to an PGFPlotsX.AxisElement. It is realized using the PGFPlotsX.Plot/PGFPlotsX.Coordinates combination.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"Coefplots.to_axis(c::Coefplots.Coefplot, other::Coefplots.SupportedAddition ...)","category":"page"},{"location":"#Coefplots.to_axis-Tuple{Coefplot, Vararg{Union{Coefplots.Annotation, Coefplots.rHBand, Coefplots.rHLine, Coefplots.rVBand, Coefplots.rVLine, PGFPlotsX.HBand, PGFPlotsX.HLine, PGFPlotsX.VBand, PGFPlotsX.VLine}}}","page":"Home","title":"Coefplots.to_axis","text":"to_axis(c::Coefplot, other::SupportedAddition ...)\n\nConverts the Coefplot object to a PGFPlotsX.Axis object. Other supported components are allowed and appended after the Coefplot within the axis. \n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"Coefplots.to_picture(c::Coefplots.Coefplot, other::Coefplots.SupportedAddition ...)","category":"page"},{"location":"#Coefplots.to_picture-Tuple{Coefplot, Vararg{Union{Coefplots.Annotation, Coefplots.rHBand, Coefplots.rHLine, Coefplots.rVBand, Coefplots.rVLine, PGFPlotsX.HBand, PGFPlotsX.HLine, PGFPlotsX.VBand, PGFPlotsX.VLine}}}","page":"Home","title":"Coefplots.to_picture","text":"to_picture(c::Coefplot, other::SupportedAddition ...)\n\nConvert the Coefplot object to an PGFPlotsX.TikzPicture. Other supported components are allowed and appended after the Coefplot.  The note field is drawn as a node beyond the axis.\n\n\n\n\n\n","category":"method"}]
}