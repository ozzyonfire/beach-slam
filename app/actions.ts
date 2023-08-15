'use server';

import { MessageAttachment, WebClient } from "@slack/web-api";

export interface SongRequest {
	title: string;
	artist: string;
	comments: string;
	user: string;
}

const client = new WebClient(process.env.SLACK_TOKEN);

export async function submitSongRequest(song: SongRequest) {
	console.log('Submitting song request', song);
	const attachments: MessageAttachment[] = [{
		fallback: 'New song request. ' + song.title + ' by ' + song.artist + '.',
		pretext: 'New song request.',
		fields: [{
			title: 'Title',
			value: song.title,
			short: true
		}, {
			title: 'Artist',
			value: song.artist,
			short: true
		}, {
			title: 'Comments',
			value: song.comments
		}, {
			title: 'Requested by',
			value: song.user,
		}]
	}];

	await client.chat.postMessage({
		channel: 'CC6319LF4',
		attachments,
		icon_emoji: ':musical_note:',
		username: 'Beach Bot'
	});
}