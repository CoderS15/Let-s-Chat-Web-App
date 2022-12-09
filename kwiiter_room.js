
const firebaseConfig = {
        apiKey: "AIzaSyCjj1LDh6txFp7rxTaK-Lic23Fy51JjN_s",
        authDomain: "let-s-chat-ff14d.firebaseapp.com",
        databaseURL: "https://let-s-chat-ff14d-default-rtdb.firebaseio.com",
        projectId: "let-s-chat-ff14d",
        storageBucket: "let-s-chat-ff14d.appspot.com",
        messagingSenderId: "395382092376",
        appId: "1:395382092376:web:0d9d84d825a19f294d502d",
        measurementId: "G-0XCDNVELKH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);