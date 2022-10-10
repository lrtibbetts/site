import json
import urllib.request

file = open('albums.json')
albums = json.load(file)

album_list = []

for album in albums:
    file_path = "album_art/" + album["name"] + ".jpg"
    print(file_path)
    urllib.request.urlretrieve(album["image"], file_path)
    album["file"] = file_path
    album_list.append(album)

with open("albums_with_local_assets.json", "w") as outfile:
    outfile.write(json.dumps(album_list, indent=4))

