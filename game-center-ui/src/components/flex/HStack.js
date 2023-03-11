const HStack = ({style, children}) => {   
    return (
        <div style={{...{display: 'flex', flexDirection: 'row', flexWrap: "wrap"}, ...style}}>
            {children}
        </div>
    )
}

export default HStack;
