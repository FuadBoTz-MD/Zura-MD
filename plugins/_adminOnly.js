export async function before(m, { isAdmin, isOwner }) {
	let chat = global.db.data.chats[m.chat]
	if (!('adminOnly' in chat)) chat.adminOnly = false;
	if (chat.adminOnly) {
		if (!(isAdmin || isOwner)) throw 0;
	}
};