function listTweets(data) {

}

function listVideos(data) {
	console.log(data);

	console.log(data.feed.entry[0].title.$t);
	console.log(data.feed.entry[0].media$group.media$description.$t);
	// console.log(data.feed.entry[0].link.2.href);
}
