const VStack = ({ style, children }) => {
    return (
        <div style={{...{display: 'flex', flexDirection: 'column', alignItems: 'center'}, ...style}}>
            {children}
        </div>
    )
}

export default VStack;
