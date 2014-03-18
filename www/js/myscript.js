function listTweets(data) {

}

function listVideos(data) {
	console.log(data);
	console.log(data.feed.entry[0].media$group.media$thumbnail[0].url);
	var output = '';
	for ( var i=0; i<data.feed.entry.length; i++) {
		
	// Video Title
	var title = data.feed.entry[i].title.$t;
	// Video Description
	var description = data.feed.entry[i].media$group.media$description.$t;
	// Video Thumbnail
	var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
	// Video ID - needed for playback later: need only the substring - substring(42)
	var id = data.feed.entry[i].id.$t.substring(42);
	
	var blocktype = ((i % 2)===1) ? 'b' : 'a';
	// Opens Div Creates the grid
	output += '<div class="ui-block-' + blocktype + '">';
	// Sends video to videoplayer page on click
	output += '<a href="#videoplayer" data-transition="fade" onclick="playVideo(\'' + id + '\',\'' + title + '\',\'' + escape(description) + '\')">';
	// Inserts video title
	output += '<h3 class="movietitle">' + title + '</h3>';
	// Inserts thumbnail
	output += '<img src="' + thumbnail + '"alt="' + title + '" />';
	// Closes Div
	output += "</div>";
	}
	
	$('#videolist').html(output);
		
}

function playVideo(id, title, description) {
	var output ='<iframe src="http://www.youtube.com/embed/'+ id +'?wmode=transparent&amp;HD=0&amp;rel=0&amp;showinfo=0&amp;controls=1&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>';
	output += '<h3>' + title + '</h3>';
	output += '<p>' + unescape(description) + '</p>';
	$('#myplayer').html(output);
}

