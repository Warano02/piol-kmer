"use client"
import { usePathname, useRouter } from "next/navigation"


const Steps = [
    {
        id: "step-1",
        label: "Basics",
        substeps: [
            "/host/step-1",
            "/host/step-1/location",
            "/host/step-1/privacy-type",
            "/host/step-1/structure",
        ],
    },
    {
        id: "step-2",
        label: "Amenities",
        substeps: [
            "/host/step-2",
            "/host/step-2/amenities",
            "/host/step-2/standards",
        ],
    },
    {
        id: "step-3",
        label: "Photos",
        substeps: [
            "/host/step-3",
            "/host/step-3/upload",
            "/host/step-3/order",
        ],
    },
]

export default function Progress() {
    const pathname = usePathname()
    const router = useRouter()

    const ALL_SUBSTEPS = Steps.flatMap((s) => s.substeps)

    const globalIndex = ALL_SUBSTEPS.indexOf(pathname)
    const safeGlobalIndex = Math.max(globalIndex, 0)

    const currentMainStepIndex = Steps.findIndex(step =>
        step.substeps.includes(pathname)
    )

    const substeps = Steps[currentMainStepIndex]?.substeps || []
    const internalIndex = substeps.indexOf(pathname)
    const segmentProgress = ((internalIndex + 1) / substeps.length) * 100

    const next = () => {
        if (safeGlobalIndex < ALL_SUBSTEPS.length - 1) {
            
            router.push(ALL_SUBSTEPS[safeGlobalIndex + 1])
        } else {
            alert(" All steps completed!")
        }
    }

    const back = () => {
        if (safeGlobalIndex > 0) {
            router.push(ALL_SUBSTEPS[safeGlobalIndex - 1])
        }
    }

    return (
        <section className="w-full h-[90px] fixed bottom-0 bg-white border-t shadow-sm">

            <div className="w-full h-[12px] flex gap-2 px-4 mt-2">
                {Steps.map((step, i) => {
                    const isPast = i < currentMainStepIndex
                    const isCurrent = i === currentMainStepIndex

                    return (
                        <div key={step.id} className="w-1/3 h-full bg-gray-200 relative overflow-hidden rounded-md">
                            <div className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
                                style={{ width: isPast ? "100%" : isCurrent ? `${segmentProgress}%` : "0%", }} />
                        </div>
                    )
                })}
            </div>

            <div className="w-full h-[70px] flex items-center justify-between px-6">
                <button onClick={back} disabled={safeGlobalIndex === 0} className={`px-4 py-2 underline font-semibold ${safeGlobalIndex === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`} >
                    Back
                </button>

                <button onClick={next} className="px-6 py-3 bg-black text-white font-bold rounded-xl cursor-pointer">
                    Next
                </button>

            </div>
        </section>
    )
}
