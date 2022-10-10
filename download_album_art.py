import json
import urllib.request

file = open('albums.json')
albums = json.load(file)

album_list = []

for album in albums:
    file_path = "public/album_art/" + album["name"] + ".jpg"
    print(file_path)
    urllib.request.urlretrieve(album["image"], file_path)
    # write file path without public/ (will be served at root)
    album["file"] = file_path[7:]
    album_list.append(album)

with open("albums_with_local_assets.json", "w") as outfile:
    outfile.write(json.dumps(album_list, indent=4))

