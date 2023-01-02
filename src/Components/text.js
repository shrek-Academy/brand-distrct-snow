const Text = ({
    children,
    fontSize,
    fontWeight,
    lineHeight,
    letterSpacing,
    color,
    className,
    margin,
    cursor,
    style,
    ...props
}) => {
    return (
        <p
            className={className}
            style={{
                ...{
                    fontSize,
                    fontWeight,
                    lineHeight: lineHeight || "130%",
                    letterSpacing: letterSpacing || "0.05em",
                    color,
                    margin: margin || "0",
                    cursor,
                    ...style,
                },
            }}
            {...props}
        >
            {children}
        </p>
    );
};

export default Text;
