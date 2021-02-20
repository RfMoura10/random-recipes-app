import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"

export default function RecipeSkeleton({width, height}:{width:number, height:number}) {
    return (
        <ContentLoader 
            speed={2}
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            backgroundColor="#f3f3f3"
            foregroundColor="#e4e4e4"
        >
            <Rect x="0" y="0" rx="0" ry="0" width={width} height={height * .35} /> 
            <Rect x={width * .05} y={height * .38} rx="0" ry="0" width={width * .9} height={height * .1} /> 
            {
                Array(8).fill(0).map((_,i) => (
                    <Rect key={i} x={width * .05} y={height * (.55+(i*.05))} rx="0" ry="0" width={width * .9} height={height * .03} /> 
                ))
            }
        </ContentLoader>
    )
}
