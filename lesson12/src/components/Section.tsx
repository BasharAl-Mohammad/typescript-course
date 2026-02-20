import { type ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

const Section = ({children, title= "My Subheading"}: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <h2>{children}</h2>
        </section>
    )
}

export default Section