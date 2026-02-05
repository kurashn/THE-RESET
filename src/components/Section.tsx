import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    containerClassName?: string;
}

export function Section({
    children,
    className,
    containerClassName,
    ...props
}: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={cn("py-20 md:py-32", className)}
            {...props}
        >
            <div className={cn("container mx-auto px-6", containerClassName)}>
                {children}
            </div>
        </motion.section>
    );
}
