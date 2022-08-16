module Coefplots
    using StatsModels
    using StatsBase
    using FixedEffectModels
    using Distributions
    using PGFPlotsX
    using DataFrames
    using Parameters: @unpack
    using Colors
    import FixedEffectModels: FixedEffectModel
    import StatsModels: TableRegressionModel

    const MaybeData{T} = Union{T, Missing}

    include("color.jl")
    include("escape.jl")
    include("components.jl")
    include("coefplot.jl")
    include("multicoefplot.jl")
    include("groupedcoefplot.jl")
    include("groupedmulticoefplot.jl")
    include("parse.jl")
    include("other_utils.jl")

    plot(x::T, other::SupportedAddition ...) where T<:Union{Coefplot, MultiCoefplot, GroupedCoefplot, GroupedMultiCoefplot} = to_picture(x, other...)
    plot(x::SupportedEstimation, other::SupportedAddition ...; kwargs...) = plot(parse(x; kwargs...), other...)

    # stick with T1 font coding for now
    PGFPlotsX.CUSTOM_PREAMBLE = ["\\usepackage[T1]{fontenc}"]

    export plot
    export Coefplot, MultiCoefplot, GroupedCoefplot, GroupedMultiCoefplot
    export Label, CaptionStyle, Mark, Bar, Legend, Note, rVLine, rHLine, rVBand, rHBand, Annotation
end