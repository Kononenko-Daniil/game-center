const Center = ({ style, children }) => {
    return (
        <div style={{...{display: 'flex', justifyContent: 'center'}, ...style}}>
            {children}
        </div>
    )
}

export default Center;
