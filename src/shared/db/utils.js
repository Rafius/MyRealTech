import firebase from '../../firebase';
import {setToken, removeToken, setUserId, getUserId} from '../services/auth';

const db = firebase.firestore();
const guidGenerator = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

export const getData = (collection, callback) =>
  db.collection(collection).onSnapshot(snapshot => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(data);
  });

export const insertData = (collection, data) => {
  db.collection(collection).add({
    ...data,
    id: guidGenerator(),
    author_uid: getUserId(),
  });
};

export const deleteData = async (collection, condition, id) => {
  const query = db.collection(collection).where(condition, '==', id);

  query.get().then(querySnapshot => {
    querySnapshot.forEach(doc => {
      doc.ref.delete();
    });
  });
};

export const userLogIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(authWatcher())
    .catch(error => {
      console.log(error);
    });
};

export const userRegister = data => {
  const {email, password} = data;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(registerUserData(data), authWatcher())
    .catch(error => {
      console.log(error);
    });
};

export const registerUserData = data => {
  const {password, ...userDataWithoutPassword} = data;
  insertData('user', userDataWithoutPassword);
};

export const userLogout = () => {
  firebase.auth().signOut();
  removeToken();
  window.location.href = '/login';
};

export const authWatcher = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user)
      user.getIdToken().then(idToken => {
        setToken(idToken);
        setUserId(firebase.auth().currentUser.uid);
        window.location.href = '/';
      });
  });
};
