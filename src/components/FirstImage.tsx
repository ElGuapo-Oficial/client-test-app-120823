const FirstImage = () => {
    const imageUrl = `${process.env.REACT_APP_SERVER_URL}/images/Ricart/Ricart_001.jpg`;
    console.log(process.env.REACT_APP_SERVER_URL);
    
    return (
        <>
            <h1>Image from Express Server</h1>
            <img src={imageUrl} alt="Example" />
        </>
    )
}

export default FirstImage;