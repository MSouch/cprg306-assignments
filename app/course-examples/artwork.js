export default function Artwork(artObj){
    
    const {
        title,
        primaryImageSmall,
        artistDisplayName,
        objectDate,
        department,
    } = artObj
    
    return (
    <div>
        <h3>{title}</h3>
        <img src = {primaryImageSmall} />
        <ul>
            <li>Artist:</li>
            <li>Artist:</li>
            <li>Artist:</li>
        </ul>
    </div>
    );
}