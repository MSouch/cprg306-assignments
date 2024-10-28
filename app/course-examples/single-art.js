import { useEffect } from "react";

export default function SingleArt(){

    async function getSingleArtwork(){
        try{
            const response = await fetch(
                "https://collectionapi.metmuseum.org/public/collection/v1/objects/45734"

            );
        console.dir(response);
        } catch (error) {

        }
    }
    useEffect( () => {
        getSingleArtwork();
    }, []);
    return(
        <section>

        </section>
    );
}
