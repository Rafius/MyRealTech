import firebase from "../../firebase"
import { setToken, setUserId, getUserId } from "../services/auth"

const db = firebase.firestore()
export const guidGenerator = () =>
	Math.random().toString(36).substring(2, 15) +
	Math.random().toString(36).substring(2, 15)

const isToday = someDate => {
	const today = new Date()
	return (
		someDate.getDate() === today.getDate() &&
		someDate.getMonth() === today.getMonth() &&
		someDate.getFullYear() === today.getFullYear()
	)
}

const privateData = data => data.filter(item => item.author_uid === getUserId())
const publicData = data =>
	data.filter(
		item =>
			item.author_uid !== getUserId() &&
			item.visibility.toLowerCase() === "public"
	)

const getPrivateUserDataSorted = data => sortByDate(privateData(data))

const getPublicUsersData = data => [...privateData(data), ...publicData(data)]

const sortByDate = array =>
	array
		.filter(item => isToday(new Date(item.date)))
		.sort((a, b) => a.date - b.date)

export const getData = (collection, callback, isPublic) =>
	db.collection(collection).onSnapshot(snapshot => {
		let data = snapshot.docs.map(doc => ({
			id: doc.id,
			...doc.data()
		}))
		if (isPublic) {
			return callback(getPublicUsersData(data))
		}

		callback(getPrivateUserDataSorted(data))
	})

const updateUserDataCount = () => {}

export const insertData = (collection, data) => {
	db.collection(collection).add({
		...data
	})
	updateUserDataCount()
}

export const deleteData = async (collection, condition, id) => {
	const query = db.collection(collection).where(condition, "==", id)

	query.get().then(querySnapshot => {
		querySnapshot.forEach(doc => {
			doc.ref.delete()
		})
	})
}

export const userLogIn = (email, password) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(authWatcher())
		.catch(error => {
			console.error(error)
		})
}

export const userRegister = data => {
	const { email, password } = data
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(registerUserData(data), authWatcher())
		.catch(error => {
			console.error(error)
		})
}

export const registerUserData = data => {
	const { password, ...userDataWithoutPassword } = data
	insertData("user", userDataWithoutPassword)
}

export const userLogout = () => {
	firebase.auth().signOut()
	localStorage.clear()
}

export const authWatcher = () => {
	firebase.auth().onAuthStateChanged(user => {
		if (user)
			user.getIdToken().then(idToken => {
				setToken(idToken)
				setUserId(firebase.auth().currentUser.uid)
				window.location.href = "/"
			})
	})
}
