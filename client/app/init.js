export const init = async() => {
    //all songs
    const result = await fetch('/api/tracks');
    const data = await result.json();
    const root = document.getElementById('playListBody');
    const tracks = document.createElement('DIV');

    tracks.id = "playListDark";
    var str = '<table>'
    data.forEach(function(list) {
        str += '<tr>' + '<td id="play">' + JSON.stringify(list.TrackId) + '</td>' + '<td id="track">' + JSON.stringify(list.TrackName) + '</td>' + '<td id="artist">' + JSON.stringify(list.ArtistName) + '</td>' + '</tr>';
    });
    str += '</table>';
    tracks.innerHTML = str;
    root.appendChild(tracks);

    //all playlists

    const result1 = await fetch('/api/playlists');
    const data1 = await result1.json();
    const root1 = document.getElementById('albmBox');
    const playlists = document.createElement('DIV');

    playlists.id = "topCont";
    var str = '<table>'
    data1.forEach(function(list) {

        const im = '<h1><img src="https://dhwwtar19mmjy.cloudfront.net/apowercom/wp-content/uploads/2014/01/playlistlogo.png.webp" id="img-playlist" alt="playlist" /></h1>';

        str += "<tr><td>" + im + "</td><td><a href='#'><span>" + JSON.stringify(list.Name) + "</span></a></td></tr>";
    });
    str += '</table>';
    playlists.innerHTML = str;
    root1.appendChild(playlists);


    //all albums

    const result2 = await fetch('/api/albums');
    const data2 = await result2.json();
    const root2 = document.getElementById('videoBlockBody');
    var ol = document.createElement('OL');
    data2.forEach(function(list) {
        var li = document.createElement('LI');
        li.id = "vidBox"
        li.innerHTML = "<li>" + JSON.stringify(list.AlbumTitle) + " " + JSON.stringify(list.ArtistName) + "</li>";
        ol.appendChild(li);
    });
    root2.appendChild(ol);

};