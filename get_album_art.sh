
# to get fresh oauth token: https://developer.spotify.com/console/get-playlist/
# Through The Years playlist id: 4CVjYLoQGb4AVdagZvSS2r

curl -X "GET" "https://api.spotify.com/v1/playlists/4CVjYLoQGb4AVdagZvSS2r" -H "Accept: application/json" \
-H "Content-Type: application/json" -H "Authorization: Bearer <token>" \
| jq '[.tracks.items[].track.album | { name: .name, date: .release_date, image: .images[1].url }]' > albums.json
