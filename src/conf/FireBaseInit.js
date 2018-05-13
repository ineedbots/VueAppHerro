import fireBase from 'firebase/app'
import 'firebase/firestore'
import fireBaseConf from './FireBaseConf'

const firebaseApp = fireBase.initializeApp(fireBaseConf)
const firestore = firebaseApp.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

export default firestore.collection('herro')
