'use client';

import { SongRequest, submitSongRequest } from '@/app/actions';
import { Button, Label, Modal, TextInput, Textarea, Toast } from 'flowbite-react';
import { useState } from 'react';

export default function SongRequest() {
	const [modalOpen, setModalOpen] = useState(false);
	const [song, setSong] = useState('');
	const [artist, setArtist] = useState('');
	const [message, setMessage] = useState('');
	const [user, setUser] = useState('');
	const [showToast, setShowToast] = useState(false);

	const handleModalOpen = () => {
		setModalOpen(true);
	}

	const handleRequest = async () => {
		setModalOpen(false);
		const songRequest: SongRequest = {
			title: song,
			artist,
			comments: message,
			user,
		}
		await submitSongRequest(songRequest);
		setShowToast(true);
		setSong('');
		setArtist('');
		setMessage('');
		setTimeout(() => {
			setShowToast(false);
		}, 4000);
	}

	return (
		<>
			<Button onClick={handleModalOpen}>
				Request a song
			</Button>
			<Modal
				show={modalOpen}
				onClose={() => setModalOpen(false)}
			>
				<form onSubmit={handleRequest}>
					<Modal.Header>
						Song Request
					</Modal.Header>
					<Modal.Body>
						<div className='flex max-w-2xl mx-auto flex-col space-y-2'>
							<div className="form-group">
								<Label htmlFor="song">Title</Label>
								<TextInput
									value={song}
									onChange={e => setSong(e.target.value)}
									required
									type="text"
									className="form-control"
									id="song"
									placeholder="Baby one more time"
								/>
							</div>
							<div className="form-group">
								<Label htmlFor="artist">Artist</Label>
								<TextInput required type="text" className="form-control" id="artist" placeholder="Britney Spears"
									value={artist}
									onChange={e => setArtist(e.target.value)}
								/>
							</div>
							<div className="form-group">
								<Label htmlFor="message">Message</Label>
								<Textarea className="form-control" id="message" rows={3}
									value={message}
									onChange={e => setMessage(e.target.value)}
								></Textarea>
							</div>
							<div className="form-group">
								<Label htmlFor="user">Your name</Label>
								<TextInput required type="text" className="form-control" id="user" placeholder="Matt O"
									value={user}
									onChange={e => setUser(e.target.value)}
								/>
							</div>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => setModalOpen(false)}>
							Close
						</Button>
						<Button
							color="success"
							type="submit"
						>
							Send
						</Button>
					</Modal.Footer>
				</form>
			</Modal>
			{showToast &&
				<div className="fixed bottom-0 left-0 mb-4 ml-4">
					<Toast
						color='success'
					>
						<p className="text-sm text-gray-600">
							Your song request has been submitted!
						</p>
						<Toast.Toggle
							onDismiss={() => {
								setShowToast(false);
							}}
						/>
					</Toast>
				</div>
			}
		</>
	)
}