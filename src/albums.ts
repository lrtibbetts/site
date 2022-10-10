import albums from '../albums_with_local_assets.json'

export function getAlbums() {
    let albumsContainer = document.getElementById("albums");

    albums.forEach((album)=>{
        let div = document.createElement("div");
        div.className="relative"
        let img = document.createElement("img");
        //img.src = "../" + album.file;
        img.src = album.image;
        img.className = "hover:opacity-30"
        div.appendChild(img);

        let text = document.createElement("p");
        let trimmedName = album.name;
        // second condition needed thanks to fucking Oasis
        if (album.name.includes('(') && album.name.indexOf('(') !== 0) {
            // Remove things like (Deluxe), (Remastered), etc.
            trimmedName = album.name.substring(0, album.name.indexOf('(') - 1);
        }
        text.innerHTML = trimmedName + ", " + album.date.substring(0,4);
        text.className = "text-black bg-white rounded-sm p-1 font-bold xl:text-lg absolute text-center album-text"
        div.appendChild(text);

        albumsContainer?.appendChild(div);
      })
}

getAlbums();