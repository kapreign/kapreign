// © Framer University. All rights reserved.

import React, { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
// import { addPropertyControls, ControlType } from "framer"

export default function TextColorAnimation({
    text,
    fontSize,
    fontFamily,
    fontWeight,
    textAlign,
    color01,
    color02,
    Duration,
    delay,
    replays,
}) {
    const controls = useAnimation()
    const textRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(async ([entry]) => {
            if (entry.isIntersecting) {
                await new Promise((resolve) =>
                    setTimeout(resolve, delay * 1000)
                ) // delay before animation starts
                controls.start("visible")
            } else if (!entry.isIntersecting && replays) {
                controls.start("hidden")
            }
        })

        observer.observe(textRef.current)

        return () => observer.disconnect()
    }, [Duration, controls, color01, delay, replays])

    return (
        <div
            style={{
                fontSize: `${fontSize}px`,
                fontFamily: fontFamily,
                fontWeight: fontWeight,
                width: "100%",
                whiteSpace: "nowrap",
                color: color01,
                textAlign: textAlign,
            }}
            ref={textRef}
        >
            <span style={{ position: "relative", display: "inline-block" }}>
                {text}
                <motion.span
                    style={{
                        position: "absolute",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        color: color02,
                        top: 0,
                        left: 0,
                        width: "0%",
                    }}
                    animate={controls}
                    initial={{ width: "0%" }}
                    variants={{
                        visible: { width: "100%" },
                        hidden: { width: "0%" },
                    }}
                    transition={{ duration: Duration }}
                >
                    {text}
                </motion.span>
            </span>
        </div>
    )
}

// addPropertyControls(TextColorAnimation, {
//     text: { type: ControlType.String, defaultValue: "Hello, World!" },
//     fontSize: {
//         type: ControlType.Number,
//         defaultValue: 16,
//         min: 1,
//         max: 200,
//         unit: "px",
//     },
//     fontFamily: { type: ControlType.String, defaultValue: "Arial" },
//     fontWeight: {
//         type: ControlType.Enum,
//         defaultValue: "400",
//         options: [
//             "100",
//             "200",
//             "300",
//             "400",
//             "500",
//             "600",
//             "700",
//             "800",
//             "900",
//         ],
//     },
//     textAlign: {
//         title: "Text Align",
//         type: ControlType.Enum,
//         displaySegmentedControl: true,
//         optionTitles: ["Left", "Center", "Right"],
//         options: ["left", "center", "right"],
//     },
//     color01: {
//         title: "Color 01",
//         type: ControlType.Color,
//         defaultValue: "#333",
//     },
//     color02: {
//         title: "Color 02",
//         type: ControlType.Color,
//         defaultValue: "#fff",
//     },
//     Duration: {
//         type: ControlType.Number,
//         defaultValue: 1.0,
//         min: 0.1,
//         max: 10.0,
//         step: 0.1,
//     },
//     delay: {
//         title: "Delay",
//         type: ControlType.Number,
//         defaultValue: 0,
//         min: 0,
//         max: 10.0,
//         step: 0.1,
//     },
//     replays: {
//         title: "Replays",
//         type: ControlType.Boolean,
//         defaultValue: true,
//     },
// })
